// 最后一个没字段
<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline" @keyup.enter.native="searchQuery">
        <a-row :gutter="24">
          <a-row :gutter="24">
            <a-col :xl="6" :lg="7" :md="8" :sm="8">
              <a-form-item label="委托范围编号">
                <a-input placeholder="请输入" v-model="clentScopeId"></a-input>
              </a-form-item>
            </a-col>
            <a-col :xl="6" :lg="7" :md="8" :sm="8">
              <a-form-item label="客户编码">
                <a-input placeholder="请输入" v-model="customId"></a-input>
              </a-form-item>
            </a-col>
            <a-col :xl="6" :lg="7" :md="8" :sm="8">
              <a-form-item label="客户名称">
                <a-input placeholder="请输入" v-model="customName"></a-input>
              </a-form-item>
            </a-col>
            <a-col :xl="6" :lg="7" :md="8" :sm="8">
              <a-form-item label="委托人">
                <a-input placeholder="请输入" v-model="client"></a-input>
              </a-form-item>
            </a-col>            
            <a-col :xl="48" :lg="48" :md="48" :sm="48">
            <span style="float: right;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button  @click="searchReset" icon="reload" style= "margin-left: 8px" >重置</a-button>
              </span>
            </a-col>
          </a-row>
        </a-row>
      </a-form>
    </div>
    <!-- 查询区域-END -->

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button @click="handleAdd" type="primary" icon="plus">新建</a-button>
     <a-button type="primary" icon="download" @click="handleExportXls('角色信息')">导出</a-button>
     <!-- <a-upload name="file" :showUploadList="false" :multiple="false" :headers="tokenHeader" :action="importExcelUrl" @change="handleImportExcel">
       <a-button type="primary" icon="import">导入</a-button>
     </a-upload> -->
      <a-dropdown v-if="selectedRowKeys.length > 0">
        <a-menu slot="overlay">
          <a-menu-item key="1" @click="batchDel"><a-icon type="delete"/>删除</a-menu-item>
        </a-menu>
        <a-button style="margin-left: 8px"> 批量操作 <a-icon type="down" /></a-button>
      </a-dropdown>
    </div>

    <!-- table区域-begin -->
    <div>

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
          <a @click="handleOpen(record)">用户</a>
<!--          handleEdit(record)-->

          <a-divider type="vertical" />
          <a-dropdown>
            <a class="ant-dropdown-link">更多 <a-icon type="down" /></a>
           <a-menu slot="overlay">
                <a-menu-item>
                  <a @click="handlePerssion(record.id)">权限</a>
                </a-menu-item>
                <a-menu-item>
                  <a @click="handleEdit(record)">编辑</a>
                </a-menu-item>
                <a-menu-item>
                  <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete1(record.id)">
                    <a>删除</a>
                  </a-popconfirm>
                </a-menu-item>
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
  
  import {filterMultiDictText} from '@/components/dict/JDictSelectUtil'
  import JDate from '@/components/jeecg/JDate'
  import JDictSelectTag from "@/components/dict/JDictSelectTag"
  import JMultiSelectTag from "@/components/dict/JMultiSelectTag"

  export default {
    name: "CliCliSet",
    mixins:[JeecgListMixin, mixinDevice],
    components: {
      filterMultiDictText,
      JDate,
      JDictSelectTag,
      JMultiSelectTag,
    },
    data () {
      return {
        description: '客户委托人设置',
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
            title:'客户编码',
            align:"center",
            dataIndex: 'customId'
          },
          {
            title:'客户名称',
            align:"center",
            dataIndex: 'customName'
          },
          {
            title:'子结算户',
            align:"center",
            dataIndex: 'subProjectName'
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
            dataIndex: 'updateTime'
          },
        //   {
        //      title:'电话',
        //     align:"center",
        //      dataIndex: ''
        //    },
          // {
          //   title:'修改后',
          //   align:"center",
          //   dataIndex: ''
          // },
          // {
          //   title:'修改人',
          //   align:"center",
          //   dataIndex: 'updateBy'
          // },
            {
            title: '操作',
            dataIndex: 'action',
            align:"center",
            scopedSlots: { customRender: 'action' },
          }
          // {
          //   title:'操作',
          //   align:"center",
          //   // dataIndex: 'updateTime',
          //   customRender:function (text) {
          //     return !text?"":(text.length>10?text.substr(0,10):text)
          //   }
          // },
        ],
        url: {
          add: "/yw_customclientware/ywCustomClientWare/add",
          edit:"/yw_customclientware/ywCustomClientWare/edit",
          delete: "/ywwareinfo/ywWareInfo/delete",
          deleteBatch: "/yw_customclientware/ywCustomClientWare/deleteBatch",
          exportXlsUrl: "/ywfobware/ywFobWare/exportXls",
          importExcelUrl: "ywfobware/ywFobWare/importExcel",
          changeFormal : "/ywfobware/ywFobWare/changeFormal",
          list:'/yw_customclientware/ywCustomClientWare/list',
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