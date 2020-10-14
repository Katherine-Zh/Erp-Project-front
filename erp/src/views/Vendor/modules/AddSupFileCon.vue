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
          <a-input :disabled="true" v-decorator="['contactId']" ></a-input>
        </a-form-item>
        <a-form-item label="联系人名" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['contactName']" ></a-input>
        </a-form-item>
        <a-form-item label="联系人职位" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['contactPosition']" ></a-input>
        </a-form-item>
        <a-form-item label="传真" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['fax']" ></a-input>
        </a-form-item>
        <a-form-item label="身份证" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['idCard']" ></a-input>
        </a-form-item>
        <a-form-item label="邮件地址" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['email']" ></a-input>
        </a-form-item>
        <a-form-item label="手机/办公电话" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['telephone']" ></a-input>
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