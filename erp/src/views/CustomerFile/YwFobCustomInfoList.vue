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
      <a-button @click="handleCustomToAddEdit({})" type="primary" icon="plus">新增</a-button>
      <a-button type="primary" icon="download" @click="handleExportXls('yw_fob_custom_info')">导出</a-button>
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
        <template slot="pcaSlot" slot-scope="text">
          <div>{{ getPcaText(text) }}</div>
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

           <a @click="handleCustomToView(record)">详情</a>
          <a-divider type="vertical" />
          <a-dropdown>
            <a class="ant-dropdown-link">更多 <a-icon type="down" /></a>
            <a-menu slot="overlay">
              <a-menu-item>
                <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)">
                  <a>删除</a>
                </a-popconfirm>

              </a-menu-item>

              <a-menu-item>
                   <a @click="handleCustomToAddEdit(record)">编辑</a>
              </a-menu-item>
                  <a-menu-item>
                   <a @click="handleCustomToView(record)">打印</a>
              </a-menu-item>

            </a-menu>
          </a-dropdown>
        </span>

      </a-table>
    </div>

<!--    <ywFobCustomInfo-modal ref="modalForm" @ok="modalFormOk"></ywFobCustomInfo-modal>-->
  </a-card>
</template>

<script>

  import '@/assets/less/TableExpand.less'
  import { mixinDevice } from '@/utils/mixin'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  import YwFobCustomInfoModal from './modules/YwFobCustomInfoModal'
  import {filterMultiDictText} from '@/components/dict/JDictSelectUtil'
  import Area from '@/components/_util/Area'

  export default {
    name: "YwFobCustomInfoList",
    mixins:[JeecgListMixin, mixinDevice],
    components: {
      YwFobCustomInfoModal
    },
    data () {
      return {
        description: 'yw_fob_custom_info管理页面',
        // 表头
        columns: [
          {
            title: '序号',
            dataIndex: '',
            key:'rowIndex',
            width:60,
            align:"center",
            customRender:function (t,r,index) {
              return parseInt(index)+1;
            }
          },

          {
            title:'单据编号',
            align:"center",
            dataIndex: 'documentNo'
          },
          {
            title:'客户名称',
            align:"center",
            dataIndex: 'customName'
          },
          {
            title:'单据状态',
            align:"center",
            dataIndex: 'documentStatus_dictText'
          },
          {
            title:'申请部门',
            align:"center",
            dataIndex: 'applyDepart_dictText'
          },
          {
            title:'申请日期',
            align:"center",
            dataIndex: 'applyDate',
            customRender:function (text) {
              return !text?"":(text.length>10?text.substr(0,10):text)
            }
          },

          {
            title:'申报人',
            align:"center",
            dataIndex: 'applyPerson'
          },
          {
            title:'审核日期',
            align:"center",
            dataIndex: 'checkDate',
            customRender:function (text) {
              return !text?"":(text.length>10?text.substr(0,10):text)
            }
          },
          {
            title:'转正日期',
            align:"center",
            dataIndex: 'executeDate',
            customRender:function (text) {
              return !text?"":(text.length>10?text.substr(0,10):text)
            }
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
          list: "/yw_fobcustominfo/ywFobCustomInfo/listUse",
          delete: "/yw_fobcustominfo/ywFobCustomInfo/softDel",
          deleteBatch: "/yw_fobcustominfo/ywFobCustomInfo/softDelBatch",
          exportXlsUrl: "/yw_fobcustominfo/ywFobCustomInfo/exportXls",
          importExcelUrl: "yw_fobcustominfo/ywFobCustomInfo/importExcel",
        },
        dictOptions:{},
        pcaData:''
      }
    },
    created() {
      this.pcaData = new Area()
    },
    computed: {
      importExcelUrl: function(){
        return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`;
      },
    },
    methods: {
      getPcaText(code){
        return this.pcaData.getText(code);
      },
      initDictConfig(){
      }
    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less';
</style>