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

        <a-form-item label="单据名称" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-dict-select-tag type="list" v-decorator="['documentName']" :trigger-change="true" dictCode="" placeholder="请选择单据名称"/>
        </a-form-item>
        <a-form-item label="客户编码" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['customId']" placeholder="请输入客户编码"></a-input>
        </a-form-item>
        <a-form-item label="客户名称" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-dict-select-tag type="list" v-decorator="['customName']" :trigger-change="true" dictCode="" placeholder="请选择客户名称"/>
        </a-form-item>
        <a-form-item label="子结算户编码" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['subProjectCode']" placeholder="请输入子结算户编码"></a-input>
        </a-form-item>
        <a-form-item label="子结算户名称" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-dict-select-tag type="list" v-decorator="['subProjectName']" :trigger-change="true" dictCode="" placeholder="请选择子结算户名称"/>
        </a-form-item>
        <a-form-item label="仓库" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['storehouse']" placeholder="请输入仓库"></a-input>
        </a-form-item>
        <a-form-item label="打印方案号" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['printTypeId']" placeholder="请输入打印方案号"></a-input>
        </a-form-item>
        <a-form-item label="打印方案名称" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['printTypeName']" placeholder="请输入打印方案名称"></a-input>
        </a-form-item>
        <a-form-item label="打印机名称" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-dict-select-tag type="list" v-decorator="['printerName']" :trigger-change="true" dictCode="" placeholder="请选择打印机名称"/>
        </a-form-item>
        <a-form-item label="打印次数" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input-number v-decorator="['printNums']" placeholder="请输入打印次数" style="width: 100%"/>
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
    name: "YwCustomPrintTypeModal",
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
        },
        url: {
          add: "/yw_customprinttype/ywCustomPrintType/add",
          edit: "/yw_customprinttype/ywCustomPrintType/edit",
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
          this.form.setFieldsValue(pick(this.model,'documentName','customId','customName','saleType','subProjectCode','subProjectName','storehouse','printTypeId','printTypeName','printerName','printNums','updateTime','updateBy'))
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
        this.form.setFieldsValue(pick(row,'documentName','customId','customName','saleType','subProjectCode','subProjectName','storehouse','printTypeId','printTypeName','printerName','printNums','updateTime','updateBy'))
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