<template>
  <a-card :bordered="false">
    
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
      </a-table>
  </a-card>
</template>

<script>

  import '@/assets/less/TableExpand.less'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
 

  export default {
    name: "YwSupFileBusSco",
    // mixins:[JeecgListMixin],
    components: {
 
    },
    data () {
      return {
        description: '供应商档案经营范围',
        // 表头
        columns: [

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
        ],
        url: {
 
          queryById:"/ywfobvendorscope/ywFobVendorScope/queryById",
          listUse: "/ywfobvendorscope/ywFobVendorScope/listUse",
          list: "/ywfobvendorscope/ywFobVendorScope/list",

          },
        sta:1 ,
        dictOptions:{},
      }
    },

    computed: {
     
    },
    methods: {
      
    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less';
</style>