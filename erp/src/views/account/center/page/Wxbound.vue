
<template>

  <div class="set">

    <table width="100%" border="1" bordercolor="#dbdbdb" cellpadding="0" cellspacing="0">
      <tr align="center" height="40">
        <td width="20%"><b>头像</b></td>
        <td width="15%"><b>昵称</b></td>
        <td width="15%"><b>操作</b></td>
      </tr>
      <tr v-if="bound_flag" align="center" valign="middle" height="80">
        <td>
          <img v-bind:src="headimgurl" id="Headimg" width="60">
        </td>
        <td>
          {{Nickname}}
        </td>
        <td>
          <div class="vote-operate">
            <button v-on:click="ShowModel2()" id="button2">解绑</button>
          </div>
        </td>
      </tr>
      <tr v-else="bound_flag" align="center">
        <td colspan="4" height="50">
          暂无微信，<button v-on:click="ShowModel1()" id="button1">去绑定</button>
        </td>
      </tr>
    </table>


    <!--遮罩层-->
    <div id="h0" class="c0 hide"></div>

    <!--弹窗层1-->
    <div id="h1" class="c1 hide">
      <div align="center" style="line-height: 46px; text-indent: 1em; color: #333; border-bottom: 1px solid #bbb;">
        扫码关注公众号，即可绑定微信
      </div>
      <br />
      <div align="center"><img src="http://localhost:3000/tongkangyiyao.jpg" width="160"></div>
      <br />
      <div align="center"><input style="margin-left: 0px;" type="button" value="关闭" v-on:click="ModelClose1()" /></div>
    </div>

    <!--弹窗层2-->
    <div id="h2" class="c2 hide">
      <div align="center" style="line-height: 46px; text-indent: 1em; color: #333; border-bottom: 1px solid #bbb;">
        扫码解绑
      </div>
      <br />
      <div align="center"><img src="http://localhost:3000/tongkangyiyao.jpg" width="160"></div>
      <br />
      <div align="center"><input style="margin-left: 0px;" type="button" value="关闭" v-on:click="ModelClose2()" /></div>
    </div>

    <!--弹窗层3-->
    <div id="h3" class="c3 hide">
      <div align="center" style="line-height: 70px; text-indent: 1em; color: #333; ">
        微信解绑成功！
      </div>
      <div align="center"><input style="margin-left: 0px;margin-top: 0px" type="button" value="关闭" v-on:click="ModelClose3()" /></div>
    </div>

    <!--弹窗层4-->
    <div id="h4" class="c4 hide">
      <div align="center" style="line-height: 70px; text-indent: 1em; color: #333; ">
        微信解绑失败！
      </div>
      <div align="center"><input style="margin-left: 0px;margin-top: 0px" type="button" value="关闭" v-on:click="ModelClose4()" /></div>
    </div>

  </div>

</template>


