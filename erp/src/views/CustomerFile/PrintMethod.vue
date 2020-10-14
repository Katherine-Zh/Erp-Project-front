<template>
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
  </a-table>
</template>

<script>
  import '@/assets/less/TableExpand.less'
  import { mixinDevice } from '@/utils/mixin'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  import JDate from '@/components/jeecg/JDate'
  import JDictSelectTag from "@/components/dict/JDictSelectTag"
  import JMultiSelectTag from "@/components/dict/JMultiSelectTag"
  import { pushIfNotExist } from '../../utils/util'


  export default {
    name: 'PrintMethod',
    mixins:[JeecgListMixin, mixinDevice],
    components:{
      JDate,
      JDictSelectTag,
      JMultiSelectTag,
    },
    data () {
      return {
        searchMenuOptions:[],
        recycleBinVisible: false,
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
            title:'单据名称',
            align:"center",
            dataIndex: 'wareId'
          },
          {
            title:'客户编码',
            align:"center",
            dataIndex: 'wareName'
          },
          {
            title:'销售单类型',
            align:"center",
            dataIndex: 'wareSpeci'
          },
          {
            title:'子结算户编码',
            align:"center",
            dataIndex: 'producingArea'
          },
          {
            title:'客户名称',
            align:"center",
            dataIndex: 'manufacture'
          },
          {
            title:'子结算户名称',
            align:"center",
            dataIndex: 'wareUnit_dictText'
          },
          {
            title:'仓库',
            align:"center",
            dataIndex: 'maxPackageNumber'
          },
          {
            title:'打印方案号',
            align:"center",
            dataIndex: 'createTime',
          },
          {
            title:'打印方案名称',
            align:"center",
            dataIndex: 'createTime',
          },
          {
            title:'打印机名称',
            align:"center",
            dataIndex: 'createTime',
          },
          {
            title:'打印次数',
            align:"center",
            dataIndex: 'createTime',
          },
          {
            title:'最终修改人',
            align:"center",
            dataIndex: 'createTime',
          },
          {
            title:'最终修改时间',
            align:"center",
            dataIndex: 'createTime',
            customRender:function (text) {
              return !text?"":(text.length>10?text.substr(0,10):text)
            }
          },
        ],
        url: {
          list: "/ywwareinfo/ywWareInfo/list",
          delete: "/ywwareinfo/ywWareInfo/delete",
          deleteBatch: "/ywwareinfo/ywWareInfo/deleteBatch",
        },
        sta:1 ,
        dictOptions:{},
      }
    },
    methods:{

      initDictConfig(){
      },
    }
  }
</script>

<style scoped>
  @import '~@assets/less/common.less';
</style>