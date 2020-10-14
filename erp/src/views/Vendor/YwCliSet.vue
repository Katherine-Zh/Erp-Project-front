<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline" @keyup.enter.native="searchQuery">
        <a-row :gutter="24">
          <a-row :gutter="24">
            <a-col :xl="6" :lg="7" :md="8" :sm="24">
              <a-form-item label="委托范围编号">
                <a-input placeholder="输入编号查询" v-model="queryParam.clentScopeId"></a-input>
              </a-form-item>
            </a-col>
            <a-col :xl="6" :lg="7" :md="8" :sm="24">
              <a-form-item label="供应商编码">
                <a-input placeholder="输入编码查询" v-model="queryParam.vendorId"></a-input>
              </a-form-item>
            </a-col>
            <a-col :xl="6" :lg="7" :md="8" :sm="24">
              <a-form-item label="供应商名称">
                <a-input placeholder="输入名称查询" v-model="queryParam.vendorName"></a-input>
              </a-form-item>
            </a-col>
            <a-col :xl="6" :lg="7" :md="8" :sm="24">
              <a-form-item label="委托人">
                <a-input placeholder="输入委托人查询" v-model="queryParam.client"></a-input>
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
    <!-- 操作区域-END -->
    <div class="table-operator">
      <a-button @click="handleAdd12" type="primary" icon="plus">新建</a-button>
      <a-button type="primary" icon="download" @click="handleExportXls('供应商委托人信息')">导出</a-button>
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
          <a @click="handleCheck5(record)">明细</a>
          <a-divider type="vertical" />
          <a @click="handleEdit7(record)">编辑详情</a>

        </span>
      </a-table>
    </div>
  </a-card>
</template>

<script>

  import '@/assets/less/TableExpand.less'
  import { mixinDevice } from '@/utils/mixin'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  import {filterMultiDictText} from '@/components/dict/JDictSelectUtil'
  import JDate from '@/components/jeecg/JDate'
  import JDictSelectTag from "@/components/dict/JDictSelectTag"
  import JMultiSelectTag from "@/components/dict/JMultiSelectTag"

  export default {
    name: "YwCliSet",
    mixins:[JeecgListMixin, mixinDevice],
    components: {
      filterMultiDictText,
      JDate,
      JDictSelectTag,
      JMultiSelectTag,
    },
    data () {
      return {
        description: '供应商委托人设置',
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
            title:'委托范围编号',
            align:"center",
            dataIndex: 'clentScopeId'
          },
          {
            title:'供应商编码',
            align:"center",
            dataIndex: 'vendorId'
          },
          {
            title:'供应商名称',
            align:"center",
            dataIndex: 'vendorName'
          },
          {
            title:'委托人',
            align:"center",
            dataIndex: 'client'
          },
          {
            title:'最终修改人',
            align:"center",
            dataIndex: 'updateBy'
          },
          {
            title:'最终修改时间',
            align:"center",
            dataIndex: 'updateTime',
            customRender:function (text) {
              return !text?"":(text.length>10?text.substr(0,10):text)
            }
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
          add: "/ywvendorclientmanage/ywVendorClientManage/add",
          list: "/ywvendorclientmanage/ywVendorClientManage/list",
          deleteBatch: "/ywvendorclientmanage/ywVendorClientManage/deleteBatch",
          softDel: "/ywvendorclientmanage/ywVendorClientManage/softDel",
          softDelBatch: "/ywvendorclientmanage/ywVendorClientManage/softDelBatch",
          edit: "/ywvendorclientmanage/ywVendorClientManage/edit",
          queryById: "/ywvendorclientmanage/ywVendorClientManage/queryById",
          editByInsert: "/ywvendorclientmanage/ywVendorClientManage/editByInsert",
          exportXlsUrl: "/ywvendorclientmanage/ywVendorClientManage/exportXls",
        },
        sta:1 ,
        dictOptions:{},
      }
    },
    computed: {

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