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
        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">

        <a-col :span="8">
          <p style="margin-bottom: 0px ">单据名称</p>
          <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-dict-select-tag type="list" v-decorator="['documentName']" :trigger-change="true" dictCode="" placeholder="请选择单据名称"/>
        </a-form-item></a-col>
        <a-col :span="8">
          <p style="margin-bottom: 0px ">客户编码</p>

          <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['customId']" placeholder="请输入客户编码"></a-input>
        </a-form-item></a-col>
        <a-col :span="8">
          <p style="margin-bottom: 0px ">客户名称</p>
          <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
             <j-dict-select-tag type="list" v-decorator="['customName']" :trigger-change="true" dictCode="" placeholder="请选择客户名称"/>
          </a-form-item>
        </a-col>
        </a-row>
        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">

        <a-col :span="8">
          <p style="margin-bottom: 0px ">子结算户编码</p>

          <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['subProjectCode']" placeholder="请输入子结算户编码"></a-input>
        </a-form-item>
        </a-col>
        <a-col :span="8">
          <p style="margin-bottom: 0px ">子结算户名称</p>
          <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-dict-select-tag type="list" v-decorator="['subProjectName']" :trigger-change="true" dictCode="" placeholder="请选择子结算户名称"/>
        </a-form-item></a-col>
        <a-col :span="8">
          <p style="margin-bottom: 0px ">仓库</p>
          <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['storehouse']" placeholder="请输入仓库"></a-input>
        </a-form-item></a-col>
        </a-row>
        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">

        <a-col :span="8">
          <p style="margin-bottom: 0px ">打印方案号</p>
          <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['printTypeId']" placeholder="请输入打印方案号"></a-input>
        </a-form-item></a-col>



        <a-col :span="8">
          <p style="margin-bottom: 0px ">打印方案名称</p>
          <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['printTypeName']" placeholder="请输入打印方案名称"></a-input>
        </a-form-item></a-col>
        <a-col :span="8">
          <p style="margin-bottom: 0px ">打印机名称</p>
          <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-dict-select-tag type="list" v-decorator="['printerName']" :trigger-change="true" dictCode="" placeholder="请选择打印机名称"/>
        </a-form-item></a-col>
        </a-row>
        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">


        <a-col :span="8">
          <p style="margin-bottom: 0px ">打印机次数</p>
          <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol">
            <a-input-number v-decorator="['printNums']" placeholder="请输入打印次数" style="width: 100%"/>
          </a-form-item>
        </a-col>
        </a-row>

      </a-form>
    </a-spin>
  </j-modal>
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
      },


    }
  }
</script>