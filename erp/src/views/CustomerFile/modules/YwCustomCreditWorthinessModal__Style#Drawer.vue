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
          <a-input v-decorator="['customId', validatorRules.customId]" placeholder="请输入客户编码"></a-input>
        </a-form-item>
        <a-form-item label="客户名称" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['customName']" placeholder="请输入客户名称"></a-input>
        </a-form-item>
        <a-form-item label="子结算户编码" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-dict-select-tag type="list" v-decorator="['subProjectCode']" :trigger-change="true" dictCode="" placeholder="请选择子结算户编码"/>
        </a-form-item>
        <a-form-item label="子结算户名称" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['subProjectName']" placeholder="请输入子结算户名称"></a-input>
        </a-form-item>
        <a-form-item label="资信类别" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-dict-select-tag type="list" v-decorator="['creditType']" :trigger-change="true" dictCode="sd_credit_type" placeholder="请选择资信类别"/>
        </a-form-item>
        <a-form-item label="资信额度" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input-number v-decorator="['creditLimit']" placeholder="请输入资信额度" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="资信账期" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['creditPeriod']" placeholder="请输入资信账期"></a-input>
        </a-form-item>
        <a-form-item label="临时资信额度" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input-number v-decorator="['tempCreditLimit']" placeholder="请输入临时资信额度" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="临时资信账期" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['tempCreditPeriod']" placeholder="请输入临时资信账期"></a-input>
        </a-form-item>
        <a-form-item label="资信控制方式" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-dict-select-tag type="list" v-decorator="['creditControlType']" :trigger-change="true" dictCode="sd_credit_control_type" placeholder="请选择资信控制方式"/>
        </a-form-item>
        <a-form-item label="账期控制方式" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-dict-select-tag type="list" v-decorator="['periodControlType']" :trigger-change="true" dictCode="sd_credit_period_control_type" placeholder="请选择账期控制方式"/>
        </a-form-item>
        <a-form-item label="是否控制信用" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-dict-select-tag type="list" v-decorator="['isControlTruth']" :trigger-change="true" dictCode="" placeholder="请选择是否控制信用"/>
        </a-form-item>
        <a-form-item label="备注" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['notes']" placeholder="请输入备注"></a-input>
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
  import JDictSelectTag from "@/components/dict/JDictSelectTag"
  
  export default {
    name: "YwCustomCreditWorthinessModal",
    components: { 
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
          customId: {
            rules: [
              { validator: (rule, value, callback) => validateDuplicateValue('yw_custom_credit_worthiness', 'custom_id', value, this.model.id, callback)},
            ]
          },
        },
        url: {
          add: "/yw_customcreditworthiness/ywCustomCreditWorthiness/add",
          edit: "/yw_customcreditworthiness/ywCustomCreditWorthiness/edit",
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
          this.form.setFieldsValue(pick(this.model,'customId','customName','subProjectCode','subProjectName','creditType','creditLimit','creditPeriod','tempCreditLimit','tempCreditPeriod','creditControlType','periodControlType','isControlTruth','notes'))
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
        this.form.setFieldsValue(pick(row,'customId','customName','subProjectCode','subProjectName','creditType','creditLimit','creditPeriod','tempCreditLimit','tempCreditPeriod','creditControlType','periodControlType','isControlTruth','notes'))
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