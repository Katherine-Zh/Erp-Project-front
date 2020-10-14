<template>
  <a-card :bordered="false">

   
    <!-- table区域-begin -->
    <div>
      
      <a-table
        ref="table"
        size="middle"
        bordered
        rowKey="id"
        :columns="columns"
        :dataSource="dataSource"
        :pagination="ipagination"
        :loading="loading"
       
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
          <a-menu-item @click="handleEdit(record)">编辑</a-menu-item>

        </span>
      </a-table>
    </div>

    <EditSupFileEditAplCla-modal ref="modalForm" @ok="modalFormOk"></EditSupFileEditAplCla-modal>
  </a-card>
</template>

<script>

  import '@/assets/less/TableExpand.less'
  import { mixinDevice } from '@/utils/mixin'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  import EditSupFileEditAplCla from './modules/EditSupFileEditAplCla'
  import {filterMultiDictText} from '@/components/dict/JDictSelectUtil'
  import JDate from '@/components/jeecg/JDate'
  import JDictSelectTag from "@/components/dict/JDictSelectTag"
  import JMultiSelectTag from "@/components/dict/JMultiSelectTag"

  export default {
    name: "YwSupFileEditAplCla",
    mixins:[JeecgListMixin, mixinDevice],
    components: {

      'EditSupFileEditAplCla-modal':EditSupFileEditAplCla,
      filterMultiDictText,
      JDate,
      JDictSelectTag,
      JMultiSelectTag,
    },
    data () {
      return {
        description: '供应商档案分类',
        // 表头
        columns: [
          
          {
            title:'一级分类编码',
            align:"center",
            dataIndex: 'parentCode'
          },
          {
            title:'一级分类名称',
            align:"center",
            dataIndex: 'parentName'
          },
          {
            title:'分类编码',
            align:"center",
            dataIndex: 'classCode'
          },
          {
            title:'分类描述',
            align:"center",
            dataIndex: 'className'
          },
          {
            title: '最终修改人',
            align: "center",
            dataIndex: 'updateBy'
          },
          {
            title: '最终修改时间',
            align: "center",
            dataIndex: 'updateTime',
            customRender: function (text) {
              return !text ? "" : (text.length > 10 ? text.substr(0, 10) : text)
            }
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
          add: "/ywvendorclass/ywVendorClass/add",
          list: "/ywvendorclass/ywVendorClass/list",
          delete: "/ywvendorclass/ywVendorClass/delete",
          deleteBatch: "/ywvendorclass/ywVendorClass/deleteBatch",
          edit: "/ywvendorclass/ywVendorClass/edit",
          queryById: "/ywvendorclass/ywVendorClass/queryById",
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