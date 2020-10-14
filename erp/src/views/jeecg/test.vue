<template>
    <div>

    </div>
</template>

<script>
  import {getAction} from '../../api/manage'

  export default {
        name: 'test',
      data:function () {

        return {
          hello:""
        }
      },
    created () {
      getAction('/test/test/hello').then((res) => {
        console.log("------------")
        console.log(res)
        this.hello = res.result;
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>