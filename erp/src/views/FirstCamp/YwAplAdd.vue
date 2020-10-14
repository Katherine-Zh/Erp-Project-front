<template>
  <div>
    <a-card :bordered="false" >
      <a-tabs defaultActiveKey="1">

        <a-tab-pane tab="基本信息" key="1">
          <ComAplAdd-form ref="ComAplAdd" :suibian="suibian" :showSubmit="false" />
        </a-tab-pane>


        <a-tab-pane tab="扩展信息" key="2">
          <ComAplExtAdd-form ref="ComAplExtAdd" :showSubmit="false" />
        </a-tab-pane>


        <a-tab-pane tab="商品分类信息" key="3">
          <ComAplClass-form ref="ComAplClass" :showSubmit="false" />
        </a-tab-pane>


        <a-tab-pane tab="商品货位信息" key="4">
          <ComAplLoc-form ref="ComAplLoc" :showSubmit="false" />
        </a-tab-pane>


      </a-tabs>
    </a-card>
  </div>
</template>

<script>
  import ComAplExtAdd from './ComAplExtAdd'
  import ComAplAdd from './ComAplAdd'
  import ComAplClass from './ComAplClass'
  import ComAplLoc from './ComAplLoc'

  // var suibian = null ;

  export default {
    name: 'YwAplAdd',
    components:{
      'ComAplExtAdd-form':ComAplExtAdd,
      'ComAplAdd-form':ComAplAdd,
      'ComAplClass-form':ComAplClass,
      'ComAplLoc-form':ComAplLoc,
    },
    data(){
      return{
        suibian:null,
      }
    },
    mounted() {
      this.suibian = this.$route.query
    }
  }
</script>

<style scoped>

</style>