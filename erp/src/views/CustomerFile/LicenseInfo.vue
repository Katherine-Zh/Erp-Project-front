<template>
  <div>
<!--    <div class="table-operator">-->
<!--      <a-button @click="" type="primary" icon="plus">导出</a-button>-->
<!--    </div>-->
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
      </a-table>
      <span slot="action" slot-scope="text, record">
          <a @click="">编辑</a>
      </span>
    </div>
  </div>
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
    name: 'LicenseInfo',
    mixins:[JeecgListMixin, mixinDevice],
    components:{
      JDate,
      JDictSelectTag,
      JMultiSelectTag,
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
            title: '证照类别编码',
            align: "center",
            dataIndex: 'wareId'
          },
          {
            title: '证照名称',
            align: "center",
            dataIndex: 'wareId'
          },
          {
            title: '证照号',
            align: "center",
            dataIndex: 'wareId'
          },
          {
            title: '发证日期',
            align: "center",
            dataIndex: 'wareId'
          },
          {
            title: '有效期至',
            align: "center",
            dataIndex: 'wareName'
          },
          {
            title: '提醒状态',
            align: "center",
            dataIndex: 'wareSpeci'
          },
          {
            title: '发证机构',
            align: "center",
            dataIndex: 'producingArea'
          },
          {
            title: '一级分类',
            align: "center",
            dataIndex: 'manufacture'
          },
          {
            title: '控制类别编码',
            align: "center",
            dataIndex: 'manufacture'
          },
          {
            title: '控制类别名称',
            align: "center",
            dataIndex: 'createTime',
          },
          {
            title: '操作',
            dataIndex: 'action',
            align: "center",
            // fixed:"right",
            width: 147,
            scopedSlots: { customRender: 'action' }
          }
        ],
        url: {
          list: "/ywwareinfo/ywWareInfo/list",
          delete: "/ywwareinfo/ywWareInfo/delete",
          deleteBatch: "/ywwareinfo/ywWareInfo/deleteBatch",
        },
        sta: 1,
        dictOptions: {},
      }
    }
  }
</script>

<style scoped>

</style>