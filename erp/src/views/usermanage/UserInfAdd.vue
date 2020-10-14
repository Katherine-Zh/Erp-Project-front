<template xmlns:a-col="http://www.w3.org/1999/html">
  <div style="background-color: white">
    <br>
    <p align="center" style="font-size:20px">
      <b>新增用户信息</b>
    </p>
    <br>
    <a-spin :spinning="confirmLoading">
      <a-form id="ddd" :form="form"  >
        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px;color: red">用户账号</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input  v-decorator="['username', validatorRules.username]" placeholder="请输入用户账号" ></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px;color: red">登录密码</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input-password v-decorator="['password', validatorRules.password]" placeholder="请输入登录密码" ></a-input-password>
            </a-form-item>
          </a-col>
          <a-col span="8">
            <p style="margin-bottom: 0px;color: red">确认密码</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input-password  v-decorator="['userPassedCon', validatorRules.userPassedCon]" placeholder="请输入确认密码" ></a-input-password>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
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
          <a-col :span="8">
            <p style="margin-bottom: 0px">职务</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <j-multi-select-tag type="list_multi"  v-decorator="['post', validatorRules.post]" :trigger-change="true" dictCode="sd_position_rank" placeholder="请选择职务"/>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">所属部门</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">

              <a-tree-select

                v-decorator="['orgCode', validatorRules.orgCode]"

                style="width: 100%"
                :tree-data="treeData"
                tree-checkable
                :show-checked-strategy="SHOW_PARENT"

                placeholder="请选择所属部门"
              >
               <span v-if="key === '0-0-1'" slot="title" slot-scope="{ key, value }" style="color: #08c">
                 {{ value }}
               </span>
              </a-tree-select>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">角色分配</p>
            <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol">
              <!--              <j-multi-select-tag type="list_multi"  v-decorator="['userRole', validatorRules.userRole]" :trigger-change="true" dictCode="user_role" placeholder="请选择角色分配"/>-->

              <a-select mode="multiple" v-decorator="['userRole', validatorRules.userRole]" >
                <div slot="dropdownRender" slot-scope="menu">
                  <v-nodes :vnodes="menu"
                  />
                  <a-divider style="margin: 4px 0;" />
                </div>
                <a-select-option v-for="item  in items" :key="item.key" :value="item.value">
                  {{ item.key }}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">身份</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <j-dict-select-tag type="list"   v-decorator="['userIdentity', validatorRules.userIdentity]" :trigger-change="true" dictCode="sd_user_type" placeholder="请选择身份"/>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">负责部门</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <!--              <j-multi-select-tag type="list_multi"  v-decorator="['departIds', validatorRules.departIds]" :trigger-change="true" dictCode="user_dep" placeholder="请选择负责部门"/>-->
              <a-tree-select

                v-decorator="['departIds', validatorRules.departIds]"

                style="width: 100%"
                :tree-data="treeData"
                tree-checkable
                :show-checked-strategy="SHOW_PARENT"

                placeholder="请选择所属部门"
              >
               <span v-if="key === '0-0-1'" slot="title" slot-scope="{ key, value }" style="color: #08c">
                 {{ value }}
               </span>
              </a-tree-select>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">性别</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <j-dict-select-tag type="list"  v-decorator="['sex', validatorRules.sex]" :trigger-change="true" dictCode="sd_sex" placeholder="请选择性别"/>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">民族</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <j-dict-select-tag type="list"  v-decorator="['nation', validatorRules.nation]" :trigger-change="true" dictCode="sd_nation" placeholder="请选择民族"/>
            </a-form-item>
          </a-col>

        </a-row>

        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">生日</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">

              <j-date placeholder="请选择生日"  v-decorator="['birthday', validatorRules.birthday]" :trigger-change="true" style="width: 100%"/>
            </a-form-item>


          </a-col>
          <a-col :span="16">
            <p style="margin-bottom: 0px">身份证号</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['idCard', validatorRules.idCard]"   placeholder="请输入身份证号"></a-input>
            </a-form-item>
          </a-col>

        </a-row>

        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">政治面貌</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <!--              <a-input v-decorator="['political', validatorRules.political]"  placeholder="请输入政治面貌"></a-input>-->
              <j-dict-select-tag type="list"  v-decorator="['political', validatorRules.political]" :trigger-change="true" dictCode="sd_political" placeholder="请选择政治面貌"/>

            </a-form-item>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">婚姻状况</p>
            <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol">
              <j-dict-select-tag type="list"  v-decorator="['isMarry', validatorRules.isMarry]" :trigger-change="true" dictCode="sd_yn" placeholder="请选择婚姻状况"/>
            </a-form-item>


          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">是否当地人</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <j-dict-select-tag type="list"  v-decorator="['isNative', validatorRules.isNative]" :trigger-change="true" dictCode="sd_yn" placeholder="请选择是否当地人"/>
            </a-form-item>
          </a-col>


        </a-row>

        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">毕业院校</p>
            <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['school', validatorRules.school]"  placeholder="请输入毕业院校"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">专业</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['major', validatorRules.major]"  placeholder="请输入专业"></a-input>
            </a-form-item>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">学历</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <j-dict-select-tag type="list" v-decorator="['edu', validatorRules.edu]"  :trigger-change="true" dictCode="sd_edu" placeholder="请选择学历"/>
            </a-form-item>

          </a-col>


        </a-row>
        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">入职时间</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <j-date placeholder="请选择入职时间" v-decorator="['enterDate', validatorRules.enterDate]"  :trigger-change="true" style="width: 100%"/>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">参加工作时间</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <j-date placeholder="请选择参加工作时间" v-decorator="['workingDate']"  :trigger-change="true" style="width: 100%"/>
            </a-form-item>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">医保</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['medicare', validatorRules.medicare]"  placeholder="请输入医保"></a-input>
            </a-form-item>

          </a-col>

        </a-row>

        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">工会</p>
            <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['laborUnion']"  placeholder="请输入工会"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">荣誉</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['glory']"  placeholder="请输入荣誉"></a-input>
            </a-form-item>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">电子邮件</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['email', validatorRules.email]"  placeholder="请输入电子邮件"></a-input>
            </a-form-item>

          </a-col>

        </a-row>
        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">电话</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['phone', validatorRules.phone]"  placeholder="请输入电话"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px;size: 10px">手机号</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['telephone', validatorRules.telephone]"  placeholder="请输入手机号"></a-input>
            </a-form-item>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">是否同步工作流引擎</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <j-dict-select-tag type="list" v-decorator="['activitiSync']" :disabled="isTrue" :trigger-change="true" dictCode="sd_activiti_sync" placeholder="请选择状态"/>
            </a-form-item>
          </a-col>
          <a-col :span="8">

          </a-col>
        </a-row>
        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">

          <a-col push="20">
            <span>
            <a-button style="margin-right: 10px" v-show="isTrue"  >修改</a-button>


            <a-button style="" v-show="isTrue" v-print="'#ddd'" >打印</a-button>
              </span>
          </a-col>

        </a-row>
        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col push="19" :span="2">
            <a-form-item>
              <a-button @click="handReturn" >
                取消
              </a-button>
            </a-form-item>
          </a-col>
          <a-col push="20" :span="2">
            <a-form-item>
              <a-button type="primary" html-type="submit" @click="handSubmit" >
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
  import {addUser,editUser,queryUserRole,queryall } from '@/api/api'
  import JDate from '@/components/jeecg/JDate'
  import JDictSelectTag from "@/components/dict/JDictSelectTag"
  import JMultiSelectTag from "@/components/dict/JMultiSelectTag"
  import { TreeSelect } from 'ant-design-vue';
  const SHOW_PARENT = TreeSelect.SHOW_PARENT;
  var treeData  =  []



  var roleall = {} ;
  export default {
    name: "UserInfModal",
    components: {
      JDate,
      JDictSelectTag,
      JMultiSelectTag,
      VNodes: {
        functional: true,
        render: (h, ctx) => ctx.props.vnodes,
      },
    },
    data () {
      return {
        SHOW_PARENT,
        items:[],
        treeData:[],
        selectedKeys:[],
        itemsdep:[],
        confirmDirty: false,
        itemsrole:[],
        isTrue:false,
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
          password: {
            rules: [
              { required: true, message: '请输入密码', },
              {min:8,message: "长度过短"},
              { validator: this.validateToNextPassword, },
            ],
          },
          userPassedCon: {
            rules: [
              {
                required: true,
                message: '请输入确认密码',

              },

              {
                validator: this.compareToFirstPassword,
              },
            ],
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
          userIdentity: {
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
              { pattern:/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/, message: '请输入正确的身份证号!'},
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
              { pattern: /^[0][1-9]{2,3}-[0-9]{5,10}$/, message: '请输入正确的座机号码!'},
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
          edit: "/sys/user/edit",
          quarydep:"/sys/role/queryall",
          quaryrole:"/sys/role/queryall",
          quarydepart:"/sys/sysDepart/queryTreeList"

        }
      }
    },
    created () {

    },
    mounted () {

      console.log("----------------------------------角色查询")

      httpAction("/sys/role/queryall","","get").then((res)=>{
        if(res.success){

          let len = res.result.length
          console.log(res)

          for (var i = 0; i < len; i++) {
            // result1[i] = res.result[i]['roleName']
            // roleall[res.result[i]['roleName']] = res.result[i]['roleCode']
            this.items.push({"key":res.result[i]['roleName'],"value":res.result[i]['roleCode']})

          }

        }else{
          this.$message.warning(res.message);
        }
      }).finally(() => {


      })
      console.log("----------------------------------部门查询")
      httpAction(this.url.quarydepart,"","get").then((res)=>{
        if(res.success){
          console.log("dep=================",res.result)
          this.treeData = res.result ;
        }

        else{
          that.$message.warning(res.message);
        }
      }).finally(() => {


      })

    },



    methods: {
      validateToNextPassword(rule, value, callback) {
        const form = this.form;
        if (value && this.confirmDirty) {
          form.validateFields(['userPassedCon'], { force: true });
        }
        callback();
      },

      compareToFirstPassword(rule, value, callback) {
        const form = this.form;
        if (value && value !== form.getFieldValue('password')) {
          callback('密码不一致');
        } else {
          callback();
        }
      },


      handReturn () {
        this.$router.push({path:"/usermanage/UserInfList"})
      },
      edit (record) {
        this.form.resetFields();
        this.model = Object.assign({}, record);
        this.visible = true;
        this.$nextTick(() => {
          this.form.setFieldsValue(pick(this.model,'username','password','userPassedCon','realname','workNo','post','orgCode','userRole','userIdentity','departIds','sex','nation','birthday','idCard','political','isMarry','isNative','school','major','edu','enterDate','workingDate','medicare','laborUnion','glory','email','phone','telephone','activitiSync'))
        })
      },
      handleChange(value) {
        //   console.log(`selected ${value}`);
        //   this.validatorRules.orgCode=
      },

      handSubmit(){
        const that = this;
        // 触发表单验证
        this.form.validateFields((err, values) => {
          if (!err) {
            that.confirmLoading = true;
            let httpurl = this.url.add;
            let method = 'post';
            console.log("=========================这是角色分配");
            console.log(values.userRole);




            // if(!this.model.id){
            //   httpurl+=this.url.add;
            //   method = 'post';
            // }else{
            //   httpurl+=this.url.edit;
            //   method = 'post';
            // }
            let formData = Object.assign(this.model, values);
            console.log("表单提交数据",formData)



            httpAction(httpurl,formData,method).then((res)=>{
              if(res.success){
                that.$message.success(res.message);

                that.confirmLoading = false;

              }else{
                that.$message.warning(res.message);
                that.confirmLoading = false;
              }
            }).finally(() => {
              that.confirmLoading = false;
            })
          }



        })
      },
      handleCancel () {
        this.close()
      },
      popupCallback(row){
        this.form.setFieldsValue(pick(row,'username','password','userPassedCon','realname','workNo','post','orgCode','userRole','userIdentity','departIds','sex','nation','birthday','idCard','political','isMarry','isNative','school','major','edu','enterDate','workingDate','medicare','laborUnion','glory','email','phone','telephone','activitiSync'))
      },


    }
  }
</script>