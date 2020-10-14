<template>
  <div>

    <div style="background-color: white">
      <br>
      <p align="left" style="font-size:20px">
        <b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;编辑证照信息</b>
      </p>
      <a-divider/>
      <a-spin :spinning="confirmLoading">
        <a-form :form="form"  >
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px">证照类别编码</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input :disabled="true" v-decorator="['licenseTypeId', validatorRules.licenseTypeId]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">证照名称</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input :disabled="true" v-decorator="['licenseName', validatorRules.licenseName]"></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">证照号</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['licenseCode', validatorRules.licenseCode]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>
          </a-row>



          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px">发证日期</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <j-date v-decorator="['startDate', validatorRules.startDate]"  :trigger-change="true" style="width: 100%"/>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">有效期至</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <j-date v-decorator="['endDate', validatorRules.endDate]"  :trigger-change="true" style="width: 100%"/>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">提醒状态</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input :disabled="true" v-decorator="['remindStatus', validatorRules.remindStatus]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>
          </a-row>



          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px">一级分类</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input :disabled="true" v-decorator="['firstClass', validatorRules.firstClass]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>  
            <a-col :span="8">
              <p style="margin-bottom: 0px">控制类别编码</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input :disabled="true" v-decorator="['controlClassCode', validatorRules.controlClassCode]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>  
            <a-col :span="8">
              <p style="margin-bottom: 0px">控制类别名称</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input :disabled="true" v-decorator="['controlClassName', validatorRules.controlClassName]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>     
          </a-row>

          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]" >

            <a-col :span="8">
              <p style="margin-bottom: 0px">发证机构</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['authoOrg', validatorRules.authoOrg]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>
          </a-row>

          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col style="float: right ;overflow: hidden;" class="table-page-search-submitButtons">
                <span>
                  <a-button @click="handReturn" style="margin-right: 8px">
                    取消
                  </a-button>
                  <a-button type="primary" html-type="submit" @click="handleOk" style="margin-right: 16px">
                  保存
                  </a-button>
                </span>
            </a-col>
          </a-row>
      </a-form>
      </a-spin>
    </div>

  </div>
  
</template>

<script>

  import { httpAction } from '@/api/manage'
  import pick from 'lodash.pick'
  import { validateDuplicateValue } from '@/utils/util'
  import JDate from '@/components/jeecg/JDate'
  import JDictSelectTag from "@/components/dict/JDictSelectTag"
  import axios from 'axios'


 
  // var dlall = [] ;

  // var sqbmall = {} ;
  // var jyfwall = {} ;

  // var spdlsenall = {} ;
  // var jxall = {} ;
  // var cfall = {} ;
  // var dlallPid = [] ;
  // var code = null ;
  // var docCode = null ;



  export default {
    name: "YwSupFileCerEdit",
    components: {
      JDate,
      JDictSelectTag,

      validateDuplicateValue,
      VNodes: {
        functional: true,
        render: (h, ctx) => ctx.props.vnodes,
      },
    },
    data () {
      return {
 
        jinkouguojiaInputRequire: false,
        isTrue: false,
        form: this.$form.createForm(this),
        title: "操作",
        width: 800,
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
          licenseTypeId: {
            rules: [
              { required: false, message: '证照类别编码！' },
            ]
          },
          licenseName: {
            rules: [
              { required: false, message: '证照名称！' },
            ]
          },
          licenseCode: {
            rules: [
              { required: false, message: '证照号!' },
            ]
          },
          startDate: {
            rules: [
              { required: false, message: '发证日期!' },
            ]
          },
          endDate: {
            rules: [
              { required: false, message: '有效期至!' },
            ]
          },
          remindStatus: {
            rules: [
              { required: false, message: '提醒状态!' },
            ]
          },
          firstClass: {
            rules: [
              { required: false, message: '一级分类!' },
            ]
          },
          controlClassCode: {
            rules: [
              { required: false, message: '控制类别编码!' },
            ]
          },
          controlClassName: {
            rules: [
              { required: false, message: '控制类别名称!' },
            ]
          },
          authoOrg: {
            rules: [
              { required: false, message: '发证机构!' },
            ]
          },
        },
        url: {
          add: "/ywvendorlicense/ywVendorLicense/add",

          edit: "/ywvendorlicense/ywVendorLicense/edit",
         
        }
      }
    },
   
    mounted(){
       this.edit(this.$route.query);
    },
    methods: {
      add () {
        this.edit({});
      },
      handReturn () {
        this.$router.push({path:"/Vendor/supfile/YwSupFileCer"})
      },
      edit (record) {
        this.form.resetFields();
        this.model = Object.assign({}, record);
        this.visible = true;
        this.$nextTick(() => {
          this.form.setFieldsValue(pick(this.model,'licenseTypeId','licenseName','licenseCode','startDate','endDate','remindStatus','firstClass','controlClassCode','controlClassName','authoOrg'))
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
          // values.drugForm = jxall[values.drugForm]
          // values.applyDepart = sqbmall[values.applyDepart]
          // values.wareFirstClass= dlall[values.wareFirstClass]
          // values.wareSecondClass= spdlsenall[values.wareSecondClass]
          // values.businessType= jyfwall[values.businessType]
          // values.recipelType= cfall[values.recipelType]
          // values.wareId = code ;
          // values.documentNo = docCode ;


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
              that.$router.push({path:"/Vendor/supfile/YwSupFileCer"})
            })
          }else {
            return this.$message.info('还存在必填项未填写')
          }
        })
      },
      handleCancel () {
        this.close()
      },
      popupCallback(row){
        this.form.setFieldsValue(pick(row,'licenseTypeId','licenseName','licenseCode','startDate','endDate','remindStatus','firstClass','controlClassCode','controlClassName','authoOrg'))
      },
      Reset(){
        this.form.resetFields();
      },
      
    }
  }

</script>

<style scoped>

</style>