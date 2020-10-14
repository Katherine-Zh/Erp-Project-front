<template xmlns:a-col="http://www.w3.org/1999/html">
<div style="background-color: white">
    <a-spin :spinning="confirmLoading">
      <a-form id="ddd" :form="form" >
        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px;color: red">用户账号</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['userAcc', validatorRules.userAcc]" placeholder="请输入用户账号" ></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px;color: red">登录密码</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['userPasswd', validatorRules.userPasswd]" placeholder="请输入登录密码" ></a-input>
            </a-form-item>
          </a-col>
        <a-col span="8">
          <p style="margin-bottom: 0px;color: red">确认密码</p>
          <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
            <a-input v-decorator="['userPassedCon', validatorRules.userPassedCon]" placeholder="请输入确认密码" ></a-input>
          </a-form-item>
        </a-col>
        </a-row>
        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px;color: red">用户姓名</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['username', validatorRules.username]" placeholder="请输入用户姓名" ></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px;color: red">工号</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['userNum', validatorRules.userNum]" placeholder="请输入工号" ></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">职务</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <j-multi-select-tag type="list_multi" v-decorator="['userJob', validatorRules.userJob]" :trigger-change="true" dictCode="user_job" placeholder="请选择职务"/>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">所属部门</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <j-multi-select-tag type="list_multi" v-decorator="['userDep', validatorRules.userDep]" :trigger-change="true" dictCode="user_dep" placeholder="请选择所属部门"/>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">角色分配</p>
            <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol">
              <j-multi-select-tag type="list_multi" v-decorator="['userRole', validatorRules.userRole]" :trigger-change="true" dictCode="user_role" placeholder="请选择角色分配"/>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">身份</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <j-dict-select-tag type="list"  v-decorator="['userIde', validatorRules.userIde]" :trigger-change="true" dictCode="user_ide" placeholder="请选择身份"/>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">负责部门</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <j-multi-select-tag type="list_multi" v-decorator="['userChadep', validatorRules.userChadep]" :trigger-change="true" dictCode="user_dep" placeholder="请选择负责部门"/>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">性别</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <j-dict-select-tag type="list" v-decorator="['userSex', validatorRules.userSex]" :trigger-change="true" dictCode="user_sex" placeholder="请选择性别"/>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">民族</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <j-dict-select-tag type="list" v-decorator="['userNat', validatorRules.userNat]" :trigger-change="true" dictCode="user_nat" placeholder="请选择民族"/>
            </a-form-item>
          </a-col>

        </a-row>

        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">生日</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">

              <j-date placeholder="请选择生日" v-decorator="['userBri', validatorRules.userBri]" :trigger-change="true" style="width: 100%"/>
            </a-form-item>


          </a-col>
          <a-col :span="16">
            <p style="margin-bottom: 0px">身份证号</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['userIdenum', validatorRules.userIdenum]"  placeholder="请输入身份证号"></a-input>
            </a-form-item>
          </a-col>

        </a-row>

        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">政治面貌</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['userPoli', validatorRules.userPoli]" placeholder="请输入政治面貌"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">婚姻状况</p>
            <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol">
              <j-dict-select-tag type="list" v-decorator="['userMar', validatorRules.userMar]" :trigger-change="true" dictCode="user_false_true" placeholder="请选择婚姻状况"/>
            </a-form-item>


          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">是否当地人</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <j-dict-select-tag type="list" v-decorator="['userLocal', validatorRules.userLocal]" :trigger-change="true" dictCode="user_false_true" placeholder="请选择是否当地人"/>
            </a-form-item>
          </a-col>


        </a-row>

        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">毕业院校</p>
            <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['userSchool', validatorRules.userSchool]" placeholder="请输入毕业院校"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">专业</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['userPro', validatorRules.userPro]" placeholder="请输入专业"></a-input>
            </a-form-item>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">学历</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <j-dict-select-tag type="list" v-decorator="['userEdu', validatorRules.userEdu]" :trigger-change="true" dictCode="user_edu" placeholder="请选择学历"/>
            </a-form-item>

          </a-col>


        </a-row>
        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
        <a-col :span="8">
          <p style="margin-bottom: 0px">入职时间</p>
          <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
            <j-date placeholder="请选择入职时间" v-decorator="['userJobdata', validatorRules.userJobdata]" :trigger-change="true" style="width: 100%"/>
          </a-form-item>
        </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">参加工作时间</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <j-date placeholder="请选择参加工作时间" v-decorator="['userStartjob']" :trigger-change="true" style="width: 100%"/>
            </a-form-item>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">医保</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['userMed', validatorRules.userMed]" placeholder="请输入医保"></a-input>
            </a-form-item>

          </a-col>

        </a-row>

        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">工会</p>
            <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['userGuild']" placeholder="请输入工会"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">荣誉</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['userHonor']" placeholder="请输入荣誉"></a-input>
            </a-form-item>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">电子邮件</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['userEmail', validatorRules.userEmail]" placeholder="请输入电子邮件"></a-input>
            </a-form-item>

          </a-col>

        </a-row>
        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">电话</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['userPhone', validatorRules.userPhone]" placeholder="请输入电话"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px;size: 10px">手机号</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['userPhonenum', validatorRules.userPhonenum]" placeholder="请输入手机号"></a-input>
            </a-form-item>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">是否同步工作流引擎</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <j-dict-select-tag type="list" v-decorator="['userStatus']" :trigger-change="true" dictCode="user_status_" placeholder="请选择状态"/>
            </a-form-item>
          </a-col>
          <a-col :span="8">

          </a-col>
        </a-row>

        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col push="19" :span="2">
            <a-form-item>
              <a-button  >
                取消
              </a-button>
            </a-form-item>
          </a-col>
          <a-col push="20" :span="2">
            <a-form-item>
              <a-button type="primary" @click="handSubmit">
                提交
              </a-button>
            </a-form-item>
          </a-col>
        </a-row>





      </a-form>

    </a-spin>
