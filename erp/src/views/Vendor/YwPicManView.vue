<template>
  <div>
    <div style="background-color: white">


      <p align="center" style="font-size:20px">
        <b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;供应商证照</b>
      </p>
      
      <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
        <a-col :span="8"><p>供应商编码：{{this.$route.query.vendorId}}</p></a-col>
        <a-col :span="8"><p>供应商名称：{{this.$route.query.vendorName}}</p></a-col>
        <a-col :span="8"><p>证照类型：{{this.$route.query.licenseType}}</p></a-col>
      </a-row >

      <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
        <a-col :span="8"><p>证照图片：</p></a-col>
        <a-col><img :src="imglist[0]"></a-col>
        <a-divider/>
      </a-row >

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



  export default {
    name: "YwPicManView",

    data () {
      return {
        imglist:[]
      }
    },
    created () {
    },
    mounted () {
      this.view(this.$route.query.certificateFilePath)
    },

    methods:{
      view (routed){


        console.log(routed)
        this.imglist=routed.split(",");
        this.imglist[0]=this.imglist[0].replace(/temp/g,"f:")
        console.log("=======================这是分开的路径")
        console.log(this.imglist)
      }

    }
  }
</script>

<style scoped>

</style>
