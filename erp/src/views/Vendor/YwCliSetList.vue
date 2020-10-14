<template>
  <a-card :bordered="false">
  
    <!-- 操作区域-END -->
    <div class="table-operator">
      <a-button @click="handleAdd" type="primary" icon="plus">新建</a-button>

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
          
          <a @click="handleEdit(record)">编辑</a>

        </span>

      </a-table>
    </div>
    <AddCliSetList-modal ref="modalAddCliSetList" @ok="modalFormOk"></AddCliSetList-modal>
    <EditCliSetList-modal ref="modalForm" @ok="modalFormOk"></EditCliSetList-modal>
    
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
  import EditCliSetList from './modules/EditCliSetList'
  import AddCliSetList from './modules/AddCliSetList'
  
  export default {
    name: "YwCliSetList",
    mixins:[JeecgListMixin, mixinDevice],
    components: {
      'AddCliSetList-modal':AddCliSetList,
      'EditCliSetList-modal':EditCliSetList,
      filterMultiDictText,
      JDate,
      JDictSelectTag,
      JMultiSelectTag,
    },
    data () {
      return {
        description: '供应商委托人设置明细',
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
            title:'委托人',
            align:"client",
            dataIndex: 'clentScopeId'
          },
          {
            title:'一级分类',
            align:"center",
            dataIndex: 'firstClassName'
          },
          {
            title:'类别编码',
            align:"center",
            dataIndex: 'classCode'
          },
          {
            title:'类别名称',
            align:"center",
            dataIndex: 'className'
          },
          {
            title:'商品编码',
            align:"center",
            dataIndex: 'wareId'
          },
          {
            title:'通用名称',
            align:"center",
            dataIndex: 'commonName'
          },
          {
            title:'商品规格',
            align:"center",
            dataIndex: 'wareSpeci'
          },
          {
            title:'生产企业名称',
            align:"center",
            dataIndex: 'manufacture'
          },
          {
            title:'商品单位',
            align:"center",
            dataIndex: 'wareUnit'
          },
          {
            title:'备注',
            align:"center",
            dataIndex: 'notes'
          },
          {
            title:'创建人',
            align:"center",
            dataIndex: 'createBy'
          },
          {
            title:'创建时间',
            align:"center",
            dataIndex: 'createTime',
            customRender:function (text) {
              return !text?"":(text.length>10?text.substr(0,10):text)
            }
          },
          {
            title:'最终修改人',
            align:"center",
            dataIndex: 'updateBy'
          },
          {
            title:'最终修改时间',
            align:"center",
            dataIndex: 'updateTime',
            customRender:function (text) {
              return !text?"":(text.length>10?text.substr(0,10):text)
            }
          },
          {
            title: '操作',
            dataIndex: 'action',
            align:"center",
            // fixed:"right",
            // width:147,
            scopedSlots: { customRender: 'action' }
          }
        ],
        url: {
          add: "/ywvendorclientware/ywVendorClientWare/add",
          list: "/ywvendorclientware/ywVendorClientWare/list",
          delete: "/ywvendorclientware/ywVendorClientWare/delete",
          deleteBatch: "/ywvendorclientware/ywVendorClientWare/deleteBatch",
          edit: "/ywvendorclientware/ywVendorClientWare/edit",
          queryById: "/ywvendorclientware/ywVendorClientWare/queryById",
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
      },
      handleAdd: function () { 
      this.$refs.modalAddCliSetList.add();
      this.$refs.modalAddCliSetList.title = "新增";
      this.$refs.modalAddCliSetList.disableSubmit = false;
      },
    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less';
</style>