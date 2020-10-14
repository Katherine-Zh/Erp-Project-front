<template>
  <div>

    <div style="background-color: white">
      <br>
      <p align="left" style="font-size:20px">
        <b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;编辑子结算清单</b>
      </p>
      <a-divider/>
      <a-spin :spinning="confirmLoading">
        <a-form :form="form"  >
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px">供应商编码</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input :disabled="true" v-decorator="['vendorId', validatorRules.vendorId]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">供应商名称</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input :disabled="true" v-decorator="['vendorName', validatorRules.vendorName]"></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">子项目编码</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input :disabled="true" v-decorator="['subProjectCode', validatorRules.subProjectCode]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>
          </a-row>



          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px">子项目名称</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['subProjectName', validatorRules.subProjectName]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">是否默认</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <j-dict-select-tag type="list"  v-decorator="['isDefault', validatorRules.isDefault]" :trigger-change="true" dictCode="sd_yn" placeholder="请选择"/>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">是否有效</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <j-dict-select-tag type="list"  v-decorator="['isValid', validatorRules.isValid]" :trigger-change="true" dictCode="sd_yn" placeholder="请选择"/>
              </a-form-item>
            </a-col>
          </a-row>



          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px">付款方式</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                 <j-dict-select-tag type="list"  v-decorator="['payType', validatorRules.payType]" :trigger-change="true" dictCode="sd_pay_type" placeholder="请选择"/>
              </a-form-item>
            </a-col>  
            <a-col :span="8">
              <p style="margin-bottom: 0px">付款账期</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['payPeriod', validatorRules.payPeriod]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>  
            <a-col :span="8">
              <p style="margin-bottom: 0px">发票类型</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                 <j-dict-select-tag type="list"  v-decorator="['receiptType', validatorRules.receiptType]" :trigger-change="true" dictCode="sd_receipt_type" placeholder="请选择"/>
              </a-form-item>
            </a-col>     
          </a-row>

          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]" >

            <a-col :span="8">
              <p style="margin-bottom: 0px">账期起算类型</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                 <j-dict-select-tag type="list"  v-decorator="['accountSettleType', validatorRules.accountSettleType]" :trigger-change="true" dictCode="sd_pay_period_type" placeholder="请选择"/>
              </a-form-item>
            </a-col>
          
            <a-col :span="16">
                <p style="margin-bottom: 0px">备注</p>
                <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                  <a-input v-decorator="['notes', validatorRules.notes]"></a-input>
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

  export default {
    name: "YwSupFileListAdd",
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
          vendorId: {
            rules: [
              { required: false, message: '供应商编码！' },
            ]
          },
          vendorName: {
            rules: [
              { required: false, message: '供应商名称！' },
            ]
          },
          subProjectCode: {
            rules: [
              { required: false, message: '子项目编码!' },
            ]
          },
          subProjectName: {
            rules: [
              { required: false, message: '子项目名称!' },
            ]
          },
          isDefault: {
            rules: [
              { required: false, message: '是否默认!' },
            ]
          },
          isValid: {
            rules: [
              { required: false, message: '是否有效!' },
            ]
          },
          payType: {
            rules: [
              { required: false, message: '付款方式!' },
            ]
          },
          payPeriod: {
            rules: [
              { required: false, message: '付款账期!' },
            ]
          },
          receiptType: {
            rules: [
              { required: false, message: '发票类型!' },
            ]
          },
          accountSettleType: {
            rules: [
              { required: false, message: '账期起算类型!' },
            ]
          },
          notes: {
            rules: [
              { required: false, message: '备注!' },
            ]
          },

        },
        url: {
          add: "/ywvendorsettlelist/ywVendorSettleList/add",
          edit: "/ywvendorsettlelist/ywVendorSettleList/edit",
         
        }
      }
    },
    created () {
    },
    mounted(){
      this.edit(this.$route.query);
    },
    methods: {
      add () {
        this.edit({});
      },
      handReturn () {
        this.$router.push({path:"/Vendor/YwSupFileList"})
      },
      edit (record) {
        this.form.resetFields();
        this.model = Object.assign({}, this.$route.query);
        this.visible = true;
        this.$nextTick(() => {
          this.form.setFieldsValue(pick(this.model,'vendorId','vendorName','subProjectCode','subProjectName','isDefault','isValid','payType','payPeriod','receiptType','accountSettleType','notes'))
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
              that.$router.push({path:"/Vendor/YwSupFileList"})
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
        this.form.setFieldsValue(pick(row,'vendorId','vendorName','subProjectCode','subProjectName','isDefault','isValid','payType','payPeriod','receiptType','accountSettleType','notes'))
      },
      Reset(){
        this.form.resetFields();
      },
      
    }
  }

</script>

<style scoped>

</style>