<template>
  <div>
    <a-card :bordered="false" >
      <a-tabs defaultActiveKey="1">

        <a-tab-pane tab="基本信息" key="1">
          <YwSupFileEditAplBas-form ref="YwSupFileEditAplBas" :showSubmit="false" />
        </a-tab-pane>


        <a-tab-pane tab="子结算清单" key="2">
          <YwSupFileEditAplList-form ref="YwSupFileEditAplList" :showSubmit="false" />
        </a-tab-pane>


        <a-tab-pane tab="证照信息" key="3">
          <YwSupFileEditAplCer-form ref="YwSupFileEditAplCer" :showSubmit="false" />
        </a-tab-pane>
        
        <a-tab-pane tab="联系人" key="4">
          <YwSupFileEditAplCon-form ref="YwSupFileEditAplCon" :showSubmit="false" />
        </a-tab-pane>

        <a-tab-pane tab="供应商分类" key="5">
          <YwSupFileEditAplCla-form ref="YwSupFileEditAplCla" :showSubmit="false" />
        </a-tab-pane>
       

      </a-tabs>
    </a-card>
  </div>
</template>

<script>
  
  import YwSupFileEditAplBas from './YwSupFileEditAplBas'
  import YwSupFileEditAplList from './YwSupFileEditAplList'
  import YwSupFileEditAplCer from './YwSupFileEditAplCer'
  import YwSupFileEditAplCon from './YwSupFileEditAplCon'
  import YwSupFileEditAplCla from './YwSupFileEditAplCla'

  export default {
    name: 'YwSupFileEditAplAdd',
    components:{
      
      'YwSupFileEditAplBas-form':YwSupFileEditAplBas,
      'YwSupFileEditAplList-form':YwSupFileEditAplList,
      'YwSupFileEditAplCer-form':YwSupFileEditAplCer,
      'YwSupFileEditAplCon-form':YwSupFileEditAplCon,
      'YwSupFileEditAplCla-form':YwSupFileEditAplCla,

    }
  }
</script>

<style scoped>

</style>