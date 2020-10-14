<template>
  <span>
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


    <span slot="action" slot-scope="text, record">
          <a @click="handleEdit(record)">编辑</a>
    </span>
  </a-table>
    <class-edit  @ok="modalFormOk" ref="edit"> </class-edit>
  </span>
</template>

<script>
  import '@/assets/less/TableExpand.less'
  import { mixinDevice } from '@/utils/mixin'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  import JDate from '@/components/jeecg/JDate'
  import JDictSelectTag from "@/components/dict/JDictSelectTag"
  import JMultiSelectTag from "@/components/dict/JMultiSelectTag"
  import { pushIfNotExist } from '../../utils/util'
  import ClassEdit from './modules/ClassEdit'
  export default {
    name: 'CustomerClass',
    mixins:[JeecgListMixin, mixinDevice],
    components:{
      JDate,
      JDictSelectTag,
      JMultiSelectTag,
      ClassEdit
    },
    data () {
      return {
        searchMenuOptions: [],
        recycleBinVisible: false,
        // 表头
        columns: [
          // {
          //   title: '序号',
          //   dataIndex: '',
          //   key: 'rowIndex',
          //   width: 60,
          //   align: "center",
          //   customRender: function (t, r, index) {
          //     return parseInt(index) + 1;
          //   }
          // },
          {
            title: '一级分类编码',
            align: "center",
            dataIndex: 'parentCode'
          },
          {
            title: '一级分类名称',
            align: "center",
            dataIndex: 'parentName'
          },
          {
            title: '分类编码',
            align: "center",
            dataIndex: 'classCode'
          },
          {
            title: '分类描述',
            align: "center",
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
            // fixed:"right",
            width:147,
            scopedSlots: { customRender: 'action' }
          }
        ],
        url: {
          list: "/yw_customclass/ywCustomClass/list",
          delete: "/ywwareinfo/ywWareInfo/delete",
          deleteBatch: "/ywwareinfo/ywWareInfo/deleteBatch",
        },
        sta: 1,
        dictOptions: {},
      }
    },
    methods:{
      handleEdit(record){
        this.$refs.edit.edit(record);
        this.$refs.edit.title = "编辑";
        this.$refs.edit.isTrue = false;
        this.$refs.edit.disableSubmit = false;
      }
    },
  }
</script>

<style scoped>

</style>