<template>
  <div>

    <div style="background-color: white">
      <br>
      <p align="left" style="font-size:20px">
        <b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;供应商基本信息</b>
      </p>
      <a-divider/>
      <a-spin :spinning="confirmLoading">
        <a-form id="ddd" :form="form"  >
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px;color:red">供应商编码</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input  :disabled="true" v-decorator="['vendorId', validatorRules.vendorId]"  ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="16">
              <p style="margin-bottom: 0px ;color:red">供应商名称</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input  v-decorator="['vendorName', validatorRules.vendorName]"  ></a-input>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px ;color:red">供应商助记码</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input  v-decorator="['vendorAbc', validatorRules.vendorAbc]"  ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">曾用名</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input  v-decorator="['oldName', validatorRules.oldName]"  ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">使用状态</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <j-dict-select-tag :disabled="true"  v-decorator="['useStatus', validatorRules.useStatus]" :trigger-change="true" dictCode="sd_status" placeholder="请选择"/>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px ">源系统编码</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol" >
                <a-input  :disabled="true" v-decorator="['originCode', validatorRules.originCode]"  ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px ;color: red">供应商类型</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol" >
                <j-dict-select-tag type="list"  v-decorator="['businessUnitType', validatorRules.businessUnitType]" :trigger-change="true" dictCode="sd_vendor_type" placeholder="请选择类型"/>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px ">法人</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol" >
                <a-input  v-decorator="['legalPerson', validatorRules.legalPerson]"  ></a-input>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px ">地址</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol" >
                <j-area-linkage type="cascader" v-decorator="['address']" placeholder="请选择"/>
              </a-form-item>
            </a-col>
            <a-col :span="16">
              <p style="margin-bottom: 0px ">注册地址</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol" >
                <a-input  v-decorator="['registerAddress', validatorRules.registerAddress]"  ></a-input>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="24">
              <p style="margin-bottom: 0px ">经营范围</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol" >
                <a-input  v-decorator="['businessScope', validatorRules.businessScope]"  ></a-input>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px ">银行账号</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol" >
                <a-input  v-decorator="['bankAcount', validatorRules.bankAcount]"  ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px ">银行名称</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol" >
                <a-input  v-decorator="['bankName', validatorRules.bankName]"  ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px ">业务状态</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol" >
                <j-dict-select-tag type="list" v-decorator="['serviceStatus', validatorRules.serviceStatus]" :trigger-change="true" dictCode="sd_yw_status" placeholder="请选择状态"/>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px ">结算状态</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol" >
                <j-dict-select-tag type="list" v-decorator="['settleStatus', validatorRules.settleStatus]" :trigger-change="true" dictCode="sd_yw_status" placeholder="请选择状态"/>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px ;color:red">纳税类型</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol" >
                <j-dict-select-tag type="list" v-decorator="['taxType', validatorRules.taxType]" :trigger-change="true" dictCode="sd_tax_type" placeholder="请选择状态"/>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px ">注册资本（万元）</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol" >
                <a-input type="number" v-decorator="['registerCapital', validatorRules.registerCapital]"  ></a-input>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px ">采购员</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol" >
                <a-input  v-decorator="['buyer', validatorRules.buyer]"  ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px ">单位监管码</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol" >
                <a-input  v-decorator="['companySupervisedCode', validatorRules.companySupervisedCode]"  ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px ">生产地址</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol" >
                <a-input  v-decorator="['produceArea', validatorRules.produceArea]"  ></a-input>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px ">企业负责人</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol" >
                <a-input  v-decorator="['companyChargePerson', validatorRules.companyChargePerson]"  ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px ">公司成立时间</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol" >
                <j-date placeholder="成立时间" v-decorator="['companyEstablishTime', validatorRules.companyEstablishTime]"  :trigger-change="true" style="width: 100%"/>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px ">联系电话</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol" >
                <a-input  v-decorator="['telephone', validatorRules.telephone]"  ></a-input>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px ">传真</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol" >
                <a-input  v-decorator="['fax', validatorRules.fax]"  ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px ">手机</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol" >
                <a-input  v-decorator="['mobilePhone', validatorRules.mobilePhone]"  ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px ">邮箱</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol" >
                <a-input  v-decorator="['email', validatorRules.email]"  ></a-input>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px ">网址</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol" >
                <a-input  v-decorator="['url', validatorRules.url]"  ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px ">资料来源</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol" >
                <a-input  v-decorator="['dataSource', validatorRules.dataSource]"  ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px ">订单有效天数</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol" >
                <a-input type="number"  v-decorator="['orderIndate', validatorRules.orderIndate]"  ></a-input>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px ">统一信用代码</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol" >
                <a-input  v-decorator="['cuscc', validatorRules.cuscc]"></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px ">税务登记证号</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol" >
                <a-input  v-decorator="['taxRegistrationAccount', validatorRules.taxRegistrationAccount]"  ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px ">注册国家</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol" >
                <j-dict-select-tag type="list"  v-decorator="['registerCountry', validatorRules.registerCountry]" :trigger-change="true" dictCode="sd_country" placeholder="请选择单位"/>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px ">质量负责人</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol" >
                <a-input  v-decorator="['qualityIncharge', validatorRules.qualityIncharge]"  ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px ">电子监管码</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol" >
                <a-input  v-decorator="['elecSupervisedCode', validatorRules.elecSupervisedCode]"  ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px ">是否两票制</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol" >
                <j-dict-select-tag type="list"  v-decorator="['isTwoLicense', validatorRules.isTwoLicense]" :trigger-change="true" dictCode="sd_yn" placeholder="请选择"/>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px ">首次业务时间</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol" >
                <a-input  :disabled="true" v-decorator="['fobTime', validatorRules.fobTime]"  ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px ">末次业务时间</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol" >
                <a-input  :disabled="true" v-decorator="['endBusinessTime', validatorRules.endBusinessTime]"  ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px ">档案号</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol" >
                <a-input :disabled="true" v-decorator="['archiveNo', validatorRules.archiveNo]"  ></a-input>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px ">档案号生成日期</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol" >
                <a-input  :disabled="true" v-decorator="['archiveDate', validatorRules.archiveDate]"  ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px ">建档日期</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol" >
                <a-input  :disabled="true" v-decorator="['documentCreateTime', validatorRules.documentCreateTime]"  ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px ">说明</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol" >
                <a-input  v-decorator="['illustration', validatorRules.illustration]"  ></a-input>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="24">
              <p style="margin-bottom: 0px ">备注</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol" >
                <a-input  v-decorator="['notes', validatorRules.notes]"  ></a-input>
              </a-form-item>
            </a-col>
                
        </a-row>
        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col style="float: right ;overflow: hidden;" class="table-page-search-submitButtons">
              <span>
                <a-button @click="handReturn" style="margin-right: 8px">
                  取消
                </a-button>
                <a-button type="primary" @click="Reset" style="margin-right: 8px">
                  重置
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
  
  import pick from 'lodash.pick'
  import '@/assets/less/TableExpand.less'
  import { httpAction } from '@/api/manage'
  import JDate from '@/components/jeecg/JDate'
  import JDictSelectTag from "@/components/dict/JDictSelectTag"
  import JMultiSelectTag from "@/components/dict/JMultiSelectTag"
  import JAreaLinkage from '@comp/jeecg/JAreaLinkage'

  export default {
    name: "YwSupFileBas",
    components: {
      JDate,
      JDictSelectTag,
      JAreaLinkage,
      
    },
    data () {
      return {
        
        // 申报部门选项
        sqbmItems: [],
        
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
          vendorId: {
            rules: [
              { required: false, message: '供应商编码!' },
            ]
          },
          vendorNamec: {
            rules: [
              { required: true, message: '供应商名称!' },
            ]
          },
          vendorAbc: {
            rules: [
              { required: true, message: '供应商助记码!' },
            ]
          },
          oldName: {
            rules: [
              { required: false, message: '曾用名!' },
            ]
          },
          useStatus: {
            rules: [
              { required: false, message: '使用状态!' },
            ]
          },
          originCode: {
            rules: [
              { required: false, message: '源系统编码!' },
            ]
          },
          businessUnitType: {
            rules: [
              { required: true, message: '供应商类型!' },
            ]
          },
          legalPerson: {
            rules: [
              { required: false, message: '法人!' },
            ]
          },
          businessScope: {
            rules: [
              { required: false, message: '经营范围!' },
            ]
          },
          address: {
            rules: [
              { required: false, message: '地址!' },
            ]
          },
          registerAddress: {
            rules: [
              { required: false, message: '注册地址!' },
            ]
          },
          bankAcount: {
            rules: [
              { required: false, message: '银行账号!' },
            ]
          },
          bankName: {
            rules: [
              { required: false, message: '银行名称!' },
            ]
          },
          serviceStatus: {
            rules: [
              { required: false, message: '业务状态!' },
            ]
          },
          settleStatus: {
            rules: [
              { required: false, message: '结算状态!' },
            ]
          },
          taxType: {
            rules: [
              { required: true, message: '纳税类型!' },
            ]
          },
          registerCapital: {
            rules: [
              { required: false, message: '注册资本（万元）!' },
            ]
          },
          buyer: {
            rules: [
              { required: false, message: '采购员!' },
            ]
          },
          companySupervisedCode: {
            rules: [
              { required: false, message: '单位监管码!' },
            ]
          },
          produceArea: {
            rules: [
              { required: false, message: '生产地址!' },
            ]
          },
          companyChargePerson: {
            rules: [
              { required: false, message: '企业负责人!' },
            ]
          },
          companyEstablishTime: {
            rules: [
              { required: false, message: '公司成立时间!' },
            ]
          },
          telephone:{
            rules: [
              { required: false, message: '联系电话!' },
            ]
          },
          fax: {
            rules: [
              { required: false, message: '传真!' },
            ]
          },
          mobilePhone: {
            rules: [
              { required: false, message: '手机!' },
            ]
          },
          email: {
            rules: [
              { required: false, message: '邮箱!' },
            ]
          },
          url: {
            rules: [
              { required: false, message: '网址!' },
            ]
          },
          dataSource: {
            rules: [
              { required: false, message: '资料来源!' },
            ]
          },
          orderIndate: {
            rules: [
              { required: false, message: '订单有效天数!' },
            ]
          },
          cuscc: {
            rules: [
              { required: false, message: '统一信用代码!' },
            ]
          },
          taxRegistrationAccount: {
            rules: [
              { required: false, message: '税务登记证号!' },
            ]
          },
          registerCountry: {
            rules: [
              { required: false, message: '注册国家!' },
            ]
          },
          qualityIncharge: {
            rules: [
              { required: false, message: '质量负责人!' },
            ]
          },
          elecSupervisedCode: {
            rules: [
              { required: false, message: '电子监管码!' },
            ]
          },
          isTwoLicense: {
            rules: [
              { required: false, message: '是否两票制!' },
            ]
          },
          fobTime: {
            rules: [
              { required: false, message: '首次业务时间!' },
            ]
          },
          endBusinessTime: {
            rules: [
              { required: false, message: '末次业务时间!' },
            ]
          },
          archiveNo: {
            rules: [
              { required: false, message: '档案号!' },
            ]
          },
          archiveDate: {
            rules: [
              { required: false, message: '档案号生成日期!' },
            ]
          },
          documentCreateTime: {
            rules: [
              { required: false, message: '>建档日期!' },
            ]
          },
          illustration: {
            rules: [
              { required: false, message: '说明!' },
            ]
          },
          notes: {
            rules: [
              { required: false, message: '备注!' },
            ]
          }, 


        },
        url: {
            add: "/ywvendorinfo/ywVendorInfo/add",
            exportXlsUrl: "/ywfobvendorinfo/ywFobVendorInfo/exportXls",
            create: "/ywvendorinfo/ywVendorInfo/create",
            edit: "/ywvendorinfo/ywVendorInfo/edit",
            editByInsert: "/ywvendorinfo/ywVendorInfo/editByInsert",
            queryAllVendor: "/ywvendorinfo/ywVendorInfo/queryAllVendor",
            querySupplier: "/ywvendorinfo/ywVendorInfo/querySupplier",

        }
      }
    },
    created () {
    },
    mounted() {
      const that = this;

      httpAction(this.url.create,'','post').then((res)=>{
        if(res.success){
          console.log("-------------------这是申请的code的-----------------------")
          that.vendorId = res.result.vendorId ;

          console.log(that.vendorId)

          console.log("------------------------------------------")

        }else{
          this.$message.warning(res.message);
        }
      }).finally(() => {


      });
      this.edit(this.$route.query);
    }, 
    methods: {
      add () {
            this.edit({});
          },
          handReturn () {
            this.$router.push({path:"/Vendor/YwSupFile"})
          },
          edit (record) {
            this.form.resetFields();
            this.model = Object.assign({},record);
            this.visible = true;
            this.$nextTick(() => {
              this.form.setFieldsValue(pick(this.model,'vendorId','vendorName','vendorAbc','oldName','useStatus','originCode','businessUnitType','legalPerson','address','registerAddress','bankAcount','bankName','serviceStatus','settleStatus','taxType','registerCapital','buyer','companySupervisedCode','produceArea','companyChargePerson','businessScope','outputTaxRate','companyEstablishTime','telephone','fax','mobilePhone','email','url','dataSource','orderIndate','cuscc','taxRegistrationAccount','registerCountry','qualityIncharge','elecSupervisedCode','isTwoLicense','fobTime','endBusinessTime','archiveNo','archiveDate','documentCreateTime','illustration','notes'))
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
                 formData['vendorId']= that.vendorId
             
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
                  // that.$router.push({path:"/Vendor/YwSupFile"})
                })
              }else {
                   return this.$message.info('还存在必填项未填写')
              }
            })
          },
      handleCancel () {
        this.close()
      },
      popupCallback(row){
            this.form.setFieldsValue(pick(row,'vendorId','vendorName','vendorAbc','oldName','useStatus','originCode','businessUnitType','legalPerson','address','registerAddress','bankAcount','bankName','serviceStatus','settleStatus','taxType','registerCapital','buyer','companySupervisedCode','produceArea','companyChargePerson','outputTaxRate','companyEstablishTime','businessScope','telephone','fax','mobilePhone','email','url','dataSource','orderIndate','cuscc','taxRegistrationAccount','registerCountry','qualityIncharge','elecSupervisedCode','isTwoLicense','fobTime','endBusinessTime','archiveNo','archiveDate','documentCreateTime','illustration','notes'))
      },
      Reset(){
        this.form.resetFields();
      },
      
    }
  }

</script>

<style scoped>

</style>