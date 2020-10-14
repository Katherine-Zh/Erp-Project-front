<template>
  <div>
    <div style="background-color: white">

      <p align="left" style="font-size:20px">
        <b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;编辑供应商委托人</b>
      </p>
      <a-divider/>
      <a-spin :spinning="confirmLoading">
        <a-form :form="form"  >
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px">委托范围编号</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input :disabled="true" v-decorator="['clentScopeId', validatorRules.clentScopeId]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">委托书编号</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input :disabled="true" v-decorator="['clientStatementId', validatorRules.clientStatementId]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">供应商编号</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input :disabled="true" v-decorator="['vendorId', validatorRules.vendorId]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>

          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px">供应商名称</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-select v-decorator="['vendorName', validatorRules.vendorName]">
                  <div slot="dropdownRender" slot-scope="menu">
                    <v-nodes :vnodes="menu"
                    />
                    <a-divider style="margin: 4px 0;" />
                  </div>
                  <a-select-option v-for="item in gysItems" :key="item" :value="item">
                    {{ item }}
                  </a-select-option>
                </a-select>
                <!-- <j-dict-select-tag type="list"  v-decorator="['vendorName', validatorRules.vendorName]" :trigger-change="true" placeholder="请选择供应商名称"/> -->
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">付款编码</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['payCode', validatorRules.payCode]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px;color:red">委托人</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['client', validatorRules.client]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>
            
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]" >
            <a-col :span="8">
              <p style="margin-bottom: 0px">起始日期</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <j-date placeholder="起始日期" v-decorator="['startDate', validatorRules.startDate]"  :trigger-change="true" style="width: 100%"/>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px;color:red">结束日期</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <j-date placeholder="结束日期" v-decorator="['endDate', validatorRules.endDate]"  :trigger-change="true" style="width: 100%"/>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px;color:red">委托人身份证号码</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['clientIdCard', validatorRules.clientIdCard]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>
          </a-row>

          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]" >
            <a-col :span="8">
              <p style="margin-bottom: 0px;">身份证效期</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <j-date placeholder="结束日期" v-decorator="['idCardIndate', validatorRules.idCardIndate]"  :trigger-change="true" style="width: 100%"/>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">联系电话</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input :disabled="true" v-decorator="['telephone', validatorRules.telephone]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">备注</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input :disabled="true" v-decorator="['notes', validatorRules.notes]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>
          </a-row>

          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]" >

            <a-col :span="8">
              <p style="margin-bottom: 0px">过期日期</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <j-date placeholder="结束日期" v-decorator="['outOfDate', validatorRules.outOfDate]"  :trigger-change="true" style="width: 100%"/>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">网上备案效期</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <j-date placeholder="结束日期" v-decorator="['onlineFillIndate', validatorRules.onlineFillIndate]"  :trigger-change="true" style="width: 100%"/>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">销售权限</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <j-dict-select-tag type="list"  v-decorator="['saleAuth', validatorRules.saleAuth]" :trigger-change="true" dictCode="sd_have" placeholder="请选择是否有销售权限"/>
              </a-form-item>
            </a-col>
          </a-row>

          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]" >

            <a-col :span="8">
              <p style="margin-bottom: 0px;">提货权限</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <j-dict-select-tag type="list"  v-decorator="['pickUpAuth', validatorRules.pickUpAuth]" :trigger-change="true" dictCode="sd_have" placeholder="请选择是否有提货权限"/>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">是否默认委托人</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <j-dict-select-tag type="list"  v-decorator="['isDefaultClient', validatorRules.isDefaultClient]" :trigger-change="true" dictCode="sd_have" placeholder="请选择是否有提货权限"/>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">回款权限</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <j-dict-select-tag type="list"  v-decorator="['isRebateAuth', validatorRules.isRebateAuth]" :trigger-change="true" dictCode="sd_have" placeholder="请选择是否有回款权限"/>
              </a-form-item>
            </a-col>
          </a-row>

          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px">建档人</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input :disabled="true" v-decorator="['createBy', validatorRules.createBy]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">建档时间</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input :disabled="true" v-decorator="['createTime', validatorRules.createTime]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">最终修改人</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input :disabled="true" v-decorator="['updateBy', validatorRules.updateBy]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px">最终修改时间</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input :disabled="true" v-decorator="['updateTime', validatorRules.updateTime]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>
          </a-row>
          
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col style="float: right ;overflow: hidden;" class="table-page-search-submitButtons">
              <span>
                <a-button @click="handReturn" style="margin-right: 8px">
                  取消
                </a-button>
                <a-button type="primary" html-type="submit" @click="handleOk" style="margin-right: 16px">
                  确定
                </a-button>
              </span>
            </a-col>
          </a-row>
        </a-form>
      </a-spin>
    </div>
  </div>
</template>