<script>

  import AList from 'ant-design-vue/es/list'
  import AListItem from 'ant-design-vue/es/list/Item'
  import { httpAction } from '../../../../api/manage'


  export default {
    name: "Wxbound",
    components: {
      AList,
      AListItem
    },
    data() {
      let flag=this.flag_init();//调用flag_init,完成页面初始化
      return {
        flag:"",
        openid: "",
        Nickname: "",
        bound_flag: "",
        headimgurl:""
      }
    },


    methods: {
      //页面初始化
      flag_init: function() {
        //url:后端地址
        let url = "http://localhost:8080/jeecg-boot/thirdLogin/wechat_enterprise/callback?flag_init=true&bound_flag=null&openid=null";
        let res_string = null;
        let flag = null;

        httpAction(url, "", "get").then((res) => {

          res_string = res.toString();
          //flag:后端返回的bound_flag字段
          flag = res_string.split("&")[3].split("=")[1]

          if(flag=="false"){
            //flag=="false":微信未绑定
            this.bound_flag = false;
          }

          if(flag=="true"){
            //flag==""true":微信已绑定
            this.openid = res_string.split("&")[0].split("=")[1];
            this.Nickname = res_string.split("&")[1].split("=")[1];
            this.headimgurl = res_string.split("&")[2].split("=")[1]
            this.bound_flag = true;
          }

        });

      },

      ShowModel1: function() {
        //显示"扫码关注公众号，即可绑定微信"页面
        document.getElementById("h0").classList.remove("hide")
        document.getElementById("h1").classList.remove("hide")
      },
      ModelClose1: function() {
        document.getElementById("h0").classList.add("hide");
        document.getElementById("h1").classList.add("hide");
        this.bound_flag = true//扫码后，完成微信绑定，此时bound_flag=true
        let url = "http://localhost:8080/jeecg-boot/thirdLogin/wechat_enterprise/callback?flag_init=false&bound_flag=true&openid=null";
        let res_string = null;
        httpAction(url, "", "get").then((res) => {
          res_string = res.toString();
          this.openid = res_string.split("&")[0].split("=")[1]//用户openid
          this.Nickname = res_string.split("&")[1].split("=")[1]//微信昵称
          document.getElementById("Headimg").src = res_string.split("&")[2].split("=")[1]//微信头像url
        });
      },

      ShowModel2: function() {
        //显示"扫码解绑"
        document.getElementById("h0").classList.remove("hide");
        document.getElementById("h2").classList.remove("hide");
      },

      ModelClose2: function() {
        document.getElementById("h2").classList.add("hide");
        let url = "http://localhost:8080/jeecg-boot/thirdLogin/wechat_enterprise/callback?flag_init=false&bound_flag=false&openid="+this.openid;
        let res_string = null;

        httpAction(url, "", "get").then((res) => {
          res_string = res.toString();
          let openid = res_string.split("&")[0].split("=")[1]
          if(openid=="null"){
            this.openid = null;
            document.getElementById("h3").classList.remove("hide");
            //this.bound_flag = false;
          }
          if(openid!="null"){
            this.openid = openid;
            document.getElementById("h4").classList.remove("hide");
            //this.bound_flag = true;
          }
        });
        //this.openid = null;//openid置空
      },

      ModelClose3: function() {
        document.getElementById("h0").classList.add("hide");
        document.getElementById("h3").classList.add("hide");
        this.bound_flag = false;

      },

      ModelClose4: function() {
        document.getElementById("h0").classList.add("hide");
        document.getElementById("h4").classList.add("hide");
        this.bound_flag = true;

      }





    }
  }
</script>


<style scoped>

  /*遮罩层css*/
  .c0{
    position: fixed;
    top: 0;bottom: 0;
    left: 0;right: 0;
    background-color: black;
    opacity: 0.5;
    z-index: 5;
  }
  /*弹窗层1_css*/
  .c1 {
    position: fixed;
    width: 400px;
    height: 300px;
    top: 60%;
    left: 52%;
    margin-top: -300px;
    margin-left: -250px;
    background-color: white;
    z-index: 10;
  }

  /*弹窗层2_css*/
  .c2 {
    position: fixed;
    width: 400px;
    height: 300px;
    top: 60%;
    left: 52%;
    margin-top: -300px;
    margin-left: -250px;
    background-color: white;
    z-index: 10;
  }

  /*弹窗层3_css*/
  .c3 {
    position: fixed;
    width: 200px;
    height: 100px;
    top: 77%;
    left: 60%;
    margin-top: -300px;
    margin-left: -250px;
    background-color: white;
    z-index: 10;
  }


  /*弹窗层4_css*/
  .c4 {
    position: fixed;
    width: 200px;
    height: 100px;
    top: 77%;
    left: 60%;
    margin-top: -300px;
    margin-left: -250px;
    background-color: white;
    z-index: 10;
  }


  /*取消多层页面显示*/
  .hide{
    display: none;
  }

</style>

