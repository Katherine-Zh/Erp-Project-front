<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline" @keyup.enter.native="searchQuery">
        <a-row :gutter="24">
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
              <a-form-item label="证照类型">
                <j-dict-select-tag placeholder="请选择类型" v-model="queryParam.certificateClass" dictCode="sd_license_type"/>
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
    
    <!-- table区域-begin -->
    <div>
      <a-divider type="vertical" />
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
          <a v-print="'#printpic'" @click="handleDetail1(record)">预览</a>

          <a-divider type="vertical" />
          <a-dropdown>
            <a class="ant-dropdown-link">更多 <a-icon type="down" /></a>

            <a-menu slot="overlay">
              <a-menu-item  @click="handUpLoad(record.id)">扫描</a-menu-item>
              <a-menu-item  @click="handPicUpLoad(record.id)">上传</a-menu-item>
              <a-menu-item  @click="handLoad(record.id)">下载</a-menu-item>
            </a-menu>
          </a-dropdown>
        </span>

      </a-table>
    </div>

    <up-Load-Pic ref="upLoadPic" @ok="modalFormOk"></up-Load-Pic>

  </a-card>
</template>

<script>

  import '@/assets/less/TableExpand.less'
  import { mixinDevice } from '@/utils/mixin'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'

  import JDate from '@/components/jeecg/JDate'
  import JDictSelectTag from "@/components/dict/JDictSelectTag"
  import JMultiSelectTag from "@/components/dict/JMultiSelectTag"
  import upLoadPic from './modules/upLoadPic'

  export default {
    name: "YwPicMan",
    mixins:[JeecgListMixin, mixinDevice],
    components: {

      JDate,
      JDictSelectTag,
      JMultiSelectTag,
      upLoadPic,
    },
    data () {
      return {
        description: '供应商图片管理界面',
        // 表头
        columns: [
                    
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
            title:'证书类型',
            align:"center",
            dataIndex: 'certificateClass'
          },
          {
            title:'有效期至',
            align:"center",
            dataIndex: 'endDate'
          },
          {
            title:'备注',
            align:"center",
            dataIndex: 'notes'
          },
          {
            title:'图片地址',
            align:"center",
            dataIndex: 'certificateFilePath'
          },
          {
            title:'创建人',
            align:"center",
            dataIndex: 'createBy'
          },
          {
            title:'创建时间',
            align:"center",
            dataIndex: 'createTime',
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
          
          list: "/ywvendorlicense/ywVendorLicense/list",
          queryById: "/ywvendorlicense/ywVendorLicense/queryById",

        },
        sta:1 ,
        dictOptions:{},
      }
    },
    // computed: {
    //   importExcelUrl: function(){
    //     return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`;
    //   },
    // },
    methods: {
      initDictConfig(){
      }
    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less';
</style>