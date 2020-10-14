<template>
  <div>
    <div style="background-color: white">
      <br>
      <p align="left" style="font-size:20px">
        <b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;单据信息</b>
      </p>
      <a-divider/>
      <a-spin :spinning="confirmLoading">
        <a-form id="ddd" :form="form"  >
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px">单据编号</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input :disabled="true" v-decorator="['documentNo', validatorRules.documentNo]"  ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">单据状态</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <j-dict-select-tag type="list" :disabled="true" v-decorator="['documentStatus', validatorRules.documentStatus]" :trigger-change="true" dictCode="sd_docu_status" placeholder="请选择状态"/>
              </a-form-item>
            </a-col>
            <a-col span="8">
              <p style="margin-bottom: 0px">申报日期</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <j-date placeholder="请选择申报日期"  :disabled="true" v-decorator="['applyDate', validatorRules.applyDate]"  :trigger-change="true" style="width: 100%"/>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px">审批日期</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <j-date placeholder="请选择审批日期" :disabled="true" v-decorator="['checkDate', validatorRules.checkDate]"  :trigger-change="true" style="width: 100%"/>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">生效日期</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <j-date placeholder="请选择生效日期" :disabled="true" v-decorator="['executeDate', validatorRules.executeDate]"  :trigger-change="true" style="width: 100%"/>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px;color: red">申报部门</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">

                <a-select v-decorator="['applyDepart', validatorRules.applyDepart]">
                  <div slot="dropdownRender" slot-scope="menu">
                    <v-nodes :vnodes="menu"
                    />
                    <a-divider style="margin: 4px 0;" />
                  </div>
                  <a-select-option v-for="item in sqbmItems" :key="item" :value="item">
                    {{ item }}
                  </a-select-option>
                </a-select>
                <!--              <j-dict-select-tag type="list" v-decorator="['applyDepart', validatorRules.applyDepart]"  :trigger-change="true"  placeholder="请选择部门"/>-->
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="24">
              <p style="margin-bottom: 0px ;color: red">供应商名称</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol" >
                <!--              <j-dict-select-tag type="list" v-decorator="['supplierNo', validatorRules.supplierNo]"  :trigger-change="true" dictCode="yw_vendor_info.vendor_id" placeholder="请选择名称" style="width:1050px;"/>-->
                <a-select v-decorator="['supplierNo', validatorRules.supplierNo]">
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
        <b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;商品基本信息</b>
      </p>
      <a-divider/>
      <a-spin :spinning="confirmLoading">
        <a-form id="ddd" :form="form"  >
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px">商品编码</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input :disabled="true" v-decorator="['wareId', validatorRules.wareId]" placeholder="请输入商品编码" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px;color: red">商品通用名称</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input  v-decorator="['commonName', validatorRules.commonName]" placeholder="请输入商品通用名称" ></a-input>
              </a-form-item>
            </a-col>
            <a-col span="8">
              <p style="margin-bottom: 0px;color: red">商品规格</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input  v-decorator="['wareSpeci', validatorRules.wareSpeci]" placeholder="请输入商品规格" ></a-input>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px;color: red">商品单位</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <j-dict-select-tag type="list"  v-decorator="['wareUnit', validatorRules.wareUnit]" :trigger-change="true" dictCode="sd_ware_unit" placeholder="请选择单位"/>
              </a-form-item>
            </a-col>
            <a-col :span="16">
              <p style="margin-bottom: 0px;color: red">生产企业</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input  v-decorator="['manufacture', validatorRules.manufacture]" placeholder="请输入生产企业" style="width:650px;" ></a-input>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px;color: red">商品名称</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input  v-decorator="['wareName', validatorRules.wareName]" placeholder="请输入商品名称" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">商品英文名</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input  v-decorator="['englishName', validatorRules.englishName]" placeholder="请输入商品英文名" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px;color: red">产地 {{isChandiFocus?"(通常写到省即可)":""}}</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input  v-decorator="['producingArea', validatorRules.producingArea]" placeholder="请输入产地" @focus="isChandiFocus = true" @blur="isChandiFocus = false"></a-input>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="16">
              <p style="margin-bottom: 0px;color: red">批准文号/注册证号</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-model="chargeFileNo"  v-decorator="['chargeFileNo', validatorRules.chargeFileNo]" placeholder="请输入批准文号/注册证号" @blur="checkFileNo" style="width:740px;" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">批准文号/注册证号有效期</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <j-date placeholder="批准文号/注册证号有效期" v-decorator="['chargeFileIndate', validatorRules.chargeFileIndate ]"  :trigger-change="true" style="width: 100%"/>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="24">
              <p style="margin-bottom: 0px;color: red">生产企业委托方</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input  v-decorator="['manufactureClient', validatorRules.manufactureClient]" placeholder="请输入生产企业委托方" style="width:1195px;"></a-input>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="24">
              <p style="margin-bottom: 0px">分包装生产企业</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input  v-decorator="['packageClient', validatorRules.packageClient]" placeholder="请输入分包装生产企业" style="width:1195px;"></a-input>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="24">
              <p style="margin-bottom: 0px">条形码</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input  v-decorator="['barCode', validatorRules.barCode]" placeholder="请输入条形码" style="width:1195px;"></a-input>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px;color: red">件包装数量</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input  min ="0" type="number" v-decorator="['maxPackageNumber', validatorRules.maxPackageNumber]" placeholder="请输入件包装数量" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px;color: red">中包装数量</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input min="0" type="number" v-decorator="['mediumPackageNumber', validatorRules.mediumPackageNumber]" placeholder="请输入中包装数量" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">有效期（天数）</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input type="number" v-decorator="['wareIndate', validatorRules.wareIndate]" placeholder="请输入有效期（天数）" ></a-input>
              </a-form-item>
            </a-col>
          </a-row>

        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">注射剂内包装材质</p>
            <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input  v-decorator="['packageMaterial', validatorRules.packageMaterial]" placeholder="请输入注射剂内包装材质" ></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        </a-form>>
      </a-spin>
    </div>
    <div>
      <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;</p>
    </div>
    <div style="background-color: white">
      <br>
      <p align="left" style="font-size:20px">
        <b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;价格及包装</b>
      </p>
      <a-divider/>
      <a-spin :spinning="confirmLoading">
        <a-form  :form="form"  >
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px ;color: red">商品大类</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <!--               <j-dict-select-tag type="list"  v-decorator="['wareFirstClass', validatorRules.wareFirstClass]" :trigger-change="true" dictCode="sys_category" placeholder="请选择单位"/>-->
                <a-select  v-decorator="['wareFirstClass', validatorRules.wareFirstClass]" v-model="spdlnow">
                  <div slot="dropdownRender" slot-scope="menu">
                    <v-nodes :vnodes="menu"
                    />
                    <a-divider style="margin: 4px 0;" />
                  </div>
                  <a-select-option  v-for="item in spdlItems" :key="item" :value="item" >
                    {{ item }}
                  </a-select-option>
                </a-select>

              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px;color: red">商品二级分类</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol" >

                <!--               <j-dict-select-tag type="list"  v-decorator="['wareSecondClass', validatorRules.wareSecondClass]" :trigger-change="true" dictCode="sys_category" placeholder="请选择单位"/>-->
                <a-select  v-decorator="['wareSecondClass', validatorRules.wareSecondClass]" v-on:focus="getSen" >

                  <div slot="dropdownRender" slot-scope="menu" >

                    <v-nodes :vnodes="menu"
                    />
                    <a-divider style="margin: 4px 0;" />
                  </div>
                  <a-select-option  v-for="item in spdlSenItems" :key="item" :value="item" >
                    {{ item }}
                  </a-select-option>
                </a-select>

              </a-form-item>
            </a-col>
            <a-col span="8">
              <p style="margin-bottom: 0px;color: red">经营范围</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-select   v-decorator="['businessType', validatorRules.businessType]" >

                  <div slot="dropdownRender" slot-scope="menu" >

                    <v-nodes :vnodes="menu"
                    />
                    <a-divider style="margin: 4px 0;" />
                  </div>
                  <a-select-option  v-for="item in jyfwItems" :key="item" :value="item" >
                    {{ item }}
                  </a-select-option>
                </a-select>
                <!--               <j-dict-select-tag type="list"  v-decorator="['businessType', validatorRules.businessType]" :trigger-change="true" dictCode="sys_category" placeholder="请选择单位"/>-->
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px ;color: red">剂型</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">

                <a-select   v-decorator="['drugForm', validatorRules.drugForm]" >

                  <div slot="dropdownRender" slot-scope="menu" >

                    <v-nodes :vnodes="menu"
                    />
                    <a-divider style="margin: 4px 0;" />
                  </div>
                  <a-select-option  v-for="item in jxItems" :key="item" :value="item" >
                    {{ item }}
                  </a-select-option>
                </a-select>
                <!--               <j-dict-select-tag type="list"  v-decorator="['drugForm', validatorRules.drugForm]" :trigger-change="true" dictCode="sys_category" placeholder="请选择单位"/>-->
              </a-form-item>
            </a-col>
            <a-col :span="16">
              <p style="margin-bottom: 0px">功能主治</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input  v-decorator="['mainFunction', validatorRules.mainFunction]" placeholder="请输入功能主治" style="width:740px;" ></a-input>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px ">处方分类</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <!--               <j-dict-select-tag type="list"  v-decorator="['recipelType', validatorRules.recipelType]" :trigger-change="true" dictCode="sys_category" placeholder="请选择单位"/>-->
                <a-select   v-decorator="['recipelType', validatorRules.recipelType]"  >

                  <div slot="dropdownRender" slot-scope="menu" >

                    <v-nodes :vnodes="menu"
                    />
                    <a-divider style="margin: 4px 0;" />
                  </div>
                  <a-select-option  v-for="item in cfItems" :key="item" :value="item" >
                    {{ item }}
                  </a-select-option>
                </a-select>

              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </a-spin>
    </div>
    <div>
      <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;</p>
    </div>
    <div style="background-color: white">
      <br>
      <p align="left" style="font-size:20px">
        <b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;扩展信息</b>
      </p>
      <a-divider/>
      <a-spin :spinning="confirmLoading">
        <a-form id="ddd" :form="form"  >
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px ;color: red">进项税率</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <j-dict-select-tag type="list" :isValue="false" v-decorator="['inputTaxRate', validatorRules.inputTaxRate]" :trigger-change="true" dictCode="sd_tax_rate" placeholder="请选择单位" @change="getInputTaxRate" />
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px;color: red">销项税率</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <j-dict-select-tag type="list"  v-decorator="['outputTaxRate', validatorRules.outputTaxRate]" :trigger-change="true" dictCode="sd_tax_rate" placeholder="请选择单位"/>
              </a-form-item>
            </a-col>
            <a-col span="8">
              <p style="margin-bottom: 0px;color: red">是否进口</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <j-dict-select-tag type="list"  v-decorator="['isImport', validatorRules.isImport]" :trigger-change="true" dictCode="sd_yn" placeholder="请选择单位" @change="selectIsJinKou"/>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px ;color: red">原产国</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <j-dict-select-tag :disabled="!jinkouguojiaInputRequire" type="list"  v-decorator="['originCountry', validatorRules.originCountry]" :trigger-change="true" dictCode="sd_country" placeholder="请选择单位"
                />
              </a-form-item>
            </a-col>
            <a-col :span="16">
              <p style="margin-bottom: 0px">药品性状</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['drugProperty',validatorRules.drugProperty]" placeholder="请输入药品性状" style="width:740px;"></a-input>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px ">文件归档编号</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input  :disabled="true" v-decorator="['documentArchiveNo',validatorRules.documentArchiveNo]" placeholder="请输入文件归档编号"></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="16">
              <p style="margin-bottom: 0px">商标</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['brand',validatorRules.brand]" placeholder="请输入商标" style="width:740px;" ></a-input>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="24">
              <p style="margin-bottom: 0px ">备注</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['notes',validatorRules.notes]" placeholder="请输入备注" style="width:1195px;"></a-input>
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
        <b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;特殊管控</b>
      </p>
      <a-divider/>
      <a-spin :spinning="confirmLoading">
        <a-form id="ddd" :form="form"  >
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px ;color: red">是否含麻</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <j-dict-select-tag type="list"  v-decorator="['isAnes', validatorRules.isAnes]" :trigger-change="true" dictCode="sd_yn" placeholder="请选择单位"/>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px;color: red">是否特殊药品</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <j-dict-select-tag type="list"  v-decorator="['isSpecial', validatorRules.isSpecial]" :trigger-change="true" dictCode="sd_yn" placeholder="请选择单位"/>
              </a-form-item>
            </a-col>
            <a-col span="8">
              <p style="margin-bottom: 0px;color: red">养护类型</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <j-dict-select-tag type="list"  v-decorator="['cureType', validatorRules.cureType]" :trigger-change="true" dictCode="sd_cure_type" placeholder="请选择单位"/>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px ;color: red">存储条件</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <j-dict-select-tag type="list"  v-decorator="['storageCondition', validatorRules.storageCondition]" :trigger-change="true" dictCode="sd_ware_store_condition" placeholder="请选择单位"/>
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </a-spin>
    </div>
    <div>
      <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;</p>
    </div>
    <div style="background-color: white">
      <br>
      <p align="left" style="font-size:20px">
        <b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;证书信息</b>
      </p>
      <a-divider/>
      <a-spin :spinning="confirmLoading">
        <a-form id="ddd" :form="form"  >
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="16">
              <p style="margin-bottom: 0px">GMP证书号</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['gmp',validatorRules.gmp]" placeholder="请输入GMP证书号" style="width:740px;"></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">GMP证书有效期</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <j-date placeholder="GMP证书有效期" v-decorator="['gmpIndate', validatorRules.gmpIndate ]"  :trigger-change="true" style="width: 100%"/>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="16">
              <p style="margin-bottom: 0px ">进口注册证号</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['importLicense',validatorRules.importLicense]" placeholder="请输入进口注册证号"style="width:740px;"></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px ">进口注册证号有效期</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <j-date placeholder="进口注册证号有效期" v-decorator="['importLicenseIndate', validatorRules.importLicenseIndate ]"  :trigger-change="true" style="width: 100%"/>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="16">
              <p style="margin-bottom: 0px ">分包装注册证号</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['packageLicense',validatorRules.packageLicense]" placeholder="请输入分包装注册证号" style="width:740px;"></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px ">分包装注册证号有效期</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <j-date placeholder="分包装注册证号有效期" v-decorator="['packageLicenseIndate', validatorRules.packageLicenseIndate ]"  :trigger-change="true" style="width: 100%"/>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="16">
              <p style="margin-bottom: 0px ">生产许可证</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['manuLicense',validatorRules.manuLicense]" placeholder="请输入生产许可证" style="width:740px;"></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px ">生产许可证有效期</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <j-date placeholder="生产许可证有效期" v-decorator="['manuLicenseIndate', validatorRules.manuLicenseIndate ]"  :trigger-change="true" style="width: 100%"/>
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
        <b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;价格信息</b>
      </p>
      <a-divider/>
      <a-spin :spinning="confirmLoading">
        <a-form id="ddd" :form="form"  >
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px ">进价</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['supplyPrice',validatorRules.supplyPrice]" type ="number" placeholder="请输入进价"></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">批发价</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['wholesalePrice',validatorRules.wholesalePrice]" type ="number" placeholder="请输入批发价"></a-input>
              </a-form-item>
            </a-col>
            <a-col span="8">
              <p style="margin-bottom: 0px">零售价</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['salePrice',validatorRules.salePrice]" type ="number" placeholder="请输入零售价"></a-input>
              </a-form-item>
            </a-col>
          </a-row>

        </a-form>
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
                 提交
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
  import axios from 'axios'
  import { TreeSelect } from 'ant-design-vue'


  const SHOW_PARENT = TreeSelect.SHOW_PARENT;
  var dlall = [] ;

  var sqbmall = {} ;
  var jyfwall = {} ;

  var spdlsenall = {} ;
  var jxall = {} ;
  var cfall = {} ;
  var dlallPid = [] ;
  var code = null ;
  var docCode = null ;



  export default {
    name: "ComAdd",
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
        // 供应商选项
        gysItems: [],
        cfItems:[],

        // 申报部门选项
        sqbmItems: [],
        // 商品大类的选项和各项
        spdlItems: [],


        spdlnow:null ,

        // 商品二级分类
        spdlSenItems: [],

        // 剂型
        jxItems: [],

        // 经营范围
        jyfwItems:[],
        //treeData,
        //进口国家是否需要填写
        jinkouguojiaInputRequire: false,
        chargeFileNo: '',
        inputTaxRate: '', // 进口税率
        applyDepart: '', //申请部门
        isChandiFocus: false,
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
          documentNo: {
            rules: [
              { required: false, message: '请输入单据编码!' },
            ]
          },
          documentStatus: {
            rules: [
              { required: false, message: '请输入单据状态!' },
            ]
          },
          applyDate: {
            rules: [
              { required: false, message: '请输入申请日期!' },
            ]
          },
          checkDate: {
            rules: [
              { required: false, message: '请输入审核日期!' },
            ]
          },
          executeDate: {
            rules: [
              { required: false, message: '请输入生效日期!' },
            ]
          },
          applyDepart: {
            rules: [
              { required: false, message: '请输入申请部门!' },
            ]
          },
          supplierNo: {
            rules: [
              { required: false, message: '请输入供应商名称!' },
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
              { required: true, message: '请输入产地!' },

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
          add: "/ywfobware/ywFobWare/add",
          edit: "/ywfobware/ywFobWare/edit",
          gysHttp:"/ywvendorinfo/ywVendorInfo/querySupplier",
          spdlSenHtpp:"/sys/category/childList",
          spdlHttp:"/sys/category/firstList?name=商品大类",
          sqbmHttp:"/sys/user/getUserSectionInfoByToken",
          jxHttp:"/sys/category/firstList?name=剂型",
          jyfwHttp:"/sys/category/firstList?name=经营范围",
          cfHttp:"/sys/category/firstList?name=处方分类",
          getCodeHttp:"/ywfobware/ywFobWare/create"
          // jyfwHttp:"/sys/category/firstList?name=经营范围"
        }
      }
    },
    created () {
    },
    mounted() {
      httpAction(this.url.getCodeHttp,'','post').then((res)=>{
        if(res.success){
          console.log("-------------------这是申请的code的-----------------------")
          code = res.result.wareId ;
          docCode = res.result.documentId;

          console.log(res)

          console.log("------------------------------------------")



        }else{
          this.$message.warning(res.message);
        }
      }).finally(() => {


      });

      httpAction(this.url.sqbmHttp,"","get").then((res)=>{
        if(res.success){
          console.log("-------------------这是申请部门的-----------------------")

          console.log(res)
          console.log("------------------------------------------")
          this.sqbmItems[0] = res.result["sysDepName"] ;
          sqbmall[res.result['sysDepName']]= res.result['sysOrgCode']


        }else{
          this.$message.warning(res.message);
        }
      }).finally(() => {


      });
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


      httpAction(this.url.spdlHttp,"","get").then((res)=>{
        if(res.success){
          console.log("-------------------这是商品大类的-----------------------")

          console.log(res)
          console.log("------------------------------------------")
          let len = res.result.length
          let result1 = [];
          for (var i = 0; i < len; i++) {
            result1[i] = res.result[i]['name'];
            // var dldict = { }
            dlall[res.result[i]['name']]=res.result[i]['code']
            dlallPid[res.result[i]['name']]=res.result[i]['id']
          }
          this.spdlItems= result1




        }else{

          console.log(res)
        }
      }).finally(() => {
      });
      httpAction(this.url.jxHttp,"","get").then((res)=>{
        if(res.success){
          console.log("-------------------这是剂型的-----------------------")

          console.log(res)
          console.log("------------------------------------------")
          let len = res.result.length
          let result1 = [];
          // var dldict = { }
          for (var i = 0; i < len; i++) {
            result1[i] = res.result[i]['name'];

            jxall[res.result[i]['name']]= res.result[i]['code']
          }

          this.jxItems= result1




        }else{

          console.log(res)
        }
      }).finally(() => {
      })
      httpAction(this.url.jyfwHttp,"","get").then((res)=>{
        if(res.success){
          console.log("-------------------这是经营范围的-----------------------")

          console.log(res)
          console.log("------------------------------------------")
          let len = res.result.length
          let result1 = [];
          for (var i = 0; i < len; i++) {
            result1[i] = res.result[i]['name'];
            // var dldict = { }
            jyfwall[res.result[i]['name']]=res.result[i]['code']
            // jxall[i] = dldict
          }

          this.jyfwItems= result1




        }else{

          console.log(res)
        }
      }).finally(() => {
      })
      httpAction(this.url.cfHttp,"","get").then((res)=>{
        if(res.success){
          console.log("-------------------这是处方分类的-----------------------")

          console.log(res)
          console.log("------------------------------------------")
          let len = res.result.length
          let result1 = [];
          for (var i = 0; i < len; i++) {
            result1[i] = res.result[i]['name'];
            // var dldict = { }
            cfall[res.result[i]['name']]=res.result[i]['code']
            // jxall[i] = dldict
          }

          this.cfItems= result1




        }else{

          console.log(res)
        }
      }).finally(() => {
      })

    },
    methods: {
      // getSen(){
      //   console.log("-------------------已经进入二级分类选项")
      //   console.log(this.spdlnow)
      //   var pid = null ;
      //   if(this.spdlnow==null){
      //     console.log("-------------------没有大类")
      //
      //     alert("请选择大类后选择二级分类");
      //
      //   }else{
      //     for(var j of dlallPid){
      //       for (var key in j){
      //         if(this.spdlnow===key){
      //           pid = j[key];
      //           break
      //
      //
      //         }
      //       }
      //     }
      //     console.log(id);
      //     httpAction(this.url.spdlSenHtpp,{"pid":pid},"get").then((res)=>{
      //       if(res.success){
      //         console.log("-------------------这是二级类的-----------------------")
      //         console.log(res)
      //         console.log("------------------------------------------")
      //         let len = res.result.length
      //         let result1 = [];
      //         for (var i = 0; i < len; i++) {
      //           result1[i] = res.result[i]['name']
      //           spdlsenall[res.result[i]['name']]= res.result[i]['code']
      //         }
      //         this.spdlSenItems= Array.from(new Set(result1))
      //
      //
      //       }else{
      //         console.log(res)
      //       }
      //     }).finally(() => {
      //
      //
      //     })
      //
      //   }
      // },
      getSen(){

        console.log("-------------------已经进入二级分类选项")
        console.log(dlallPid)
        console.log(this.spdlnow)
        var pid = null ;
        if(this.spdlnow==null){
          console.log("-------------------没有大类")

          alert("请选择大类后选择二级分类");

        }else{
          console.log("----------------进入选择")
          for(var j in dlallPid){




            console.log('---------这是j')
            console.log(j)
            console.log("-------------")
            if(this.spdlnow===j){
              pid = dlallPid[j];
              console.log(pid)
              break



            }
          }

          console.log(pid);
          var paramsd = "?pid="+pid.toString() ;
          var url  = this.url.spdlSenHtpp+paramsd ;

          console.log("------------------------url")
          console.log(url)
          httpAction(url,'',"get").then((res)=>{
            if(res.success){
              console.log("-------------------这是二级类的-----------------------")

              console.log(res)
              console.log("------------------------------------------")
              let len = res.result.length
              let result1 = [];
              for (var i = 0; i < len; i++) {
                result1[i] = res.result[i]['name']
                spdlsenall[res.result[i]['name']]= res.result[i]['code']
              }
              this.spdlSenItems= Array.from(new Set(result1))


            }else{
              console.log(res)
            }
          }).finally(() => {


          })

        }
      },
      checkFileNo() {
        console.log(this.chargeFileNo);
        // 把当前用户填写的注册证号发给后台进行验证
        axios({
          url: 'http://localhost:8080/jeecg-boot/sys/duplicate/check',
          method: 'GET',
          params: {
            fieldVal: this.chargeFileNo
            // chargeFileNo: this.form.getForm().getFieldValue('chargeFileNo')+''
          }
        }).then(res => {
          if (res === 'yijingcunzai') {

          }
        })
      },
      //getDepart() {
      // console.log(this.applyDepart);
      //
      // ({
      //  url: '/jeecg-boot/sys/user/getUserSectionInfoByToken',
      //   method: 'GET',
      //   params: {
      //    fieldVal: this.capplyDepart
      // chargeFileNo: this.form.getForm().getFieldValue('chargeFileNo')+''
      //    }
      // })
      // },//


      add () {
        this.edit({});
      },
      handReturn () {
        this.$router.push({path:"/FirstCamp/YwFobWareList"})
      },
      edit (record) {
        this.form.resetFields();
        this.model = Object.assign({}, record);
        this.visible = true;
        this.$nextTick(() => {
          this.form.setFieldsValue(pick(this.model,'createBy','createTime','updateBy','updateTime','documentNo','documentStatus','packageMaterial','applyReason','applyDate','checkDate','executeDate','applyDepart','supplierNo','wareId','commonName','wareSpeci','wareUnit','manufacture','wareName','englishName','producingArea','chargeFileNo','chargeFileIndate','manufactureClient','packageClient','barCode','wareFirstClass','wareSecondClass','businessType','drugForm','mainFunction','recipelType','inputTaxRate','outputTaxRate','isImport','originCountry','drugProperty','documentArchiveNo','brand','notes','isAnes','isSpecial','maxPackageNumber','mediumPackageNumber','wareIndate','packageMaterial','cureType','storageCondition','gmp','gmpIndate','importLicense','importLicenseIndate','manuLicense','manuLicenseIndate','packageLicense','packageLicenseIndate','wholesalePrice','supplyPrice','salePrice','bakInt1','bakInt2','bakDouble1','bakDouble2','bakChar1','bakChar2'))
        })
      },
      close () {
        this.$emit('close');
        this.visible = false;
      },
      /**
       * 获取进口税率
       */
      getInputTaxRate(val) {
        this.inputTaxRate = Number(val.split('%')[0]) / 100
      },
      handleOk () {
        console.log(this.inputTaxRate)
        const that = this;
        // 触发表单验证
        this.form.validateFields((err, values) => {

          values.drugForm = jxall[values.drugForm]
          // values.applyDepart = sqbmall[values.applyDepart]
          values.wareFirstClass= dlall[values.wareFirstClass]
          values.wareSecondClass= spdlsenall[values.wareSecondClass]
          values.businessType= jyfwall[values.businessType]
          values.recipelType= cfall[values.recipelType]
          values.wareId = code ;
          values.documentNo = docCode ;

          console.log('----------------------------这是表单值 ')
          console.log(values)
          console.log('---------------------------------')
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
              that.$router.push({path:"/FirstCamp/YwFobWareList"})
            })
          } else {
            return this.$message.info('还存在必填项未填写')
          }
        })
      },
      handleCancel () {
        this.close()
      },
      popupCallback(row){
        this.form.setFieldsValue(pick(row,'createBy','createTime','updateBy','updateTime','documentNo','documentStatus','packageMaterial','applyReason','applyDate','checkDate','executeDate','applyDepart','supplierNo','wareId','commonName','wareSpeci','wareUnit','manufacture','wareName','englishName','producingArea','chargeFileNo','chargeFileIndate','manufactureClient','packageClient','barCode','wareFirstClass','wareSecondClass','businessType','drugForm','mainFunction','recipelType','inputTaxRate','outputTaxRate','isImport','originCountry','drugProperty','documentArchiveNo','brand','notes','isAnes','isSpecial','maxPackageNumber','mediumPackageNumber','wareIndate','packageMaterial','cureType','storageCondition','gmp','gmpIndate','importLicense','importLicenseIndate','manuLicense','manuLicenseIndate','packageLicense','packageLicenseIndate','wholesalePrice','supplyPrice','salePrice','bakInt1','bakInt2','bakDouble1','bakDouble2','bakChar1','bakChar2'))
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
