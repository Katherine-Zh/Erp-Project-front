<template>
  <a-drawer
    :title="title"
    :width="width"
    placement="right"
    :closable="false"
    @close="close"
    :visible="visible">
  
    <a-spin :spinning="confirmLoading">
      <a-form :form="form">

        <a-form-item label="客户编码" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['customNo']" placeholder="请输入客户编码"></a-input>
        </a-form-item>
        <a-form-item label="类别编码 sys_category" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['classCode']" placeholder="请输入类别编码 sys_category"></a-input>
        </a-form-item>
        <a-form-item label="类别名称  sys_category" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['className']" placeholder="请输入类别名称  sys_category"></a-input>
        </a-form-item>
        <a-form-item label="创建人" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['createBy']" placeholder="请输入创建人"></a-input>
        </a-form-item>
        <a-form-item label="创建时间" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-date placeholder="请选择创建时间" v-decorator="['createTime']" :trigger-change="true" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="更新时间" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-date placeholder="请选择更新时间" v-decorator="['updateTime']" :trigger-change="true" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="更新人" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['updateBy']" placeholder="请输入更新人"></a-input>
        </a-form-item>
        <a-form-item label="备注" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['notes']" placeholder="请输入备注"></a-input>
        </a-form-item>
        <a-form-item label="因为客户只有经营范围，所以这个可以空着，范围类型（用于区分是经营范围还是生产范围）0：经营  1：生产" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input-number v-decorator="['scopeType']" placeholder="请输入因为客户只有经营范围，所以这个可以空着，范围类型（用于区分是经营范围还是生产范围）0：经营  1：生产" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="版本标识位（在首营中未使用）" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input-number v-decorator="['versionFlag']" placeholder="请输入版本标识位（在首营中未使用）" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="预留标识位" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input-number v-decorator="['bakFlag']" placeholder="请输入预留标识位" style="width: 100%"/>
        </a-form-item>
        
      </a-form>
    </a-spin>
    <a-button type="primary" @click="handleOk">确定</a-button>
    <a-button type="primary" @click="handleCancel">取消</a-button>
  </a-drawer>
</template>

<script>

  import { httpAction } from '@/api/manage'
  import pick from 'lodash.pick'
  import { validateDuplicateValue } from '@/utils/util'
  import JDate from '@/components/jeecg/JDate'  
  
  export default {
    name: "YwFobCustomScopeModal",
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
          add: "/yw_fobcustomscope/ywFobCustomScope/add",
          edit: "/yw_fobcustomscope/ywFobCustomScope/edit",
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
          this.form.setFieldsValue(pick(this.model,'customNo','classCode','className','createBy','createTime','updateTime','updateBy','notes','scopeType','versionFlag','bakFlag'))
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
        this.form.setFieldsValue(pick(row,'customNo','classCode','className','createBy','createTime','updateTime','updateBy','notes','scopeType','versionFlag','bakFlag'))
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