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
        <a-form-item label="证照类别编码" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['licenseTypeId']" placeholder="请输入证照类别编码"></a-input>
        </a-form-item>
        <a-form-item label="证照类型" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['licenseType']" placeholder="请输入证照类型"></a-input>
        </a-form-item>
        <a-form-item label="证照名字" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['licenseName']" placeholder="请输入证照名字"></a-input>
        </a-form-item>
        <a-form-item label="证照号" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['licenseCode']" placeholder="请输入证照号"></a-input>
        </a-form-item>
        <a-form-item label="发证日期" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-date placeholder="请选择发证日期" v-decorator="['startDate']" :trigger-change="true" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="有效期至" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-date placeholder="请选择有效期至" v-decorator="['endDate']" :trigger-change="true" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="提醒状态" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-dict-select-tag type="list" v-decorator="['remindStatus']" :trigger-change="true" dictCode="sd_remind_status" placeholder="请选择提醒状态"/>
        </a-form-item>
        <a-form-item label="发证机构" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['authoOrg']" placeholder="请输入发证机构"></a-input>
        </a-form-item>
        <a-form-item label="一级分类编码" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['firstClassCode']" placeholder="请输入一级分类编码"></a-input>
        </a-form-item>
        <a-form-item label="一级分类" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['firstClass']" placeholder="请输入一级分类"></a-input>
        </a-form-item>
        <a-form-item label="控制类别编码" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['controlClassCode']" placeholder="请输入控制类别编码"></a-input>
        </a-form-item>
        <a-form-item label="控制类别名称" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['controlClassName']" placeholder="请输入控制类别名称"></a-input>
        </a-form-item>
        <a-form-item label="版本标识位 1：当前执行版本   2：待审核版本   3：历史版本" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input-number v-decorator="['versionFlag']" placeholder="请输入版本标识位 1：当前执行版本   2：待审核版本   3：历史版本" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="记录通过何种方式进行修改，1：直接修改。 2：申请修改" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input-number v-decorator="['changeTypeFlag']" placeholder="请输入记录通过何种方式进行修改，1：直接修改。 2：申请修改" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="申请修改原因" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['applyChangeReason']" placeholder="请输入申请修改原因"></a-input>
        </a-form-item>
        <a-form-item label="证书" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['certificateString']" placeholder="请输入证书"></a-input>
        </a-form-item>
        <a-form-item label="证照本地存储路径" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-textarea v-decorator="['certificateFilePath']" rows="4" placeholder="请输入证照本地存储路径"/>
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


  export default {
    name: "YwCustomLicenseModal",
    components: { 
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
          add: "/yw_customlicense/ywCustomLicense/add",
          edit: "/yw_customlicense/ywCustomLicense/edit",
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
          this.form.setFieldsValue(pick(this.model,'customId','customName','licenseTypeId','licenseType','licenseName','licenseCode','startDate','endDate','remindStatus','authoOrg','firstClassCode','firstClass','controlClassCode','controlClassName','versionFlag','changeTypeFlag','applyChangeReason','certificateString','certificateFilePath'))
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
        this.form.setFieldsValue(pick(row,'customId','customName','licenseTypeId','licenseType','licenseName','licenseCode','startDate','endDate','remindStatus','authoOrg','firstClassCode','firstClass','controlClassCode','controlClassName','versionFlag','changeTypeFlag','applyChangeReason','certificateString','certificateFilePath'))
      },

      
    }
  }
</script>