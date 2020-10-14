<template>
  <a-card :bordered="false">

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button @click="handleAdd" type="primary" icon="plus">新增</a-button>
      <a-button type="primary" icon="download" @click="handleExportXls('证照扫描信息')">导出</a-button>
<!--      <a-upload name="file" :showUploadList="false" :multiple="false" :headers="tokenHeader" :action="importExcelUrl" @change="handleImportExcel">-->
<!--        <a-button type="primary" icon="import">导入</a-button>-->
<!--      </a-upload>-->
      <a-dropdown v-if="selectedRowKeys.length > 0">
        <a-menu slot="overlay">
          <a-menu-item key="1" @click="batchDel"><a-icon type="delete"/>删除</a-menu-item>
        </a-menu>
        <a-button style="margin-left: 8px"> 批量操作 <a-icon type="down" /></a-button>
      </a-dropdown>
    </div>

    <!-- table区域-begin -->
    <div>
      <div class="ant-alert ant-alert-info" style="margin-bottom: 16px;">
        <i class="anticon anticon-info-circle ant-alert-icon"></i> 已选择 <a style="font-weight: 600">{{ selectedRowKeys.length }}</a>项
        <a style="margin-left: 24px" @click="onClearSelected">清空</a>
      </div>

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

        <template slot="htmlSlot" slot-scope="text">
          <div v-html="text"></div>
        </template>
        <template slot="imgSlot" slot-scope="text">
          <span v-if="!text" style="font-size: 12px;font-style: italic;">无图片</span>
          <img v-else :src="getImgView(text)" height="25px" alt="" style="max-width:80px;font-size: 12px;font-style: italic;"/>
        </template>
        <template slot="fileSlot" slot-scope="text">
          <span v-if="!text" style="font-size: 12px;font-style: italic;">无文件</span>
          <a-button
            v-else
            :ghost="true"
            type="primary"
            icon="download"
            size="small"
            @click="uploadFile(text)">
            下载
          </a-button>
        </template>

        <span slot="action" slot-scope="text, record">
          <a v-print="'#printpic'" @click="handleDetail(record)">打印预览</a>

          <a-divider type="vertical" />
          <a-dropdown>
            <a class="ant-dropdown-link">更多 <a-icon type="down" /></a>
            <a-menu slot="overlay">
              <a-menu-item @click="handleEdit(record)">编辑</a-menu-item>
              <a-menu-item>
                <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)">
                  <a>删除</a>
                </a-popconfirm>
              </a-menu-item>
<!--              <a-menu-item v-print="'#print'" @click="handleDetail(record)">打印</a-menu-item>-->
              <a-menu-item  @click="handPicUpLoad(record.id)">上传图片</a-menu-item>
            </a-menu>
          </a-dropdown>
        </span>

      </a-table>
    </div>

    <ComPicTemplateModal-modal ref="modalForm" @ok="modalFormOk"></ComPicTemplateModal-modal>
    <up-Load-Pic ref="upLoadPic" @ok="modalFormOk"></up-Load-Pic>
  </a-card>
</template>

<script>

  import '@/assets/less/TableExpand.less'
  import { mixinDevice } from '@/utils/mixin'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  import ComPicTemplateModal from './ComPicTemplateModal'
  import {filterMultiDictText} from '@/components/dict/JDictSelectUtil'
  import JDate from '@/components/jeecg/JDate'
  import JDictSelectTag from "@/components/dict/JDictSelectTag"
  import JMultiSelectTag from "@/components/dict/JMultiSelectTag"
  import upLoadPic from './modules/upLoadPic'

  export default {
    name: "YwFobPiceList",
    mixins:[JeecgListMixin, mixinDevice],
    components: {
      'ComPicTemplateModal-modal':ComPicTemplateModal,
      filterMultiDictText,
      JDate,
      JDictSelectTag,
      JMultiSelectTag,
      upLoadPic,
    },
    data () {
      return {
        description: 'yw_fob_ware管理页面',
        // 表头
        columns: [
          // {
          //   title: '#',
          //   dataIndex: '',
          //   key:'rowIndex',
          //   width:60,
          //   align:"center",
          //   customRender:function (t,r,index) {
          //     return parseInt(index)+1;
          //   }
          // },
          {
            title:'序号',
            align:"center",
            dataIndex: 'id'
          },
          {
            title:'扫描编号',
            align:"center",
            dataIndex: 'scanId'
          },
          {
            title:'商品编码',
            align:"center",
            dataIndex: 'wareId'
          },
          {
            title:'商品名称',
            align:"center",
            dataIndex: 'wareName'
          },
          {
            title:'规格',
            align:"center",
            dataIndex: 'wareSpeci'
          },
          {
            title:'生产企业',
            align:"center",
            dataIndex: 'manufacture'
          },
          {
            title:'单位',
            align:"center",
            dataIndex: 'wareUnit'
          },
          {
            title:'证照号',
            align:"center",
            dataIndex: 'certificateId'
          },
          {
            title:'证照类型',
            align:"center",
            dataIndex: 'certificateType'
          },
          {
            title:'生效时间',
            align:"center",
            dataIndex: 'beginDate',
            customRender:function (text) {
              return !text?"":(text.length>10?text.substr(0,10):text)
            }
          },
          {
            title:'失效时间',
            align:"center",
            dataIndex: 'endDate',
            customRender:function (text) {
              return !text?"":(text.length>10?text.substr(0,10):text)
            }
          },
          {
            title:'最终修改人',
            align:"center",
            dataIndex: 'updateBy',
          },
          {
            title:'最终修改时间',
            align:"center",
            dataIndex: 'updateTime',
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
          list: "/ywwarelicensescan/ywWareLicenseScan/list",
          delete: "/ywwarelicensescan/ywWareLicenseScan/delete",
          deleteBatch: "/ywwarelicensescan/ywWareLicenseScan/deleteBatch",
          exportXlsUrl: "/ywfobware/ywFobWare/exportXls",
          importExcelUrl: "ywfobware/ywFobWare/importExcel",
          changeFormal : "/ywfobware/ywFobWare/changeFormal",
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
    methods: {
      initDictConfig(){
      }
    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less';
</style>
<style lang="less" scoped>
  /** Button按钮间距 */
  .ant-btn {
    margin-left: 3px
  }

  .ant-card-body .table-operator {
    margin-bottom: 18px;
  }

  .ant-table-tbody .ant-table-row td {
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .anty-row-operator button {
    margin: 0 5px
  }

  .ant-btn-danger {
    background-color: #ffffff
  }

  .ant-modal-cust-warp {
    height: 100%
  }

  .ant-modal-cust-warp .ant-modal-body {
    height: calc(100% - 110px) !important;
    overflow-y: auto
  }

  .ant-modal-cust-warp .ant-modal-content {
    height: 90% !important;
    overflow-y: hidden
  }
</style>