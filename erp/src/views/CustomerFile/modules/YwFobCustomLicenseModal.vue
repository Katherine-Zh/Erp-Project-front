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

        <a-form-item label="创建人" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['createBy']" placeholder="请输入创建人"></a-input>
        </a-form-item>
        <a-form-item label="创建时间" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-date placeholder="请选择创建时间" v-decorator="['createTime']" :trigger-change="true" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="更新人（最终修改人）" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['updateBy']" placeholder="请输入更新人（最终修改人）"></a-input>
        </a-form-item>
        <a-form-item label="更新时间（最终修改时间）" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-date placeholder="请选择更新时间（最终修改时间）" v-decorator="['updateTime']" :trigger-change="true" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="客户编码" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['customNo']" placeholder="请输入客户编码"></a-input>
        </a-form-item>
        <a-form-item label="证照类别编码" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['certificateClassNo']" placeholder="请输入证照类别编码"></a-input>
        </a-form-item>
        <a-form-item label="证照名称" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['certificateName']" placeholder="请输入证照名称"></a-input>
        </a-form-item>
        <a-form-item label="证照号" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['certificateId']" placeholder="请输入证照号"></a-input>
        </a-form-item>
        <a-form-item label="发证日期" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-date placeholder="请选择发证日期" v-decorator="['beginDate']" :trigger-change="true" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="失效日期(有效期至）" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-date placeholder="请选择失效日期(有效期至）" v-decorator="['endDate']" :trigger-change="true" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="发证机构" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['authoOrg']" placeholder="请输入发证机构"></a-input>
        </a-form-item>
        <a-form-item label="认证范围" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['authScope']" placeholder="请输入认证范围"></a-input>
        </a-form-item>
        <a-form-item label="备注" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['notes']" placeholder="请输入备注"></a-input>
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


  export default {
    name: "YwFobCustomLicenseModal",
    components: { 
      JDate,
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
          add: "/yw_fobcustomlicense/ywFobCustomLicense/add",
          edit: "/yw_fobcustomlicense/ywFobCustomLicense/edit",
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
          this.form.setFieldsValue(pick(this.model,'createBy','createTime','updateBy','updateTime','customNo','certificateClassNo','certificateName','certificateId','beginDate','endDate','authoOrg','authScope','notes'))
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
        this.form.setFieldsValue(pick(row,'createBy','createTime','updateBy','updateTime','customNo','certificateClassNo','certificateName','certificateId','beginDate','endDate','authoOrg','authScope','notes'))
      },

      
    }
  }
</script>