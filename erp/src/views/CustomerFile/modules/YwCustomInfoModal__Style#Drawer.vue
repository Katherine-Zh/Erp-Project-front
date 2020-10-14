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
        <a-form-item label="客户名称" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['customName']" placeholder="请输入客户名称"></a-input>
        </a-form-item>
        <a-form-item label="客户助记码" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['customAbc']" placeholder="请输入客户助记码"></a-input>
        </a-form-item>
        <a-form-item label="曾用名" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['oldName']" placeholder="请输入曾用名"></a-input>
        </a-form-item>
        <a-form-item label="使用状态 sd_custom_status" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-dict-select-tag type="list" v-decorator="['useStatus']" :trigger-change="true" dictCode="sd_custom_status" placeholder="请选择使用状态 sd_custom_status"/>
        </a-form-item>
        <a-form-item label="客户类型 sd_custom_class" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-dict-select-tag type="list" v-decorator="['customType']" :trigger-change="true" dictCode="sd_custom_class" placeholder="请选择客户类型 sd_custom_class"/>
        </a-form-item>
        <a-form-item label="销售样单" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['saleSample']" placeholder="请输入销售样单"></a-input>
        </a-form-item>
        <a-form-item label="提货方式 sd_pick_up_type" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-dict-select-tag type="list" v-decorator="['pickUpType']" :trigger-change="true" dictCode="sd_pick_up_type" placeholder="请选择提货方式 sd_pick_up_type"/>
        </a-form-item>
        <a-form-item label="地址" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['address']" placeholder="请输入地址"></a-input>
        </a-form-item>
        <a-form-item label="银行账号" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['bankAcount']" placeholder="请输入银行账号"></a-input>
        </a-form-item>
        <a-form-item label="银行名称" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['bankName']" placeholder="请输入银行名称"></a-input>
        </a-form-item>
        <a-form-item label="法人" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['legalPerson']" placeholder="请输入法人"></a-input>
        </a-form-item>
        <a-form-item label="业务状态 sd_yw_status" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-dict-select-tag type="list" v-decorator="['serviceStatus']" :trigger-change="true" dictCode="sd_yw_status" placeholder="请选择业务状态 sd_yw_status"/>
        </a-form-item>
        <a-form-item label="结算状态 sd_yw_status" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-dict-select-tag type="list" v-decorator="['settleStatus']" :trigger-change="true" dictCode="sd_yw_status" placeholder="请选择结算状态 sd_yw_status"/>
        </a-form-item>
        <a-form-item label="纳税类型 sd_tax_type" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-dict-select-tag type="list" v-decorator="['taxType']" :trigger-change="true" dictCode="sd_tax_type" placeholder="请选择纳税类型 sd_tax_type"/>
        </a-form-item>
        <a-form-item label="注册资本（万元）" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input-number v-decorator="['registerCapital']" placeholder="请输入注册资本（万元）" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="业务员" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['clerk']" placeholder="请输入业务员"></a-input>
        </a-form-item>
        <a-form-item label="外部标识" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['outIdentity']" placeholder="请输入外部标识"></a-input>
        </a-form-item>
        <a-form-item label="单位监管码" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['companySupervisedCode']" placeholder="请输入单位监管码"></a-input>
        </a-form-item>
        <a-form-item label="仓库地址" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['storehouseAddress']" placeholder="请输入仓库地址"></a-input>
        </a-form-item>
        <a-form-item label="公司成立时间" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-date placeholder="请选择公司成立时间" v-decorator="['companyEstablishTime']" :trigger-change="true" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="企业负责人" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['companyChargePerson']" placeholder="请输入企业负责人"></a-input>
        </a-form-item>
        <a-form-item label="联系电话" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['telephone']" placeholder="请输入联系电话"></a-input>
        </a-form-item>
        <a-form-item label="传真" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['fax']" placeholder="请输入传真"></a-input>
        </a-form-item>
        <a-form-item label="手机" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['mobilePhone', validatorRules.mobilePhone]" placeholder="请输入手机"></a-input>
        </a-form-item>
        <a-form-item label="邮箱" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['email', validatorRules.email]" placeholder="请输入邮箱"></a-input>
        </a-form-item>
        <a-form-item label="网址" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['url', validatorRules.url]" placeholder="请输入网址"></a-input>
        </a-form-item>
        <a-form-item label="资料来源" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['dataSource']" placeholder="请输入资料来源"></a-input>
        </a-form-item>
        <a-form-item label="组织机构代码" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['orgCode']" placeholder="请输入组织机构代码"></a-input>
        </a-form-item>
        <a-form-item label="税务登记证号" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['taxRegistrationAccount']" placeholder="请输入税务登记证号"></a-input>
        </a-form-item>
        <a-form-item label="电子监管码" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['elecSupervisedCode']" placeholder="请输入电子监管码"></a-input>
        </a-form-item>
        <a-form-item label="质量负责人" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['qualityIncharge']" placeholder="请输入质量负责人"></a-input>
        </a-form-item>
        <a-form-item label="是否现金备案 sd_yn" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-dict-select-tag type="list" v-decorator="['isCashRecord']" :trigger-change="true" dictCode="sd_yn" placeholder="请选择是否现金备案 sd_yn"/>
        </a-form-item>
        <a-form-item label="变更及说明" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['changeAndNotes']" placeholder="请输入变更及说明"></a-input>
        </a-form-item>
        <a-form-item label="是否两票制 sd_yn" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-dict-select-tag type="list" v-decorator="['isTwoLicense']" :trigger-change="true" dictCode="sd_yn" placeholder="请选择是否两票制 sd_yn"/>
        </a-form-item>
        <a-form-item label="是否选批  sd_select_batch_type" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-dict-select-tag type="list" v-decorator="['isSelectBatch']" :trigger-change="true" dictCode="sd_select_batch_type" placeholder="请选择是否选批  sd_select_batch_type"/>
        </a-form-item>
        <a-form-item label="统一信用代码" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['cuscc']" placeholder="请输入统一信用代码"></a-input>
        </a-form-item>
        <a-form-item label="首次业务时间" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-date placeholder="请选择首次业务时间" v-decorator="['fobTime']" :trigger-change="true" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="末次业务日期" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-date placeholder="请选择末次业务日期" v-decorator="['endBusinessTime']" :trigger-change="true" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="备注" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['notes']" placeholder="请输入备注"></a-input>
        </a-form-item>
        <a-form-item label="作废原因" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['invalidReason']" placeholder="请输入作废原因"></a-input>
        </a-form-item>
        <a-form-item label="作废人" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['invalidPerson']" placeholder="请输入作废人"></a-input>
        </a-form-item>
        <a-form-item label="作废时间" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-date placeholder="请选择作废时间" v-decorator="['invalidDate']" :trigger-change="true" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="档案编号" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['archiveNo']" placeholder="请输入档案编号"></a-input>
        </a-form-item>
        <a-form-item label="建档日期" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-date placeholder="请选择建档日期" v-decorator="['documentCreateTime']" :trigger-change="true" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="整型字段备用1" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input-number v-decorator="['bakInt1']" placeholder="请输入整型字段备用1" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="整型字段备用2" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input-number v-decorator="['bakInt2']" placeholder="请输入整型字段备用2" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="浮点型备用字段1" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input-number v-decorator="['bakDouble1']" placeholder="请输入浮点型备用字段1" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="浮点型备用字段2" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input-number v-decorator="['bakDouble2']" placeholder="请输入浮点型备用字段2" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="字符型备用字段1" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['bakVarchar1']" placeholder="请输入字符型备用字段1"></a-input>
        </a-form-item>
        <a-form-item label="字符型备用字段2" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['bakVarchar2']" placeholder="请输入字符型备用字段2"></a-input>
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
    name: "YwCustomInfoModal",
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
          mobilePhone: {
            rules: [
              { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号码!'},
            ]
          },
          email: {
            rules: [
              { pattern: /^([\w]+\.*)([\w]+)@[\w]+\.\w{3}(\.\w{2}|)$/, message: '请输入正确的电子邮件!'},
            ]
          },
          url: {
            rules: [
              { pattern: /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/, message: '请输入正确的网址!'},
            ]
          },
        },
        url: {
          add: "/yw_custominfo/ywCustomInfo/add",
          edit: "/yw_custominfo/ywCustomInfo/edit",
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
          this.form.setFieldsValue(pick(this.model,'customId','customName','customAbc','oldName','useStatus','customType','saleSample','pickUpType','address','bankAcount','bankName','legalPerson','serviceStatus','settleStatus','taxType','registerCapital','clerk','outIdentity','companySupervisedCode','storehouseAddress','companyEstablishTime','companyChargePerson','telephone','fax','mobilePhone','email','url','dataSource','orgCode','taxRegistrationAccount','elecSupervisedCode','qualityIncharge','isCashRecord','changeAndNotes','isTwoLicense','isSelectBatch','cuscc','fobTime','endBusinessTime','notes','invalidReason','invalidPerson','invalidDate','archiveNo','documentCreateTime','bakInt1','bakInt2','bakDouble1','bakDouble2','bakVarchar1','bakVarchar2','versionFlag','changeTypeFlag','applyChangeReason'))
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
        this.form.setFieldsValue(pick(row,'customId','customName','customAbc','oldName','useStatus','customType','saleSample','pickUpType','address','bankAcount','bankName','legalPerson','serviceStatus','settleStatus','taxType','registerCapital','clerk','outIdentity','companySupervisedCode','storehouseAddress','companyEstablishTime','companyChargePerson','telephone','fax','mobilePhone','email','url','dataSource','orgCode','taxRegistrationAccount','elecSupervisedCode','qualityIncharge','isCashRecord','changeAndNotes','isTwoLicense','isSelectBatch','cuscc','fobTime','endBusinessTime','notes','invalidReason','invalidPerson','invalidDate','archiveNo','documentCreateTime','bakInt1','bakInt2','bakDouble1','bakDouble2','bakVarchar1','bakVarchar2','versionFlag','changeTypeFlag','applyChangeReason'))
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