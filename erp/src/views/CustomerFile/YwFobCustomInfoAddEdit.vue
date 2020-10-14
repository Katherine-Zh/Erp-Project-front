<template>
  <a-spin :spinning="confirmLoading" style="background-color: white">
    <a-form :form="form">
      <a-divider></a-divider>
      <p ><b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;单据信息</b></p>

      <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
        <a-col :span="8">
          <p style="margin-bottom: 0px">单据编号</p>

          <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
            <a-input :disabled="true"  v-decorator="['documentNo']" placeholder="请输入单据编号"></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <p style="margin-bottom: 0px">单据状态</p>
          <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
            <j-dict-select-tag :disabled="true"  type="list" v-decorator="['documentStatus']" :trigger-change="true" dictCode="sd_docu_status" placeholder="请选择单据状态  sd_docu_status"/>
          </a-form-item>

        </a-col>
        <a-col :span="8">
          <p style="margin-bottom: 0px">申请日期</p>
          <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
            <j-date :disabled="true"  placeholder="请选择申请日期" v-decorator="['applyDate']" :trigger-change="true" style="width: 100%"/>
          </a-form-item>

        </a-col>
      </a-row>
      <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
        <a-col :span="8">
          <p style="margin-bottom: 0px;color: red">申请部门</p>

          <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
<!--            <j-select-depart v-decorator="['applyDepart']" multi/>-->
            <a-select v-decorator="['applyDepart']">
              <div slot="dropdownRender" slot-scope="menu">
                <v-nodes :vnodes="menu"
                />
                <a-divider style="margin: 4px 0;" />
              </div>
              <a-select-option   :value="sqbmItems[0]">
                {{sqbmItems[0] }}
              </a-select-option>
            </a-select>
          </a-form-item>

        </a-col>
        <a-col :span="8">
          <p style="margin-bottom: 0px">申报人</p>
          <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
            <a-input :disabled="true" v-decorator="['applyPerson']" placeholder="请输入申报人"></a-input>
          </a-form-item>


        </a-col>
        <a-col :span="8">
          <p style="margin-bottom: 0px">审批日期</p>
          <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
            <j-date :disabled="true"  placeholder="请选择审核日期" v-decorator="['checkDate']" :trigger-change="true" style="width: 100%"/>
          </a-form-item>


        </a-col>
      </a-row>
      <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
        <a-col :span="8">
          <p style="margin-bottom: 0px;color: red">转正日期</p>

          <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
            <j-date :disabled="true"  placeholder="请选择转正日期" v-decorator="['executeDate']" :trigger-change="true" style="width: 100%"/>
          </a-form-item>

        </a-col>

      </a-row>

      <a-divider></a-divider>
      <p ><b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;客户基本信息</b></p>
      <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
        <a-col :span="8">
          <p style="margin-bottom: 0px;">客户编码</p>

          <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
            <a-input  :disabled="true" v-decorator="['customNo']" placeholder="请输入客户编码"></a-input>
          </a-form-item>


        </a-col>
        <a-col :span="16">
          <p style="margin-bottom: 0px;color: red">客户名称</p>
          <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
            <a-input v-decorator="['customName']" placeholder="请输入用户名称"></a-input>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
        <a-col :span="16">
          <p style="margin-bottom: 0px;color: red">所属地区</p>

          <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol">
            <j-area-linkage type="cascader" v-decorator="['address']" placeholder="请输入省市区"/>
          </a-form-item>

        </a-col>
        <a-col :span="8">
          <p style="margin-bottom: 0px;color: red">法定代表人</p>
          <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol">
            <a-input v-decorator="['legalRepresent']" placeholder="请输入法人代表"></a-input>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
        <a-col :span="8">
          <p style="margin-bottom: 0px;color: red">注册资本(万元)</p>

          <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
            <a-input-number v-decorator="['registerCapital']" placeholder="请输入注册资本（万元）" style="width: 100%"/>
          </a-form-item>


        </a-col>
        <a-col :span="8">
          <p style="margin-bottom: 0px;color: red">企业负责人</p>
          <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
            <a-input v-decorator="['groupIncharge']" placeholder="请输入企业负责人"></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <p style="margin-bottom: 0px;color: red">质量负责人</p>
          <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
            <a-input v-decorator="['qualityIncharge']" placeholder="请输入质量负责人"></a-input>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
        <a-col :span="24">
          <p style="margin-bottom: 0px;color: red">注册地址</p>

          <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
            <a-input v-decorator="['registerAddress']" placeholder="请输入注册地址"></a-input>
          </a-form-item>
        </a-col>

      </a-row>
      <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
        <a-col :span="24">
          <p style="margin-bottom: 0px;">经营范围</p>

          <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
            <!--          <j-dict-select-tag type="list" v-decorator="['businessScope']" :trigger-change="true" dictCode="" placeholder="请选择经营范围"/>-->
            <JSelectFw v-decorator="['fw']"></JSelectFw>
          </a-form-item>
        </a-col>


      </a-row>
      <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
        <a-col :span="8">
          <p style="margin-bottom: 0px;color: red">税号</p>

          <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol">
            <a-input v-decorator="['taxNum']" placeholder="请输入税号"></a-input>
          </a-form-item>


        </a-col>
        <a-col :span="8">
          <p style="margin-bottom: 0px;color: red">同一信用代码</p>
          <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol">
            <a-input v-decorator="['cuscc']" placeholder="请输入统一信用代码"></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <p style="margin-bottom: 0px;color: red">组织机构代码</p>
          <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
            <a-input v-decorator="['orgCode']" placeholder="请输入组织机构代码"></a-input>
          </a-form-item>
        </a-col>
      </a-row>

      <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
        <a-col :span="8">
          <p style="margin-bottom: 0px;color: red">客户分类</p>

          <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
            <j-dict-select-tag type="list" v-decorator="['customClass']" :trigger-change="true" dictCode="sd_custom_class" placeholder="请选择客户分类"/>
          </a-form-item>


        </a-col>
        <a-col :span="8">
          <p style="margin-bottom: 0px;">经营性质</p>
          <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol">
            <j-dict-select-tag type="list" v-decorator="['businessProp']" :trigger-change="true" dictCode="sd_business_prop" placeholder="请选择经营性质"/>
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <p style="margin-bottom: 0px">备注</p>
          <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
            <a-input v-decorator="['notes']" placeholder="请输入备注"></a-input>
          </a-form-item>
        </a-col>
      </a-row>
      <a-divider></a-divider>

      <p ><b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;购货单位采购人员资质情况</b></p>

      <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
        <a-col :span="8">
          <p style="margin-bottom: 0px">身份证号</p>

          <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
            <a-input v-decorator="['buyerIdCard']" placeholder="请输入采购员身份证号码"></a-input>
          </a-form-item>


        </a-col>
        <a-col :span="8">
          <p style="margin-bottom: 0px;">身份证复印件与原件核实</p>
          <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
            <j-dict-select-tag type="list" v-decorator="['isNoDifference']" :trigger-change="true" dictCode="sd_yn" placeholder="请选择身份证复印件和原件是否一致"/>
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <p style="margin-bottom: 0px">业务员签字</p>
          <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
            <a-input v-decorator="['clerkSignature']" placeholder="请输入业务员签字"></a-input>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
        <a-col :span="8">
          <p style="margin-bottom: 0px">日期</p>

          <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol">
            <j-date placeholder="请选择日期/业务员签字日期" v-decorator="['clerkSignatureDate']" :trigger-change="true" style="width: 100%"/>
          </a-form-item>


        </a-col>

      </a-row>

      <a-button type="submit" @click="handleOk">提交</a-button>

    </a-form>
  </a-spin>


