<template>
  <div >
    <div>
      <div style="background-color: white;">
        <br>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p align="left" style="font-size:20px">
              <b>首营客户</b>
            </p>
          </a-col>
          <a-col style="float: right ;overflow: hidden;" class="table-page-search-submitButtons" >
            <a-button @click="handleCustomToAddEdit" style="margin-right: 8px">
              修改
            </a-button>
            <a-button @click="handReturnToCustomList" style="margin-right: 8px">
              返回
            </a-button>
            <a-button type="primary" v-print="'#print1'" style="margin-right: 16px">
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
    <div id = 'print1' >
    <div style="background-color: white;">
      <p align="left" style="font-size:20px">
            <b>单据信息</b>
      </p>
      <a-divider/>
      <div>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">单据编号：{{this.$route.query.documentNo}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">单据状态：{{this.$route.query.documentStatus}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">申请日期：{{this.$route.query.applyDate}}</p>

          </a-col>

        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">

          <a-col :span="8">
            <p style="margin-bottom: 0px">申请部门：{{this.$route.query.applyDepart}}</p>

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

      <p align="left"   style="font-size:20px">
            <b>客户基本信息</b>
      </p>

      <div>

        <a-divider/>

        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">客户编码：{{this.$route.query.customNo}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">客户名称：{{this.$route.query.customName}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">所属地区：{{this.$route.query.cascader}}</p>

          </a-col>
        </a-row>

        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">法定代表人：{{this.$route.query.legalRepresent}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">注册资本(万元)：{{this.$route.query.registerCapital}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">企业负责人：{{this.$route.query.groupIncharge}}</p>

          </a-col>


        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">质量负责人：{{this.$route.query.serviceStatus}}</p>
          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">注册地址：{{this.$route.query.registerAddress}}</p>

          </a-col>

          <a-col :span="8">
            <p style="margin-bottom: 0px">经营范围：{{this.$route.query.businessScope}}</p>

          </a-col>


        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">外部标识：{{this.$route.query.outIdentity}}</p>

          </a-col>

          <a-col :span="8">
            <p style="margin-bottom: 0px">税号：{{this.$route.query.taxNum}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">同一信用代码：{{this.$route.query.cuscc}}</p>

          </a-col>

        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">组织机构代码：{{this.$route.query.orgCode}}</p>
          </a-col>

          <a-col :span="8">
            <p style="margin-bottom: 0px">客户分类：{{this.$route.query.customClass}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">经营性质：{{this.$route.query.businessProp}}</p>

          </a-col>

        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">备注：{{this.$route.query.notes}}</p>
          </a-col>

        </a-row>
        </div>

      <p align="left" style="font-size:20px">
            <b>购货单位采购人员资质情况</b>
      </p>

      <div>


        <a-divider/>

        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">身份证号：{{this.$route.query.buyerIdCard}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">身份证复印件与原件核实：{{this.$route.query.isNoDifference}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">业务员签字：{{this.$route.query.clerkSignature}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">日期：{{this.$route.query.clerkSignatureDate}}</p>

          </a-col>

        </a-row>

        </div>
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
      handleCustomToAddEdit(){

        this.$router.push({ path: '/CustomerFile/YwFobCustomInfoAddEdit',query:this.$route.query})

      },

      handReturnToCustomList(){
        this.$router.push({ path: '/CustomerFile/YwFobCustomInfoList'})
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