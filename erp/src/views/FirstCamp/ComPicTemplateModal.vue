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
      <a-form :form="form" id ="printpic">
            <a-form-item  :labelCol="labelCol"  :wrapperCol="wrapperCol"  label="商品编码" >
              <a-input placeholder="请输入商品编码"  v-decorator="['wareId',validatorRules.wareId]" />
            </a-form-item>
            <a-form-item  :labelCol="labelCol"  :wrapperCol="wrapperCol"  label="商品名称">
              <a-input  :disabled="true"  placeholder="请输入商品名称"  v-decorator="['wareName',validatorRules.wareName]"/>
            </a-form-item>

            <a-form-item  :labelCol="labelCol"  :wrapperCol="wrapperCol"  label="证照号">
              <a-input placeholder="请输入证照号"  v-decorator="['certificateId', validatorRules.certificateId ]"/>

            </a-form-item>
            <a-form-item  :labelCol="labelCol"  :wrapperCol="wrapperCol"  label="证照类型">
              <j-dict-select-tag type="list" v-decorator="['certificateType', validatorRules.certificateType]" :trigger-change="true" dictCode="sd_license_type" placeholder="请选择状态"/>
            </a-form-item>

            <a-form-item  :labelCol="labelCol"  :wrapperCol="wrapperCol" label="生效时间">
              <j-date placeholder="请选择生效日期"   v-decorator="['beginDate', validatorRules.beginDate]"  :trigger-change="true" style="width: 100%"/>
            </a-form-item>

            <a-form-item  :labelCol="labelCol"  :wrapperCol="wrapperCol"  label="失效时间">
              <j-date placeholder="请选择失效日期"   v-decorator="['endDate', validatorRules.endDate]"  :trigger-change="true" style="width: 100%"/>
            </a-form-item>
      </a-form>
    </a-spin>
  </j-modal>
</template>

<script>
  import {httpAction} from '@/api/manage'
  import pick from 'lodash.pick'
  import { duplicateCheck } from '@/api/api'
  import JEditor from '@/components/jeecg/JEditor'
  import JDate from '@/components/jeecg/JDate'
  import JDictSelectTag from "@/components/dict/JDictSelectTag"

  export default {
    name: "ComPicTemplateModal",
    components:{
      JEditor,
      JDate,
      JDictSelectTag,
    },
    data() {
      return {
        title: "操作",
        visible: false,
        disable: true,
        model: {},
        labelCol: {
          xs: {span: 24},
          sm: {span: 5},
        },
        wrapperCol: {
          xs: {span: 24},
          sm: {span: 16},
        },
        confirmLoading: false,
        form: this.$form.createForm(this),
        validatorRules: {
        wareId: {rules: [{required: true, message: '请输入商品编码' },{validator: this.validateWareId}]},
        wareName: {rules: [{required: false, message: ''}]},
        certificateId: {rules: [{required: false, message: '请输入证件号' },{validator: this.certificateId}]},
        certificateType: {rules: [{required: false, message: '请输入模板类型!'}]},
        beginDate:{rules: [{required: false, message: '请选择生效日期!'}]},
        endDate:{rules: [{required: false, message: '请选择生效日期!'}]},
        },
        url: {
          add: "/ywwarelicensescan/ywWareLicenseScan/add",
          edit: "/ywwarelicensescan/ywWareLicenseScan/edit",
        },
        useEditor:false,
        templateEditorContent:""
      }
    },
    created() {
    },
    methods: {
      add() {
        this.disable = false;
        this.edit({});
      },
      edit(record) {
        this.form.resetFields();
        this.model = Object.assign({}, record);
        this.useEditor = (record.templateType==2 || record.templateType==4)
        if(this.useEditor){
          this.templateEditorContent=record.templateContent
        }else{
          this.templateEditorContent=''
        }
        this.visible = true;
        this.$nextTick(() => {
          if(this.useEditor){
            this.form.setFieldsValue(pick(this.model, 'wareId', 'wareName', 'certificateId','certificateType','beginDate','endDate'))
          }else{
            this.form.setFieldsValue(pick(this.model, 'wareId', 'wareName', 'certificateId','certificateType','beginDate','endDate'))
          }
        });
      },
      popupCallback(row){
        this.form.setFieldsValue(pick(row,'wareId', 'wareName', 'certificateId','certificateType','beginDate','endDate'))
      },
      close() {
        this.$emit('close');
        this.visible = false;
        this.disable = true;
      },
      handleOk() {
        this.model.templateType = this.templateType;
        const that = this;
        // 触发表单验证
        this.form.validateFields((err, values) => {
          if (!err) {
            that.confirmLoading = true;
            let httpurl = '';
            let method = '';
            if (!this.model.id) {
              httpurl += this.url.add;
              method = 'post';
            } else {
              httpurl += this.url.edit;
              method = 'put';
            }
            let formData = Object.assign(this.model, values);
            //时间格式化

            if(this.useEditor){
              formData.templateContent=this.templateEditorContent
            }
            console.log(formData)
            httpAction(httpurl, formData, method).then((res) => {
              if (res.success) {
                that.$message.success(res.message);
                that.$emit('ok');
              } else {
                that.$message.warning(res.message);
              }
            }).finally(() => {
              that.confirmLoading = false;
              that.close();
            })


          }
        })
      },
      valid(rule, value, callback){
        var params = {
          tableName: "sys_sms_template",
          fieldName: "template_code",
          fieldVal: value,
          dataId: this.model.id
        }
        duplicateCheck(params).then((res)=>{
          if(res.success){
            callback();
          }else{
            callback(res.message);
          }
        })

      },
      handleCancel() {
        this.close()
      },
      handleChangeTemplateType(value){
        //如果是邮件类型那么则改变模板内容是富文本编辑器
        this.useEditor = (value==2 || value==4)
      }

    }
  }
</script>

<style scoped>

</style>