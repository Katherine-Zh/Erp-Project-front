<template>
  <div>
    <div style="background-color: white">


      <p align="left" style="font-size:20px">
        <b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;商品证照</b>
      </p>
      <a-row :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
        <a-col :span="6"><p>商品编码：{{this.$route.query.wareId}}</p></a-col>
        <a-col :span="6"><p>商品名称：{{this.$route.query.certificateString}}</p></a-col>
        <a-col :span="6"><p>证照号：{{this.$route.query.scanId}}</p></a-col>
        <a-col :span="6"><p>证照类型：{{this.$route.query.certificateType}}</p></a-col>

      </a-row>
      <p>商品证照</p>
      <a-col><img :src="imglist[0]"></a-col>
      <a-divider/>

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
    name: "ComFobPicView",

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
