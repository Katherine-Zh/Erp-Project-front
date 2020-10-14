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
      <a-button @click="handleCustomDToAddEdit({})" type="primary" icon="plus">新增</a-button>
      <a-button type="primary" icon="download" @click="handleExportXls('yw_custom_info')">导出</a-button>
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
            <a @click="handleFobCustomToView(record)">详情</a>

          <a-divider type="vertical" />
          <a-dropdown>
            <a class="ant-dropdown-link">更多 <a-icon type="down" /></a>
            <a-menu slot="overlay">
               <a-menu-item>
                 <a @click="handleCustomDToAddEdit(record)">编辑</a>
              </a-menu-item>
               <a-menu-item>
                 <a @click="handleToDie(record)">作废</a>
              </a-menu-item>

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

    <ywCustomInfo-modal ref="modalForm" @ok="modalFormOk"></ywCustomInfo-modal>
  </a-card>
</template>

<script>

  import '@/assets/less/TableExpand.less'
  import { mixinDevice } from '@/utils/mixin'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  import YwCustomInfoModal from './modules/YwCustomInfoModal'
  import {filterMultiDictText} from '@/components/dict/JDictSelectUtil'

  export default {
    name: "YwCustomInfoList",
    mixins:[JeecgListMixin, mixinDevice],
    components: {
      YwCustomInfoModal
    },
    data () {
      return {
        description: 'yw_custom_info管理页面',
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
            title:'客户助记码',
            align:"center",
            dataIndex: 'customAbc'
          },
          {
            title:'     地址     ',
            align:"center",
            dataIndex: 'address'
          },

          {
            title:'使用状态',
            // sd_custom_status
            align:"center",
            dataIndex: 'useStatus_dictText'
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
          list: "/yw_custominfo/ywCustomInfo/listUse",
          delete: "/yw_custominfo/ywCustomInfo/softDel",
          deleteBatch: "/yw_custominfo/ywCustomInfo/softDelBatch",
          exportXlsUrl: "/yw_custominfo/ywCustomInfo/exportXls",
          importExcelUrl: "yw_custominfo/ywCustomInfo/importExcel",

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
      },
      handleToDie(record){
        console.log(record);
        this.$refs.modalForm.edit(record);
        this.$refs.modalForm.title = "作废";
        this.$refs.modalForm.isTrue = false;
        this.$refs.modalForm.visible = true;

        this.$refs.modalForm.disableSubmit = false;


      },
    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less';
</style>