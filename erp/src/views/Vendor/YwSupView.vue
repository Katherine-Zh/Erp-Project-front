<template>
  <div id = 'print'>
    <div>
      <div style="background-color: white;align-content: center">
        <br>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p align="left" style="font-size:20px">
            <b>首营供应商详情</b>
            </p>
          </a-col>
          <a-col style="float: right ;overflow: hidden;" class="table-page-search-submitButtons" >
            <a-button @click="handleToEdit1" style="margin-right: 8px">
              修改
            </a-button>
            <a-button @click="handReturn" style="margin-right: 8px">
              返回
            </a-button>
            <a-button v-print="'#print'"  style="margin-right: 16px">
              打印
            </a-button>
            <a-button type="primary" html-type="submit" @click="handleOk" style="margin-right: 16px">
              提交审核
            </a-button>
            <a-button type="primary" html-type="submit" @click="handleOk" style="margin-right: 16px">
              转供应商档案
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
        <b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;首营供应商</b>
      </p>
      <p align="left" style="font-size:20px">
        <b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;单据信息</b>
      </p>
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
            <p style="margin-bottom: 0px">申报部门：{{this.$route.query.applyDepart}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">申报人：{{this.$route.query.applyPerson}}</p>
          
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">审批日期：{{this.$route.query.checkDate}}</p>

          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">转正日期：{{this.$route.query.executeDate}}</p>
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
        <b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;供应商基本信息</b>
      </p>
      <div>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">供应商编号：{{this.$route.query.vendorNo}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">供应商名称：{{this.$route.query.vendorName}}</p>

          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">企业类型：{{this.$route.query.groupType}}</p>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">注册地址：{{this.$route.query.registerAddress}}</p>  

          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">地址：{{this.$route.query.address}}</p>

          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">法人代表：{{this.$route.query.legalRepresent}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">邮政编码：{{this.$route.query.postCode}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">联系人：{{this.$route.query.linkman}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">联系人电话：{{this.$route.query.linkmanPhone}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">联系人传真：{{this.$route.query.linkmanFax}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">不良记录：{{this.$route.query.badRecordes}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">组织机构代码：{{this.$route.query.orgCode}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">税号：{{this.$route.query.taxNum}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">统一信用代码证：{{this.$route.query.cuscc}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">开户银行：{{this.$route.query.depositBank}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">银行账号：{{this.$route.query.bankNum}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">电子监管码：{{this.$route.query.esc}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">注册资本（万元）：{{this.$route.query.registerCapital}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">质量负责人：{{this.$route.query.qualityIncharge}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">企业负责人：{{this.$route.query.groupIncharge}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">经营范围：{{this.$route.query.businessScope}}</p>

          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">生产范围：{{this.$route.query.produceScope}}</p>

          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">有无质量保证协议：{{this.$route.query.isQualityPromise_dictText}}</p>

          </a-col>  
          <a-col :span="8">
            <p style="margin-bottom: 0px">授权人姓名：{{this.$route.query.authorizedName}}</p>

          </a-col> 
          <a-col :span="8">
            <p style="margin-bottom: 0px">是否有业务代表：{{this.$route.query.isHaveAgent_dictText}}</p>

          </a-col> 
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">授权书有效期：{{this.$route.query.authorizedIndate}}</p>

          </a-col>  
          <a-col :span="8">
            <p style="margin-bottom: 0px">授权人身份证号：{{this.$route.query.authorizedIdCard}}</p>
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
        <b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;文件信息</b>
      </p>
      <div>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">文件归档编号：{{this.$route.query.documentArchiveNo}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">业务员备案情况：{{this.$route.query.salesmanRegistration}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">备案有效期：{{this.$route.query.registrationIndate}}</p>
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
    name: 'YwSupView',
    description: '首营供应商详情',
    mixins:[JeecgListMixin, mixinDevice],
    mounted:{

    },
    methods: {
      handReturn () {
        this.$router.push({path:"/Vendor/YwSupplier"})
        this.close()
      },
      handleToEdit1(){
        this.$router.push({ path: '/YwSupEdit',query:this.$route.query})

      }
    }
  }
</script>

<style scoped>

</style>