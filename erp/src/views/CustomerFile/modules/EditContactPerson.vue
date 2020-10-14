<template>
  <div style="background-color: white">
    <a-spin :spinning="confirmLoading">
      <a-form id="ddd" :form="form"  >
        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">子结算户编码</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input :disabled="true" v-decorator="['documentNo', validatorRules.documentNo]"  ></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">子结算户名称</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['documentNo', validatorRules.documentNo]"  ></a-input>
            </a-form-item>
          </a-col>
          <a-col span="8">
            <p style="margin-bottom: 0px">联系人ID</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input :disabled="true" v-decorator="['documentNo', validatorRules.documentNo]"  ></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">联系人名</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input  v-decorator="['documentNo', validatorRules.documentNo]"  ></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">联系人职位名称</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input  v-decorator="['documentNo', validatorRules.documentNo]"  ></a-input>
            </a-form-item>
          </a-col>
          <a-col span="8">
            <p style="margin-bottom: 0px">传真</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input  v-decorator="['documentNo', validatorRules.documentNo]"  ></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">身份证</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['documentNo', validatorRules.documentNo]"  ></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">邮件地址</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input  v-decorator="['documentNo', validatorRules.documentNo]"  ></a-input>
            </a-form-item>
          </a-col>
          <a-col span="8">
            <p style="margin-bottom: 0px">手机/办公电话</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input  v-decorator="['documentNo', validatorRules.documentNo]"  ></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">失效日期</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <j-date placeholder="请选择申报日期"   v-decorator="['applyDate', validatorRules.applyDate]"  :trigger-change="true" style="width: 100%"/>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">有无收获权限</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <j-dict-select-tag type="list"  v-decorator="['documentStatus', validatorRules.documentStatus]" :trigger-change="true" dictCode="sd_docu_status" placeholder="请选择状态"/>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col style="float: right ;overflow: hidden;" class="table-page-search-submitButtons">
              <span>
                <a-button @click="close" style="margin-right: 8px">
                  取消
                </a-button>
                <a-button type="primary" html-type="submit" @click="handleOk" style="margin-right: 16px">
                 保存
                </a-button>
              </span>
          </a-col>
        </a-row>
      </a-form>
    </a-spin>
  </div>
</template>

<script>
  import { httpAction } from '@/api/manage'
  import pick from 'lodash.pick'
  import { validateDuplicateValue } from '@/utils/util'
  import JDate from '@/components/jeecg/JDate'
  import JDictSelectTag from "@/components/dict/JDictSelectTag"

  export default {
    name: 'EditContactPerson',
    components: {
      JDate,
      JDictSelectTag,
      validateDuplicateValue
    },
    data () {
      return {
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
        validatorRules: {},
        url: {
          add: "/ywwareindateset/ywWareIndateSet/add",
          edit: "/ywwareindateset/ywWareIndateSet/edit",
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
        this.model = Object.assign({}, this.$route.query);
        this.visible = true;
        this.$nextTick(() => {
          this.form.setFieldsValue(pick(this.model,'indateLower','indateUpper','wareIndateRemind','wareIndateControl'))
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
        this.form.setFieldsValue(pick(row,'indateLower','indateUpper','wareIndateRemind','wareIndateControl'))
      },
    }
  }
</script>

<style scoped>

</style>