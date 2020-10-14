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

        <a-form-item label="证照类别编码" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input :disabled="true" v-decorator="['certificateId']" ></a-input>
        </a-form-item>
        <a-form-item label="证照名称" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input :disabled="true" v-decorator="['certificateName']" ></a-input>
        </a-form-item>
        <a-form-item label="证照号" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['licenseCode']" ></a-input>
        </a-form-item>
        <a-form-item label="有效期至" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-date v-decorator="['endDate', validatorRules.endDate]"  :trigger-change="true" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="发证机构" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['authoOrg']" ></a-input>
        </a-form-item>
        <a-form-item label="认证范围" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['authScope']" ></a-input>
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
    name: "EditAddPic",
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
          add: "/ywfobvendorlicense/ywFobVendorLicense/add",
          edit: "/ywfobvendorlicense/ywFobVendorLicense/edit",
        }
      }
    },

    methods: {

      edit (record) {
        this.form.resetFields();
        this.model = Object.assign({},record);
        this.visible = true;
        this.$nextTick(() => {
        this.form.setFieldsValue(pick(this.model,'certificateId','certificateName','licenseCode','endDate','authoOrg','authScope'))
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
        this.form.setFieldsValue(pick(row,'licenseTypeId','licenseName','licenseCode','endDate','authoOrg','authScope'))
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