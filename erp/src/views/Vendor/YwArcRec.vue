<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline" @keyup.enter.native="searchQuery">
        <a-row :gutter="24">
          <a-row :gutter="24">
            <a-col :xl="6" :lg="7" :md="8" :sm="24">
              <a-form-item label="供应商编码">
                <a-input placeholder="输入编码查询" v-model="queryParam.vendorNo"></a-input>
              </a-form-item>
            </a-col>
            <a-col :xl="6" :lg="7" :md="8" :sm="24">
              <a-form-item label="供应商名称">
                <a-input placeholder="输入名称查询" v-model="queryParam.vendorName"></a-input>
              </a-form-item>
            </a-col>
            <a-col :xl="6" :lg="7" :md="8" :sm="24">
              <a-form-item label="修改人">
                <a-input placeholder="输入修改人查询" v-model="queryParam.updateBy"></a-input>
              </a-form-item>
            </a-col>
            <a-col :xl="6" :lg="7" :md="8" :sm="24">
              <a-form-item label="修改时间">
                <j-date placeholder="输入时间查询" v-model="queryParam.updateTime" :trigger-change="true" style="width: 100%"/>
              </a-form-item>
            </a-col>
            <a-col :xl="48" :lg="48" :md="48" :sm="48">
            <span style="float: right;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button type="primary" @click="searchReset" icon="reload" style="margin-left: 8px">重置</a-button>
              
            </span>
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" icon="download" @click="handleExportXls('供应商档案修改记录')">导出</a-button>
            </span>
            </a-col>
          </a-row>
        </a-row>
      </a-form>
    </div>
    <!-- 查询区域-END -->


    <!-- table区域-begin -->
    <div>

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


      </a-table>
    </div>

    <ywFobWare-modal ref="modalForm" @ok="modalFormOk"></ywFobWare-modal>
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
    name: "YwArcRec",
    mixins:[JeecgListMixin, mixinDevice],
    components: {
      filterMultiDictText,
      JDate,
      JDictSelectTag,
      JMultiSelectTag,
    },
    data () {
      return {
        description: '供应商档案修改修改记录页面',
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
            dataIndex: 'id',
            key:'rowIndex',
            width:60,
            align:"center",
            customRender:function (t,r,index) {
               return parseInt(index)+1;
            }

          },
          {
            title:'供应商编码',
            align:"center",
            dataIndex: 'vendorNo'
          },
          {
            title:'供应商名称',
            align:"center",
            dataIndex: 'vendorName'
          },
          {
            title:'修改项',
            align:"center",
            dataIndex: 'modifyColumnChinese'
          },
          {
            title:'修改前',
            align:"center",
            dataIndex: 'oldValueChinese'
          },
          {
            title:'修改后',
            align:"center",
            dataIndex: 'newValueChinese'
          },
          {
            title:'修改方式',
            align:"center",
            dataIndex: 'changeTypeFlag'
          },
          {
            title:'修改人',
            align:"center",
            dataIndex: 'updateBy'
          },
          {
            title:'修改时间',
            align:"center",
            dataIndex: 'updateTime',
            customRender:function (text) {
              return !text?"":(text.length>10?text.substr(0,10):text)
            }
          },
        ],
        url: {
          add: "/ywvendormodifylog/ywVendorModifyLog/add",
          list: "/ywvendormodifylog/ywVendorModifyLog/list",
          edit: "/ywvendormodifylog/ywVendorModifyLog/edit",
          delete: "/ywvendormodifylog/ywVendorModifyLog/delete",
          deleteBatch: "/ywvendormodifylog/ywVendorModifyLog/deleteBatch",
          exportXlsUrl: "/ywvendormodifylog/ywVendorModifyLog/exportXls",
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