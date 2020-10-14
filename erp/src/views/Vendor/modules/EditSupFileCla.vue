<template>
  <j-modal
    :title="title"
    :width="width"
    :visible="visible"
    :confirmLoading="confirmLoading"
    switchFullscreen
    @ok="handleOk"
    @cancel="handleCancel"
    cancelText="取消">

    <a-spin :spinning="confirmLoading">
      <a-form :form="form">
        <a-form-item label="一级分类编码" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input :disabled="true" v-decorator="['parentCode']" ></a-input>
        </a-form-item>
        <a-form-item label="一级分类名称" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input :disabled="true" v-decorator="['parentName']" ></a-input>
        </a-form-item>
        <a-form-item label="分类编码" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input  :disabled="true" v-decorator="['classCode']" ></a-input>
        </a-form-item>
        <a-form-item label="分类描述" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-select v-decorator="['className']">
          </a-select>
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




  var sqbmall = {} ;
  
  export default {
    name: "EditSupFileCla",
    components: {
      JDate,
      JDictSelectTag,
      validateDuplicateValue,
    },
    data () {
      return {

        ClaNamItems: [],

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
          
          edit: "/ywvendorclass/ywVendorClass/edit",
          ClaNamHttp:"/sys/user/getUserSectionInfoByToken",
        }
      }
    },
    created() {
    },
   
    methods: {
      add () {
        this.edit({});
      },
      edit (record) {
        this.form.resetFields();
        this.model = Object.assign({},record);
        this.visible = true;
        this.$nextTick(() => {
        this.form.setFieldsValue(pick(this.model,'parentCode','parentName','classCode','className'))
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
        this.form.setFieldsValue(pick(row,'parentCode','parentName','classCode','className'))
      }
    }
  }
</script>