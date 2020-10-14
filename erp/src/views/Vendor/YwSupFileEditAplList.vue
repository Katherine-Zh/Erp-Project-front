<template>
  <a-card :bordered="false">
    

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button @click="handleAdd7" type="primary" icon="plus">新建</a-button>
      <a-button type="primary" icon="download" @click="handleExportXls('产品信息')">导出</a-button>
      <!--      <a-upload name="file" :showUploadList="false" :multiple="false" :headers="tokenHeader" :action="importExcelUrl" @change="handleImportExcel">-->
      <!--        <a-button type="primary" icon="import">导入</a-button>-->
      <!--      </a-upload>-->
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
           <a-menu-item @click="handleEdit4(record)">编辑</a-menu-item>

        </span>
      </a-table>
    </div>

    <ywFobWare-modal ref="modalForm" @ok="modalFormOk"></ywFobWare-modal>
  </a-card>
</template>

<script>

  import '@/assets/less/TableExpand.less'
  import { mixinDevice } from '@/utils/mixin'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  
  import {filterMultiDictText} from '@/components/dict/JDictSelectUtil'
  import JDate from '@/components/jeecg/JDate'
  import JDictSelectTag from "@/components/dict/JDictSelectTag"
  import JMultiSelectTag from "@/components/dict/JMultiSelectTag"

  export default {
    name: "YwSupFileList",
    mixins:[JeecgListMixin, mixinDevice],
    components: {
      filterMultiDictText,
      JDate,
      JDictSelectTag,
      JMultiSelectTag,
    },
    data () {
      return {
        description: '供应商档案子结算清单',
        // 表头
        columns: [
          // {
          //   title: '#',
          //   dataIndex: '',
          //   key:'rowIndex',
          //   width:60,
          //   align:"center",
          //   customRender:function (t,r,index) {
          //     return parseInt(index)+1;
          //   }
          // },
          {
            title:'序号',
            align:"center",
            dataIndex: 'id'
          },
          {
            title:'供应商编码',
            align:"center",
            dataIndex: 'vendorNo'
          },
          {
            title:'供应商名称',
            align:"center",
            dataIndex: 'vendorName'
          },
          {
            title:'子项目编码',
            align:"center",
            dataIndex: 'subProjectCode'
          },
          {
            title:'子项目名称',
            align:"center",
            dataIndex: 'subProjectName'
          },
          {
            title:'是否默认',
            align:"center",
            dataIndex: 'isDefault'
          },
          {
            title:'是否有效',
            align:"center",
            dataIndex: 'isValid'
          },
          {
            title:'付款方式',
            align:"center",
            dataIndex: 'payType'
          },
          {
            title:'付款账期',
            align:"center",
            dataIndex: 'payPeriod'
          },
          {
            title:'发票类型',
            align:"center",
            dataIndex: 'receiptType'
          },
          {
            title:'账期起算类型',
            align:"center",
            dataIndex: 'accountSettleType'
          },
          {
            title:'备注',
            align:"center",
            dataIndex: 'notes'
          },
          {
            title: '操作',
            dataIndex: 'action',
            align:"center",
            fixed:"right",
            width:147,
            scopedSlots: { customRender: 'action' }
          }
        ],
        url: {
          list: "/ywvendorsettlelist/ywVendorSettleList/add",
          delete: "/ywvendorsettlelist/ywVendorSettleList/delete",
          deleteBatch: "/ywvendorsettlelist/ywVendorSettleList/deleteBatch",
          edit: "/ywvendorsettlelist/ywVendorSettleList/edit",
          list: "/ywvendorsettlelist/ywVendorSettleList/list",
          queryById: "/ywvendorsettlelist/ywVendorSettleList/queryById",
        },
        sta:1 ,
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