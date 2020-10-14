<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
  
    <!-- 操作按钮区域 -->
    <div class="table-operator">

      <a-button type="primary" icon="download" @click="handleExportXls('证照信息')">导出</a-button>

    </div>

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

        <span slot="action" slot-scope="text, record">
          <a @click="handleEdit(record)">编辑</a>

        </span>

      </a-table>
    </div>

    <EditSupCer-modal ref="modalForm" @ok="modalFormOk"></EditSupCer-modal>
  </a-card>
</template>

<script>

  import '@/assets/less/TableExpand.less'
  import { mixinDevice } from '@/utils/mixin'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  import EditSupCer from './modules/EditSupCer'
  import {filterMultiDictText} from '@/components/dict/JDictSelectUtil'
  import JDate from '@/components/jeecg/JDate'
  import JDictSelectTag from "@/components/dict/JDictSelectTag"
  import JMultiSelectTag from "@/components/dict/JMultiSelectTag"

  export default {
    name: "SupCerEdit",
    mixins:[JeecgListMixin, mixinDevice],
    components: {
      filterMultiDictText,
      JDate,
      JDictSelectTag,
      JMultiSelectTag,
      'EditSupCer-modal':EditSupCer,
    },
    data () {
      return {
        description: '首营供应商证照信息修改',
        // 表头
        columns: [
          // {
          //   title: '',
          //   dataIndex: '',
          //   key:'rowIndex',
          //   width:60,
          //   align:"center",
          //   customRender:function (t,r,index) {
          //     return parseInt(index)+1;
          //   }
          // },
         
          {
            title:'证照类别编码',
            align:"center",
            dataIndex: 'certificateClassNo'
          },
          {
            title:'证照名称',
            align:"center",
            dataIndex: 'certificateName'
          },
          {
            title:'证照号',
            align:"center",
            dataIndex: 'certificateId'
          },
          {
            title:'有效期至',
            align:"center",
            dataIndex: 'endDate'
          },
          {
            title:'发证机构',
            align:"center",
            dataIndex: 'authoOrg'
          },
          {
            title:'认证范围',
            align:"center",
            dataIndex: 'authScope'
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
          list: "/ywfobvendorlicense/ywFobVendorLicense/list"
          
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
    mounted(){
        this.edit(this.$route.query);
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