<template>
  <a-card :bordered="false" >


    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button @click="handAddEdit({})" type="primary" icon="plus">新建</a-button>
      <a-button type="primary" icon="download" @click="handleExportXls('用户信息')">导出</a-button>

      <a-dropdown v-if="selectedRowKeys.length > 0">
        <a-menu slot="overlay">
          <a-menu-item key="1" @click="batchDel">删除</a-menu-item>
          <a-menu-item key="2" @click="batchDel">冻结</a-menu-item>
          <a-menu-item key="2" @click="batchDel">解冻</a-menu-item>

        </a-menu>
        <a-button style="margin-left: 8px"> 批量操作 <a-icon type="down" /></a-button>
      </a-dropdown>
    </div>

    <!-- table区域-begin -->
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

        <span slot="action" slot-scope="text, record">
          <a @click="handAddEdit(record)">编辑</a>

        </span>


      </a-table>
    </div>
    </div>
    <child-edit @ok="modalFormOk" ref="modalForm"></child-edit>



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
    name: "ChildList",
    mixins:[JeecgListMixin, mixinDevice],
    components: {
      JDictSelectTag,
      JMultiSelectTag,
      ChildEdit
    },
    data () {
      return {
        searchMenuOptions:[],
        description: '子结算清单',

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
            dataIndex: 'username'
          },
          {
            title:'客户名称',
            align:"center",
            dataIndex: 'realname'
          },

          {
            title:'子项目编码',
            align:"center",
            dataIndex: 'sex_dictText'
          },
          {
            title:'子项目名称',
            align:"center",
            dataIndex: 'birthday',
            customRender:function (text) {
              return !text?"":(text.length>10?text.substr(0,10):text)
            }
          },
          {
            title:'是否默认',
            align:"center",
            dataIndex: 'phone'
          },
          {
            title:'是否有效',
            align:"center",
            dataIndex: 'orgCode'
          },
          {
            title:'付款方式',
            align:"center",
            dataIndex: 'status_dictText'
          },
          {
            title:'付款账期',
            align:"center",
            dataIndex: 'ableStatus_dictText'
          },
          {
            title:'发票类型',
            align:"center",
            dataIndex: 'ableStatus_dictText'
          },
          {
            title:'账期起算类型',
            align:"center",
            dataIndex: 'ableStatus_dictText'
          },
          {
            title:'是否需要检验报告',
            align:"center",
            dataIndex: 'ableStatus_dictText'
          },
          {
            title:'原往来单位编号',
            align:"center",
            dataIndex: 'ableStatus_dictText'
          }, {
            title:'备注',
            align:"center",
            dataIndex: 'ableStatus_dictText'
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
          list: "/yw_customsettlelist/ywCustomSettleList/list",
          add:"/yw_customsettlelist/ywCustomSettleList/add",
          exportXlsUrl: "/sys/user/exportXls",
          importExcelUrl: "sys/user/importExcel",

        },

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

