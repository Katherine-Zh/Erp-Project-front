<template>
  <j-modal
    :title="title"
    :width="width"
    :visible="visible"
    :confirmLoading="confirmLoading"
    switchFullscreen
    @ok="handleOk"
    @cancel="handleCancel"
    cancelText="关闭">
    <a-spin :spinning="confirmLoading">
      <a-form :form="form">

        <a-form-item label="这是回收站" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['userAcc', validatorRules.userAcc]" placeholder="这是回收站"></a-input>
        </a-form-item>


      </a-form>
    </a-spin>
  </j-modal>
</template>

<script>

  import { httpAction } from '@/api/manage'
  import pick from 'lodash.pick'
  import { validateDuplicateValue } from '@/utils/util'
  import JDate from '@/components/jeecg/JDate'


  export default {
    name: "UserRbModal",
    components: {
      JDate,
    },
    data () {
      return {
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
            ]
          },
        },
        url: {
          add: "/userrb/userRb/add",
          edit: "/userrb/userRb/edit",
        }
      }
    },
    created () {
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
            that.confirmLoading = true;
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
              that.confirmLoading = false;
              that.close();
            })
          }

        })
      },
      handleCancel () {
        this.close()
      },
      popupCallback(row){
        this.form.setFieldsValue(pick(row,'userAcc','userPasswd','userPassedCon','userName','userNum','userJob','userDep','userRole','userIde','userChadep','userSex','userNat','userBri','userIdenum','userPoli','userMar','userLocal','userSchool','userPro','userEdu','userJobdata','userStartjob','userMed','userGuild','userHonor','userEmail','userPhone','userPhonenum','userStatus'))
      },


    }
  }
</script>