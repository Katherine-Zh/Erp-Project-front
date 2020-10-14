<template>
  <div>
    <a-card :bordered="false" >
      <a-tabs defaultActiveKey="1">

        <a-tab-pane :warecode="wareCode"  tab="基本信息" key="1">
          <ComInfAdd-form ref="ComInfAdd" :showSubmit="false" />
        </a-tab-pane>


        <a-tab-pane  tab="扩展信息" key="2">
          <ComInfExtAdd-form  :warecode="wareCode"  ref="ComInfExtAdd" :showSubmit="false" />
        </a-tab-pane>


        <a-tab-pane tab="商品分类信息" key="3">
          <ComInfClass-form ref="ComInfClass" :showSubmit="false" />
        </a-tab-pane>


        <a-tab-pane tab="商品货位信息" key="4">
          <ComInfLoc-form ref="ComInfLoc" :showSubmit="false" />
        </a-tab-pane>


      </a-tabs>
    </a-card>
  </div>
</template>

<script>
  import ComInfExtAdd from './ComInfExtAdd'
  import ComInfAdd from './ComInfAdd'
  import ComInfClass from './ComInfClass'
  import ComInfLoc from './ComInfLoc'
  import { httpAction } from '@/api/manage'

  export default {
    name: 'YwInfAdd',
    components: {
      'ComInfExtAdd-form': ComInfExtAdd,
      'ComInfAdd-form': ComInfAdd,
      'ComInfClass-form': ComInfClass,
      'ComInfLoc-form': ComInfLoc,

    },
    data () {
      return {
        wareCode: "00002",
        url: {
          add: "/ywwareinfo/ywWareInfo/add",
          edit: "/ywfobware/ywWareInfo/edit",
          creat:"/ywwareinfo/ywWareInfo/create",
        }
      }
    },
    mounted () {
      httpAction(this.url.creat, '', 'post').then((res) => {
        if (res.success) {
          console.log("=========================获取商品资料的商品编码")
          console.log(res)
          this.wareCode = res.result["wareId"]
          this.$refs.ComInfAdd.change1(res.result["wareId"])
          // this.$refs.ComInfExtAdd.change1(res.result["wareId"])
          // this.$refs.ComInfClass.change1(res.result["wareId"])
          // this.$refs.ComInfLoc.change1(res.result["wareId"])

          console.log("=========================================")


        } else {
          this.$message.warning(res.message);
        }
      }).finally(() => {

      })
    },
    methods:{
      //   change(activeKey){
      //
      //     if(activeKey==='1'){
      //       console.log("dong1-------------------------")
      //       this.$refs.ComInfAdd.change1(this.wareCode );
      //
      //     }
      //     if(activeKey==='2'){
      //       console.log("dong2-------------------------")
      //       this.$refs.ComInfExtAdd.change2(this.wareCode );
      //
      //     }
      //     if(activeKey==='3'){
      //       console.log("dong3-------------------------")
      //       this.$refs.ComInfClass.change1(this.wareCode );
      //
      //
      //     }
      //     if(activeKey==='4'){
      //       console.log("dong4-------------------------")
      //       this.$refs.ComInfLoc.change1(this.wareCode );
      //     }
      //
      //     console.log(activeKey)
      //     console.log("dong===============================")
      //
      //   }
    }
  }
</script>

<style scoped>

</style>