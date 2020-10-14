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
        <a-form-item  :labelCol="labelCol"  :wrapperCol="wrapperCol"  label="业务机构编码" >
          <a-input :disabled="true" placeholder="请输入业务机构编码"  v-decorator="[' businessOrgId']" />
        </a-form-item>

        <a-form-item  :labelCol="labelCol"  :wrapperCol="wrapperCol"  label="业务机构名称">
          <j-dict-select-tag type="list" v-decorator="['certificateType']" :trigger-change="true" dictCode="sd_license_type" placeholder="请选择状态"/>
        </a-form-item>

        <a-form-item  :labelCol="labelCol"  :wrapperCol="wrapperCol"  label="零货货位编码">
          <a-input :disabled="true" placeholder="请输入证照号"  v-decorator="['scatterStallId' ]"/>

        </a-form-item>
        <a-form-item  :labelCol="labelCol"  :wrapperCol="wrapperCol"  label="零货货位名称">
          <j-dict-select-tag type="list" v-decorator="['certificateType']" :trigger-change="true" dictCode="sd_license_type" placeholder="请选择状态"/>
        </a-form-item>

        <a-form-item  :labelCol="labelCol"  :wrapperCol="wrapperCol" label="整货货位编码">
          <a-input :disabled="true" placeholder="请输入证照号"  v-decorator="['wholeStallId']"/>
        </a-form-item>

        <a-form-item  :labelCol="labelCol"  :wrapperCol="wrapperCol"  label="整货货位名称">
          <j-dict-select-tag type="list" v-decorator="['certificateType']" :trigger-change="true" dictCode="sd_license_type" placeholder="请选择状态"/>
        </a-form-item>

        <a-form-item  :labelCol="labelCol"  :wrapperCol="wrapperCol"  label="说明">
          <a-input :disabled="true" placeholder="请输入证照号"  v-decorator="['notes' ]"/>
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
    name: 'EditRecLoc',
    components:{
      JEditor,
      JDate,
      JDictSelectTag,
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
          add: "/ywwarestall/ywWareStall/add",
          edit: "/ywwarestall/ywWareStall/edit",
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
          this.form.setFieldsValue(pick(this.model,'indateLower','wareIndateRemind','wareIndateControl'))
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
        this.form.setFieldsValue(pick(row,'indateLower','wareIndateRemind','wareIndateControl'))
      },
    }
  }
</script>

<style scoped>

</style>