<script>

  import { httpAction } from '@/api/manage'
  import pick from 'lodash.pick'
  import { validateDuplicateValue } from '@/utils/util'
  import JDate from '@/components/jeecg/JDate'
  import JDictSelectTag from "@/components/dict/JDictSelectTag"


  export default {
    name: "YwCliSetEdit",
    components: {
      JDate,
      JDictSelectTag,
      validateDuplicateValue
    },
    data () {
      return {


        // 供应商选项
        gysItems: [],
        cfItems:[],

        description: '供应商委托人设置编辑',
        items: [],
        //treeData,
        //进口国家是否需要填写
        jinkouguojiaInputRequire: false,
        //itemsdep: [],
        // itemsrole: [],
        isTrue: false,
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
          clentScopeId: {
            rules: [
              { required: false, message: '委托范围编号！' },
            ]
          },
          clientStatementId: {
            rules: [
              { required: false, message: '委托书编号！' },
            ]
          },
          vendorId: {
            rules: [
              { required: false, message: '供应商编号!' },
            ]
          },
          vendorName: {
            rules: [
              { required: false, message: '供应商名称!' },
            ]
          },
          payCode: {
            rules: [
              { required: false, message: '付款编码!' },
            ]
          },
          client: {
            rules: [
              { required: true, message: '委托人!' },
            ]
          },
          startDate: {
            rules: [
              { required: false, message: '起始日期!' },
            ]
          },
          endDate: {
            rules: [
              { required: true, message: '结束日期!' },
            ]
          },
         clientIdCard: {
            rules: [
              { required: true, message: '委托人身份证号码!' },
            ]
          },
          idCardIndate: {
            rules: [
              { required: false, message: '身份证效期!' },
            ]
          },
          telephone: {
            rules: [
              { required: false, message: '联系电话!' },
            ]
          },
          notes: {
            rules: [
              { required: false, message: '备注!' },
            ]
          },
          outOfDate: {
            rules: [
              { required: false, message: '过期日期!' },
            ]
          },
         onlineFillIndate: {
            rules: [
              { required: false, message: '网上备案效期!' },
            ]
          },

          saleAuth: {
            rules: [
              { required: false, message: '销售权限!' },
            ]
          },
          pickUpAuth: {
            rules: [
              { required: false, message: '提货权限!' },
            ]
          },
          isDefaultClient: {
            rules: [
              { required: false, message: '是否默认委托人!' },
            ]
          },
          isRebateAuth: {
            rules: [
              { required: false, message: '回款权限!' },
            ]
          },
          createBy: {
            rules: [
              { required: false, message: '建档人!' },
            ]
          },
          createTime: {
            rules: [
              { required: false, message: '建档时间!' },
            ]
          },
          updateBy: {
            rules: [
              { required: false, message: '最终修改人!' },
            ]
          },
          updateTime: {
            rules: [
              { required: false, message: '最终修改时间!' },
            ]
          },
        },  
        url: {
          add: "/ywvendorclientmanage/ywVendorClientManage/add",
          
          edit:"ywvendorclientmanage/ywVendorClientManage/edit",
         
          queryById:"ywvendorclientmanage/ywVendorClientManage/queryById",
          gysHttp:"/ywvendorinfo/ywVendorInfo/querySupplier",
        }
      }
    },
    mounted () {
      this.edit();
      httpAction(this.url.gysHttp,"","get").then((res)=>{
        if(res.success){
          console.log("-------------------这是供应商的-----------------------")
          console.log(res)
          this.gysItems= res.result
          // gysall[res.result[i]['name']]= res.result[i]['code']

          console.log("------------------------------------------")

        }else{
          this.$message.warning(res.message);
        }
      }).finally(() => {
      });
    },
    
    methods: {
      add () {
        this.edit({});
      },
      handReturn () {
        this.$router.push({path:"/Vendor/YwCliSet"})
      },
      edit (record) {
        this.form.resetFields();
        this.model = Object.assign({}, this.$route.query);
        this.visible = true;
        this.$nextTick(() => {
          this.form.setFieldsValue(pick(this.model,'clentScopeId','clientStatementId','vendorId','vendorName','payCode','client','startDate','endDate','clientIdCard','idCardIndate','telephone','notes','outOfDate','onlineFillIndate','saleAuth','pickUpAuth','isDefaultClient','isRebateAuth','createBy','createTime','updateBy','updateTime'))
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
              that.$router.push({path:"/Vendor/YwCliSet"})
            })
          }
        })
      },
      handleCancel () {
        this.close()
      },
      popupCallback(row){
        this.form.setFieldsValue(pick(row,'clentScopeId','clientStatementId','vendorId','vendorName','payCode','client','startDate','endDate','clientIdCard','idCardIndate','telephone','notes','outOfDate','onlineFillIndate','saleAuth','pickUpAuth','isDefaultClient','isRebateAuth','createBy','createTime','updateBy','updateTime'))
      },
      Reset(){
        this.form.resetFields();
      }
    }
  }

</script>

<style scoped>

</style>