</div>
</template>

<script>

  import { httpAction } from '@/api/manage'
  import pick from 'lodash.pick'
  import { validateDuplicateValue } from '@/utils/util'
  import JDate from '@/components/jeecg/JDate'
  import {addUser,editUser,queryUserRole,queryall } from '@/api/api'
  import JDictSelectTag from "@/components/dict/JDictSelectTag"
  import JMultiSelectTag from "@/components/dict/JMultiSelectTag"



  export default {
    name: "UserInfModal",
    components: {
      JDate,
      JDictSelectTag,
      JMultiSelectTag,
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
          username: {
            rules: [
              { required: true, message: '请输入用户姓名!'},
            ]
          },
          userNum: {
            rules: [
              { required: false, message: '请输入工号!'},
            ]
          },
          userJob: {
            rules: [
              { required: false, message: '请输入职务!'},
            ]
          },
          userDep: {
            rules: [
              { required: false, message: '请输入所属部门!'},
            ]
          },
          userRole: {
            rules: [
              { required: false, message: '请输入角色分配!'},
            ]
          },
          userIde: {
            rules: [
              { required: false, message: '请输入身份!'},
            ]
          },
          userChadep: {
            rules: [
              { required: false, message: '请输入负责部门!'},
            ]
          },
          userSex: {
            rules: [
              { required: false, message: '请输入性别!'},
            ]
          },
          userNat: {
            rules: [
              { required: false, message: '请输入民族!'},
            ]
          },
          userBri: {
            rules: [
              { required: false, message: '请输入生日!'},
            ]
          },
          userIdenum: {
            rules: [
              { required: false, message: '请输入身份证号!'},
            ]
          },
          userPoli: {
            rules: [
              { required: false, message: '请输入政治面貌!'},
            ]
          },
          userMar: {
            rules: [
              { required: false, message: '请输入婚姻状况!'},
            ]
          },
          userLocal: {
            rules: [
              { required: false, message: '请输入是否当地人!'},
            ]
          },
          userSchool: {
            rules: [
              { required: false, message: '请输入毕业院校!'},
            ]
          },
          userPro: {
            rules: [
              { required: false, message: '请输入专业!'},
            ]
          },
          userEdu: {
            rules: [
              { required: false, message: '请输入学历!'},
            ]
          },
          userJobdata: {
            rules: [
              { required: false, message: '请输入入职时间!'},
            ]
          },
          userMed: {
            rules: [
              { required: false, message: '请输入医保!'},
            ]
          },
          userEmail: {
            rules: [
              { required: false, message: '请输入电子邮件!'},
              { pattern: /^([\w]+\.*)([\w]+)@[\w]+\.\w{3}(\.\w{2}|)$/, message: '请输入正确的电子邮件!'},
            ]
          },
          userPhone: {
            rules: [
              { required: false, message: '请输入电话!'},
            ]
          },
          userPhonenum: {
            rules: [
              { required: false, message: '请输入手机号!'},
              { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号码!'},
            ]
          },
        },
        url: {
          add: "/sys/user/add",
          edit: "/sys/user/edit",
        }
      }
    },
    created () {
    },
    mounted () {
      this.edit()
    },
    methods: {
      add () {

      },

      edit () {
        this.form.resetFields();
        this.model = Object.assign({}, this.$route.query);
        this.visible = true;
        this.$nextTick(() => {
          this.form.setFieldsValue(pick(this.model,'userAcc','userPasswd','userPassedCon','username','userNum','userJob','userDep','userRole','userIde','userChadep','userSex','userNat','userBri','userIdenum','userPoli','userMar','userLocal','userSchool','userPro','userEdu','userJobdata','userStartjob','userMed','userGuild','userHonor','userEmail','userPhone','userPhonenum','userStatus'))
        })
      },

      handSubmit(){

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
               method = 'post';
            }
            let formData = Object.assign(this.model, values);
            console.log("表单提交数据",formData)
            httpAction(httpurl,formData,method).then((res)=>{
              if(res.success){
                that.$message.success(res.message);

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
        this.form.setFieldsValue(pick(row,'userAcc','userPasswd','userPassedCon','username','userNum','userJob','userDep','userRole','userIde','userChadep','userSex','userNat','userBri','userIdenum','userPoli','userMar','userLocal','userSchool','userPro','userEdu','userJobdata','userStartjob','userMed','userGuild','userHonor','userEmail','userPhone','userPhonenum','userStatus'))
      },


    }
  }
</script>