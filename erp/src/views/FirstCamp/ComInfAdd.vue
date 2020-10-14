<template>
  <div>

    <div style="background-color: white">
      <br>
      <p align="left" style="font-size:20px">
        <b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;商品基本信息</b>
      </p>
      <a-divider/>
      <a-spin :spinning="confirmLoading">
        <a-form :form="form"  >
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px">商品编码</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input :disabled="true" v-decorator="['wareId', validatorRules.wareId]" placeholder="请输入商品编码" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px;color: red">商品名称</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input  v-decorator="['wareName', validatorRules.wareName]" placeholder="请输入商品名称" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px;color: red">通用名称</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input  v-decorator="['commonName', validatorRules.commonName]" placeholder="请输入通用名称" ></a-input>
              </a-form-item>
            </a-col>

          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px;color: red">助记码</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input  v-decorator="['abc', validatorRules.abc]" placeholder="请输入助记码" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8" >
              <p style="margin-bottom: 0px;color: red">商品规格</p>
              <a-form-item  :labelCol="labelCol" >
                <a-input  v-decorator="['wareSpeci', validatorRules.wareSpeci]" placeholder="请输入商品规格" ></a-input>
              </a-form-item>
            </a-col>


          </a-row>

          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]" >

            <a-col :span="16">
              <p style="margin-bottom: 0px;color: red">生产企业</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input  v-decorator="['manufacture', validatorRules.manufacture]" placeholder="请输入生产企业" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px;color: red">商品单位</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <j-dict-select-tag type="list"  v-decorator="['wareUnit', validatorRules.wareUnit]" :trigger-change="true" dictCode="sd_ware_unit" placeholder="请选择单位"/>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">

            <a-col :span="8">
              <p style="margin-bottom: 0px;color: red">产地</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input  v-decorator="['producingArea', validatorRules.producingArea]" placeholder="请输入产地" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">

              <p style="margin-bottom: 0px;color: red">条形码</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input  v-decorator="['barCode', validatorRules.barCode]" placeholder="请输入条形码" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">标注</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input  v-decorator="['personalIdentity', validatorRules.personalIdentity]" placeholder="请输入标注" ></a-input>
              </a-form-item>
            </a-col>

          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="24">
              <p style="margin-bottom: 0px;color: red">生产企业(委托方)</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input  v-decorator="['manufactureClient', validatorRules.manufactureClient]" placeholder="请输入生产企业(委托方)" ></a-input>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 16, sm: 24, md: 32},{ xs: 16, sm: 24, md: 32}]">
            <a-col :span="24">
              <p style="margin-bottom: 0px;color: red">分包装生产企业</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input  v-decorator="['packageClient', validatorRules.packageClient]" placeholder="请输入分包装生产企业" ></a-input>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px;color: red">件包装数量</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input min="0" type="number" v-decorator="['maxPackageNumber', validatorRules.maxPackageNumber]" placeholder="请输入件包装数量" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px;color: red">中包装数量</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input min="0" type="number" v-decorator="['mediumPackageNumber', validatorRules. mediumPackageNumber]" placeholder="请输入中包装数量" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px;color: red">商品有效期(天数)</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input min="0" type="number" v-decorator="['waeIndate', validatorRules.waeIndate]" placeholder="请输入商品有效期(天数)" ></a-input>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">

          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px;color: red">是否进口</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <j-dict-select-tag type="list"  v-decorator="['isImport', validatorRules.isImport]" :trigger-change="true" dictCode="sd_yn" placeholder="请选择单位" @change="selectIsJinKou"/>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px ;color: red">原产国</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <j-dict-select-tag :disabled="!jinkouguojiaInputRequire" type="list"  v-decorator="['originCountry', validatorRules.originCountry]" :trigger-change="true" dictCode="sd_country" placeholder="请选择单位"
                />
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px ;color: red">进项税率</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <j-dict-select-tag type="list" :isValue="false" v-decorator="['inputTaxRate', validatorRules.inputTaxRate]" :trigger-change="true" dictCode="sd_tax_rate" placeholder="请选择单位" />
              </a-form-item>
            </a-col>
          </a-row>


          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px;color: red">销项税率</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <j-dict-select-tag type="list"  v-decorator="['outputTaxRate', validatorRules.outputTaxRate]" :trigger-change="true" dictCode="sd_tax_rate" placeholder="请选择单位"/>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">批发价</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['whlprice',validatorRules.whlprice]" placeholder="请输入批发价"></a-input>
              </a-form-item>
            </a-col>
            <a-col span="8">
              <p style="margin-bottom: 0px">零售价</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['salePrice',validatorRules.salePrice]" placeholder="请输入零售价"></a-input>
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col span="8">
            <p style="margin-bottom: 0px">商品状态</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input v-decorator="['wareStatus',validatorRules.wareStatus]" placeholder="请输入商品状态"></a-input>
            </a-form-item>
          </a-col>
          <a-col span="8">
            <p style="margin-bottom: 0px">采购状态</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input :disabled="true" v-decorator="['purStatus',validatorRules.purStatus]" ></a-input>
            </a-form-item>
          </a-col>
          <a-col span="8">
            <p style="margin-bottom: 0px">销售状态</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input :disabled="true" v-decorator="['saleStatus',validatorRules.saleStatus]" ></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col span="8">
            <p style="margin-bottom: 0px">创建人</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input :disabled="true" v-decorator="['createBy',validatorRules.createBy]" ></a-input>
            </a-form-item>
          </a-col>
          <a-col span="8">
            <p style="margin-bottom: 0px">创建时间</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input :disabled="true" v-decorator="['createTime',validatorRules.createTime]" ></a-input>
            </a-form-item>
          </a-col>
          <a-col span="8">
            <p style="margin-bottom: 0px">收货时间</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input :disabled="true" v-decorator="['initTime',validatorRules.initTime]" ></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col span="8">
            <p style="margin-bottom: 0px">最后销售时间</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input :disabled="true" v-decorator="['lastSaleTime',validatorRules.lastSaleTime]" ></a-input>
            </a-form-item>
          </a-col>
          <a-col span="8">
            <p style="margin-bottom: 0px">最新入库时间</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input :disabled="true" v-decorator="['lastTime',validatorRules. lastTime]" ></a-input>
            </a-form-item>
          </a-col>
          <a-col span="8">
            <p style="margin-bottom: 0px">首次销售时间</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input :disabled="true" v-decorator="['firstSaleTime',validatorRules.firstSaleTime]" ></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col span="8">
            <p style="margin-bottom: 0px">最终修改人</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input :disabled="true" v-decorator="['updateBy',validatorRules.updateBy]" ></a-input>
            </a-form-item>
          </a-col>
          <a-col span="8">
            <p style="margin-bottom: 0px">最终修改时间</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input :disabled="true" v-decorator="['updateTime',validatorRules.updateTime]" ></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col style="float: right ;overflow: hidden;" class="table-page-search-submitButtons">
              <span>
                <a-button @click="handReturn" style="margin-right: 8px">
                  返回
                </a-button>
                <!--                <a-button type="primary" @click="Reset" style="margin-right: 8px">-->
                <!--                 重置-->
                <!--                </a-button>-->
                <a-button type="primary" html-type="submit" @click="handleOk" style="margin-right: 16px">
                 保存
                </a-button>
              </span>
          </a-col>
        </a-row>
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

  var wareCode = null ;


  export default {
    name: "ComAdd",
    components: {
      JDate,
      JDictSelectTag,
      validateDuplicateValue
    },

    data () {
      return {
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
          abc: {
            rules: [
              { required: false, message: '请输入助记码!' },
            ]
          },
          updateTime: {
            rules: [
              { required: false, message: '请输入最终修改时间!' },
            ]
          },
          updateBy: {
            rules: [
              { required: false, message: '请输入最终修改人!' },
            ]
          },
          firstSaleTime: {
            rules: [
              { required: false, message: '请输入首次销售时间!' },
            ]
          },
          lastTime: {
            rules: [
              { required: false, message: '请输入最新库存时间!' },
            ]
          },
          lastSaleTime: {
            rules: [
              { required: false, message: '请输入最后销售时间!' },
            ]
          },
          initTime: {
            rules: [
              { required: false, message: '请输入收货时间!' },
            ]
          },
          createTime: {
            rules: [
              { required: false, message: '请输入创建时间!' },
            ]
          },
          createBy: {
            rules: [
              { required: false, message: '请输入创建人!' },
            ]
          },
          personalIdentity: {
            rules: [
              { required: false, message: '请输入标注!' },
            ]
          },
          saleStatus: {
            rules: [
              { required: false, message: '请输入销售状态!' },
            ]
          },
          purStatus: {
            rules: [
              { required: false, message: '请输入采购状态!' },
            ]
          },
          wareStatus: {
            rules: [
              { required: false, message: '请输入商品状态!' },
            ]
          },
          whlprice: {
            rules: [
              { required: false, message: '请输入批发价!' },
            ]
          },
          waeIndate: {
            rules: [
              { required: false, message: '请输入商品有效期!' },
            ]
          },
          wareId: {
            rules: [
              { required: false, message: '请输入商品编码!' },
            ]
          },
          commonName: {
            rules: [
              { required: true, message: '请输入商品通用名!' },
            ]
          },
          wareSpeci: {
            rules: [
              { required: true, message: '请输入商品规格!' },
            ]
          },
          wareUnit: {
            rules: [
              { required: true, message: '请输入商品单位!' },
            ]
          },
          manufacture: {
            rules: [
              { required: true, message: '请输入生产企业!' },
            ]
          },
          wareName: {
            rules: [
              { required: true, message: '请输入商品名称!' },
            ]
          },
          englishName: {
            rules: [
              { required: false, message: '请输入英文名!' },
            ]
          },
          producingArea: {
            rules: [
              { required: false, message: '请输入产地!' },
              { message: '通常写到省即可!'},
            ]
          },
          chargeFileNo: {
            rules: [
              { required: true, message: '请输入药品批准文号/注册证号!' },
            ]
          },
          chargeFileIndate: {
            rules: [
              { required: false, message: '请输入药品批准文号/注册证号有效期!' },
            ]
          },
          manufactureClient: {
            rules: [
              { required: true, message: '请输入生产企业委托方!' },
            ]
          },
          packageClient: {
            rules: [
              { required: false, message: '请输入分包装企业!' },
            ]
          },
          barCode: {
            rules: [
              { required: false, message: '请输入条形码!' },
            ]
          },
          maxPackageNumber: {
            rules: [
              { required: true, message: '请输入件包装数量!' },
              // { type: 'number', message: '件包装数量必须为数字值', trigger: 'blur'}
            ]
          },
          mediumPackageNumber: {
            rules: [
              { required: true, message: '请输入中包装数量!' },
              // { type: 'number', message: '中包装数量必须为数字值', trigger: 'blur'}
            ]
          },
          wareIndate: {
            rules: [
              { required: false, message: '请输入有效期!' },
            ]
          },
          packageMaterial: {
            rules: [
              { required: false, message: '请输入注射剂内包装材质!' },
            ]
          },
          // wareFirstClass: {
          //   rules: [
          //     { required: false, message: '请输入商品大类!' },
          //   ]
          // },
          wareSecondClass: {
            rules: [
              { required: false, message: '请输入商品二级分类!' },
            ]
          },
          businessType: {
            rules: [
              { required: false, message: '请输入经营范围!' },
            ]
          },
          wareFirstClass: {
            rules: [
              { required: false, message: '请输入商品大类!' },
            ]
          },
          drugForm: {
            rules: [
              { required: false, message: '请输入剂型!' },
            ]
          },
          mainFunction: {
            rules: [
              { required: false, message: '请输入主治功能!' },
            ]
          },
          recipelType: {
            rules: [
              { required: false, message: '请输入处方分类!' },
            ]
          },
          inputTaxRate: {
            rules: [
              { required: true, message: '请输入进项税率!' },
            ]
          },
          outputTaxRate: {
            rules: [
              { required: true, message: '请输入销项税率!' },
            ]
          },
          isImport: {
            rules: [
              { required: true, message: '请输入是否进口!' },
            ]
          },
          originCountry: {
            rules: [
              { required: this.jinkouguojiaInputRequire, message: '请输入原产国!' },
            ]
          },
          drugProperty: {
            rules: [
              { required: false, message: '请输入药品性状!' },
            ]
          },
          documentArchiveNo: {
            rules: [
              { required: false, message: '请输入文件归档编号!' },
            ]
          },
          brand: {
            rules: [
              { required: false, message: '请输入商标!' },
            ]
          },
          notes: {
            rules: [
              { required: false, message: '请输入备注!' },
            ]
          },
          isAnes: {
            rules: [
              { required: true, message: '请输入是否含麻!' },
            ]
          },
          isSpecial: {
            rules: [
              { required: true, message: '请输入是否特殊药品!' },
            ]
          },
          cureType: {
            rules: [
              { required: true, message: '请输入养护类型!' },
            ]
          },
          storageCondition: {
            rules: [
              { required: true, message: '请输入存储条件!' },
            ]
          },
          gmp: {
            rules: [
              { required: false, message: '请输入gmp证书!' },
            ]
          },
          gmpIndate: {
            rules: [
              { required: false, message: '请输入gmp证书有效期!' },
            ]
          },
          importLicense: {
            rules: [
              { required: false, message: '请输入进口注册证号!' },
            ]
          },
          importLicenseIndate: {
            rules: [
              { required: false, message: '请输入进口注册证号有效期!' },
            ]
          },
          manuLicense: {
            rules: [
              { required: false, message: '请输入生产许可证!' },
            ]
          },
          manuLicenseIndate: {
            rules: [
              { required: false, message: '请输入生产许可证有效期!' },
            ]
          },
          packageLicense: {
            rules: [
              { required: false, message: '请输入分包装注册证号!' },
            ]
          },
          packageLicenseIndate: {
            rules: [
              { required: false, message: '请输入分包装注册证号有效期!' },
            ]
          },
          supplyPrice: {
            rules: [
              { required: false, message: '请输入进价!' },
            ]
          },
          wholesalePrice: {
            rules: [
              { required: false, message: '请输入批发价!' },
            ]
          },
          salePrice: {
            rules: [
              { required: false, message: '请输入零售价!' },
            ]
          },
        },
        url: {
          add: "/ywwareinfo/ywWareInfo/add",
          edit: "/ywfobware/ywWareInfo/edit",
          creat:"/ywwareinfo/ywWareInfo/create",
        }
      }
    },
    created () {
    },

    mounted () {


    },
    methods: {
      add () {
        this.edit({});
      },
      handReturn () {
        this.$router.push({path:"/FirstCamp/FirstCampList"})
      },
      change1(code){
        wareCode = code ;
        console.log("==============================change____code======")
        console.log(code)

      },
      edit (record) {
        this.form.resetFields();
        this.model = Object.assign({}, record);
        this.visible = true;
        this.$nextTick(() => {
          this.form.setFieldsValue(pick(this.model,'wareId','wareName','commonName','abc','wareSpeci','manufacture','wareUnit','manufacture','producingArea','barCode','personalIdentity','manufactureClient','packageClient','maxPackageNumber','mediumPackageNumber','waeIndate','isImport','originCountry','inputTaxRate','outputTaxRate','whlprice','salePrice','wareStatus','purStatus','saleStatus','createBy','createTime','initTime','lastSaleTime','lastTime','firstSaleTime','updateBy','updateTime'))
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

            values.wareId = wareCode ;
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
              // that.$router.push({path:"/FirstCamp/FirstCampList"})
            })
          }

        })
      },
      handleCancel () {
        this.close()
      },
      popupCallback(row){
        this.form.setFieldsValue(pick(row,'wareId','wareName','commonName','abc','wareSpeci','manufacture','wareUnit','manufacture','producingArea','barCode','personalIdentity','manufactureClient','packageClient','maxPackageNumber','mediumPackageNumber','waeIndate','isImport','originCountry','inputTaxRate','outputTaxRate','whlprice','salePrice','wareStatus','purStatus','saleStatus','createBy','createTime','initTime','lastSaleTime','lastTime','firstSaleTime','updateBy','updateTime'))
      },
      Reset(){
        this.form.resetFields();
      },
      selectIsJinKou(isJinKou) {
        // 1进口  0非进口
        if(isJinKou == 1) {
          this.jinkouguojiaInputRequire = true;
        } else if(isJinKou ==0) {
          // 设置原产国表单项为 48  中国，方法还没找到
          this.jinkouguojiaInputRequire = false;
        }
      }
    }
  }
</script>

<style scoped>

</style>