<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline" @keyup.enter.native="searchQuery">
        <a-row :gutter="24">
        
          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            <a-form-item label="供应商编号">
              <a-input placeholder="请输入供应商编号" v-model="queryParam.vendorNo"></a-input>
            </a-form-item>
          </a-col>
          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            <a-form-item label="供应商名称">
              <a-input placeholder="请输入供应商名称" v-model="queryParam.vendorName"></a-input>
            </a-form-item>
          </a-col>

          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            <a-form-item label="单据状态">
              <j-dict-select-tag placeholder="请选择单据状态" v-model="queryParam.documentStatus" dictCode="sd_docu_status"/>
            </a-form-item>
          </a-col>
          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            <a-form-item label="申报日期">
              <j-date placeholder="申报日期" v-model="queryParam.applyDate" :trigger-change="true" style="width: 100%"/>        
            </a-form-item>
          </a-col>

            <a-col :xl="6" :lg="7" :md="8" :sm="24">
              <a-form-item label="申报人">
                <a-input placeholder="请输入申报人" v-model="queryParam.applyPerson"></a-input>
              </a-form-item>
            </a-col>

          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            <a-form-item label="审批日期">
              <j-date placeholder="审批日期" v-model="queryParam.checkDate" :trigger-change="true" style="width: 100%"/>    
            </a-form-item>
          </a-col>
          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            <a-form-item label="转正日期">
              <j-date placeholder="转正日期" v-model="queryParam.executeDate" :trigger-change="true" style="width: 100%"/>    
            </a-form-item>
          </a-col>

          <a-col :xl="48" :lg="48" :md="48" :sm="48">
          <span style="float: right;overflow: hidden;" class="table-page-search-submitButtons">
            <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
            <a-button type="primary" @click="searchReset" icon="reload" style="margin-left: 8px">重置</a-button>
            </span>
          </a-col>
        
        </a-row>
      </a-form>
    </div>
    <!-- 查询区域-END -->

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button @click="handleAdd7" type="primary" icon="plus">新建</a-button>
      <a-button type="primary" icon="download" @click="handleExportXls('首营供应商信息')">导出</a-button>
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
          <a @click="handleCheck4(record)">详情</a>

          <a-divider type="vertical" />
          <a-dropdown>
            <a class="ant-dropdown-link">更多 <a-icon type="down" /></a>
            <a-menu slot="overlay">
              <a-menu-item @click="handleEdit4(record)">编辑</a-menu-item>
              <a-menu-item>
                <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)">
                  <a>删除</a>
                </a-popconfirm>
              </a-menu-item>
              <a-menu-item v-print="'#print'" @click="handleCheck4(record)">打印</a-menu-item>
            </a-menu>
          </a-dropdown>
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
    name: "YwSupplier",
    mixins:[JeecgListMixin, mixinDevice],
    components: {
      filterMultiDictText,
      JDate,
      JDictSelectTag,
      JMultiSelectTag,
    },
    data () {
      return {
        description: '首营供应商页面',
        // 表头
        columns: [

          {
            title:'序号',
            // align:"center",
            // dataIndex: 'id',
            dataIndex: 'id',
            key:'rowIndex',
            width:60,
            align:"center",
            customRender:function (t,r,index) {
               return parseInt(index)+1;
            }
          },
          {
            title:'供应商编号',
            align:"center",
            dataIndex: 'vendorNo'
          },
          {
            title:'供应商名称',
            align:"center",
            dataIndex: 'vendorName'
          },
          {
            title:'单据状态',
            align:"center",
            dataIndex: 'documentStatus_dictText'
          },
          {
            title:'申报部门',
            align:"center",
            dataIndex: 'applyDepart'
          },
          {
            title:'申报日期',
            align:"center",
            dataIndex: 'applyDate'
          },
          {
            title:'申报人',
            align:"center",
            dataIndex: 'applyPerson'
          },
          {
            title:'审批日期',
            align:"center",
            dataIndex: 'checkDate',
            customRender:function (text) {
              return !text?"":(text.length>10?text.substr(0,10):text)
            }
          },
          {
            title:'转正日期',
            align:"center",
            dataIndex: 'executeDate',
            customRender:function (text) {
              return !text?"":(text.length>10?text.substr(0,10):text)
            }
          },
          {
            title: '操作',
            dataIndex: 'action',
            align:"center",
            fixed:"right",
            width:147,
            scopedSlots: { customRender: 'action' }
          }
        ],
        url: {
          add:"/ywfobvendorinfo/ywFobVendorInfo/add",
          edit:"/ywfobvendorinfo/ywFobVendorInfo/edit",
          queryById:"/ywfobvendorinfo/ywFobVendorInfo/queryById",

          list: "/ywfobvendorinfo/ywFobVendorInfo/list",
          delete: "/ywfobvendorinfo/ywFobVendorInfo/delete",
          deleteBatch: "/ywfobvendorinfo/ywFobVendorInfo/deleteBatch",
          exportXlsUrl: "/ywfobvendorinfo/ywFobVendorInfo/exportXls",
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