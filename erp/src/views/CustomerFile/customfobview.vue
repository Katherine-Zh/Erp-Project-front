<template>
  <div id = 'print1'>
    <div>
      <div style="background-color: white;align-content: center">
        <br>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p align="left" style="font-size:20px">
              <b>客户基本信息</b>
            </p>
          </a-col>
          <a-col style="float: right ;overflow: hidden;" class="table-page-search-submitButtons" >
            <a-button @click="handleToEdit" style="margin-right: 8px">
              修改
            </a-button>
            <a-button type="primary" @click="handReturn" style="margin-right: 8px">
              返回
            </a-button>
            <a-button type="primary" v-print="'#print1'" style="margin-right: 16px">
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

      <p  style="font-size:20px">
        <b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;客户基本信息</b>
      </p>
      <a-divider/>
      <div>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">客户编码：{{this.$route.query.customId}}</p>

          </a-col>
          <a-col :span="16">
            <p style="margin-bottom: 0px">客户名称：{{this.$route.query.customName}}</p>

          </a-col>

        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">

          <a-col :span="8">
            <p style="margin-bottom: 0px">助记码：{{this.$route.query.customAbc}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">曾用名：{{this.$route.query.oldName}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">使用状态：{{this.$route.query.useStatus}}</p>

          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">客户类型：{{this.$route.query.customType}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">销售清单：{{this.$route.query.saleSample}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">提货方式：{{this.$route.query.pickUpType}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="16">
            <p style="margin-bottom: 0px">地址：{{this.$route.query.address}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">银行账号：{{this.$route.query.bankAcount}}</p>

          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="24">
            <p style="margin-bottom: 0px">经营范围：{{this.$route.query.manufactureClient}}</p>

          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">银行名称：{{this.$route.query.bankName}}</p>

          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">法人：{{this.$route.query.legalPerson}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">中包装数量：{{this.$route.query.mediumPackageNumber}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">业务状态：{{this.$route.query.serviceStatus}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">结算状态：{{this.$route.query.settleStatus}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">纳税类型：{{this.$route.query.taxType}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">注册资本：{{this.$route.query.registerCapital}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">业务员：{{this.$route.query.clerk}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">外部标识：{{this.$route.query.outIdentity}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">单位监管码：{{this.$route.query.companySupervisedCode}}</p>
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
            <p style="margin-bottom: 0px">公司成立时间：{{this.$route.query.companyEstablishTime}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">企业负责人：{{this.$route.query.companyChargePerson}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">联系电话：{{this.$route.query.telephone}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">传真：{{this.$route.query.fax}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">手机：{{this.$route.query.mobilePhone}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">邮箱：{{this.$route.query.email}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">网址：{{this.$route.query.url}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">资料来源：{{this.$route.query.updateBy}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">组织机构代码：{{this.$route.query.orgCode}}</p>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">税务登记证号：{{this.$route.query.taxRegistrationAccount}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">手机：{{this.$route.query.mobilePhone}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">邮箱：{{this.$route.query.email}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">网址：{{this.$route.query.url}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">资料来源：{{this.$route.query.updateBy}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">组织机构代码：{{this.$route.query.orgCode}}</p>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">税务登记证号：{{this.$route.query.taxRegistrationAccount}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">电子监管码：{{this.$route.query.elecSupervisedCode}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">质量负责人：{{this.$route.query.qualityIncharge}}</p>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">是否现金备案：{{this.$route.query.isCashRecord}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">变更及说明：{{this.$route.query.changeAndNotes}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">是否两票制：{{this.$route.query.isTwoLicense}}</p>
          </a-col>

        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">是否选批：{{this.$route.query.isSelectBatch}}</p>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">统一信用代码：{{this.$route.query.cuscc}}</p>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">首次业务时间：{{this.$route.query.fobTime}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">末次业务日期：{{this.$route.query.endBusinessTime}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">备注：{{this.$route.query.notes}}</p>
          </a-col>

        </a-row>
        <a-drawer/>
        <p style="font-size:20px">
          <b>客户档案</b>
        </p>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">作废原因：{{this.$route.query.invalidReason}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">作废人：{{this.$route.query.invalidPerson}}</p>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">作废时间：{{this.$route.query.invalidDate}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">档案编号：{{this.$route.query.archiveNo}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">建档日期：{{this.$route.query.documentCreateTime}}</p>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">最终修改人：{{this.$route.query.documentCreateTime}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">最终修改日期：{{this.$route.query.documentCreateTime}}</p>

          </a-col>

        </a-row>


      </div>
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
        this.$router.push({ path: '/CustomerFile/YwCustomAdd',query:this.$route.query})
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