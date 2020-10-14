<template>
  <div style="background-color: white">
    <a-spin :spinning="confirmLoading">
      <a-form id="ddd" :form="form"  >
        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">证照类别编码</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input :disabled="true" v-decorator="['documentNo', validatorRules.documentNo]"  ></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">证照名称</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input :disabled="true" v-decorator="['documentNo', validatorRules.documentNo]"  ></a-input>
            </a-form-item>
          </a-col>
          <a-col span="8">
            <p style="margin-bottom: 0px">证照号</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input  v-decorator="['documentNo', validatorRules.documentNo]"  ></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">发证日期</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <j-date placeholder="请选择申报日期"  v-decorator="['applyDate', validatorRules.applyDate]"  :trigger-change="true" style="width: 100%"/>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">有效期至</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <j-date placeholder="请选择申报日期"   v-decorator="['applyDate', validatorRules.applyDate]"  :trigger-change="true" style="width: 100%"/>
            </a-form-item>
          </a-col>
          <a-col span="8">
            <p style="margin-bottom: 0px">提醒状态</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input :disabled="true" v-decorator="['documentNo', validatorRules.documentNo]"  ></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">一级分类</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input :disabled="true" v-decorator="['documentNo', validatorRules.documentNo]"  ></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">控制类别编码</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input :disabled="true" v-decorator="['documentNo', validatorRules.documentNo]"  ></a-input>
            </a-form-item>
          </a-col>
          <a-col span="8">
            <p style="margin-bottom: 0px">控制类别名称</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input :disabled="true" v-decorator="['documentNo', validatorRules.documentNo]"  ></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">发证机构</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input :disabled="true" v-decorator="['documentNo', validatorRules.documentNo]"  ></a-input>
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
    export default {
        name: 'EditLicenseInfo'
    }
</script>

<style scoped>

</style>