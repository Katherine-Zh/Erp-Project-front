<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline" @keyup.enter.native="searchQuery">
        <a-row :gutter="24">
        </a-row>
      </a-form>
    </div>
    <!-- 查询区域-END -->
    
    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button @click="handleAdd" type="primary" icon="plus">新增</a-button>
      <a-button type="primary" icon="download" @click="handleExportXls('yw_custom_license')">导出</a-button>
      <a-upload name="file" :showUploadList="false" :multiple="false" :headers="tokenHeader" :action="importExcelUrl" @change="handleImportExcel">
        <a-button type="primary" icon="import">导入</a-button>
      </a-upload>
      <a-dropdown v-if="selectedRowKeys.length > 0">
        <a-menu slot="overlay">
          <a-menu-item key="1" @click="batchDel"><a-icon type="delete"/>删除</a-menu-item>
        </a-menu>
        <a-button style="margin-left: 8px"> 批量操作 <a-icon type="down" /></a-button>
      </a-dropdown>
    </div>

    <!-- table区域-begin -->
    <div>
      <div class="ant-alert ant-alert-info" style="margin-bottom: 16px;">
        <i class="anticon anticon-info-circle ant-alert-icon"></i> 已选择 <a style="font-weight: 600">{{ selectedRowKeys.length }}</a>项
        <a style="margin-left: 24px" @click="onClearSelected">清空</a>
      </div>

      <a-table
        ref="table"
        size="middle"
        bordered
        rowKey="id"
        :columns="columns"
        :dataSource="dataSource"
        :pagination="ipagination"
        :loading="loading"
        :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
        class="j-table-force-nowrap"
        @change="handleTableChange">

        <template slot="htmlSlot" slot-scope="text">
          <div v-html="text"></div>
        </template>
        <template slot="imgSlot" slot-scope="text">
          <span v-if="!text" style="font-size: 12px;font-style: italic;">无图片</span>
          <img v-else :src="getImgView(text)" height="25px" alt="" style="max-width:80px;font-size: 12px;font-style: italic;"/>
        </template>
        <template slot="fileSlot" slot-scope="text">
          <span v-if="!text" style="font-size: 12px;font-style: italic;">无文件</span>
          <a-button
            v-else
            :ghost="true"
            type="primary"
            icon="download"
            size="small"
            @click="uploadFile(text)">
            下载
          </a-button>
        </template>

        <span slot="action" slot-scope="text, record">
          <a @click="handleEdit(record)">编辑</a>

          <a-divider type="vertical" />
          <a-dropdown>
            <a class="ant-dropdown-link">更多 <a-icon type="down" /></a>
            <a-menu slot="overlay">
              <a-menu-item>
                <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)">
                  <a>删除</a>
                </a-popconfirm>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </span>

      </a-table>
    </div>

    <ywCustomLicense-modal ref="modalForm" @ok="modalFormOk"></ywCustomLicense-modal>
  </a-card>
</template>

<script>

  import '@/assets/less/TableExpand.less'
  import { mixinDevice } from '@/utils/mixin'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  import YwCustomLicenseModal from './modules/YwCustomLicenseModal'
  import {filterMultiDictText} from '@/components/dict/JDictSelectUtil'

  export default {
    name: "YwCustomLicenseList",
    mixins:[JeecgListMixin, mixinDevice],
    components: {
      YwCustomLicenseModal
    },
    data () {
      return {
        description: 'yw_custom_license管理页面',
        // 表头
        columns: [
          {
            title: '#',
            dataIndex: '',
            key:'rowIndex',
            width:60,
            align:"center",
            customRender:function (t,r,index) {
              return parseInt(index)+1;
            }
          },
          {
            title:'客户编码',
            align:"center",
            dataIndex: 'customId'
          },
          {
            title:'客户名称',
            align:"center",
            dataIndex: 'customName'
          },
          {
            title:'证照类别编码',
            align:"center",
            dataIndex: 'licenseTypeId'
          },
          {
            title:'证照类型',
            align:"center",
            dataIndex: 'licenseType'
          },
          {
            title:'证照名字',
            align:"center",
            dataIndex: 'licenseName'
          },
          {
            title:'证照号',
            align:"center",
            dataIndex: 'licenseCode'
          },
          {
            title:'发证日期',
            align:"center",
            dataIndex: 'startDate',
            customRender:function (text) {
              return !text?"":(text.length>10?text.substr(0,10):text)
            }
          },
          {
            title:'有效期至',
            align:"center",
            dataIndex: 'endDate',
            customRender:function (text) {
              return !text?"":(text.length>10?text.substr(0,10):text)
            }
          },
          {
            title:'提醒状态',
            align:"center",
            dataIndex: 'remindStatus_dictText'
          },
          {
            title:'发证机构',
            align:"center",
            dataIndex: 'authoOrg'
          },
          {
            title:'一级分类编码',
            align:"center",
            dataIndex: 'firstClassCode'
          },
          {
            title:'一级分类',
            align:"center",
            dataIndex: 'firstClass'
          },
          {
            title:'控制类别编码',
            align:"center",
            dataIndex: 'controlClassCode'
          },
          {
            title:'控制类别名称',
            align:"center",
            dataIndex: 'controlClassName'
          },
          {
            title:'版本标识位 1：当前执行版本   2：待审核版本   3：历史版本',
            align:"center",
            dataIndex: 'versionFlag'
          },
          {
            title:'记录通过何种方式进行修改，1：直接修改。 2：申请修改',
            align:"center",
            dataIndex: 'changeTypeFlag'
          },
          {
            title:'申请修改原因',
            align:"center",
            dataIndex: 'applyChangeReason'
          },
          {
            title:'证书',
            align:"center",
            dataIndex: 'certificateString'
          },
          {
            title:'证照本地存储路径',
            align:"center",
            dataIndex: 'certificateFilePath'
          },
          {
            title: '操作',
            dataIndex: 'action',
            align:"center",
            // fixed:"right",
            width:147,
            scopedSlots: { customRender: 'action' }
          }
        ],
        url: {
          list: "/yw_customlicense/ywCustomLicense/list",
          delete: "/yw_customlicense/ywCustomLicense/delete",
          deleteBatch: "/yw_customlicense/ywCustomLicense/deleteBatch",
          exportXlsUrl: "/yw_customlicense/ywCustomLicense/exportXls",
          importExcelUrl: "yw_customlicense/ywCustomLicense/importExcel",
        },
        dictOptions:{},
      }
    },
    computed: {
      importExcelUrl: function(){
        return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`;
      },
    },
    methods: {
      initDictConfig(){
      }
    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less';
</style>