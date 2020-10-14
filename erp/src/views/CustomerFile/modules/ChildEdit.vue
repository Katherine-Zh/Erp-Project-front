<template>
  <j-modal
    id="print"
    :title="title"
    style="align-content: center"
    :width="width"
    :visible="visible"
    :confirmLoading="confirmLoading"
    switchFullscreen
    @ok="handleOk"
    @cancel="handleCancel"
    cancelText="关闭">
    <a-spin :spinning="confirmLoading">
      <div id='studentPhoTable'>
        <a-row justify="center" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px ">客户编码</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input  :disabled="true" v-decorator="['customId']" placeholder=""></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">客户名称</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input :disabled="true"  v-decorator="['customName']" placeholder=""  ></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">子项目编码</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">

              <a-input :disabled="true"  v-decorator="['subProjectCode']" placeholder="请输入子项目编码"  ></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row justify="center" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px ">子项目名称</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input   v-decorator="['subProjectName']" placeholder="请输入子项目名称"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">是否默认</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
<!--              isDefault-->
              <j-dict-select-tag type="list"  v-decorator="['isDefault']" :trigger-change="true" dictCode="sd_valid_status" placeholder="请选择"/>

            </a-form-item>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">是否有效</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">

<!--              isValid-->
              <j-dict-select-tag type="list"  v-decorator="['isValid']" :trigger-change="true" dictCode="sd_valid_status" placeholder="请选择"/>

              <a-input  placeholder=""  ></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row justify="center" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px ">付款方式</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
<!--              <a-input   v-decorator="['documentArchiveNo',validatorRules.documentArchiveNo]" placeholder=""></a-input>-->
              <j-dict-select-tag type="list"  v-decorator="['payType']"  :trigger-change="true" dictCode="sd_pay_type" placeholder=""/>

            </a-form-item>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">付款账期</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['payPeriod']" ></a-input>
<!--              <j-dict-select-tag type="list"  v-decorator="['wareUnit']" :trigger-change="true" dictCode="sd_receipt_type" placeholder="请选择单位"/>-->
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">发票类型</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">

              <j-dict-select-tag type="list"  v-decorator="['receiptType']" :trigger-change="true" dictCode="sd_receipt_type" placeholder="请选择单位"/>

            </a-form-item>
          </a-col>
        </a-row>
        <a-row justify="center" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px ">账期起算类型</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
<!--              <a-input   v-decorator="[' accountSettleType']" placeholder=""></a-input>-->
              <j-dict-select-tag type="list"  v-decorator="['accountSettleType']" :trigger-change="true" dictCode="sd_pay_type" placeholder=""/>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">是否需要检验报告</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
<!--              isCheckRecord-->
              <j-dict-select-tag type="list"  v-decorator="['isCheckRecord']" :trigger-change="true" dictCode="sd_pay_type" placeholder=""/>

            </a-form-item>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">原往来单位编码</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
<!--              originCode-->
              <a-input  placeholder="" v-decorator="['originCode']" ></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row justify="center" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="24">
            <p style="margin-bottom: 0px ">备注</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input   v-decorator="['notes']" placeholder="请输入备注
"></a-input>
            </a-form-item>
          </a-col>

        </a-row>

      </div>

    </a-spin>
  </j-modal>
</template>

<script>

  import { httpAction } from '@/api/manage'
  import pick from 'lodash.pick'
  import JDate from '@/components/jeecg/JDate'
  import '@/assets/less/TableExpand.less'



  export default {
    name: "ChildEdit",
    components: {
      JDate,
    },
    data () {
      return {
        isTrue: true,
        form: this.$form.createForm(this),
        title: "操作",
        width: 800,
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
          userAcc: {
            rules: [
              { required: true, message: '请输入用户账号!' },
            ]
          },

        },
        description: '子清单结算编辑',
        url:{
          add:"/yw_customsettlelist/ywCustomSettleList/add",
          edit:"/yw_customsettlelist/ywCustomSettleList/edit"
        }
        // 表头
      }
    },
    computed: {
      importExcelUrl: function(){
        return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`;
      },
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
          this.form.setFieldsValue(pick(this.model,'documentArchiveNo','userPasswd','userPassedCon','userIdenum','userPoli','userMar','userLocal','userSchool','userPro','userEdu','userJobdata','userStartjob','userMed','userGuild','userHonor','userEmail','userPhone','userPhonenum','userStatus'))
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
            // that.confirmLoading = true;
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
              // that.confirmLoading = false;
              that.close();
            })
          }

        })
      },
      handleCancel () {
        this.close()
      },


    }
  }
</script>