<template>
  <a-card :bordered="false" >



        <div class="table-operator">
          <a-button @click="" type="primary" icon="plus">新建</a-button>
          <a-button type="primary" icon="download" @click="handleExportXls('用户信息')">导出</a-button>

          <a-dropdown v-if="selectedRowKeys.length > 0">
            <a-menu slot="overlay">
              <a-menu-item key="1" @click="batchDel">删除</a-menu-item>


            </a-menu>
            <a-button style="margin-left: 8px"> 批量操作 <a-icon type="down" /></a-button>
          </a-dropdown>
        </div>


    <div >
      <div class="ant-alert ant-alert-info" style="margin-bottom: 16px;">
        <i class="anticon anticon-info-circle ant-alert-icon"></i> 已选择 <a style="font-weight: 600">{{ selectedRowKeys.length }}</a>项
        <a style="margin-left: 24px" @click="onClearSelected">清空</a>
      </div>
      <div id='studentPhoTable'>
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

          <!--        <span slot="action" slot-scope="text, record">-->
          <!--          <a @click="handleToEditChild(record)">编辑</a>-->

          <!--        </span>-->


        </a-table>
      </div>
    </div>
    <child-edit @ok="modalFormOk" ref="edit"></child-edit>



  </a-card>
</template>

<script>
  import '@/assets/less/TableExpand.less'
  import { mixinDevice } from '@/utils/mixin'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  import JDictSelectTag from '@/components/dict/JDictSelectTag.vue'
  import {filterMultiDictText} from '@/components/dict/JDictSelectUtil'
  import JMultiSelectTag from '@/components/dict/JMultiSelectTag'
  import ChildEdit from './modules/ChildEdit'



  export default {
    name: "customfs",
    mixins:[JeecgListMixin, mixinDevice],
    components: {
      JDictSelectTag,
      JMultiSelectTag,
      ChildEdit
    },
    data () {
      return {
        searchMenuOptions:[],
        description: '资信',

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
            title:'子结算户编码',
            align:"center",
            dataIndex: 'subProjectCode'
          },
          {
            title:'子结算户名称',
            align:"center",
            dataIndex: 'subProjectName'
          },

          {
            title:'资信类别',
            align:"center",
            dataIndex: 'creditType'
          },
          {
            title:'资信额度',
            align:"center",
            dataIndex: 'creditLimit',

          },
          {
            title:'资信账期',
            align:"center",
            dataIndex: 'creditPeriod'
          },
          {
            title:'临时资信额度',
            align:"center",
            dataIndex: 'orgCode'
          },
          {
            title:'临时资信账期',
            align:"center",
            dataIndex: 'tempCreditPeriod'
          },
          {
            title:'资信控制方式',
            align:"center",
            dataIndex: 'creditControlType'
          },
          {
            title:'账期控制方式',
            align:"center",
            dataIndex: 'periodControlType'
          },
          {
            title:'是否控制信用',
            align:"center",
            dataIndex: 'isControlTruth'
          },
          {
            title:'备注',
            align:"center",
            dataIndex: 'notes'
          },

          // {
          //   title: '操作',
          //   dataIndex: 'action',
          //   align:"center",
          //   // fixed:"right",
          //   width:147,
          //   scopedSlots: { customRender: 'action' }
          // }
        ],
        url: {
          list: "/yw_customcreditworthiness/ywCustomCreditWorthiness/listUse",
          exportXlsUrl: "/sys/user/exportXls",
          importExcelUrl: "sys/user/importExcel",
          syncUser: "/process/extActProcess/doSyncUser",
          deleteBatch:"/yw_customcreditworthiness/ywCustomCreditWorthiness/softDelBatch"
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
    mounted () {
    },
    methods: {
      initDictConfig(){
      },
    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less';
</style>

