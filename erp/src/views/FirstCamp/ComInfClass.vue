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
          <a @click="() => handleDelete(record.id)">编辑</a>

        </span>
    </a-table>
  </div>
</template>

<script>
  import '@/assets/less/TableExpand.less'
  import { mixinDevice } from '@/utils/mixin'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  export default {
    name: 'ComInfClass',
    mixins:[JeecgListMixin, mixinDevice],
    components:{

    },
    data(){
      return{
        description: '商品分类信息管理页面',
        recycleBinVisible: false,
        columns:[
          {
            title:'一级分类',
            align:"center",
            dataIndex: ''
          },
          {
            title:'一级分类名称',
            align:"center",
            dataIndex: ''
          },
          {
            title:'分类编码',
            align:"center",
            dataIndex: ''
          },
          {
            title:'分类描述',
            align:"center",
            dataIndex: ''
          },
          {
            title:'最终修改人',
            align:"center",
            dataIndex: ''
          },
          {
            title:'最终修改时间',
            align:"center",
            dataIndex: '',
            customRender:function (text) {
              return !text?"":(text.length>10?text.substr(0,10):text)
            }
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
          list: "/ywwareclass/ywWareClass/list",
          delete:"/ywwareclass/ywWareClass/delete",
        }
      }
    }
    }
</script>

<style scoped>
  @import '~@assets/less/common.less';
</style>