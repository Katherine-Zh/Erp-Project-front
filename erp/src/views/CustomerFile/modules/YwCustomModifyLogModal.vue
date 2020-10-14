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

        <a-form-item label="客户编码" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['customId']" placeholder="请输入客户编码"></a-input>
        </a-form-item>
        <a-form-item label="客户名称" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['customName']" placeholder="请输入客户名称"></a-input>
        </a-form-item>
        <a-form-item label="创建时间" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-date placeholder="请选择创建时间" v-decorator="['createTime']" :trigger-change="true" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="创建人" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['createBy']" placeholder="请输入创建人"></a-input>
        </a-form-item>
        <a-form-item label="修改数据库字段" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['modifyColumn']" placeholder="请输入修改数据库字段"></a-input>
        </a-form-item>
        <a-form-item label="修改前内容" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['oldValue']" placeholder="请输入修改前内容"></a-input>
        </a-form-item>
        <a-form-item label="修改后内容" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['newValue']" placeholder="请输入修改后内容"></a-input>
        </a-form-item>
        <a-form-item label="修改时间" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-date placeholder="请选择修改时间" v-decorator="['updateTime']" :trigger-change="true" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="修改人" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['updateBy']" placeholder="请输入修改人"></a-input>
        </a-form-item>
        <a-form-item label="修改字段中文" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['modifyColumnChinese']" placeholder="请输入修改字段中文"></a-input>
        </a-form-item>
        <a-form-item label="修改前内容中文" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['oldValueChinese']" placeholder="请输入修改前内容中文"></a-input>
        </a-form-item>
        <a-form-item label="修改后内容中文" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['newValueChinese']" placeholder="请输入修改后内容中文"></a-input>
        </a-form-item>
        <a-form-item label="记录通过何种方式进行修改，1：直接修改。 2：申请修改" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input-number v-decorator="['changeTypeFlag']" placeholder="请输入记录通过何种方式进行修改，1：直接修改。 2：申请修改" style="width: 100%"/>
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
    name: "YwCustomModifyLogModal",
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
          add: "/yw_custommodifylog/ywCustomModifyLog/add",
          edit: "/yw_custommodifylog/ywCustomModifyLog/edit",
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
          this.form.setFieldsValue(pick(this.model,'customId','customName','createTime','createBy','modifyColumn','oldValue','newValue','updateTime','updateBy','modifyColumnChinese','oldValueChinese','newValueChinese','changeTypeFlag'))
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
        this.form.setFieldsValue(pick(row,'customId','customName','createTime','createBy','modifyColumn','oldValue','newValue','updateTime','updateBy','modifyColumnChinese','oldValueChinese','newValueChinese','changeTypeFlag'))
      },

      
    }
  }
</script>