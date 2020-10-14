<template xmlns:a-col="http://www.w3.org/1999/html">
<div >
<div style="background-color: white;align-content: center" id="ddd">
  <br>
  <p align="center" style="font-size:20px">
    <b>用户基本信息</b>
  </p>
  <a-divider/>
        <div>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">账号：{{this.$route.query.username}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">用户姓名：{{this.$route.query.realname}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">简码：{{this.$route.query.subName}}</p>

          </a-col>
        </a-row>

        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">工号：{{this.$route.query.workNo}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">职务：{{this.$route.query.post}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">部门：{{this.$route.query.orgCode}}</p>

          </a-col>
        </a-row>

        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">负责部门：{{this.$route.query.departIds_dictText}}</p>

          </a-col>


        </a-row>
        </div>
  <a-divider />
  <div  v-if="displayC>=2">

        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">性别：{{this.$route.query.sex_dictText}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">民族：{{this.$route.query.native}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">生日：{{this.$route.query.birthday}}</p>

          </a-col>

        </a-row>


        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">身份证：{{this.$route.query.idCard}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">政治面貌：{{this.$route.query.political}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">婚姻状况：{{this.$route.query.isMarry_dictText}}</p>

          </a-col>
        </a-row>

        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">

          <a-col :span="8">
            <p style="margin-bottom: 0px">是否当地人：{{this.$route.query.isNative_dictText}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">毕业院校：{{this.$route.query.school}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">专业：{{this.$route.query.major}}</p>


          </a-col>



        </a-row>
        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">学历：{{this.$route.query.edu_dictText}}</p>

          </a-col>
        <a-col :span="8">
          <p style="margin-bottom: 0px">入职时间：{{this.$route.query.enterDate}}</p>

        </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">参加工作时间：{{this.$route.query.workingDate}}</p>


          </a-col>


        </a-row>

        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">医保：{{this.$route.query.medicare}}</p>


          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">工会：{{this.$route.query.laborUnion}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px">荣誉：{{this.$route.query.glory}}</p>


          </a-col>


        </a-row>
        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px">电子邮件：{{this.$route.query.email}}</p>


          </a-col>

          <a-col :span="8">
            <p style="margin-bottom: 0px;size: 10px">电话：{{this.$route.query.phone}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px;size: 10px">手机号：{{this.$route.query.telephone}}</p>

          </a-col>
        </a-row>
  </div>
  <a-divider />
  <div  v-if="displayC>=3">
        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px;size: 10px">角色分配：{{}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px;size: 10px">身份：{{this.$route.query.userIdentity_dictText}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px;size: 10px">同步工作流引擎：{{this.$route.query.activitiSync_dictText}}</p>

          </a-col>

        </a-row>
        <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="8">
            <p style="margin-bottom: 0px;size: 10px">冻结状态：{{this.$route.query.status_dictText}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px;size: 10px">启用状态：{{this.$route.query.ableStatus}}</p>

          </a-col>
          <a-col :span="8">
            <p style="margin-bottom: 0px;size: 10px">软删除状态：{{this.$route.query.delFlag=1?"未删除":"已删除"}}</p>

          </a-col>

         </a-row>
         <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">

           <a-col :span="8">
             <p style="margin-bottom: 0px;size: 10px">创建时间：{{this.$route.query.createTime}}</p>

           </a-col>
           <a-col :span="8">
             <p style="margin-bottom: 0px;size: 10px">创建人：{{this.$route.query.createBy}}</p>

           </a-col>
           <a-col :span="8">
             <p style="margin-bottom: 0px;size: 10px">更新时间：{{this.$route.query.updateTime}}</p>

           </a-col>

         </a-row>
         <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
           <a-col :span="8">
             <p style="margin-bottom: 0px;size: 10px">更新人：{{this.$route.query.updateBy}}</p>

           </a-col>
           <a-col :span="8">
             <p style="margin-bottom: 0px;size: 10px">第三方登录唯一标识：{{this.$route.query.thirdId}}</p>

           </a-col>
           <a-col :span="8">
             <p style="margin-bottom: 0px;size: 10px">第三方登录类型：{{this.$route.query.thirdType}}</p>

           </a-col>

         </a-row>
  </div>
</div>
<div style="background-color: white;padding-bottom: 50px"  >

        <a-row justify="center"  :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">

          <a-col push="19">
            <span>
            <a-button style="margin-right: 10px" @click="handleEdit1(record)"  >修改</a-button>
            <a-button style="margin-right: 10px"  @click="allOk" >完成</a-button>
            <a-button style="margin-right: 10px" v-print="'#ddd'" >打印</a-button>
              </span>
          </a-col>
        </a-row>

</div>
</div>
</template>

<script>

  import { httpAction } from '@/api/manage'
  import { mixinDevice } from '@/utils/mixin'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'



  export default {
    name: "UserInfModal",
    mixins:[JeecgListMixin, mixinDevice],
    components: {
    },
    data () {
      return {
        url:{
          fenji:"/sys/user/queryUserInfoShowAuth",
          add: "/sys/user/add",
          quary:"/sys/user/queryById",
          edit: "/sys/user/edit",

        },

          displayC:1
      }
    },
    created () {
      console.log('========这是路由参数');
      console.log(this.$route.query);
    },
    methods: {
      allOk(){
        this.$router.push({path:"/usermanage/UserInfList"})
      }

    },
    mounted () {
      httpAction(this.url.fenji,"","get").then((res)=>{
        if(res.success){
          console.log("dep=================",res.result)
          this.displayC = res.result


        }else{
          that.$message.warning(res.message);
        }
      }).finally(() => {


      })
    }

  }
</script>