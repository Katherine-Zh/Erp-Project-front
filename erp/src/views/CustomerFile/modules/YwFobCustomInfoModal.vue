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

        <a-form-item label="创建人" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['createBy']" placeholder="请输入创建人"></a-input>
        </a-form-item>
        <a-form-item label="创建日期" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-date placeholder="请选择创建日期" v-decorator="['createTime']" :trigger-change="true" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="更新人" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['updateBy']" placeholder="请输入更新人"></a-input>
        </a-form-item>
        <a-form-item label="更新日期" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-date placeholder="请选择更新日期" v-decorator="['updateTime']" :trigger-change="true" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="单据编号" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['documentNo']" placeholder="请输入单据编号"></a-input>
        </a-form-item>
        <a-form-item label="单据状态  sd_docu_status" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-dict-select-tag type="list" v-decorator="['documentStatus']" :trigger-change="true" dictCode="sd_docu_status" placeholder="请选择单据状态  sd_docu_status"/>
        </a-form-item>
        <a-form-item label="申请日期" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-date placeholder="请选择申请日期" v-decorator="['applyDate']" :trigger-change="true" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="申请部门    sys_depart.id" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-select-depart v-decorator="['applyDepart']" multi/>
        </a-form-item>
        <a-form-item label="申报人" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['applyPerson']" placeholder="请输入申报人"></a-input>
        </a-form-item>
        <a-form-item label="审核日期" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-date placeholder="请选择审核日期" v-decorator="['checkDate']" :trigger-change="true" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="转正日期" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-date placeholder="请选择转正日期" v-decorator="['executeDate']" :trigger-change="true" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="客户编码" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['customNo']" placeholder="请输入客户编码"></a-input>
        </a-form-item>
        <a-form-item label="用户名称" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['customName']" placeholder="请输入用户名称"></a-input>
        </a-form-item>
        <a-form-item label="地址（存放编码）
所属地区/存放编码" :labelCol="labelCol" :wrapperCol="wrapperCol">
		  <j-area-linkage type="cascader" v-decorator="['address']" placeholder="请输入省市区"/>
        </a-form-item>
        <a-form-item label="法人代表" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['legalRepresent']" placeholder="请输入法人代表"></a-input>
        </a-form-item>
        <a-form-item label="注册资本（万元）" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input-number v-decorator="['registerCapital']" placeholder="请输入注册资本（万元）" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="企业负责人" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['groupIncharge']" placeholder="请输入企业负责人"></a-input>
        </a-form-item>
        <a-form-item label="质量负责人" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['qualityIncharge']" placeholder="请输入质量负责人"></a-input>
        </a-form-item>
        <a-form-item label="注册地址" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['registerAddress']" placeholder="请输入注册地址"></a-input>
        </a-form-item>
        <a-form-item label="经营范围" :labelCol="labelCol" :wrapperCol="wrapperCol">
<!--          <j-dict-select-tag type="list" v-decorator="['businessScope']" :trigger-change="true" dictCode="" placeholder="请选择经营范围"/>-->

          <a-select   v-decorator="['businessScope', validatorRules.businessScope]" >

            <div slot="dropdownRender" slot-scope="menu" >

              <v-nodes :vnodes="menu"
              />
              <a-divider style="margin: 4px 0;" />
            </div>
            <a-select-option  v-for="item in jyfwItems" :key="item" :value="item" >
              {{ item }}
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="税号" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['taxNum']" placeholder="请输入税号"></a-input>
        </a-form-item>
        <a-form-item label="统一信用代码" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['cuscc']" placeholder="请输入统一信用代码"></a-input>
        </a-form-item>
        <a-form-item label="组织机构代码" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['orgCode']" placeholder="请输入组织机构代码"></a-input>
        </a-form-item>
        <a-form-item label="客户分类" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-dict-select-tag type="list" v-decorator="['customClass']" :trigger-change="true" dictCode="sd_custom_class" placeholder="请选择客户分类"/>
        </a-form-item>
        <a-form-item label="经营性质" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-dict-select-tag type="list" v-decorator="['businessProp']" :trigger-change="true" dictCode="sd_business_prop" placeholder="请选择经营性质"/>
        </a-form-item>
        <a-form-item label="备注" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['notes']" placeholder="请输入备注"></a-input>
        </a-form-item>
        <a-form-item label="采购员身份证号码" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['buyerIdCard']" placeholder="请输入采购员身份证号码"></a-input>
        </a-form-item>
        <a-form-item label="身份证复印件和原件是否一致" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-dict-select-tag type="list" v-decorator="['isNoDifference']" :trigger-change="true" dictCode="sd_yn" placeholder="请选择身份证复印件和原件是否一致"/>
        </a-form-item>
        <a-form-item label="业务员签字" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['clerkSignature']" placeholder="请输入业务员签字"></a-input>
        </a-form-item>
        <a-form-item label="日期/业务员签字日期" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <j-date placeholder="请选择日期/业务员签字日期" v-decorator="['clerkSignatureDate']" :trigger-change="true" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="整型字段备用1" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input-number v-decorator="['bakInt1']" placeholder="请输入整型字段备用1" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="整型字段备用2" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input-number v-decorator="['bakInt2']" placeholder="请输入整型字段备用2" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="浮点型字段备用1" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input-number v-decorator="['bakDouble1']" placeholder="请输入浮点型字段备用1" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="浮点型备用字段2" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input-number v-decorator="['bakDouble2']" placeholder="请输入浮点型备用字段2" style="width: 100%"/>
        </a-form-item>
        <a-form-item label="字符型备用字段1" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['bakChar1']" placeholder="请输入字符型备用字段1"></a-input>
        </a-form-item>
        <a-form-item label="字符型备用字段2" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['bakChar2']" placeholder="请输入字符型备用字段2"></a-input>
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
  import JSelectDepart from '@/components/jeecgbiz/JSelectDepart'
  import JDictSelectTag from "@/components/dict/JDictSelectTag"
  import JAreaLinkage from '@comp/jeecg/JAreaLinkage'


  export default {
    name: "YwFobCustomInfoModal",
    components: {
      JDate,
      JSelectDepart,
      JDictSelectTag,
      JAreaLinkage,
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
          add: "/yw_fobcustominfo/ywFobCustomInfo/add",
          edit: "/yw_fobcustominfo/ywFobCustomInfo/edit",
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
          this.form.setFieldsValue(pick(this.model,'createBy','createTime','updateBy','updateTime','documentNo','documentStatus','applyDate','applyDepart','applyPerson','checkDate','executeDate','customNo','customName','address','legalRepresent','registerCapital','groupIncharge','qualityIncharge','registerAddress','businessScope','taxNum','cuscc','orgCode','customClass','businessProp','notes','buyerIdCard','isNoDifference','clerkSignature','clerkSignatureDate','bakInt1','bakInt2','bakDouble1','bakDouble2','bakChar1','bakChar2'))
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
        this.form.setFieldsValue(pick(row,'createBy','createTime','updateBy','updateTime','documentNo','documentStatus','applyDate','applyDepart','applyPerson','checkDate','executeDate','customNo','customName','address','legalRepresent','registerCapital','groupIncharge','qualityIncharge','registerAddress','businessScope','taxNum','cuscc','orgCode','customClass','businessProp','notes','buyerIdCard','isNoDifference','clerkSignature','clerkSignatureDate','bakInt1','bakInt2','bakDouble1','bakDouble2','bakChar1','bakChar2'))
      },


    }
  }
</script>