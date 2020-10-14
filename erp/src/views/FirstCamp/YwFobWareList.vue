<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline" @keyup.enter.native="searchQuery">
        <a-row :gutter="24">
          <a-row :gutter="24">
            <a-col :xl="6" :lg="7" :md="8" :sm="24">
              <a-form-item label="商品编码">
                <a-input placeholder="输入编码查询" v-model="queryParam.wareId"></a-input>
              </a-form-item>
            </a-col>
            <a-col :xl="6" :lg="7" :md="8" :sm="24">
              <a-form-item label="商品名称">
                <a-input placeholder="输入名称查询" v-model="queryParam.wareName"></a-input>
              </a-form-item>
            </a-col>
            <a-col :xl="6" :lg="7" :md="8" :sm="24">
              <a-form-item label="单据编号">
                <a-input placeholder="输入编号查询" v-model="queryParam.documentNo"></a-input>
              </a-form-item>
            </a-col>
            <a-col :xl="6" :lg="7" :md="8" :sm="24">
              <a-form-item label="单据状态">
                <j-dict-select-tag placeholder="请选择状态" v-model="queryParam.documentStatus" dictCode="sd_docu_status"/>
              </a-form-item>
            </a-col>
            <a-col :xl="6" :lg="7" :md="8" :sm="24">
              <a-form-item label="创建日期">
<!--                <j-date v-model="queryParam.createTime" :showTime="true" date-format="YYYY-MM-DD HH:mm:ss" style="width:100%" placeholder="请选择日期" ></j-date>-->
                <j-date placeholder="生产许可证有效期" v-model="queryParam.createTime" :trigger-change="true" style="width: 100%"/>
              </a-form-item>
            </a-col>
            <a-col :xl="6" :lg="7" :md="8" :sm="24">
              <a-form-item label="生效日期">
<!--                <j-date v-model="queryParam.executeDate" :showTime="true" date-format="YYYY-MM-DD HH:mm:ss" style="width:100%" placeholder="请选择日期" ></j-date>-->
                <j-date placeholder="生产许可证有效期" v-model="queryParam.executeDate" :trigger-change="true" style="width: 100%"/>
              </a-form-item>
            </a-col>
            <a-col :xl="48" :lg="48" :md="48" :sm="48">
            <span style="float: right;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button type="primary" @click="searchReset" icon="reload" style="margin-left: 8px">重置</a-button>
              </span>
            </a-col>
          </a-row>
        </a-row>
      </a-form>
    </div>
    <!-- 查询区域-END -->

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button @click="handleAdd4" type="primary" icon="plus">新增</a-button>
      <a-button type="primary" icon="download" @click="handleExportXls('产品信息')">导出</a-button>
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
          <a @click="handleCheck2(record)">详情</a>

          <a-divider type="vertical" />
          <a-dropdown>
            <a class="ant-dropdown-link">更多 <a-icon type="down" /></a>
            <a-menu slot="overlay">
              <a-menu-item @click="handleEdit2(record)">编辑</a-menu-item>
              <a-menu-item>
                <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)">
                  <a>删除</a>
                </a-popconfirm>
              </a-menu-item>
              <a-menu-item v-print="'#print'" @click="handleCheck2(record)">打印</a-menu-item>
              <a-menu-item  @click="TurnForm(record.id)">转正式商品</a-menu-item>
            </a-menu>
          </a-dropdown>
        </span>

      </a-table>
    </div>

    <ywFobWare-modal ref="modalForm" @ok="modalFormOk"></ywFobWare-modal>
  </a-card>
</template>

<script>

  import '@/assets/less/TableExpand.less'
  import { mixinDevice } from '@/utils/mixin'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  import YwFobWareModal from './modules/AddValTim'
  import {filterMultiDictText} from '@/components/dict/JDictSelectUtil'
  import JDate from '@/components/jeecg/JDate'
  import JDictSelectTag from "@/components/dict/JDictSelectTag"
  import JMultiSelectTag from "@/components/dict/JMultiSelectTag"

  export default {
    name: "YwFobWareList",
    mixins:[JeecgListMixin, mixinDevice],
    components: {
      YwFobWareModal,
      filterMultiDictText,
      JDate,
      JDictSelectTag,
      JMultiSelectTag,
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
            title:'申报部门',
            align:"center",
            dataIndex: 'applyDepart'
          },
          {
            title:'单据状态',
            align:"center",
            dataIndex: 'documentStatus_dictText'
          },
          {
            title:'供应商',
            align:"center",
            dataIndex: 'supplierNo'
          },
          {
            title:'剂型',
            align:"center",
            dataIndex: 'drugForm'
          },
          {
            title:'单位',
            align:"center",
            dataIndex: 'wareUnit_dictText'
          },
          {
            title:'创建日期',
            align:"center",
            dataIndex: 'createTime',
            // customRender:function (text) {
            //   return !text?"":(text.length>10?text.substr(0,10):text)
            // }
          },
          {
            title:'生效日期',
            align:"center",
            dataIndex: 'executeDate',
            // customRender:function (text) {
            //   return !text?"":(text.length>10?text.substr(0,10):text)
            // }
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
          list: "/ywfobware/ywFobWare/list",
          delete: "/ywfobware/ywFobWare/delete",
          deleteBatch: "/ywfobware/ywFobWare/deleteBatch",
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