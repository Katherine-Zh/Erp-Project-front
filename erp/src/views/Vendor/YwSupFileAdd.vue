<template>
  <div>
    <a-card :bordered="false" >
      <a-tabs defaultActiveKey="1"
           :defaultSelectedKeys="defaultSelectedKeys"
            type="inner"
            @openChange="onOpenChange">

        <!-- <a-tab-pane :vendorId="vendorId" tab="基本信息" key="1">
          <YwSupFileBas-form ref="YwSupFileBas" :showSubmit="false" />
        </a-tab-pane> -->
         <a-menu-item key="/Vendor/YwSupFileBas">
              <router-link :to="{ name: 'Vendor-YwSupFileBas' }">
                基本信息
              </router-link>
        </a-menu-item>

        <!-- <a-tab-pane tab="经营范围" key="2">
          <YwSupFileBusSco-form :vendorId="vendorId" ref="YwSupFileBusSco" :showSubmit="false" />
        </a-tab-pane> -->
        <a-menu-item key="/Vendor/YwSupFileBusSco">
              <router-link :to="{ name: 'Vendor-YwSupFileBusSco' }">
                证照信息
              </router-link>
        </a-menu-item>

        <a-tab-pane tab="子结算清单" key="3">
          <YwSupFileList-form :vendorId="vendorId" ref="YwSupFileList" :showSubmit="false" />
        </a-tab-pane>


        <a-tab-pane tab="证照信息" key="4">
          <YwSupFileCer-form :vendorId="vendorId" ref="YwSupFileCer" :showSubmit="false" />
        </a-tab-pane>
        
         <a-tab-pane tab="联系人" key="5">
          <YwSupFileCon-form :vendorId="vendorId" ref="YwSupFileCon" :showSubmit="false" />
        </a-tab-pane>

        <a-tab-pane tab="供应商分类" key="6">
          <YwSupFileCla-form :vendorId="vendorId" ref="YwSupFileCla" :showSubmit="false" />
        </a-tab-pane>


      </a-tabs>
    </a-card>
    <a-card :bordered="false" :bodyStyle="{ padding: '16px 0', height: '100%' }" :style="{ height: '100%' }">
      <div class="Vendor-info-main" :class="device" :style=" 'min-height:'+ mainInfoHeight ">
        <div class="Vendor-info-left">
          <a-menu
            :mode="device == 'mobile' ? 'horizontal' : 'inline'"
            :style="{ border: '0', width: device == 'mobile' ? '560px' : 'auto'}"
            :defaultSelectedKeys="defaultSelectedKeys"
            type="inner"
            @openChange="onOpenChange"
          >
            <a-menu-item key="/Vendor/YwSupFileBas">
              <router-link :to="{ name: 'Vendor-YwSupFileBas' }">
                基本信息
              </router-link>
            </a-menu-item>
            <a-menu-item key="/Vendor/YwSupFileBusSco">
              <router-link :to="{ name: 'Vendor-YwSupFileBusSco' }">
                证照信息
              </router-link>
            </a-menu-item>
           
          </a-menu>
        </div>
        <div class="Vendor-info-right">
          <div class="Vendor-info-title">
            <span>{{ $route.meta.title }}</span>
          </div>
          <route-view></route-view>
        </div>
      </div>
    </a-card>
  </div>
</template>

<script>
  
  import YwSupFileBas from './YwSupFileBas'
  import YwSupFileBusSco from './YwSupFileBusSco'
  // import YwSupFileList from './YwSupFileList'
  // import YwSupFileCer from './YwSupFileCer'
  // import YwSupFileCon from './YwSupFileCon'
  // import YwSupFileCla from './YwSupFileCla'
  // import { httpAction } from '@/api/manage'

  
  export default {
    name: 'YwSupFileAdd',
    components:{
      
      'YwSupFileBas-form':YwSupFileBas,
      'YwSupFileBusSco-form':YwSupFileBusSco,
      // 'YwSupFileList-form':YwSupFileList,
      // 'YwSupFileCer-form':YwSupFileCer,
      // 'YwSupFileCon-form':YwSupFileCon,
      // 'YwSupFileCla-form':YwSupFileCla,

    },
    mounted() {
      
    },
    methods:{
    }
  }
</script>

<style scoped>

</style>