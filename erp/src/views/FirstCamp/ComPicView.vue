<template>
  <div id = 'print'>
    <div style="background-color: white;align-content: center" >
      <br>
      <p align="center" style="font-size:20px">
        <b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;商品证照</b>
      </p>
      <a-divider/>
      <div>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="6">
            <p style="margin-bottom: 0px">商品编码：{{this.$route.query.wareId}}</p>
          </a-col>
          <a-col :span="6">
            <p style="margin-bottom: 0px">商品名称：{{this.$route.query.wareName}}</p>
          </a-col>
          <a-col :span="6">
            <p style="margin-bottom: 0px">证照号：{{this.$route.query.certificateId}}</p>
          </a-col>
          <a-col :span="6">
            <p style="margin-bottom: 0px">证照类型：{{this.$route.query.certificateType}}</p>
          </a-col>
        </a-row>
        <a-row  justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
          <a-col :span="6">
           <p style="margin-bottom: 0px">证照图片：{{this.$route.query.certificatePicture}}</p>
          </a-col>
        </a-row>
      </div>
    </div>
      <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;</p>
    </div>
</template>

<script>
    export default {
        name: 'ComPicView'
    }
</script>

<style scoped>

</style>