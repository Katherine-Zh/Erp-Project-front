<template>
  <div>
    <a-card :bordered="false" >
      <a-tabs defaultActiveKey="1">

        <a-tab-pane  tab="基本信息" key="1">
          <YwCustomInf :data1="this.$route.query" ref="ComInfAdd" :showSubmit="false" />
        </a-tab-pane>

        <a-tab-pane  tab="经营范围" key="2">
          <scope ref="YwCustomChild" :showSubmit="false" />
        </a-tab-pane>
        <a-tab-pane  tab="子结算清单" key="3">
          <YwCustomChild  ref="YwCustomChild " :showSubmit="false" />
        </a-tab-pane>
        <a-tab-pane  tab="部门业务员" key="4">
          <YwCustomBus  ref="YwCustomBus" :showSubmit="false" />
        </a-tab-pane>
        <a-tab-pane  tab="客户资信" key="5">
          <CustomFs  ref="CustomFs" :showSubmit="false" />
        </a-tab-pane>
        <a-tab-pane  tab="证照信息" key="6">
          <LicenseInfo ref="LicenseInfo" :showSubmit="false" />
        </a-tab-pane>
        <a-tab-pane  tab="联系人" key="7">
          <ContactPerson  ref="ContactPerson" :showSubmit="false" />
        </a-tab-pane>

        <a-tab-pane  tab="客户分类" key="8">
          <CustomerClass  ref="ComInfExtAdd" :showSubmit="false" />
        </a-tab-pane>
        <a-tab-pane  tab="打印方式" key="9">
          <PrintMethod  ref="PrintMethod" :showSubmit="false" />
        </a-tab-pane>


<!--        <a-tab-pane tab="商品分类信息" key="3">-->
<!--          <ComInfClass-form ref="ComInfClass" :showSubmit="false" />-->
<!--        </a-tab-pane>-->


<!--        <a-tab-pane tab="商品货位信息" key="4">-->
<!--          <ComInfLoc-form ref="ComInfLoc" :showSubmit="false" />-->
<!--        </a-tab-pane>-->


      </a-tabs>
    </a-card>
  </div>
</template>

<script>
  import YwCustomInfAddEdit from './YwCustomInfAddEdit'
  import ChildList from './ChildList'
  import CustomBus from './CustomBus'
  import PrintMethod from './PrintMethod'
  import LicenseInfo from './LicenseInfo'
  import CustomerClass from './CustomerClass'
  import ContactPerson from './ContactPerson'
  import CustomFs from './CustomFs'
  import YwFobCustomScopeList from './YwFobCustomScopeList'

  import { httpAction } from '@/api/manage'

  export default {
    name: 'YwcustomInfAdd',
    components: {
      'YwCustomInf': YwCustomInfAddEdit ,
      "scope":YwFobCustomScopeList,
      'YwCustomChild': ChildList ,
      'YwCustomBus':CustomBus,
      'PrintMethod':PrintMethod,
      'LicenseInfo':LicenseInfo,
      'CustomerClass':CustomerClass,
      'ContactPerson':ContactPerson,
      'CustomFs':CustomFs ,

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
    created () {
      console.log("===============================进入新增")
      },
    mounted () {
        console.log("===============================进入新增")
    },
    methods:{

    }
  }
</script>

<style scoped>

</style>