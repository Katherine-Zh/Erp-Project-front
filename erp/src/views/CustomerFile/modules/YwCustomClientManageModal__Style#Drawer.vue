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
          <a-input v-decorator="['customId']" placeholder="请输入客户编码"></a-input>
        </a-form-item>
        <a-form-item label="委托范围编码" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['clentScopeId']" placeholder="请输入委托范围编码"></a-input>
        </a-form-item>
        <a-form-item label="委托书编号" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['clientStatementId']" placeholder="请输入委托书编号"></a-input>
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
        <a-form-item label="委托人" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['client']" placeholder="请输入委托人"></a-input>
        </a-form-item>
        <a-form-item label="起始日期" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-date placeholder="请选择起始日期" v-decorator="['startDate']" :trigger-change="true" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="结束日期" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-date placeholder="请选择结束日期" v-decorator="['endDate']" :trigger-change="true" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="委托人身份证号码" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-dict-select-tag type="list" v-decorator="['clientIdCard']" :trigger-change="true" dictCode="" placeholder="请选择委托人身份证号码"/>
        </a-form-item>
        <a-form-item label="身份证有效期" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-date placeholder="请选择身份证有效期" v-decorator="['idCardIndate']" :trigger-change="true" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="联系电话" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['telephone']" placeholder="请输入联系电话"></a-input>
        </a-form-item>
        <a-form-item label="过期日" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-date placeholder="请选择过期日" v-decorator="['outOfDate']" :trigger-change="true" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="网上备案有效期" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-date placeholder="请选择网上备案有效期" v-decorator="['onlineFillIndate']" :trigger-change="true" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="有无销售权限 sd_have" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['saleAuth']" placeholder="请输入有无销售权限 sd_have"></a-input>
        </a-form-item>
        <a-form-item label="有无提货权限 sd_have" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['pickUpAuth']" placeholder="请输入有无提货权限 sd_have"></a-input>
        </a-form-item>
        <a-form-item label="是否默认委托人 sd_yn" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-dict-select-tag type="list" v-decorator="['isDefaultClient']" :trigger-change="true" dictCode="" placeholder="请选择是否默认委托人 sd_yn"/>
        </a-form-item>
        <a-form-item label="是否年度特药委托 sd_yn" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-dict-select-tag type="list" v-decorator="['isYearSpecial']" :trigger-change="true" dictCode="" placeholder="请选择是否年度特药委托 sd_yn"/>
        </a-form-item>
        <a-form-item label="备注" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['notes']" placeholder="请输入备注"></a-input>
        </a-form-item>
        <a-form-item label="创建时间/建档时间" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-date placeholder="请选择创建时间/建档时间" v-decorator="['createTime']" :trigger-change="true" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="创建人/建档人" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['createBy']" placeholder="请输入创建人/建档人"></a-input>
        </a-form-item>
        <a-form-item label="更新时间/最终修改时间" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-date placeholder="请选择更新时间/最终修改时间" v-decorator="['updateTime']" :trigger-change="true" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="更新人/最终修改人" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['updateBy']" placeholder="请输入更新人/最终修改人"></a-input>
        </a-form-item>
        <a-form-item label="版本标识位 1：当前执行版本   2：待审核版本   3：历史版本" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input-number v-decorator="['versionFlag']" placeholder="请输入版本标识位 1：当前执行版本   2：待审核版本   3：历史版本" style="width: 100%"/>
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
  import JDate from '@/components/jeecg/JDate'  
  import JDictSelectTag from "@/components/dict/JDictSelectTag"
  
  export default {
    name: "YwCustomClientManageModal",
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
          add: "/yw_customclientmanage/ywCustomClientManage/add",
          edit: "/yw_customclientmanage/ywCustomClientManage/edit",
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
          this.form.setFieldsValue(pick(this.model,'customId','clentScopeId','clientStatementId','customName','subProjectCode','subProjectName','client','startDate','endDate','clientIdCard','idCardIndate','telephone','outOfDate','onlineFillIndate','saleAuth','pickUpAuth','isDefaultClient','isYearSpecial','notes','createTime','createBy','updateTime','updateBy','versionFlag'))
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
        this.form.setFieldsValue(pick(row,'customId','clentScopeId','clientStatementId','customName','subProjectCode','subProjectName','client','startDate','endDate','clientIdCard','idCardIndate','telephone','outOfDate','onlineFillIndate','saleAuth','pickUpAuth','isDefaultClient','isYearSpecial','notes','createTime','createBy','updateTime','updateBy','versionFlag'))
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