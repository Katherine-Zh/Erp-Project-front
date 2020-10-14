<template>
  <div id = 'print'>
    <div style="background-color: white;align-content: center" >
      <br>
      <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
        <a-col :span="8">
          <p align="left" style="font-size:20px">
            <b>单据信息</b>
          </p>
        </a-col>
        <a-col style="float: right ;overflow: hidden;" class="table-page-search-submitButtons" >
          <a-button @click="handleToEdit" style="margin-right: 8px">
            修改
          </a-button>
          <a-button type="primary" @click="handReturn" style="margin-right: 8px">
            返回
          </a-button>
          <a-button type="primary" v-print="'#print'"  style="margin-right: 16px">
            打印
          </a-button>
        </a-col>
      </a-row>
      <a-divider/>
      <div>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">单据编号：{{this.$route.query.documentNo}}</p>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">单据状态：{{this.$route.query.documentStatus_dictText}}</p>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">申报日期：{{this.$route.query.applyDate}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">审批日期：{{this.$route.query.checkDate}}</p>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">生效日期：{{this.$route.query.executeDate}}</p>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">申报部门：{{this.$route.query.applyDepart}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="24">
            <p style="margin-bottom: 0px">供应商名称：{{this.$route.query.supplierNo}}</p>
          </a-col>
        </a-row>
      </div>
    </div>
    <div>
      <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;</p>
    </div>
    <div style="background-color: white;align-content: center" >
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
            <p style="margin-bottom: 0px">商品通用名称：{{this.$route.query.commonName}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">商品规格：{{this.$route.query.wareSpeci}}</p>

          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">商品单位：{{this.$route.query.wareUnit_dictText}}</p>

          </a-col>
          <a-col :span="16">
            <p style="margin-bottom: 0px">生产企业：{{this.$route.query.manufacture}}</p>

          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">商品名称：{{this.$route.query.wareName}}</p>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">商品英文名：{{this.$route.query.englishName}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">产地：{{this.$route.query.producingArea}}</p>

          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="16">
            <p style="margin-bottom: 0px">批准文号/注册证号：{{this.$route.query.chargeFileNo}}</p>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">批准文号/注册证号有效期：{{this.$route.query.manufacture}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="24">
            <p style="margin-bottom: 0px">生产企业委托方：{{this.$route.query.manufactureClient}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="24">
            <p style="margin-bottom: 0px">分包装生产企业：{{this.$route.query.packageClient}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="24">
            <p style="margin-bottom: 0px">条形码：{{this.$route.query.barCode}}</p>
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
            <p style="margin-bottom: 0px">有效期（天数）：{{this.$route.query.wareIndate}}</p>

          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">注射剂内包装材质：{{this.$route.query.packageMaterial}}</p>
          </a-col>
        </a-row>
      </div>
    </div>
    <div>
      <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;</p>
    </div>
    <div style="background-color: white;align-content: center">
      <br>
      <p align="left" style="font-size:20px">
        <b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;分类信息</b>
      </p>
      <a-divider/>
      <div>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">商品大类：{{this.$route.query.wareFirstClass}}</p>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">商品二级分类：{{this.$route.query.wareSecondClass}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">经营范围：{{this.$route.query.businessType}}</p>

          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">剂型：{{this.$route.query.drugForm}}</p>
          </a-col>
          <a-col :span="16">
            <p style="margin-bottom: 0px">功能主治：{{this.$route.query.mainFunction}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">处方分类：{{this.$route.query.recipelType}}</p>
          </a-col>
        </a-row>
      </div>
    </div>
    <div>
      <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;</p>
    </div>
    <div style="background-color: white;align-content: center">
      <br>
      <p align="left" style="font-size:20px">
        <b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;扩展信息</b>
      </p>
      <a-divider/>
      <div>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">进项税率：{{this.$route.query.inputTaxRate_dictText}}</p>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">销项税率：{{this.$route.query.outputTaxRate_dictText}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">是否进口：{{this.$route.query.isImport_dictText}}</p>

          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">原产国：{{this.$route.query.originCountry_dictText}}</p>
          </a-col>
          <a-col :span="16">
            <p style="margin-bottom: 0px">药品性状：{{this.$route.query.drugProperty}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="16">
            <p style="margin-bottom: 0px">文件归档编号：{{this.$route.query.documentArchiveNo}}</p>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">商标：{{this.$route.query.brand}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="24">
            <p style="margin-bottom: 0px">备注：{{this.$route.query.notes}}</p>
          </a-col>
        </a-row>
      </div>
    </div>
    <div>
      <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;</p>
    </div>
    <div style="background-color: white;align-content: center">
      <br>
      <p align="left" style="font-size:20px">
        <b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;特殊管控</b>
      </p>
      <a-divider/>
      <div>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">是否含麻：{{this.$route.query.isAnes_dictText}}</p>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">是否特殊药品：{{this.$route.query.isSpecial_dictText}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">养护类型：{{this.$route.query.cureType_dictText}}</p>

          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">存储条件：{{this.$route.query.storageCondition_dictText}}</p>
          </a-col>
        </a-row>
      </div>
    </div>
    <div>
      <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;</p>
    </div>
    <div style="background-color: white;align-content: center">
      <br>
      <p align="left" style="font-size:20px">
        <b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;证书信息</b>
      </p>
      <a-divider/>
      <div>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="16">
            <p style="margin-bottom: 0px">GMP证书号：{{this.$route.query.gmp}}</p>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">GMP证书有效期：{{this.$route.query.gmpIndate}}</p>

          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="16">
            <p style="margin-bottom: 0px">进口注册证号：{{this.$route.query.importLicense}}</p>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">进口注册证号有效期：{{this.$route.query.importLicenseIndate}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="16">
            <p style="margin-bottom: 0px">分包装注册证号：{{this.$route.query.packageLicense}}</p>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">分包装注册证号有效期：{{this.$route.query.packageLicenseIndate}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="16">
            <p style="margin-bottom: 0px">生产许可证：{{this.$route.query.manuLicense}}</p>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">生产许可证有效期：{{this.$route.query.manuLicenseIndate}}</p>
          </a-col>
        </a-row>
      </div>
    </div>
    <div>
      <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;</p>
    </div>
    <div style="background-color: white;align-content: center">
      <br>
      <p align="left" style="font-size:20px">
        <b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;价格信息</b>
      </p>
      <a-divider/>
      <div>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">进价：{{this.$route.query.supplyPrice}}</p>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">批发价：{{this.$route.query.wholesalePrice}}</p>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">零售价：{{this.$route.query.salePrice}}</p>
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
  import { mixinDevice } from '@/utils/mixin'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'

  var record1 = null;
  export default {
    name: 'comview',
    description: '首营商品查看页面',
    mixins:[JeecgListMixin, mixinDevice],
    mounted:{

    },
    methods: {
      handReturn () {
        this.$router.push({path:"/FirstCamp/YwFobWareList"})
        this.close()
      },
      handleToEdit(){
        this.$router.push({ path: '/commoedit',query:this.$route.query})

      }
    }
  }

</script>

<style scoped>

</style>