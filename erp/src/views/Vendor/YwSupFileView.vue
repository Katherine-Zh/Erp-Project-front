<template>
  <div id = 'print'>
    <div>
      <div style="background-color: white;align-content: center">
        <br>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p align="left" style="font-size:20px">
            <b>供应商档案详情</b>
            </p>
          </a-col>
          <a-col style="float: right ;overflow: hidden;" class="table-page-search-submitButtons" >
            <a-button type="primary" @click="handleToEdit" style="margin-right: 8px">
              修改
            </a-button>
            <a-button type="primary" @click="handReturn" style="margin-right: 8px">
              返回
            </a-button>
            <a-button type="primary" v-print="'#print'"  style="margin-right: 8px">
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
      <p align="center" style="font-size:20px">
        <b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;供应商档案</b>
      </p>

      <div>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">供应商编码：{{this.$route.query.vendorId}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">供应商名称：{{this.$route.query.vendorName}}</p>

          </a-col>

        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">供应商助记码：{{this.$route.query.vendorAbc}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">曾用名：{{this.$route.query.oldName}}</p>
          
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">使用状态：{{this.$route.query.useStatus_dictText}}</p>

          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">源系统编码：{{this.$route.query.originCode}}</p>
          </a-col> 
          <a-col :span="8">
            <p style="margin-bottom: 0px">供应商类型：{{this.$route.query.businessUnitType_dictText}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">法人：{{this.$route.query.legalPerson}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">注册地址：{{this.$route.query.registerAddress}}</p>
          </a-col> 
          </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">地址：{{this.$route.query.address}}</p>
          </a-col> 
          <a-col :span="8">
            <p style="margin-bottom: 0px">银行账号：{{this.$route.query.bankAcount}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">银行名称：{{this.$route.query.bankName}}</p>
          </a-col>
         </a-row>        
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">业务状态：{{this.$route.query.serviceStatus_dictText}}</p>
          </a-col> 
          <a-col :span="8">
            <p style="margin-bottom: 0px">结算状态：{{this.$route.query.settleStatus_dictText}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">纳税类型：{{this.$route.query.taxType_dictText}}</p>
          </a-col>
         </a-row>   
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">注册资本(万元)：{{this.$route.query.registerCapital}}</p>
          </a-col> 
          <a-col :span="8">
            <p style="margin-bottom: 0px">采购员：{{this.$route.query.buyer}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">单位监管码：{{this.$route.query.companySupervisedCode}}</p>
          </a-col>
         </a-row>  
       <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">生产地址：{{this.$route.query.produceArea}}</p>
          </a-col>   
          </a-row> 
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">企业负责人：{{this.$route.query.companyChargePerson}}</p>
          </a-col> 
          <a-col :span="8">
            <p style="margin-bottom: 0px">公司成立时间：{{this.$route.query.companyEstablishTime}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">联系电话：{{this.$route.query.telephone}}</p>
          </a-col>
         </a-row> 
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">传真：{{this.$route.query.fax}}</p>
          </a-col> 
          <a-col :span="8">
            <p style="margin-bottom: 0px">手机：{{this.$route.query.mobilePhone}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">邮箱：{{this.$route.query.email}}</p>
          </a-col>
         </a-row>  
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">网址：{{this.$route.query.url}}</p>
          </a-col> 
          <a-col :span="8">
            <p style="margin-bottom: 0px">资料来源：{{this.$route.query.dataSource}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">订单有效天数：{{this.$route.query.orderIndate}}</p>
          </a-col>
         </a-row> 
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">统一信用代码：{{this.$route.query.cuscc}}</p>
          </a-col> 
          <a-col :span="8">
            <p style="margin-bottom: 0px">税务登记证号：{{this.$route.query.taxRegistrationAccount}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">注册国家：{{this.$route.query.registerCountry}}</p>
          </a-col>
         </a-row> 
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">质量负责人：{{this.$route.query.qualityIncharge}}</p>
          </a-col> 
          <a-col :span="8">
            <p style="margin-bottom: 0px">电子监管码：{{this.$route.query.elecSupervisedCode}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">是否两票制：{{this.$route.query.isTwoLicense_dictText}}</p>
          </a-col>
         </a-row>   
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">首次业务时间：{{this.$route.query.fobTime}}</p>
          </a-col> 
          <a-col :span="8">
            <p style="margin-bottom: 0px">末次业务时间：{{this.$route.query.endBusinessTime}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">档案号：{{this.$route.query.archiveNo}}</p>
          </a-col>
         </a-row> 
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">档案号生成日期：{{this.$route.query.archiveDate}}</p>
          </a-col> 
          <a-col :span="8">
            <p style="margin-bottom: 0px">建档日期：{{this.$route.query.documentCreateTime}}</p>

          </a-col>

         </a-row>         
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">说明：{{this.$route.query.illustration}}</p>
          </a-col> 
          
         </a-row>  
             
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">备注：{{this.$route.query.notes}}</p>
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

  
  export default {
    name: 'YwSupFileView',
    description: '首营供应商档案详情',
    mixins:[JeecgListMixin, mixinDevice],
    mounted () {
      
    },
    methods: {
      handReturn () {
        this.$router.push({path:"/Vendor/YwSupFile"})
        this.close()
      },
      handleToEdit(){
        this.$router.push({ path: '/Vendor/YwSupFileBas',query:this.$route.query})

      }
    }
  }
</script>

<style scoped>

</style>