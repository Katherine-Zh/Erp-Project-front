<template>
  <a-card :bordered="false">
    <div class="table-page-search-wrapper">
      <a-form layout="inline" @keyup.enter.native="searchQuery">
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
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button type="primary" @click="searchReset" icon="reload" style="margin-left: 8px">重置</a-button>
              </span>
          </a-col>
        </a-row>
      </a-form>
    </div>
<!--    <div class="table-operator">-->
<!--      <a-button @click="handleAdd5" type="primary" icon="plus">新建</a-button>-->
<!--      <a-button @click="" type="primary" icon="plus">导出</a-button>-->
<!--      <a-dropdown v-if="selectedRowKeys.length > 0">-->
<!--        <a-menu slot="overlay">-->
<!--          <a-menu-item key="1" @click="batchDel">删除</a-menu-item>-->
<!--        </a-menu>-->
<!--        <a-button style="margin-left: 8px"> 批量操作 <a-icon type="down" /></a-button>-->
<!--      </a-dropdown>-->
<!--    </div>-->

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
          <a @click="handleToEdit(record)">申请修改 </a>
        </span>

      </a-table>
    </div>





<!--    <user-forget-model ref="modalForm2" @ok="modalFormOk"></user-forget-model>-->
<!--    <user-inf-modal disabled="true" ref="modalForm3" @ok="modalFormOk"></user-inf-modal>-->
  </a-card>
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
    name: 'ComRecApl',
    mixins:[JeecgListMixin, mixinDevice],
    components:{
      JDate,
      JDictSelectTag,
      JMultiSelectTag,
    },
    data () {
      return {
        searchMenuOptions:[],
        description: '首营品种信息管理页面',
        recycleBinVisible: false,
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
            title:'规格',
            align:"center",
            dataIndex: 'wareSpeci'
          },
          {
            title:'商品单位',
            align:"center",
            dataIndex: 'wareUnit'
          },
          {
            title:'产地',
            align:"center",
            dataIndex: 'producingArea'
          },
          {
            title:'生产企业',
            align:"center",
            dataIndex: 'manufacture'
          },
          {
            title:'件包装数量',
            align:"center",
            dataIndex: 'maxPackageNumber'
          },
          {
            title:'生效日期',
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
            // fixed:"right",
            width:147,
            scopedSlots: { customRender: 'action' }
          }
        ],
        url: {
          list: "/ywwareinfo/ywWareInfo/list",
          delete: "/ywwareinfo/ywWareInfo/delete",
          deleteBatch: "/ywwareinfo/ywWareInfo/deleteBatch",
        },
        sta:1 ,
        dictOptions:{},
      }
    },
    methods:{

      initDictConfig(){
      },
      handleToEdit(record){
        this.$router.push({ path: '/ComInfEdit',query:record})
      },
    }
    }
</script>

<style scoped>
  @import '~@assets/less/common.less';
</style>