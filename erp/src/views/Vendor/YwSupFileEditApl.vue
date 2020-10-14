<template>
  <a-card :bordered="false">
    <div class="table-page-search-wrapper">
      <a-form layout="inline" @keyup.enter.native="searchQuery">
        <a-row :gutter="24">
          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            <a-form-item label="供应商编号">
              <a-input placeholder="请输入" v-model="queryParam.vendorId"></a-input>
            </a-form-item>
          </a-col>
          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            <a-form-item label="供应商名称">
              <a-input placeholder="请输入" v-model="queryParam.vendorName"></a-input>
            </a-form-item>
          </a-col>
          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            <a-form-item label="使用状态">
              <j-dict-select-tag placeholder="请选择状态" v-model="queryParam.useStatus" dictCode="sd_status"/>
            </a-form-item>
          </a-col>
          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            <span style="float: right; overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button type="primary" @click="searchReset" icon="reload" style="margin-left: 8px">重置</a-button>
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>

   
    <div id='studentPhoTable'>
      <a-divider type="vertical" />
      <a-table
        ref="table"
        size="middle"
        
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
          <a @click="handleEdit10(record)">申请修改</a>
        </span>

      </a-table>
    </div>
  </a-card>
</template>

<script>
  import '@/assets/less/TableExpand.less'
  import { mixinDevice } from '@/utils/mixin'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  import JDate from '@/components/jeecg/JDate'
  import JDictSelectTag from "@/components/dict/JDictSelectTag"
  import JMultiSelectTag from "@/components/dict/JMultiSelectTag"

  export default {
    name: 'YwFobFileEditApl',
    description: '供应商档案修改申请表table',
    mixins:[JeecgListMixin, mixinDevice],
    components:{
      JDate,
      JDictSelectTag,
      JMultiSelectTag,
    },
    data(){
      return {
        searchMenuOptions:[],
        recycleBinVisible: false,
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
            title:'供应商助记码',
            align:"center",
            dataIndex: 'vendorAbc'
          },
          {
            title:'地址',
            align:"center",
            dataIndex: 'address'
          },
          {
            title:'使用状态',
            align:"center",
            dataIndex: 'useStatus_dictText'
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
          add: "/ywvendorinfo/ywVendorInfo/add",
          delete: "ywvendorinfo/ywVendorInfo/delete",
          deleteBatch: "/ywvendorinfo/ywVendorInfo/deleteBatch",
          exportXlsUrl: "/ywfobvendorinfo/ywFobVendorInfo/exportXls",
          create: "/ywvendorinfo/ywVendorInfo/create",
          edit: "/ywvendorinfo/ywVendorInfo/edit",
          list: "/ywvendorinfo/ywVendorInfo/list",
          editByInsert: "/ywvendorinfo/ywVendorInfo/editByInsert",
          queryAllVendor: "/ywvendorinfo/ywVendorInfo/queryAllVendor",
          queryById: "/ywvendorinfo/ywVendorInfo/queryById",
          querySupplier: "/ywvendorinfo/ywVendorInfo/querySupplier",
        },
        sta:1 ,
        dictOptions:{},
      }
    },
    methods:{

      initDictConfig(){
      },
    }
  }
</script>

<style scoped>

</style>