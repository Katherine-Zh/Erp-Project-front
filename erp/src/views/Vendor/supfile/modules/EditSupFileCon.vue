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

        <a-form-item label="联系人ID" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input :disabled="true" v-decorator="['contactId',validatorRules.contactId]" ></a-input>
        </a-form-item>
        <a-form-item label="联系人名" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['contactName',validatorRules.contactName]" ></a-input>
        </a-form-item>
        <a-form-item label="联系人职位" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['contactPosition',validatorRules.contactPosition]" ></a-input>
        </a-form-item>
        <a-form-item label="传真" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['fax',validatorRules.fax]" ></a-input>
        </a-form-item>
        <a-form-item label="身份证" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['idCard',validatorRules.idCard]"></a-input>
          
        </a-form-item>
        <a-form-item label="邮件地址" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['email',validatorRules.email]" ></a-input>
        </a-form-item>
        <a-form-item label="手机/办公电话" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['telephone',validatorRules.telephone]" ></a-input>
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
  import JDictSelectTag from "@/components/dict/JDictSelectTag"

  export default {
    name: "AddSupFileCon",
    components: {
      JDate,
      JDictSelectTag,
      validateDuplicateValue,
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
          contactId: {
            rules: [
              { required: false, message: '联系人ID' },
            ]
          },
          contactName: {
            rules: [
              { required: false, message: '联系人名' },
            ]
          },
          contactPosition: {
            rules: [
              { required: false, message: '联系人职位!' },
            ]
          },
          fax: {
            rules: [
              { required: false, message: '传真!' },
            ]
          },
          idCard: {
            rules: [
              { required: false, message: '身份证!' },
              { pattern:/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/, message: '请输入正确的身份证号!'},
            ]
          },
          email: {
            rules: [
              { required: false, message: '邮件地址!' },
              { pattern:/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, message: '请输入正确的邮件地址!'},
            ]
          },
          telephone: {
            rules: [
              { required: false, message: '手机/办公电话!' },
              { pattern:/^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/, message: '请输入正确的手机/办公电话!'},
            ]
          },
        },
        url: {
          add: "/ywvendorcontact/ywVendorContact/add",
          edit: "/ywvendorcontact/ywVendorContact/edit",

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
        this.form.setFieldsValue(pick(this.model,'contactId','contactName','contactPosition','fax','idCard','email','telephone'))
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
        this.form.setFieldsValue(pick(row,'contactId','contactName','contactPosition','fax','idCard','email','telephone'))
      }
    }
  }
</script>

<style lang="less" scoped>
/** Button按钮间距 */
  .ant-btn {
    margin-left: 30px;
    margin-bottom: 30px;
    float: right;
  }
</style>