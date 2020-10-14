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
        <a-row justify="center" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px ">证照类别编码</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['licenseTypeId']" placeholder="请输入证照类别编码"></a-input>
            </a-form-item>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">证照名字</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['licenseName']" placeholder="请输入证照名字"></a-input>
            </a-form-item>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">一级分类</p>

            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['firstClass']" placeholder="请输入一级分类"></a-input>
            </a-form-item>

          </a-col>
        </a-row>
        <a-row justify="center" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px ">控制类别编码</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['controlClassCode']" placeholder="请输入控制类别编码"></a-input>
            </a-form-item>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">控制类别名称</p>
            <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['controlClassName']" placeholder="请输入控制类别名称"></a-input>
            </a-form-item>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">提醒状态</p>

            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <j-dict-select-tag type="list" v-decorator="['remindStatus']" :trigger-change="true" dictCode="" placeholder="请选择提醒状态"/>
            </a-form-item>

          </a-col>
        </a-row>
        <a-row justify="center" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="24">
            <p style="margin-bottom: 0px ">备注</p>
            <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['notes']" placeholder="请输入备注"></a-input>
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
    name: "YwCustomLicenseMangeModal",
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
          add: "/yw_customlicensemange/ywCustomLicenseMange/add",
          edit: "/yw_customlicensemange/ywCustomLicenseMange/edit",
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
          this.form.setFieldsValue(pick(this.model,'licenseTypeId','licenseName','firstClass','controlClassCode','controlClassName','remindStatus','notes','updateTime','updateBy'))
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
        this.form.setFieldsValue(pick(row,'licenseTypeId','licenseName','firstClass','controlClassCode','controlClassName','remindStatus','notes','updateTime','updateBy'))
      },


    }
  }
</script>