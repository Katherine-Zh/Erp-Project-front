<template>
  <div id = 'print1'>
    <div>
      <div style="background-color: white;align-content: center">
        <br>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p align="left" style="font-size:20px">
              <b>商品资料详情</b>
            </p>
          </a-col>
          <a-col style="float: right ;overflow: hidden;" class="table-page-search-submitButtons" >
            <a-button @click="handleToEdit" style="margin-right: 8px">
              修改
            </a-button>
            <a-button type="primary" @click="handReturn" style="margin-right: 8px">
              返回
            </a-button>
            <a-button type="primary" html-type="submit" @click="handleOk" style="margin-right: 16px">
              打印
            </a-button>
          </a-col>
        </a-row>
      </div>
    </div>
    <div>
      <p>&emsp;</p>
    </div>
    <div style="background-color: white;align-content: center">
      <br>
      <p align="left" style="font-size:20px">
        <b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;商品基本信息</b>
      </p>
      <a-divider/>
      <div>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">商品编码：{{this.$route.query.wareId}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">商品名称：{{this.$route.query.wareName}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">通用名称：{{this.$route.query.commonName}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">助记码：{{this.$route.query.abc}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">商品规格：{{this.$route.query.wareSpeci}}</p>

          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">生产企业：{{this.$route.query.manufacture}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">商品单位：{{this.$route.query.wareUnit}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">产地：{{this.$route.query.producingArea}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">条形码：{{this.$route.query.barCode}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">标注：{{this.$route.query.personalIdentity}}</p>

          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">生产企业委托方：{{this.$route.query.manufactureClient}}</p>

          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">分包装生产企业：{{this.$route.query.packageClient}}</p>

          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">件包装数量：{{this.$route.query.maxPackageNumber}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">中包装数量：{{this.$route.query.mediumPackageNumber}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">商品有效期(天数)：{{this.$route.query.waeIndate}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">是否进口：{{this.$route.query.isImport}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">原产国：{{this.$route.query.originCountry}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">进项税率：{{this.$route.query.inputTaxRate}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">销项税率：{{this.$route.query.outputTaxRate}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">批发价：{{this.$route.query.whlprice}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">零售价：{{this.$route.query.salePrice}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">商品状态：{{this.$route.query.wareStatus}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">采购状态：{{this.$route.query.purStatus}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">销售状态：{{this.$route.query.saleStatus}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">创建人：{{this.$route.query.createBy}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">创建时间：{{this.$route.query.createTime}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">收货时间：{{this.$route.query.initTime}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">最后销售时间：{{this.$route.query.lastSaleTime}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">最新入库时间：{{this.$route.query.lastTime}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">首次销售时间：{{this.$route.query.firstSaleTime}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">最终修改人：{{this.$route.query.updateBy}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">最终修改时间：{{this.$route.query.updateTime}}</p>
          </a-col>
        </a-row>
      </div>
    </div>
    <div>
      <p>&emsp;</p>
    </div>
    <div style="background-color: white;align-content: center">
      <br>
      <p align="left" style="font-size:20px">
        <b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;商品扩展信息</b>
      </p>
      <a-divider/>
      <div>
        <p align="left" style="font-size:20px">
          <b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;基础类</b>
        </p>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">源系统编码：{{this.extInfo.originWareId}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">英文名称：{{this.extInfo.englishName}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">化学名称：{{this.extInfo.chemicalName}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">主要成分：{{this.extInfo.mainElement}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">质量标准：{{this.extInfo.qualityStandard}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">养护类型：{{this.extInfo.cureType_dictText}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">是否中标<：{{this.extInfo.isBidWare}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">中标类型：{{this.extInfo.bidType}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">中标流水码：{{this.extInfo.bidCode}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">中标价格：{{this.extInfo.bidPrice}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">付款方式：{{this.extInfo.payType}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">付款账期：{{this.extInfo.payPeriod}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">默认采购员：{{this.extInfo.defaultBuyer}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">最新供应商：{{this.extInfo.vendorNo}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">档案号：{{this.extInfo.archivesNo}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">冷链品种：{{this.extInfo.isColdChain}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">含特殊复方制剂：{{this.extInfo.isSpecialFf}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">是否兴奋剂：{{this.extInfo.isTonic}}</p>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">是否两票制品种：{{this.extInfo.isTwoLicense}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">功能主治：{{this.extInfo.mainFunction}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">说明书：{{this.extInfo.instructionBook}}</p>
          </a-col>
        </a-row>
      </div>
      <a-divider/>
      <div>
        <p align="left" style="font-size:20px">
          <b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;基础证照类</b>
        </p>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">批准文号/注册证号：{{this.$route.query.chargeFileNo}}</p>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">批准文号/注册证号有效期：{{this.$route.query.chargeFileIndate}}</p>
          </a-col>

        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">分包装批准文号/注册证号：{{this.$route.query.packageLicense}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">分包装批准文号/注册证号有效期：{{this.$route.query.packageLicenseIndate}}</p>

          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">生产许可证号：{{this.$route.query.manuLicense}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">生产许可证号有效期：{{this.$route.query.manuLicenseIndate}}</p>
          </a-col>
        </a-row>
      </div>
      <a-divider/>
      <div>
        <p align="left" style="font-size:20px">
          <b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;仓储类</b>
        </p>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">贮存条件：{{this.extInfo.storageCondition_dictText}}</p>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">存储温度：{{this.extInfo.storageTemp1}}</p>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">运输条件：{{this.extInfo.deliverCondition}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">双人验收：{{this.extInfo.isDoubleCheck}}</p>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">中包装销售：{{this.extInfo.isMediumPackageSale}}</p>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">大包装销售：{{this.extInfo.isMaxPackageSale}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">是否打印检单：{{this.extInfo.isPrintControl}}</p>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">是否扫码：{{this.extInfo.isScan}}</p>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">回执品种：{{this.extInfo.isFallbackWare}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">大包装单位体积 长（mm）：{{this.extInfo.maxPackageLongth}}</p>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">宽（mm）：{{this.extInfo.maxPackageWidth}}</p>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">高（mm）：{{this.extInfo.maxPackageHight}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">中包装单位体积 长（mm）：{{this.extInfo.mediumPackageLongth}}</p>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">宽（mm）：{{this.extInfo.mediumPackageWidth}}</p>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">高（mm）：{{this.extInfo.mediumPackageHeight}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">小包装单位体积 长（mm）：{{this.extInfo.smallPackageLongth}}</p>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">宽（mm）：{{this.extInfo.smallPackageWidth}}</p>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">高（mm）：{{this.extInfo.smallPackageHeight}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">大包装单位：{{this.extInfo.maxPackageUnit}}</p>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">中包装单位：{{this.extInfo.mediumPackageUnit}}</p>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">小包装单位：{{this.extInfo.smallPackageUnit}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">大包装重量（g）：{{this.extInfo.maxPackageWeight}}</p>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">中包装重量（g）：{{this.extInfo.mediumPackageWeight}}</p>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">小包装重量（g）：{{this.extInfo.smallPackageWeight}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">备注：{{this.extInfo.notes}}</p>
          </a-col>
        </a-row>
      </div>
    </div>
    <div>
      <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;</p>
    </div>
  </div>
</template>

<script>

  import { httpAction } from '@/api/manage'
  var record1 = null ;
  export default {
    name: 'ComInfView',
    data(){
      return {
        extInfo:{},
        url:{
          getext:"/ywwareinfo/ywWareInfo/queryByWareId"
        }
      }
    },
    mounted () {
      console.log("=============================quary")
      console.log(this.$route.query)

      var url = this.url.getext+"?wareId="+this.$route.query.wareId ;
      console.log(url)
      httpAction(url,'','get').then((res)=>{
        if(res.success){
          console.log("-------------------这是扩展信息-----------------------")


          console.log(res)
          // record1 = res.result ;
          this.extInfo = res.result.records[0] ;
          console.log("==================未合并")
          console.log(this.$route.query)
          record1 = this.addAll(this.$route.query,this.extInfo)
          console.log("===============================合并之后")
          console.log(ddd)

          console.log("------------------------------------------")



        }else{
          this.$message.warning(res.message);
        }
      }).finally(() => {


      });

    },
    methods:{
      handleToEdit(){
        this.$router.push({ path: '/ComInfEdit',query:record1})
      },
      addAll(jsonbject1,jsonbject2){
        var resultJsonObject = {};
        for (var attr in jsonbject1) {
          resultJsonObject[attr] = jsonbject1[attr];
        }
        for (var attr in jsonbject2) {
          resultJsonObject[attr] = jsonbject2[attr];
        }
        return resultJsonObject;
      }
    }

  }
</script>

<style scoped>

</style>