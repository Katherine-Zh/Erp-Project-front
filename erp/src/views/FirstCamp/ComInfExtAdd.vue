<template>
  <div>

    <div style="background-color: white">
      <br>
      <p align="left" style="font-size:20px">
        <b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;基础类</b>
      </p>
      <a-divider/>
      <a-spin :spinning="confirmLoading">
        <a-form :form="form"  >
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px">源系统编码</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input  v-decorator="['originWareId', validatorRules.originWareId]" placeholder="请输入源系统编码" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">英文名称</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input  v-decorator="['englishName', validatorRules.englishName]" placeholder="请输入英文名称" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">化学名称</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input  v-decorator="['chemicalName', validatorRules.chemicalName]" placeholder="请输入化学名称" ></a-input>
              </a-form-item>
            </a-col>

          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col span="8">
              <p style="margin-bottom: 0px">主要成分</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input  v-decorator="['mainElement', validatorRules.mainElement]" placeholder="请输入主要成分" ></a-input>
              </a-form-item>
            </a-col>
            <a-col span="8">
              <p style="margin-bottom: 0px">质量标准</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input  v-decorator="['qualityStandard', validatorRules.qualityStandard]" placeholder="请输入质量标准" ></a-input>
              </a-form-item>
            </a-col>
            <a-col span="8">
              <p style="margin-bottom: 0px;color: red">养护类型</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <!--                <a-input  v-decorator="['cureType', validatorRules.cureType]" placeholder="请输入养护类型" ></a-input>-->

                <j-dict-select-tag type="list"  v-decorator="['cureType', validatorRules.cureType]" :trigger-change="true" dictCode="sd_cure_type" placeholder="请选择单位"/>

              </a-form-item>
            </a-col>

          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col span="8">
              <p style="margin-bottom: 0px">是否中标</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input  v-decorator="['isBidWare', validatorRules.isBidWare]" placeholder="请输入是否中标" ></a-input>
              </a-form-item>
            </a-col>
            <a-col span="8">
              <p style="margin-bottom: 0px">中标类型</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input  v-decorator="['bidType', validatorRules.bidType]" placeholder="请输入中标类型" ></a-input>
              </a-form-item>
            </a-col>
            <a-col span="8">
              <p style="margin-bottom: 0px">中标流水码</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input  v-decorator="['bidCode', validatorRules.bidCode]" placeholder="请输入中标流水码" ></a-input>
              </a-form-item>
            </a-col>


          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]" >

            <a-col :span="8">
              <p style="margin-bottom: 0px">中标价格</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input type="number" v-decorator="['bidPrice', validatorRules.bidPrice]" placeholder="请输入中标价格" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">付款方式</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input  v-decorator="['payType', validatorRules.payType]" placeholder="请输入付款方式" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">付款账期</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input  v-decorator="['payPeriod', validatorRules.payPeriod]" placeholder="请输入付款账期" ></a-input>
              </a-form-item>
            </a-col>


          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">

            <a-col :span="8">
              <p style="margin-bottom: 0px">默认采购员</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input  v-decorator="['defaultBuyer', validatorRules.defaultBuyer]" placeholder="请输入产地" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px;color: red">最新供应商</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <!--                <j-dict-select-tag type="list"  v-decorator="['vendorNo', validatorRules.vendorNo]" :trigger-change="true" dictCode="sd_yn" placeholder="请选择单位"/>-->
                <a-select v-decorator="['vendorNo', validatorRules.vendorNo]">
                  <div slot="dropdownRender" slot-scope="menu">
                    <v-nodes :vnodes="menu"
                    />
                    <a-divider style="margin: 4px 0;" />
                  </div>
                  <a-select-option v-for="item in gysItems" :key="item" :value="item">
                    {{ item }}
                  </a-select-option>
                </a-select>

              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">档案号</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input  v-decorator="['archivesNo', validatorRules.archivesNo]" placeholder="请输入档案号" ></a-input>
              </a-form-item>
            </a-col>

          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 6, sm: 12, md: 18},{ xs: 6, sm: 12, md: 18}]">
            <a-col :span="6">
              <p style="margin-bottom: 0px">冷链品种</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <!--                <a-input  v-decorator="['producingArea', validatorRules.producingArea]" placeholder="请输入冷链品种" ></a-input>-->
                <a-radio-group name="冷链品种" v-decorator="['isColdChain', validatorRules.isColdChain]" >
                  <a-radio :value="1">
                    是
                  </a-radio>
                  <a-radio :value="2">
                    否
                  </a-radio>
                </a-radio-group>
              </a-form-item>
            </a-col>
            <a-col :span="6">
              <p style="margin-bottom: 0px">含特殊复方制剂</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <!--                <j-dict-select-tag type="list"  v-decorator="['wareUnit', validatorRules.wareUnit]" :trigger-change="true" dictCode="" placeholder="请选择最新供应商"/>-->
                <a-radio-group name="radioGroup" v-decorator="['isSpecialFf', validatorRules.isSpecialFf]" >
                  <a-radio :value="1">
                    是
                  </a-radio>
                  <a-radio :value="2">
                    否
                  </a-radio>
                </a-radio-group>
              </a-form-item>
            </a-col>
            <a-col :span="6">
              <p style="margin-bottom: 0px">是否兴奋剂</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <!--                <a-input  v-decorator="['englishName', validatorRules.englishName]" placeholder="请输入是否兴奋剂" ></a-input>-->
                <a-radio-group name="radioGroup" v-decorator="['isTonic', validatorRules.isTonic]" >
                  <a-radio :value="1">
                    是
                  </a-radio>
                  <a-radio :value="2">
                    否
                  </a-radio>
                </a-radio-group>
              </a-form-item>
            </a-col>
            <a-col :span="6">
              <p style="margin-bottom: 0px">是否两票制品种</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <!--                <a-input  v-decorator="['englishName', validatorRules.englishName]" placeholder="请输入是否两票制品种" ></a-input>-->
                <a-radio-group name="radioGroup" v-decorator="['isTwoLicense', validatorRules.isTwoLicense]" >
                  <a-radio :value="1">
                    是
                  </a-radio>
                  <a-radio :value="2">
                    否
                  </a-radio>
                </a-radio-group>
              </a-form-item>
            </a-col>

          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24, lg: 32 },{ xs: 8, sm: 16, md: 24, lg: 32 }]">

            <a-col :span="12">
              <p style="margin-bottom: 0px">功能主治</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-textarea :rows="4" v-decorator="['mainFunction', validatorRules.mainFunction]" placeholder="请输入功能主治" ></a-textarea>
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <p style="margin-bottom: 0px">说明书</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-textarea :rows="4" v-decorator="['instructionBook', validatorRules.instructionBook]" placeholder="请输入说明书" ></a-textarea>
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </a-spin>
    </div>
    <div>
      <p>&emsp;</p>
    </div>
    <div style="background-color: white">
      <br>
      <p align="left" style="font-size:20px">
        <b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;基础证照类</b>
      </p>
      <a-divider/>
      <a-spin :spinning="confirmLoading">
        <a-form :form="form"  >
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16,},{ xs: 8, sm: 16}]">
            <a-col :span="16">
              <p style="margin-bottom: 0px">批准文号/注册证号</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input  v-decorator="['chargeFileNo', validatorRules.chargeFileNo]" placeholder="请输入批准文号/注册证号" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">批准文号/注册证号有效期</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <j-date placeholder="批准文号/注册证号有效期" v-decorator="['chargeFileIndate', validatorRules.chargeFileIndate ]"  :trigger-change="true" style="width: 100%"/>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16,},{ xs: 8, sm: 16}]">
            <a-col :span="16">
              <p style="margin-bottom: 0px">分包装批准文号/注册证号</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input  v-decorator="['packageLicense', validatorRules.packageLicense]" placeholder="请输入分包装批准文号/注册证号" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">分包装批准文号/注册证号有效期</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <j-date placeholder="分包装批准文号/注册证号有效期" v-decorator="['packageLicenseIndate', validatorRules.packageLicenseIndate ]"  :trigger-change="true" style="width: 100%"/>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16,},{ xs: 8, sm: 16}]">
            <a-col :span="16">
              <p style="margin-bottom: 0px">生产许可证号</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input  v-decorator="['manuLicense', validatorRules.manuLicense]" placeholder="请输入生产许可证号" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">生产许可证号有效期</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <j-date placeholder="生产许可证号有效期" v-decorator="['manuLicenseIndate', validatorRules.manuLicenseIndate ]"  :trigger-change="true" style="width: 100%"/>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16,},{ xs: 8, sm: 16}]">
            <a-col :span="16">
              <p style="margin-bottom: 0px">GMP证号</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input  v-decorator="['gmp', validatorRules.gmp]" placeholder="请输入GMP证号" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">GMP有效期</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <j-date placeholder="GMP有效期" v-decorator="['gmpIndate', validatorRules.gmpIndate ]"  :trigger-change="true" style="width: 100%"/>
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </a-spin>
    </div>

    <div style="background-color: white">
      <br>
      <p align="left" style="font-size:20px">
        <b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;仓储类</b>
      </p>
      <a-divider/>
      <a-spin :spinning="confirmLoading">
        <a-form id="ddd" :form="form"  >
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px;color: red">贮存条件</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <!--                <a-input v-decorator="['storageCondition',validatorRules.storageCondition]" placeholder="请输入贮存条件"></a-input>-->
                <j-dict-select-tag type="list"  v-decorator="['storageCondition', validatorRules.storageCondition]" :trigger-change="true" dictCode="sd_ware_store_condition" placeholder="请选择单位"/>



              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">存储温度</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol" >
                <a-input type="number" v-decorator="['storageTemp1',validatorRules.storageTemp1]" style="width: 30%"> </a-input> <b>&emsp;~&emsp;</b> <a-input type="number" v-decorator="['storageTemp2',validatorRules.storageTemp2]"  style="width: 30%"> </a-input> <b>&emsp;℃&emsp;</b>
              </a-form-item>
            </a-col>
            <a-col span="8">
              <p style="margin-bottom: 0px">运输条件</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['deliverCondition',validatorRules.deliverCondition]" placeholder="请输入运输条件"></a-input>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px ">双人验收</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-radio-group name="radioGroup" v-decorator="['isDoubleCheck', validatorRules.isDoubleCheck]" >
                  <a-radio :value="1">
                    是
                  </a-radio>
                  <a-radio :value="2">
                    否
                  </a-radio>
                </a-radio-group>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">中包装销售</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol" >
                <!--                <a-input  v-decorator="['wholesalePrice',validatorRules.wholesalePrice]" placeholder="请输入存储温度"  :max-length="25"></a-input>-->
                <a-radio-group name="radioGroup" v-decorator="['isMediumPackageSale', validatorRules.isMediumPackageSale]" >
                  <a-radio :value="1">
                    是
                  </a-radio>
                  <a-radio :value="2">
                    否
                  </a-radio>
                </a-radio-group>
              </a-form-item>
            </a-col>
            <a-col span="8">
              <p style="margin-bottom: 0px">大包装销售</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <!--                <a-input v-decorator="['salePrice',validatorRules.salePrice]" placeholder="请输入运输条件"></a-input>-->
                <a-radio-group name="radioGroup" v-decorator="['isMaxPackageSale', validatorRules.isMaxPackageSale]" >
                  <a-radio :value="1">
                    是
                  </a-radio>
                  <a-radio :value="2">
                    否
                  </a-radio>
                </a-radio-group>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px ">是否打印检单</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <!--                <a-input v-decorator="['supplyPrice',validatorRules.supplyPrice]" placeholder="请输入贮存条件"></a-input>-->
                <a-radio-group name="radioGroup" v-decorator="['isPrintControl', validatorRules.isPrintControl]" >
                  <a-radio :value="1">
                    是
                  </a-radio>
                  <a-radio :value="2">
                    否
                  </a-radio>
                </a-radio-group>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">是否扫码</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol" >
                <!--                <a-input  v-decorator="['wholesalePrice',validatorRules.wholesalePrice]" placeholder="请输入存储温度"  :max-length="25"></a-input>-->
                <a-radio-group name="radioGroup" v-decorator="['isScan', validatorRules.isScan]" >
                  <a-radio :value="1">
                    是
                  </a-radio>
                  <a-radio :value="2">
                    否
                  </a-radio>
                </a-radio-group>
              </a-form-item>
            </a-col>
            <a-col span="8">
              <p style="margin-bottom: 0px">回执品种</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <!--                <a-input v-decorator="['salePrice',validatorRules.salePrice]" placeholder="请输入运输条件"></a-input>-->
                <a-radio-group name="radioGroup" v-decorator="['isFallbackWare', validatorRules.isFallbackWare]" >
                  <a-radio :value="1">
                    是
                  </a-radio>
                  <a-radio :value="2">
                    否
                  </a-radio>
                </a-radio-group>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px ">大包装单位体积 长（mm）</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input type="number" v-decorator="['maxPackageLongth',validatorRules.maxPackageLongth]" placeholder="大包装单位体积 长（mm）"></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">宽（mm）</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input type="number" v-decorator="['maxPackageWidth',validatorRules.maxPackageWidth]" placeholder="宽（mm）"></a-input>
              </a-form-item>
            </a-col>
            <a-col span="8">
              <p style="margin-bottom: 0px">高（mm）</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input type="number" v-decorator="['maxPackageHeight',validatorRules.mediumPackageHeight]" placeholder="高（mm）"></a-input>
              </a-form-item>
            </a-col>

          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px ">中包装单位体积 长（mm）</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input type="number" v-decorator="['mediumPackageLongth',validatorRules.mediumPackageLongth]" placeholder="中包装单位体积 长（mm）"></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">宽（mm）</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input type="number" v-decorator="['mediumPackageWidth',validatorRules.mediumPackageWidth]" placeholder="宽（mm）"></a-input>
              </a-form-item>
            </a-col>
            <a-col span="8">
              <p style="margin-bottom: 0px">高（mm）</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input type="number" v-decorator="['mediumPackageHeight',validatorRules.mediumPackageHeight]" placeholder="高（mm）"></a-input>
              </a-form-item>
            </a-col>

          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px ">小包装单位体积 长（mm）</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input type="number" v-decorator="['smallPackageLongth',validatorRules.smallPackageLongth]" placeholder="小包装单位体积 长（mm）"></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">宽（mm）</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input type="number" v-decorator="['smallPackageWidth',validatorRules.smallPackageWidth]" placeholder="宽（mm）"></a-input>
              </a-form-item>
            </a-col>
            <a-col span="8">
              <p style="margin-bottom: 0px">高（mm）</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input type="number" v-decorator="['smallPackageHeight',validatorRules.smallPackageHeight]" placeholder="高（mm）"></a-input>
              </a-form-item>
            </a-col>

          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px ">大包装单位</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input  v-decorator="['maxPackageUnit',validatorRules.maxPackageUnit]" placeholder="大包装单位"></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">中包装单位</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input  v-decorator="['mediumPackageUnit',validatorRules.mediumPackageUnit]" placeholder="中包装单位"></a-input>
              </a-form-item>
            </a-col>
            <a-col span="8">
              <p style="margin-bottom: 0px">小包装单位</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input  v-decorator="['smallPackageUnit',validatorRules.smallPackageUnit]" placeholder="小包装单位"></a-input>
              </a-form-item>
            </a-col>

          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px ">大包装重量（g）</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input  v-decorator="['maxPackageWeight',validatorRules.maxPackageWeight]" placeholder="大包装重量（g）"></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">中包装重量（g）</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['mediumPackageWeight',validatorRules.mediumPackageWeight]" placeholder="中包装重量（g）"></a-input>
              </a-form-item>
            </a-col>
            <a-col span="8">
              <p style="margin-bottom: 0px">小包装重量（g）</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['smallPackageWeight',validatorRules.smallPackageWeight]" placeholder="小包装重量（g）"></a-input>
              </a-form-item>
            </a-col>

          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24,lg: 32},{ xs: 8, sm: 16, md: 24,lg: 32}]">
            <a-col :span="32">
              <p style="margin-bottom: 0px ">备注</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['notes',validatorRules.notes]" placeholder="备注"></a-input>
              </a-form-item>
            </a-col>
          </a-row>

          <!--          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24,lg: 32},{ xs: 8, sm: 16, md: 24,lg: 32}]">-->
          <!--            <a-col :span="32">-->
          <!--              <p style="margin-bottom: 0px ">修改内容</p>-->
          <!--              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">-->
          <!--                <a-input v-decorator="['notes',validatorRules.notes]" placeholder="备注"></a-input>-->
          <!--              </a-form-item>-->
          <!--            </a-col>-->
          <!--          </a-row>-->

        </a-form>
        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col style="float: right ;overflow: hidden;" class="table-page-search-submitButtons">
              <span>
                <a-button @click="handReturn" style="margin-right: 8px">
                  取消
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
  import { TreeSelect } from 'ant-design-vue'


  const SHOW_PARENT = TreeSelect.SHOW_PARENT;



  export default {


    name: "Cominfext",
    components: {
      JDate,
      JDictSelectTag,
      validateDuplicateValue,
      VNodes: {
        functional: true,
        render: (h, ctx) => ctx.props.vnodes,
      },
    },
    data () {
      return {
        SHOW_PARENT,
        items: [],
        // 供应商选项
        gysItems: [],
        //treeData,
        //进口国家是否需要填写
        jinkouguojiaInputRequire: false,
        //itemsdep: [],
        // itemsrole: [],
        // code:null ,
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
          originWareId: {
            rules: [
              { required: false, message: '请输入源系统编码!' },
            ]
          },
          englishName: {
            rules: [
              { required: false, message: '请输入英文名称!' },
            ]
          },
          chemicalName: {
            rules: [
              { required: false, message: '请输入化学名称!' },
            ]
          },
          mainElement: {
            rules: [
              { required: false, message: '请输入主要成份!' },
            ]
          },
          qualityStandard: {
            rules: [
              { required: false, message: '请输入质量标准!' },
            ]
          },
          cureType: {
            rules: [
              { required: true, message: '请输入养护类型!' },
            ]
          },
          isBidWare: {
            rules: [
              { required: false, message: '请输入是否中标!' },
            ]
          },
          bidType: {
            rules: [
              { required: false, message: '请输入中标类型!' },
            ]
          },
          isDoubleCheck:{
            rules: [
              { required: false, message: '请选择是否双人验收!' },
            ]
          },
          bidCode: {
            rules: [
              { required: false, message: '请输入中标流水码!' },
            ]
          },
          isColdChain:{
            rules: [
              { required: false, message: '请选择冷链品种!' },
            ]
          },
          bidPrice: {
            rules: [
              { required: false, message: '请输入中标价格!' },
            ]
          },
          payType: {
            rules: [
              { required: false, message: '请输入付款方式!' },
            ]
          },
          payPeriod: {
            rules: [
              { required: false, message: '请输入付款账期!' },
            ]
          },
          isFallbackWare:{
            rules: [
              { required: false, message: '请输入回执品种!' },
            ]
          },
          defaultBuyer: {
            rules: [
              { required: false, message: '请输入默认采购员!' },
            ]
          },
          vendorNo: {
            rules: [
              { required: false, message: '请输入最新供应商!' },
            ]
          },
          archivesNo: {
            rules: [
              { required: false, message: '请输入档案号!' },
            ]
          },
          mainFunction: {
            rules: [
              { required: false, message: '请输入主治功能!' },
            ]
          },
          instructionBook: {
            rules: [
              { required: false, message: '请输入说明!' },
            ]
          },
          maxPackageUnit: {
            rules: [
              { required: false, message: '请输入大包装单位!' },
            ]
          },
          mediumPackageUnit: {
            rules: [
              { required: false, message: '请输入中包装单位!' },
            ]
          },
          smallPackageUnit: {
            rules: [
              { required: false, message: '请输入小包装单位!' },
            ]
          },
          chargeFileNo: {
            rules: [
              { required: false, message: '请输入批准文号/注册证号!' },
            ]
          },
          isMediumPackageSale: {
            rules: [
              { required: false, message: '请选择是否中包装销售!' },
            ]
          },
          isMaxPackageSale: {
            rules: [
              { required: false, message: '请选择是否大包装销售!' },
            ]
          },
          isPrintControl: {
            rules: [
              { required: false, message: '请选择是否打印检单!' },
            ]
          },
          isScan: {
            rules: [
              { required: false, message: '请选择是否扫码!' },
            ]
          },
          chargeFileIndate: {
            rules: [
              { required: false, message: '请输入批准文号/注册证号有效期!' },
              // { type: 'number', message: '件包装数量必须为数字值', trigger: 'blur'}
            ]
          },
          packageLicense: {
            rules: [
              { required: false, message: '请输入分包装批准文号/注册证号' },
              // { type: 'number', message: '中包装数量必须为数字值', trigger: 'blur'}
            ]
          },
          packageLicenseIndate: {
            rules: [
              { required: false, message: '请输入分包装批准文号/注册证号有效期!' },
            ]
          },
          manuLicense: {
            rules: [
              { required: false, message: '请输入生产许可证号!' },
            ]
          },
          manuLicenseIndate: {
            rules: [
              { required: false, message: '请输入生产许可证号有效期!' },
            ]
          },
          gmp: {
            rules: [
              { required: false, message: '请输入gmp证号!' },
            ]
          },
          gmpIndate: {
            rules: [
              { required: false, message: '请输入gmp证号有效期!' },
            ]
          },
          storageCondition: {
            rules: [
              { required: true, message: '请输入贮存条件!' },
            ]
          },
          wareFirstClass: {
            rules: [
              { required: false, message: '请输入商品大类!' },
            ]
          },
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
          storageTemp1: {
            rules: [
              { required: false, message: '请输入最低贮存温度!' },
            ]
          },
          storageTemp2: {
            rules: [
              { required: false, message: '请输入最高贮存温度!' },
            ]
          },
          deliverCondition: {
            rules: [
              { required: false, message: '请输入运输条件!' },
            ]
          },
          maxPackageLongth: {
            rules: [
              { required: false, message: '请输入大包装单位长度!' },
            ]
          },
          maxPackageWidth: {
            rules: [
              { required: false, message: '请输入大包装单位宽度!' },
            ]
          },
          maxPackageHight: {
            rules: [
              { required: false, message: '请输入大包装单位高度!' },
            ]
          },
          mediumPackageLongth: {
            rules: [
              { required: false, message: '请输入中包装单位长度!' },
            ]
          },
          mediumPackageWidth: {
            rules: [
              { required: false, message: '请输入中包装单位宽度!' },
            ]
          },
          mediumPackageHeight: {
            rules: [
              { required: false, message: '请输入中包装单位高度!' },
            ]
          },
          smallPackageLongth: {
            rules: [
              { required: false, message: '请输入小包装单位长度!' },
            ]
          },
          smallPackageWidth: {
            rules: [
              { required: false, message: '请输入小包装单位宽度!' },
            ]
          },
          smallPackageHeight: {
            rules: [
              { required: false, message: '请输入小包装单位高度!' },
            ]
          },
          maxPackageWeight: {
            rules: [
              { required: false, message: '请输入大包装重量!' },
            ]
          },
          mediumPackageWeight: {
            rules: [
              { required: false, message: '请输入中包装重量!' },
            ]
          },
          smallPackageWeight: {
            rules: [
              { required: false, message: '请输入小包装重量!' },
            ]
          },
          notes: {
            rules: [
              { required: false, message: '请输入备注!' },
            ]
          },
          // modifyApplyReason: {
          //   rules: [
          //     { required: false, message: '请输入修改申请意见!' },
          //   ]
          // },

        },
        url: {
          add: "/ywwareextinfo/ywWareExtInfo/add",
          edit: "/ywfobware/ywFobWare/edit",
          gysHttp:"/ywvendorinfo/ywVendorInfo/querySupplier",
        }
      }
    },
    created () {
    },

    props: ['warecode'],

    // watch: {
    //   warecode: function(newVal,oldVal){
    //     console.log("=================================are watch code ");
    //     console.log(newVal)
    //     this.code= newVal; //newVal即是chartData
    //
    //   }
    // },
    mounted () {
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
        this.$router.push({path:"/FirstCamp/FirstCampList"})
      },

      edit (record) {
        this.form.resetFields();
        this.model = Object.assign({}, record);
        this.visible = true;
        this.$nextTick(() => {
          this.form.setFieldsValue(pick(this.model,'originWareId','englishName','chemicalName','mainElement','qualityStandard','cureType','isBidWare','bidType','bidCode','bidPrice','payType','payPeriod','defaultBuyer','vendorNo','archivesNo','isColdChain','isSpecialFf','isTonic','isTwoLicense','mainFunction','instructionBook','chargeFileNo','chargeFileIndate','packageLicense','packageLicenseIndate','manuLicense','manuLicenseIndate','gmp','gmpIndate','storageCondition','wholesalePrice','storageTemp1','storageTemp2','deliverCondition','isDoubleCheck','isMediumPackageSale','isMaxPackageSale','isPrintControl','isScan','isFallbackWare','maxPackageLongth','maxPackageWidth','mediumPackageHeight','mediumPackageLongth','mediumPackageWidth','mediumPackageHeight','smallPackageLongth','smallPackageWidth','smallPackageHeight','maxPackageUnit','mediumPackageUnit','smallPackageUnit','maxPackageWeight','mediumPackageWeight','smallPackageWeight','notes'))
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
            values.wareId =this.warecode ;
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
              // that.$router.push({path:"/FirstCamp/YwFobWareList"})
            })
          }

        })
      },
      handleCancel () {
        this.close()
      },
      popupCallback(row){
        this.form.setFieldsValue(pick(row,'originWareId','englishName','chemicalName','mainElement','qualityStandard','cureType','isBidWare','bidType','bidCode','bidPrice','payType','payPeriod','defaultBuyer','vendorNo','archivesNo','isColdChain','isSpecialFf','isTonic','isTwoLicense','mainFunction','instructionBook','chargeFileNo','chargeFileIndate','packageLicense','packageLicenseIndate','manuLicense','manuLicenseIndate','gmp','gmpIndate','storageCondition','wholesalePrice','storageTemp1','storageTemp2','deliverCondition','isDoubleCheck','isMediumPackageSale','isMaxPackageSale','isPrintControl','isScan','isFallbackWare','maxPackageLongth','maxPackageWidth','mediumPackageHeight','mediumPackageLongth','mediumPackageWidth','mediumPackageHeight','smallPackageLongth','smallPackageWidth','smallPackageHeight','maxPackageUnit','mediumPackageUnit','smallPackageUnit','maxPackageWeight','mediumPackageWeight','smallPackageWeight','notes'))
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