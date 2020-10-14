<template>
  <div>

    <div class="Vendor-settings-info-view" style="background-color: white">
      <br>
      <p align="left" style="font-size:20px">
        <b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;单据信息</b>
      </p>
      <a-divider/>
      <a-spin :spinning="confirmLoading">
        <a-form :form="form"  >
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px">单据编号</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input :disabled="true" v-decorator="['documentNo', validatorRules.documentNo]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">单据状态</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input :disabled="true" v-decorator="['documentStatus', validatorRules.documentStatus]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">申报日期</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input :disabled="true" v-decorator="['applyDate', validatorRules.applyDate]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>

          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px;color: red">申报部门</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <!-- <a-select v-decorator="['applyDepart', validatorRules.applyDepart]">
                  <div slot="dropdownRender" slot-scope="menu">
                    <v-nodes :vnodes="menu"
                    />
                    <a-divider style="margin: 4px 0;" />
                  </div>
                  <a-select-option v-for="item in sqbmItems" :key="item" :value="item">
                    {{ item }}
                  </a-select-option>
                </a-select> -->
                <a-input :disabled="true" v-decorator="['applyDepart', validatorRules.applyDepart]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">申报人</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input :disabled="true" v-decorator="['applyPerson', validatorRules.applyPerson]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">审批日期</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input :disabled="true" v-decorator="['checkDate', validatorRules.checkDate]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>

          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]" >

            <a-col :span="8">
              <p style="margin-bottom: 0px">转正日期</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input :disabled="true" v-decorator="['executeDate', validatorRules.executeDate]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </a-spin>
    </div>
    <div>
      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;
    </div>
    <div style="background-color: white">
      <br>
      <p align="left" style="font-size:20px">
        <b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;供应商基本信息</b>
      </p>
      <a-divider/>
      <a-spin :spinning="confirmLoading">
        <a-form :form="form"  >
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px">供应商编号</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input :disabled="true" v-decorator="['vendorNo', validatorRules.vendorNo]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="16">
              <p style="margin-bottom: 0px ;color: red">供应商名称</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input :disabled="true" v-decorator="['vendorName', validatorRules.vendorName]" placeholder="请输入供应商名称" ></a-input>
              </a-form-item>
            </a-col>
           
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px ;color: red">企业类型</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <j-dict-select-tag type="list"  v-decorator="['groupType', validatorRules.groupType]" :trigger-change="true" placeholder="请选择"/>
              </a-form-item>
            </a-col>
            <a-col :span="16">
              <p style="margin-bottom: 0px ;color: red">注册地址</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['registerAddress', validatorRules.registerAddress]" placeholder="请输入注册地址" ></a-input>
              </a-form-item>
            </a-col>

          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="16">
              <p style="margin-bottom: 0px ;color: red">地址</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
               <j-area-linkage type="cascader" v-decorator="['address']" placeholder="请选择"/>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">法人代表</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['legalRepresent', validatorRules.legalRepresent]" placeholder="请输入法人代表" ></a-input>
              </a-form-item>
            </a-col>

          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]" >
            <a-col :span="8">
              <p style="margin-bottom: 0px">邮政编码</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['postCode', validatorRules.postCode]" placeholder="请输入邮政编码" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">联系人</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['linkman', validatorRules.linkman]" placeholder="请输入联系人" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">联系人电话</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['linkmanPhone', validatorRules.linkmanPhone]" placeholder="请输入联系人电话" ></a-input>
              </a-form-item>
            </a-col>
          
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]" >

            <a-col :span="8">
              <p style="margin-bottom: 0px">联系人传真</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['linkmanFax', validatorRules.linkmanFax]" placeholder="请输入联系人传真" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="16">
              <p style="margin-bottom: 0px">不良记录</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['badRecordes', validatorRules.badRecordes]" placeholder="请输入不良记录" ></a-input>
              </a-form-item>
            </a-col>
            
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]" >

            <a-col :span="8">
              <p style="margin-bottom: 0px ;color: red">组织机构代码</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['orgCode', validatorRules.orgCode]" placeholder="请输入组织机构代码" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px ;color: red">税号</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['taxNum', validatorRules.taxNum]" placeholder="请输入税号" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px ;color: red">统一信用代码证</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['cuscc', validatorRules.cuscc]" placeholder="请输入统一信用代码证" ></a-input>
              </a-form-item>
            </a-col>

          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]" >

            <a-col :span="8">
              <p style="margin-bottom: 0px">开户银行</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['depositBank', validatorRules.depositBank]" placeholder="请输入开户银行" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">银行账号</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['bankNum', validatorRules.bankNum]" placeholder="请输入银行账号" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">电子监管码</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['esc', validatorRules.esc]" placeholder="请输入电子监管码" ></a-input>
              </a-form-item>
            </a-col>
          
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]" >

            <a-col :span="8">
              <p style="margin-bottom: 0px ;color: red">注册资本（万元）</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input  min ="0" type="number" v-decorator="['registerCapital', validatorRules.registerCapital]" placeholder="请输入注册资本" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">质量负责人</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['qualityIncharge', validatorRules.qualityIncharge]" placeholder="请输入质量负责人" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px ;color: red">企业负责人</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['groupIncharge', validatorRules.groupIncharge]" placeholder="请输入企业负责人" ></a-input>
              </a-form-item>
            </a-col>
          
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]" >

            <a-col :span="24">
              <p style="margin-bottom: 0px">经营范围</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <!-- <JSelectFw>选择</JSelectFw> -->
              </a-form-item>
            </a-col>
          
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]" >

            <a-col :span="24">
              <p style="margin-bottom: 0px">生产范围</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <!-- <a-input v-decorator="['produceScope', validatorRules.produceScope]" placeholder="请输入生产范围" ></a-input> -->
              </a-form-item>
            </a-col>
          
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
            <p style="margin-bottom: 0px ;color: red">有无质量保证协议</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <j-dict-select-tag type="list"  v-decorator="['isQualityPromise', validatorRules.isQualityPromise]" :trigger-change="true" dictCode="sd_have" placeholder="请选择有无质量保证协议"/>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">是否有业务代表</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <j-dict-select-tag type="list"  v-decorator="['isHaveAgent', validatorRules.isHaveAgent]" :trigger-change="true" dictCode="sd_yn" placeholder="请选择是否有业务代表"/>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">授权人姓名</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['authorizedName', validatorRules.authorizedName]" placeholder="请输入授权人姓名" ></a-input>
              </a-form-item>
            </a-col>
          
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
            <p style="margin-bottom: 0px">授权书有效期</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <j-date placeholder="授权书有效期" v-decorator="['authorizedIndate', validatorRules.authorizedIndate]"  :trigger-change="true" style="width: 100%"/>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">授权人身份证号码</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['authorizedIdCard', validatorRules.authorizedIdCard]" placeholder="请输入授权人身份证号码" ></a-input>
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
       </a-spin>
    </div>
    <div>
      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;
    </div>    
    <div style="background-color: white">
      <br>
      <p align="left" style="font-size:20px">
        <b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;文件信息</b>
      </p>
      <a-divider/>
      <a-spin :spinning="confirmLoading">
        <a-form :form="form"  >
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px">文件归档编号</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input :disabled="true" v-decorator="['documentArchiveNo', validatorRules.documentArchiveNo]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">业务员备案情况</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['salesmanRegistration', validatorRules.salesmanRegistration]" placeholder="请输入业务员备案情况" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px ;color: red">备案有效期</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <j-date placeholder="备案有效期" v-decorator="['registrationIndate', validatorRules.registrationIndate]"  :trigger-change="true" style="width: 100%"/>
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

  import { httpAction } from '@/api/manage'
  import pick from 'lodash.pick'
  import { validateDuplicateValue } from '@/utils/util'
  import JDate from '@/components/jeecg/JDate'
  import JAreaLinkage from '@comp/jeecg/JAreaLinkage'
  import JDictSelectTag from "@/components/dict/JDictSelectTag"
  // import JSelectFw from '../../components/jeecgbiz/JSelectFw'
  
  export default {
    name: "SupBasEdit",
    components: {
      JDate,
      JDictSelectTag,
      validateDuplicateValue,
      JAreaLinkage,
      // JSelectFw,
    },
    data () {
      return {
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
          documentNo: {
            rules: [
              { required: false, message: '单据编号！' },
            ]
          },
          documentStatus: {
            rules: [
              { required: false, message: '单据状态！' },
            ]
          },
          applyDate: {
            rules: [
              { required: false, message: '申报日期!' },
            ]
          },
          applyDepart: {
            rules: [
              { required: false, message: '申报部门!' },
            ]
          },
          applyPerson: {
            rules: [
              { required: false, message: '申报人!' },
            ]
          },
          checkDate: {
            rules: [
              { required: false, message: '审批日期!' },
            ]
          },
          executeDate: {
            rules: [
              { required: false, message: '转正日期!' },
            ]
          },
          vendorNo: {
            rules: [
              { required: false, message: '供应商编号!' },
            ]
          },
         vendorName: {
            rules: [
              { required: false, message: '供应商名称!' },
            ]
          },
          groupType: {
            rules: [
              { required: false, message: '企业类型!' },
            ]
          },
          registerAddress: {
            rules: [
              { required: false, message: '注册地址!' },
            ]
          },
          address: {
            rules: [
              { required: false, message: '地址!' },
            ]
          },
          legalRepresent: {
            rules: [
              { required: false, message: '法人代表!' },
            ]
          },
         postCode: {
            rules: [
              { required: false, message: '邮政编码!' },
              { pattern:/^[1-9][0-9]{6}$/, message: '请输入正确的邮政编码!'},
            ]
          },
          linkman: {
            rules: [
              { required: false, message: '联系人!' },
            ]
          },
          linkmanPhone: {
            rules: [
              { required: false, message: '联系人电话!' },
              { pattern:/^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/, message: '请输入正确的联系人电话!'},
            ]
          },
          linkmanFax: {
            rules: [
              { required: false, message: '联系人传真!' },
            ]
          },
          badRecordes: {
            rules: [
              { required: false, message: '不良记录!' },
            ]
          },
          orgCode: {
            rules: [
              { required: true, message: '组织机构代码!' },
            ]
          },
          taxNum: {
            rules: [
              { required: true, message: '税号!' },
            ]
          },
          cuscc: {
            rules: [
              { required: true, message: '统一信用代码证!' },
            ]
          },
          depositBank: {
            rules: [
              { required: false, message: '开户银行!' },
            ]
          },
          bankNum: {
            rules: [
              { required: false, message: '银行账号!' },
              { pattern:/^([1-9]{1})(\d{14}|\d{18}|\d{15})$/, message: '请输入正确的银行账户!'},
            ]
          },
          esc: {
            rules: [
              { required: false, message: '电子监管码!' },
            ]
          },
          registerCapital: {
            rules: [
              { required: false, message: '注册资本（万元）!' },
            ]
          },
          qualityIncharge: {
            rules: [
              { required: false, message: '质量负责人!' },
            ]
          },
          groupIncharge: {
            rules: [
              { required: false, message: '企业负责人!' },
            ]
          },
          businessScope: {
            rules: [
              { required: false, message: '经营范围!' },
            ]
          },
          produceScope: {
            rules: [
              { required: false, message: '生产范围!' },
              // { type: 'number', message: '件包装数量必须为数字值', trigger: 'blur'}
            ]
          },
          isQualityPromise: {
            rules: [
              { required: false, message: '有无质量保证协议!' },
              // { type: 'number', message: '中包装数量必须为数字值', trigger: 'blur'}
            ]
          },
          isHaveAgent: {
            rules: [
              { required: false, message: '是否有业务代表!' },
            ]
          },
          authorizedName: {
            rules: [
              { required: false, message: '授权人姓名!' },
            ]
          },
          // wareFirstClass: {
          //   rules: [
          //     { required: false, message: '!' },
          //   ]
          // },
          authorizedIndate: {
            rules: [
              { required: false, message: '授权书有效期!' },
            ]
          },
          authorizedIdCard: {
            rules: [
              { required: false, message: '授权人身份证号码!' },
              { pattern:/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/, message: '请输入正确的身份证号!'},
            ]
          },
          documentArchiveNo: {
            rules: [
              { required: false, message: '文件归档编号!' },
            ]
          },
          salesmanRegistration: {
            rules: [
              { required: false, message: '业务员备案情况!' },
            ]
          },
          registrationIndate: {
            rules: [
              { required: false, message: '备案有效期!' },
            ]
          },
        },

        url: {
          add: "/ywfobvendorinfo/ywFobVendorInfo/add",
          edit: "/ywfobvendorinfo/ywFobVendorInfo/edit",
          softDel: "/ywfobvendorinfo/ywFobVendorInfo/softDel",
          softDelBatch: "/ywfobvendorinfo/ywFobVendorInfo/softDelBatch",
          list: "/ywfobvendorinfo/ywFobVendorInfo/list",
          queryById: "/ywfobvendorinfo/ywFobVendorInfo/queryById",
          sqbmHttp:"/sys/sysDepart/queryTreeList",
          // create:"/ywfobvendorinfo/ywFobVendorInfo/create",
        }
      }
    },
    created () {
    },

    mounted () {
      // httpAction(this.url.getCodeHttp,'','post').then((res)=>{
      //   if(res.success){
      //     console.log("-------------------这是申请的code的-----------------------")
      //     this.vendorNo = res.result.vendorId ;
      //     console.log(res)
      //     console.log("------------------------------------------")

      //   }else{
      //     this.$message.warning(res.message);
      //   }
      // }).finally(() => {
      // });
      httpAction(this.url.sqbmHttp,"","get").then((res)=>{
        if(res.success){
          console.log("-------------------这是申请部门的-----------------------")

          console.log(res)
          console.log("------------------------------------------")
          this.sqbmItems = res.result;
          console.log(this.sqbmItems);
          // sqbmall[res.result['sysDepName']]= res.result['sysOrgCode']


        }else{
          this.$message.warning(res.message);
        }
      }).finally(() => {


      });

      this.edit();
    },

    methods: {
      add () {
         this.edit({});
      },
      handReturn () {
        this.$router.push({path:"/Vendor/YwSupplier"})
      },
      edit (record) {
        this.form.resetFields();
        this.model = Object.assign({}, this.$route.query);
        this.visible = true;
        this.$nextTick(() => {
          this.form.setFieldsValue(pick(this.model,'documentNo','documentStatus','applyDate','applyDepart','applyPerson','checkDate','executeDate','vendorNo','vendorName','groupType','registerAddress','address','legalRepresent','postCode','linkman','linkmanPhone','linkmanFax','badRecordes','orgCode','taxNum','cuscc','depositBank','bankNum','esc','registerCapital','qualityIncharge','groupIncharge','businessScope','produceScope','isQualityPromise','isHaveAgent','authorizedName','authorizedIndate','authorizedIdCard','documentArchiveNo','salesmanRegistration','registrationIndate'))
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
              that.$router.push({path:"/Vendor/sup/SupCerEdit"})
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
        this.form.setFieldsValue(pick(row,'documentNo','documentStatus','applyDate','applyDepart','applyPerson','checkDate','executeDate','vendorNo','vendorName','groupType','registerAddress','address','legalRepresent','postCode','linkman','linkmanPhone','linkmanFax','badRecordes','orgCode','taxNum','cuscc','depositBank','bankNum','esc','registerCapital','qualityIncharge','groupIncharge','businessScope','produceScope','isQualityPromise','isHaveAgent','authorizedName','authorizedIndate','authorizedIdCard','documentArchiveNo','salesmanRegistration','registrationIndate'))
      },
      Reset(){
        this.form.resetFields();
      }
    }
  }
</script>

<style scoped>

</style>