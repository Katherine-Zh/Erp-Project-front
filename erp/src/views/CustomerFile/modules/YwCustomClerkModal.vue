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

            <p style="margin-bottom: 0px">往来单位编码</p>
            <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input :disabled="true" v-decorator="['customId']" placeholder="请输入客户编码/往来单位编码"></a-input>
            </a-form-item>


          </a-col>
          <a-col :span="8">

            <p style="margin-bottom: 0px">往来单位名称</p>

            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input :disabled="true"  v-decorator="['customName']" placeholder="请输入客户名称/往来单位名称"></a-input>
            </a-form-item>


          </a-col>
          <a-col :span="8">

            <p style="margin-bottom: 0px">子结算户编码</p>

            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <j-dict-select-tag  :disabled="true"  type="list" v-decorator="['subProjectCode']" :trigger-change="true" dictCode="" placeholder="请选择子项目编码"/>
            </a-form-item>
          </a-col>

        </a-row>
        <a-row justify="center" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">子结算户名称</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input :disabled="true"  v-decorator="['subProjectName']" placeholder="请输入子项目名称"></a-input>
            </a-form-item>


          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">部门名称</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input :disabled="true" v-decorator="['departName']" placeholder="请输入部门名称"></a-input>
            </a-form-item>


          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">业务员</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input :disabled="true"  v-decorator="['clerk']" placeholder="请输入业务员"></a-input>
            </a-form-item>
          </a-col>

        </a-row>
        <a-row justify="center" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">资信账期</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['creditPeriod']" placeholder="请输入资信账期"></a-input>
            </a-form-item>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">临时资信额度</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input-number v-decorator="['tempCreditLimit']" placeholder="请输入临时资信额度" style="width: 100%"/>
            </a-form-item>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">临时资信账期</p>
            <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['tempCreditPeriod']" placeholder="请输入临时资信账期"></a-input>
            </a-form-item>
          </a-col>

        </a-row>
        <a-row justify="center" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">付款方式</p>

            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <j-dict-select-tag type="list" v-decorator="['payType']" :trigger-change="true" dictCode="sd_pay_type" placeholder="请选择付款方式 sd_pay_type"/>
            </a-form-item>


          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">付款账期</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['payPeriod']" placeholder="请输入付款账期 "></a-input>
            </a-form-item>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">账期起算类型</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <j-dict-select-tag type="list" v-decorator="['accountSettleType']" :trigger-change="true" dictCode="sd_pay_period_type" placeholder="请选择账期起算类型"/>
            </a-form-item>
          </a-col>

        </a-row>
        <a-row justify="center" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">是否默认上次销售价格</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <j-dict-select-tag type="list" v-decorator="['isDefaultLastPrice']" :trigger-change="true" dictCode="sd_yn" placeholder="请选择是否默认默认上次销售价格 sd_yn"/>
            </a-form-item>



          </a-col>

          <a-col :span="16">


            <p style="margin-bottom: 0px">备注</p>

            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
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
    name: "YwCustomClerkModal",
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
          sm: { span: 24 },
        },
        confirmLoading: false,
        validatorRules: {
        },
        url: {
          add: "/yw_customclerk/ywCustomClerk/add",
          edit: "/yw_customclerk/ywCustomClerk/edit",
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
          this.form.setFieldsValue(pick(this.model,'customId','customName','subProjectCode','subProjectName','departName','clerk','payType','payPeriod','accountSettleType','isDefaultLastPrice','notes'))
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
        this.form.setFieldsValue(pick(row,'customId','customName','subProjectCode','subProjectName','departName','clerk','payType','payPeriod','accountSettleType','isDefaultLastPrice','notes'))
      },


    }
  }
</script>