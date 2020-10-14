<template>
  <a-card :bordered="false">
    <div class="table-page-search-wrapper">
      <a-form layout="inline" @keyup.enter.native="searchQuery">
        <a-row :gutter="24">
          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            <a-form-item label="供应商编码">
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
    <div class="table-operator">
      <a-button @click="handleAdd8" type="primary" icon="plus">新建</a-button>
      <a-button type="primary" icon="download" @click="handleExportXls('供应商档案信息')">导出</a-button>
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

        <span slot="action" slot-scope="text, record">
          <a @click="handleCheck6(record)">详情</a>

          <a-divider type="vertical" />
          <a-dropdown>
            <a class="ant-dropdown-link">更多 <a-icon type="down" /></a>
            <a-menu slot="overlay">
              <a-menu-item @click="handleEdit10(record)">编辑</a-menu-item>
              <a-menu-item>
                <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)">
                  <a>删除</a>
                </a-popconfirm>
              </a-menu-item>
              <a-menu-item  @click="handleEdit">停用</a-menu-item>
              <a-menu-item v-print="'#print1'" @click="handleCheck6(record)">打印</a-menu-item>

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
  import JDate from '@/components/jeecg/JDate'
  import JDictSelectTag from "@/components/dict/JDictSelectTag"
  import JMultiSelectTag from "@/components/dict/JMultiSelectTag"

  export default {
    name: 'YwFobFileList',
    description: '供应商档案table',
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
          delete: "/ywvendorinfo/ywVendorInfo/delete", 
          deleteBatch: "/ywvendorinfo/ywVendorInfo/deleteBatch",
          softDel: "/ywvendorinfo/ywVendorInfo/softDel",
          softDelBatch: "/ywvendorinfo/ywVendorInfo/softDelBatch",
          exportXlsUrl: "/ywfobvendorinfo/ywFobVendorInfo/exportXls",
          create: "/ywvendorinfo/ywVendorInfo/create",
          edit: "/ywvendorinfo/ywVendorInfo/edit",
          list: "/ywvendorinfo/ywVendorInfo/list",
          editByInsert: "/ywvendorinfo/ywVendorInfo/editByInsert",
          queryAllVendor: "/ywvendorinfo/ywVendorInfo/queryAllVendor",
          queryById: "/ywvendorinfo/ywVendorInfo/queryById",
          listUse: "/ywvendorinfo/ywVendorInfo/listUse",
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