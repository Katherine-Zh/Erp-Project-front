<template>
  <div>
    <div class="table-operator">
      <a-button @click="" type="primary" icon="plus">新建</a-button>
      <a-button @click="" type="primary" icon="plus">导出</a-button>
      <a-dropdown v-if="selectedRowKeys.length > 0">
        <a-menu slot="overlay">
          <a-menu-item key="1" @click="batchDel">删除</a-menu-item>
        </a-menu>
        <a-button style="margin-left: 8px"> 批量操作 <a-icon type="down" /></a-button>
      </a-dropdown>
    </div>

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
    name: 'ContactPerson',
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
            title: '子结算户编码',
            align: "center",
            dataIndex: 'subProjectCode'
          },
          {
            title: '子结算户名称',
            align: "center",
            dataIndex: 'subProjectName'
          },
          {
            title: '联系人ID',
            align: "center",
            dataIndex: 'contactId'
          },
          {
            title: '联系人名',
            align: "center",
            dataIndex: 'contactName'
          },
          {
            title: '联系人职位名称',
            align: "center",
            dataIndex: 'contactPosition'
          },
          {
            title: '传真',
            align: "center",
            dataIndex: 'fax'
          },
          {
            title: '身份证',
            align: "center",
            dataIndex: 'idCard',
          },
          {
            title: '邮件地址',
            align: "center",
            dataIndex: 'email'
          },
          {
            title: '手机/办公电话',
            align: "center",
            dataIndex: 'telephone'
          },
          {
            title: '失效日期',
            align: "center",
            dataIndex: 'outOfDate'
          },
          {
            title: '有无收获权限',
            align: "center",
            dataIndex: 'isBuyAuth'
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
          list: "/yw_customcontact/ywCustomContact/list",
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