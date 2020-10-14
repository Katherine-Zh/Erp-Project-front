<template>
  <a-card :bordered="false" >
    <!-- 查询区域 -->

    <div class="table-page-search-wrapper">
      <a-form layout="inline" @keyup.enter.native="sarchQuery">
        <a-row :gutter="24">
          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            <a-form-item label="用户账号">
              <a-input placeholder="请输入用户账号" v-model="queryParam.username"></a-input>
            </a-form-item>
          </a-col>
          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            <a-form-item label="用户姓名">
              <a-input placeholder="请输入用户姓名" v-model="queryParam.realname"></a-input>
            </a-form-item>
          </a-col>
          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            <a-form-item label="所属部门">
              <j-multi-select-tag placeholder="请选择所属部门" dictCode="user_dep" v-model="queryParam.userDep"/>
            </a-form-item>
          </a-col>
          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            <a-form-item label="性别">
              <j-dict-select-tag placeholder="请选择性别" v-model="queryParam.sex" dictCode="sd_sex"/>
            </a-form-item>
          </a-col>
          <template v-if="toggleSearchStatus">
            <a-col :xl="6" :lg="7" :md="8" :sm="24">
              <a-form-item label="联系电话">
                <a-input placeholder="请输入" v-model="queryParam.phone"></a-input>
              </a-form-item>
            </a-col>
            <a-col :xl="6" :lg="7" :md="8" :sm="24">
              <a-form-item label="用户状态">
<!--                userStatus-->
                <j-dict-select-tag  dictCode="sd_status" v-model="queryParam.status" placeholder="请选择状态"/>
<!--                type="list" v-decorator="['userStatus']"-->

<!--                <a-input placeholder="请输入" v-model="queryParam.status"></a-input>-->
              </a-form-item>
            </a-col>
          </template>
          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button type="primary" @click="searchReset" icon="reload" style="margin-left: 8px">重置</a-button>
              <a @click="handleToggleSearch" style="margin-left: 8px">
                {{ toggleSearchStatus ? '收起' : '展开' }}
                <a-icon :type="toggleSearchStatus ? 'up' : 'down'"/>
              </a>
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>

    <!-- 查询区域-END -->

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button @click="handleAdd1" type="primary" icon="plus">新增</a-button>

<!--      <a-button type="primary"  @click="">批量操作</a-button>-->
<!--      handleExportXls('用户信息')-->

      <a-button type="primary" icon="download" @click="handleExportXls('用户信息')">导出</a-button>

      <a-upload name="file" :showUploadList="false" :multiple="false" :headers="tokenHeader" :action="importExcelUrl" @change="handleImportExcel">
        <a-button type="primary" icon="import">导入</a-button>
      </a-upload>
      <a-button type="primary"  @click="recycleBinVisible=true">回收站</a-button>
      <a-dropdown v-if="selectedRowKeys.length > 0">
        <a-menu slot="overlay">
          <a-menu-item key="1" @click="batchDel">删除</a-menu-item>
          <a-menu-item key="2" @click="batchDel">冻结</a-menu-item>
          <a-menu-item key="2" @click="batchDel">解冻</a-menu-item>

        </a-menu>
        <a-button style="margin-left: 8px"> 批量操作 <a-icon type="down" /></a-button>
      </a-dropdown>
    </div>

    <!-- table区域-begin -->
    <div >
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

