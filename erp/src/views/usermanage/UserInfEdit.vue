<template xmlns:a-col="http://www.w3.org/1999/html">
  <div style="background-color: white">
    <a-spin :spinning="confirmLoading">
      <a-form id="ddd" :form="form" >
        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px;color: red">用户账号</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['username', validatorRules.username]" placeholder="请输入用户账号" ></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px;color: red">用户姓名</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['realname', validatorRules.realname]" placeholder="请输入用户姓名" ></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px;color: red">工号</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['workNo', validatorRules.workNo]" placeholder="请输入工号" ></a-input>
            </a-form-item>
          </a-col>

        </a-row>
        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">

          <a-col :span="8">
            <p style="margin-bottom: 0px">职务</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <j-multi-select-tag type="list_multi" v-decorator="['post', validatorRules.post]" :trigger-change="true" dictCode="sd_position_rank" placeholder="请选择职务"/>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">所属部门</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <j-multi-select-tag type="list_multi" v-decorator="['orgCode', validatorRules.orgCode]" :trigger-change="true" dictCode="user_dep" placeholder="请选择所属部门"/>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">角色分配</p>
            <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol">
              <j-multi-select-tag type="list_multi" v-decorator="['userRole', validatorRules.userRole]" :trigger-change="true" dictCode="user_role" placeholder="请选择角色分配"/>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">

          <a-col :span="8">
            <p style="margin-bottom: 0px">身份</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <j-dict-select-tag type="list"  v-decorator="['userIdentity_dictText', validatorRules.userIdentity_dictText]" :trigger-change="true" dictCode="sd_user_type" placeholder="请选择身份"/>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">负责部门</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <j-multi-select-tag type="list_multi" v-decorator="['departIds', validatorRules.departIds]" :trigger-change="true" dictCode="user_dep" placeholder="请选择负责部门"/>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">性别</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <j-dict-select-tag type="list" v-decorator="['sex', validatorRules.sex]" :trigger-change="true" dictCode="sd_sex" placeholder="请选择性别"/>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">

          <a-col :span="8">
            <p style="margin-bottom: 0px">民族</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <j-dict-select-tag type="list" v-decorator="['nation', validatorRules.nation]" :trigger-change="true" dictCode=sd_nation" placeholder="请选择民族"/>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">生日</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">

              <j-date placeholder="请选择生日" v-decorator="['birthday', validatorRules.birthday]" :trigger-change="true" style="width: 100%"/>
            </a-form-item>


          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">政治面貌</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
