<template>
  <j-modal
    id="print"
    :title="title"
    style="align-content: center"
    :width="width"
    :visible="visible"
    :confirmLoading="confirmLoading"
    switchFullscreen
    @ok="handleOk"
    @cancel="handleCancel"
    cancelText="关闭">
    <a-spin :spinning="confirmLoading">
      <div id='studentPhoTable'>
        <a-table
          :columns="columns"
          
       >

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
            <a-menu slot="overlay">
              <a-menu-item @click="handleEdit(record)">编辑</a-menu-item>
              <a-menu-item  @click="handForget">密码</a-menu-item>

              <a-menu-item>
                <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)">
                  <a>删除</a>
                </a-popconfirm>
                 </a-menu-item>
                <a-menu-item  @click="">冻结</a-menu-item>
                <a-menu-item v-print="'#studentPhoTable'" @click="handPrint(record)">打印</a-menu-item>



            </a-menu>
          </a-dropdown>
        </span>

        </a-table>
      </div>

    </a-spin>
  </j-modal>
</template>

<script>

  import { httpAction } from '@/api/manage'
  import pick from 'lodash.pick'
  import JDate from '@/components/jeecg/JDate'
  import '@/assets/less/TableExpand.less'



  export default {
    name: "UserRbModal",
    components: {
      JDate,
    },
    data () {
      return {
        isTrue:true,
        form: this.$form.createForm(this),
        title:"操作",
        width:800,
        visible: false,
        model: {},
        labelCol: {
          xs: { span: 24 },
          sm: { span: 5 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
        confirmLoading: false,
        validatorRules: {
          userAcc: {
            rules: [
              { required: true, message: '请输入用户账号!'},
            ]
          },
          userPasswd: {
            rules: [
              { required: true, message: '请输入登录密码!'},
            ]
          },
          userPassedCon: {
            rules: [
              { required: true, message: '请输入确认密码!'},
            ]
          },
          userName: {
            rules: [
              { required: true, message: '请输入用户姓名!'},
            ]
          },
          userNum: {
            rules: [
              { required: true, message: '请输入工号!'},
            ]
          },
          userJob: {
            rules: [
              { required: true, message: '请输入职务!'},
            ]
          },
          userDep: {
            rules: [
              { required: true, message: '请输入所属部门!'},
            ]
          },
          userRole: {
            rules: [
              { required: true, message: '请输入角色分配!'},
            ]
          },
          userIde: {
            rules: [
              { required: true, message: '请输入身份!'},
            ]
          },
          userChadep: {
            rules: [
              { required: true, message: '请输入负责部门!'},
            ]
          },
          userSex: {
            rules: [
              { required: true, message: '请输入性别!'},
            ]
          },
          userNat: {
            rules: [
              { required: true, message: '请输入民族!'},
            ]
          },
          userBri: {
            rules: [
              { required: true, message: '请输入生日!'},
            ]
          },
          userIdenum: {
            rules: [
              { required: true, message: '请输入身份证号!'},
            ]
          },
          userPoli: {
            rules: [
              { required: true, message: '请输入政治面貌!'},
            ]
          },
          userMar: {
            rules: [
              { required: true, message: '请输入婚姻状况!'},
            ]
          },
          userLocal: {
            rules: [
              { required: true, message: '请输入是否当地人!'},
            ]
          },
          userSchool: {
            rules: [
              { required: true, message: '请输入毕业院校!'},
            ]
          },
          userPro: {
            rules: [
              { required: true, message: '请输入专业!'},
            ]
          },
          userEdu: {
            rules: [
              { required: true, message: '请输入学历!'},
            ]
          },
          userJobdata: {
            rules: [
              { required: true, message: '请输入入职时间!'},
            ]
          },
          userMed: {
            rules: [
              { required: true, message: '请输入医保!'},
            ]
          },
          userEmail: {
            rules: [
              { required: true, message: '请输入电子邮件!'},
              { pattern: /^([\w]+\.*)([\w]+)@[\w]+\.\w{3}(\.\w{2}|)$/, message: '请输入正确的电子邮件!'},
            ]
          },
          userPhone: {
            rules: [
              { required: true, message: '请输入电话!'},
            ]
          },
          userPhonenum: {
            rules: [
              { required: true, message: '请输入手机号!'},
              { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号码!'},
            ]
          },
        },
        description: '用户信息管理页面',
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
            dataIndex: 'userAcc'
          },
          {
            title:'用户姓名',
            align:"center",
            dataIndex: 'userName'
          },

          {
            title:'性别',
            align:"center",
            dataIndex: 'userSex_dictText'
          },
          {
            title:'生日',
            align:"center",
            dataIndex: 'userBri',
            customRender:function (text) {
              return !text?"":(text)
            }
          },
          {
            title:'电话',
            align:"center",
            dataIndex: 'userPhone'
          },
          {
            title:'所属部门',
            align:"center",
            dataIndex: 'userDep_dictText'
          },
          {
            title:'状态',
            align:"center",
            dataIndex: 'userStatus_dictText'
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

      }
    },
    computed: {
      importExcelUrl: function(){
        return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`;
      },
    },
    methods: {
      add () {
        this.edit({});
      },
      edit (record) {
        this.form.resetFields();
        this.model = Object.assign({}, record);
        this.visible = true;
        this.$nextTick(() => {
          this.form.setFieldsValue(pick(this.model,'userAcc','userPasswd','userPassedCon','userName','userNum','userJob','userDep','userRole','userIde','userChadep','userSex','userNat','userBri','userIdenum','userPoli','userMar','userLocal','userSchool','userPro','userEdu','userJobdata','userStartjob','userMed','userGuild','userHonor','userEmail','userPhone','userPhonenum','userStatus'))
        })
      },

      close () {
        this.$emit('close');
        this.visible = false;
      },
      handleOk () {
        const that = this;
        // 触发表单验证
        this.form.validateFields((err, values) => {
          if (!err) {
            // that.confirmLoading = true;
            let httpurl = '';
            let method = '';
            if(!this.model.id){
              httpurl+=this.url.add;
              method = 'post';
            }else{
              httpurl+=this.url.edit;
              method = 'put';
            }
            let formData = Object.assign(this.model, values);
            console.log("表单提交数据",formData)
            httpAction(httpurl,formData,method).then((res)=>{
              if(res.success){
                that.$message.success(res.message);
                that.$emit('ok');
              }else{
                that.$message.warning(res.message);
              }
            }).finally(() => {
              // that.confirmLoading = false;
              that.close();
            })
          }

        })
      },
      handleCancel () {
        this.close()
      },


    }
  }
</script>