<!--        <template slot="htmlSlot" slot-scope="text">-->
<!--          <div v-html="text"></div>-->
<!--        </template>-->
<!--        <template slot="imgSlot" slot-scope="text">-->
<!--          <span v-if="!text" style="font-size: 12px;font-style: italic;">无图片</span>-->
<!--          <img v-else :src="getImgView(text)" height="25px" alt="" style="max-width:80px;font-size: 12px;font-style: italic;"/>-->
<!--        </template>-->
<!--        <template slot="fileSlot" slot-scope="text">-->
<!--          <span v-if="!text" style="font-size: 12px;font-style: italic;">无文件</span>-->
<!--          <a-button-->
<!--            v-else-->
<!--            :ghost="true"-->
<!--            type="primary"-->
<!--            icon="download"-->
<!--            size="small"-->
<!--            @click="uploadFile(text)">-->
<!--            下载-->
<!--          </a-button>-->
<!--        </template>-->

        <span slot="action" slot-scope="text, record">
          <a @click="handleCheck(record)">查看</a>


          <a-divider type="vertical" />
          <a-dropdown>
            <a class="ant-dropdown-link">更多 <a-icon type="down" /></a>
            <a-menu  slot="overlay" >
              <a-menu-item @click="handleEdit1(record)">编辑</a-menu-item>
              <a-menu-item  @click="handForget" >密码</a-menu-item>

                <a-menu-item  @click="" :disabled="sta=2?false:true">解冻</a-menu-item>

                <a-menu-item @click="handStartStop({ids:record.id,ableStatus:record.ableStatus})">{{record.ableStatus=3?"启用" : "停用"}}</a-menu-item>
                <a-menu-item v-print="'#ddd'" @click="handleCheck(record)">打印</a-menu-item>



            </a-menu>
          </a-dropdown>
        </span>

      </a-table>
    </div>
    </div>
<!--    新增表单-->
<!--    <userInf-modal ref="modalForm" @ok="modalFormOk"></userInf-modal>-->
<!--    回收站表单-->
    <user-recycle-bin-modal :visible.sync="recycleBinVisible" @ok="modalFormOk"/>
<!--    重置密码表单-->
    <user-forget-model ref="modalForm2" @ok="modalFormOk"></user-forget-model>
<!--    查看列表-->
    <user-inf-modal disabled="true" ref="modalForm3" @ok="modalFormOk"></user-inf-modal>


  </a-card>
</template>

<script>

  import '@/assets/less/TableExpand.less'
  import { mixinDevice } from '@/utils/mixin'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  import UserInfModal from './modules/UserInfModal'
  import UserStModel from './modules/UserStModel'
  import UserForgetModel from './modules/UserForgetModel'
  import JDictSelectTag from '@/components/dict/JDictSelectTag.vue'
  import {filterMultiDictText} from '@/components/dict/JDictSelectUtil'
  import JMultiSelectTag from '@/components/dict/JMultiSelectTag'
  import UserRecycleBinModal from '../system/modules/UserRecycleBinModal'


  export default {
    name: "UserInfList",
    mixins:[JeecgListMixin, mixinDevice],
    components: {
      JDictSelectTag,
      JMultiSelectTag,
      UserInfModal,
      UserStModel,
      filterMultiDictText,
      UserForgetModel,
      UserRecycleBinModal
    },
    data () {
      return {
        searchMenuOptions:[],
        description: '用户信息管理页面',
        recycleBinVisible: false,
        // 表头
        columns: [
          {
            title: '#',
            dataIndex: '',
            key:'rowIndex',
            width:60,
            align:"center",
            customRender:function (t,r,index) {
              return parseInt(index)+1;
            }
          },
          {
            title:'用户账号',
            align:"center",
            dataIndex: 'username'
          },
          {
            title:'用户姓名',
            align:"center",
            dataIndex: 'realname'
          },

          {
            title:'性别',
            align:"center",
            dataIndex: 'sex_dictText'
          },
          {
            title:'生日',
            align:"center",
            dataIndex: 'birthday',
            customRender:function (text) {
              return !text?"":(text.length>10?text.substr(0,10):text)
            }
          },
          {
            title:'手机号',
            align:"center",
            dataIndex: 'phone'
          },
          {
            title:'所属部门',
            align:"center",
            dataIndex: 'orgCode'
          },
          {
            title:'冻结状态',
            align:"center",
            dataIndex: 'status_dictText'
          },
          {
            title:'启用状态',
            align:"center",
            dataIndex: 'ableStatus_dictText'
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
          list: "/sys/user/list",

          exportXlsUrl: "/sys/user/exportXls",
          importExcelUrl: "sys/user/importExcel",
          syncUser: "/process/extActProcess/doSyncUser",
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
    mounted () {

    },
    methods: {
      initDictConfig(){
      },

    }
  }
</script>
<style scoped>
  @import '~@assets/less/common.less';
</style>

