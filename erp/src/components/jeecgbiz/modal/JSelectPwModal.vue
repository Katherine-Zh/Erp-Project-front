<template>
  <a-modal
    title="选择生产范围"
    :width="modalWidth"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleSubmit"
    @cancel="handleCancel"
    cancelText="关闭">
    <a-spin tip="Loading..." :spinning="false">
      <a-table
        ref="table"
        size="middle"
        bordered
        rowKey="id"
        :columns="columns"
              :dataSource="dataSource"
              :pagination="ipagination"
              :loading="loading"
              :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
              class="j-table-force-nowrap"
        >




      </a-table>


    </a-spin>
  </a-modal>
</template>

<script>
  import { queryDepartTreeList } from '@/api/api'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  import { httpAction } from '../../../api/manage'

  export default {
    name: 'JSelectDepartModal',
    props:['modalWidth','multi','rootOpened','departId'],
    mixins:[JeecgListMixin],
    data(){
      return {

        dataSource:null ,
        visible:false,
        confirmLoading:false,
        treeData:[],
        autoExpandParent:true,
        expandedKeys:[],
        dataList:[],
        checkedKeys:[],
        checkedRows:[],
        searchValue:"",
        columns: [
          
          {
            title:'生产范围编码',
            align:"center",
            dataIndex: 'vendorId'
          },
          {
            title:'生产范围名称',
            align:"center",
            dataIndex: 'vendorName'
          },


        ],
        url:{
          list:"/ywfobvendorscope/ywFobVendorScope/list",
        }
      }
    },
    created(){
     
    },
    watch:{
      departId(){
        this.initDepartComponent()
      },
      visible: {
        handler() {
          if (this.departId) {
            this.checkedKeys = this.departId.split(",");
            // console.log('this.departId', this.departId)
          } else {
            this.checkedKeys = [];
          }
        }
      }
    },
    mounted () {

      },
    methods:{
      loadData(){
        httpAction(this.url.list,'',"get").then((res)=>{
          if(res.success){
            console.log("-------------------生产范围-----------------------")

            console.log(res)
            this.dataSource = res.result.records;



          }else{
            console.log(res)
          }
        }).finally(() => {


        })
      },
      show(){
        this.visible=true
        this.checkedRows=[]
        this.checkedKeys=[]
      },
      loadDepart(){
        queryDepartTreeList().then(res=>{
          if(res.success){
            let arr = [...res.result]
            this.reWriterWithSlot(arr)
            this.treeData = arr
            this.initDepartComponent()
            if(this.rootOpened){
              this.initExpandedKeys(res.result)
            }
          }
        })
      },
      initDepartComponent(){
        let names = ''
        if(this.departId){
          let currDepartId = this.departId
          for(let item of this.dataList){
            if(currDepartId.indexOf(item.key)>=0){
              names+=","+item.title
            }
          }
          if(names){
            names = names.substring(1)
          }
        }
        this.$emit("initComp",names)
      },
      reWriterWithSlot(arr){
        for(let item of arr){
          if(item.children && item.children.length>0){
            this.reWriterWithSlot(item.children)
            let temp = Object.assign({},item)
            temp.children = {}
            this.dataList.push(temp)
          }else{
            this.dataList.push(item)
            item.scopedSlots={ title: 'title' }
          }
        }
      },
      initExpandedKeys(arr){
        if(arr && arr.length>0){
          let keys = []
          for(let item of arr){
            if(item.children && item.children.length>0){
              keys.push(item.id)
            }
          }
          this.expandedKeys=[...keys]
        }else{
          this.expandedKeys=[]
        }
      },
      onCheck (checkedKeys,info) {
        if(!this.multi){
          let arr = checkedKeys.checked.filter(item => this.checkedKeys.indexOf(item) < 0)
          this.checkedKeys = [...arr]
          this.checkedRows = (this.checkedKeys.length === 0) ? [] : [info.node.dataRef]
        }else{
          this.checkedKeys = checkedKeys.checked
          this.checkedRows = this.getCheckedRows(this.checkedKeys)
        }
      },
      onSelect(selectedKeys,info) {
        let keys = []
        keys.push(selectedKeys[0])
        if(!this.checkedKeys || this.checkedKeys.length===0 || !this.multi){
          this.checkedKeys = [...keys]
          this.checkedRows=[info.node.dataRef]
        }else{
          let currKey = info.node.dataRef.key
          if(this.checkedKeys.indexOf(currKey)>=0){
            this.checkedKeys = this.checkedKeys.filter(item=> item !==currKey)
          }else{
            this.checkedKeys.push(...keys)
          }
        }
        this.checkedRows = this.getCheckedRows(this.checkedKeys)
      },
      onExpand (expandedKeys) {
        this.expandedKeys = expandedKeys
        this.autoExpandParent = false
      },
      handleSubmit(){
        if(!this.checkedKeys || this.checkedKeys.length==0){
          this.$emit("ok",'')
        }else{
          this.$emit("ok",this.checkedRows,this.checkedKeys.join(","))
        }
        this.handleClear()
      },
      handleCancel(){
        this.handleClear()
      },
      handleClear(){
        this.visible=false
        this.checkedKeys=[]
      },
      getParentKey(currKey,treeData){
        let parentKey
        for (let i = 0; i < treeData.length; i++) {
          const node = treeData[i]
          if (node.children) {
            if (node.children.some(item => item.key === currKey)) {
              parentKey = node.key
            } else if (this.getParentKey(currKey, node.children)) {
              parentKey = this.getParentKey(currKey, node.children)
            }
          }
        }
        return parentKey
      },
      onSearch(value){
        const expandedKeys = this.dataList.map((item) => {
          if (item.title.indexOf(value) > -1) {
            return this.getParentKey(item.key,this.treeData)
          }
          return null
        }).filter((item, i, self) => item && self.indexOf(item) === i)

        Object.assign(this, {
          expandedKeys,
          searchValue: value,
          autoExpandParent: true,
        })


      },
      // 根据 checkedKeys 获取 rows
      getCheckedRows(checkedKeys) {
        const forChildren = (list, key) => {
          for (let item of list) {
            if (item.id === key) {
              return item
            }
            if (item.children instanceof Array) {
              let value = forChildren(item.children, key)
              if (value != null) {
                return value
              }
            }
          }
          return null
        }

        let rows = []
        for (let key of checkedKeys) {
          let row = forChildren(this.treeData, key)
          if (row != null) {
            rows.push(row)
          }
        }
        return rows
      }
    }
  }

</script>

<style scoped>

</style>