</template>

<script>

  import { httpAction } from '@/api/manage'
  import pick from 'lodash.pick'
  import { validateDuplicateValue } from '@/utils/util'
  import JDate from '@/components/jeecg/JDate'
  import JSelectDepart from '@/components/jeecgbiz/JSelectDepart'
  import JDictSelectTag from "@/components/dict/JDictSelectTag"
  import JAreaLinkage from '@comp/jeecg/JAreaLinkage'
  import { TreeSelect } from 'ant-design-vue'
  import JSelectFw from '../../components/jeecgbiz/JSelectFw'


  const SHOW_PARENT = TreeSelect.SHOW_PARENT;
  var sqbmall = {} ;

  export default {
    name: "YwFobCustomInfoModal",
    components: {
      JDate,
      JSelectDepart,
      JSelectFw,
      JDictSelectTag,
      JAreaLinkage,
      VNodes: {
        functional: true,
        render: (h, ctx) => ctx.props.vnodes,
      },
    },
    data () {
      return {
        iteme:null ,
        wareid:null ,
        SHOW_PARENT,
        form: this.$form.createForm(this),
        title:"操作",
        sqbmItems: [],
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
          add: "/yw_fobcustominfo/ywFobCustomInfo/add",
          edit: "/yw_fobcustominfo/ywFobCustomInfo/edit",
          sqbmHttp:"/sys/user/getUserSectionInfoByToken",
          create:"/yw_fobcustominfo/ywFobCustomInfo/create"
        }
      }
    },
    created () {
    },
    mounted () {
      httpAction(this.url.sqbmHttp,"","get").then((res)=>{
        if(res.success){
          console.log("-------------------这是申请部门的-----------------------")

          console.log(res)
          console.log("------------------------------------------")
          this.sqbmItems[0] = res.result["sysDepName"] ;
          sqbmall[res.result['sysDepName']]= res.result['sysOrgCode']
          console.log(this.sqbmItems)


        }else{
          this.$message.warning(res.message);
        }
      }).finally(() => {

      });

      httpAction(this.url.create,"","post").then((res)=>{
        if(res.success){
          console.log("-------------------这是申请部门的-----------------------")

          console.log(res)
          this.wareid = res.result.customId;

        }else{
          this.$message.warning(res.message);
        }
      }).finally(() => {

      });
      this.edit(this.$route.query)
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
            var rr = "" ;
            for(var i in values["fw"]){
              console.log(i)
               rr = rr+values["fw"][i]+',';
            }
            values['businessScope'] = rr ;
            values["customNo"] = this.wareid ;
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

<style scoped>

</style>