<!--              <a-input v-decorator="['political', validatorRules.political]" placeholder="请输入政治面貌"></a-input>-->
              <j-dict-select-tag type="list"  v-decorator="['political', validatorRules.political]" :trigger-change="true" dictCode="sd_political" placeholder="请选择政治面貌"/>

            </a-form-item>
          </a-col>


        </a-row>

        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="16">
            <p style="margin-bottom: 0px">身份证号</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['idCard', validatorRules.idCard]"  placeholder="请输入身份证号"></a-input>
            </a-form-item>
          </a-col>


        </a-row>

        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">

          <a-col :span="8">
            <p style="margin-bottom: 0px">婚姻状况</p>
            <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol">
              <j-dict-select-tag type="list" v-decorator="['isMarry', validatorRules.isMarry]" :trigger-change="true" dictCode="sd_yn" placeholder="请选择婚姻状况"/>
            </a-form-item>


          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">是否当地人</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <j-dict-select-tag type="list" v-decorator="['isNative', validatorRules.isNative]" :trigger-change="true" dictCode="sd_yn" placeholder="请选择是否当地人"/>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">毕业院校</p>
            <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['school', validatorRules.school]" placeholder="请输入毕业院校"></a-input>
            </a-form-item>
          </a-col>


        </a-row>

        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">

          <a-col :span="8">
            <p style="margin-bottom: 0px">专业</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['major', validatorRules.major]" placeholder="请输入专业"></a-input>
            </a-form-item>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">学历</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <j-dict-select-tag type="list" v-decorator="['edu', validatorRules.edu]" :trigger-change="true" dictCode="sd_edu" placeholder="请选择学历"/>
            </a-form-item>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">入职时间</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <j-date placeholder="请选择入职时间" v-decorator="['enterDate', validatorRules.enterDate]" :trigger-change="true" style="width: 100%"/>
            </a-form-item>
          </a-col>


        </a-row>
        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">

          <a-col :span="8">
            <p style="margin-bottom: 0px">参加工作时间</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <j-date placeholder="请选择参加工作时间" v-decorator="['workingDate']" :trigger-change="true" style="width: 100%"/>
            </a-form-item>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">医保</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['medicare', validatorRules.medicare]" placeholder="请输入医保"></a-input>
            </a-form-item>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">工会</p>
            <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['laborUnion']" placeholder="请输入工会"></a-input>
            </a-form-item>
          </a-col>

        </a-row>

        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">

          <a-col :span="8">
            <p style="margin-bottom: 0px">荣誉</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['glory']" placeholder="请输入荣誉"></a-input>
            </a-form-item>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">电子邮件</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['email', validatorRules.email]" placeholder="请输入电子邮件"></a-input>
            </a-form-item>

          </a-col>

        </a-row>
        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">电话</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['phone', validatorRules.phone]" placeholder="请输入电话"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px;size: 10px">手机号</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['telephone', validatorRules.telephone]" placeholder="请输入手机号"></a-input>
            </a-form-item>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">是否同步工作流引擎</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <j-dict-select-tag type="list" v-decorator="['activitiSync']" :trigger-change="true" dictCode="sd_activiti_sync" placeholder="请选择状态"/>
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
                修改
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

  import JDictSelectTag from "@/components/dict/JDictSelectTag"
  import JMultiSelectTag from "@/components/dict/JMultiSelectTag"



  export default {
    name: "UserInfEdit",
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
          username: {
            rules: [
              { required: true, message: '请输入用户账号!'},
            ]
          },

          realname: {
            rules: [
              { required: true, message: '请输入用户姓名!'},
            ]
          },
          workNo: {
            rules: [
              { required: false, message: '请输入工号!'},
            ]
          },
          post: {
            rules: [
              { required: false, message: '请输入职务!'},
            ]
          },
          orgCode: {
            rules: [
              { required: false, message: '请输入所属部门!'},
            ]
          },
          userRole: {
            rules: [
              { required: false, message: '请输入角色分配!'},
            ]
          },
          userIdentity_dictText: {
            rules: [
              { required: false, message: '请输入身份!'},
            ]
          },
          departIds: {
            rules: [
              { required: false, message: '请输入负责部门!'},
            ]
          },
          sex: {
            rules: [
              { required: false, message: '请输入性别!'},
            ]
          },
          nation: {
            rules: [
              { required: false, message: '请输入民族!'},
            ]
          },
          birthday: {
            rules: [
              { required: false, message: '请输入生日!'},
            ]
          },
          idCard: {
            rules: [
              { required: false, message: '请输入身份证号!'},
            ]
          },
          political: {
            rules: [
              { required: false, message: '请输入政治面貌!'},
            ]
          },
          isMarry: {
            rules: [
              { required: false, message: '请输入婚姻状况!'},
            ]
          },
          isNative: {
            rules: [
              { required: false, message: '请输入是否当地人!'},
            ]
          },
          school: {
            rules: [
              { required: false, message: '请输入毕业院校!'},
            ]
          },
          major: {
            rules: [
              { required: false, message: '请输入专业!'},
            ]
          },
          edu: {
            rules: [
              { required: false, message: '请输入学历!'},
            ]
          },
          enterDate: {
            rules: [
              { required: false, message: '请输入入职时间!'},
            ]
          },
          medicare: {
            rules: [
              { required: false, message: '请输入医保!'},
            ]
          },
          email: {
            rules: [
              { required: false, message: '请输入电子邮件!'},
              { pattern: /^([\w]+\.*)([\w]+)@[\w]+\.\w{3}(\.\w{2}|)$/, message: '请输入正确的电子邮件!'},
            ]
          },
          phone: {
            rules: [
              { required: false, message: '请输入电话!'},
            ]
          },
          telephone: {
            rules: [
              { required: false, message: '请输入手机号!'},
              { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号码!'},
            ]
          },
        },
        url: {
          add: "/sys/user/add",
          quary:"/sys/user/queryById",
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
      // getinf(){
      //
      //   var httpurl = this.url.quary
      //   console.log("=======接收到的",this.$route.query)
      //
      //
      //   var formData = "id="+this.$route.query
      //   console.log(formData)
      //   var method = "get"
      //   httpAction(httpurl,formData,method).then((res)=>{
      //     if(res.success){
      //       console.log("=============成功查询edit")
      //       this.edit(res.result)
      //
      //     }else{
      //       this.$message.warning(res.message);
      //     }
      //   }).finally(() => {
      //     this.confirmLoading = false;
      //
      //   })
      //
      // },

      edit () {
        this.form.resetFields();
        this.model = Object.assign({},this.$route.query);
        this.visible = true;
        this.$nextTick(() => {
          this.form.setFieldsValue(pick(this.model,'username','password','userPassedCon','realname','workNo','post','orgCode','userRole','userIdentity_dictText','departIds','sex','nation','birthday','idCard','political','isMarry','isNative','school','major','edu','enterDate','workingDate','medicare','laborUnion','glory','email','phone','telephone','activitiSync'))
        })
      },

      handSubmit(){

        const that = this;
        console.log("=======jjjjjjj")
        // 触发表单验证
        this.form.validateFields((err, values) => {
          if (!err) {
            that.confirmLoading = true;
            let httpurl = '';
            let method = '';

            httpurl+=this.url.edit;
            method = 'put';

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

            })
          }
        })
      },

      popupCallback(row){
        this.form.setFieldsValue(pick(row,'username','password','userPassedCon','realname','workNo','post','orgCode','userRole','userIdentity_dictText','departIds','sex','nation','birthday','idCard','political','isMarry','isNative','school','major','edu','enterDate','workingDate','medicare','laborUnion','glory','email','phone','telephone','activitiSync'))
      },


    }
  }
</script>