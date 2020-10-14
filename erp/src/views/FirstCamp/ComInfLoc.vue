<template>
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
          <a @click="() => handleDelete(record.id)">删除</a>

        </span>
    </a-table>
  </div>
</template>

<script>
  import '@/assets/less/TableExpand.less'
  import { mixinDevice } from '@/utils/mixin'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  export default {
    name: 'ComInfLoc',
    mixins:[JeecgListMixin, mixinDevice],
    components:{

    },
    data(){
      return{
        description: '商品货位信息管理页面',
        recycleBinVisible: false,
        columns:[
          {
            title:'业务机构编码',
            align:"center",
            dataIndex: 'businessOrgId'
          },
          {
            title:'业务机构名称',
            align:"center",
            dataIndex: ''
          },
          {
            title:'零货货位编码',
            align:"center",
            dataIndex: 'scatterStallId'
          },
          {
            title:'零货货位名称',
            align:"center",
            dataIndex: ''
          },
          {
            title:'整货货位编码',
            align:"center",
            dataIndex: 'wholeStallId'
          },
          {
            title:'整货货位名称',
            align:"center",
            dataIndex: ''
          },
          {
            title:'说明',
            align:"center",
            dataIndex: 'notes'
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
        url:{
          list: "/ywwarestall/ywWareStall/list",
        }
      }
    }
  }
</script>

<style scoped>

</style>