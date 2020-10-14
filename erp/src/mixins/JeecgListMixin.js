/**
 * 新增修改完成调用 modalFormOk方法 编辑弹框组件ref定义为modalForm
 * 高级查询按钮调用 superQuery方法  高级查询组件ref定义为superQueryModal
 * data中url定义 list为查询列表  delete为删除单条记录  deleteBatch为批量删除
 */
import { filterObj } from '@/utils/util';
import { deleteAction, getAction,downFile,getFileAccessHttpUrl } from '@/api/manage'
import Vue from 'vue'
import { ACCESS_TOKEN } from "@/store/mutation-types"

export const JeecgListMixin = {
  data(){
    return {
      //token header
      tokenHeader: {'X-Access-Token': Vue.ls.get(ACCESS_TOKEN)},
      /* 查询条件-请不要在queryParam中声明非字符串值的属性 */
      queryParam: {},
      /* 数据源 */
      dataSource:[],
      /* 分页参数 */
      ipagination:{
        current: 1,
        pageSize: 10,
        pageSizeOptions: ['10', '20', '30'],
        showTotal: (total, range) => {
          return range[0] + "-" + range[1] + " 共" + total + "条"
        },
        showQuickJumper: true,
        showSizeChanger: true,
        total: 0
      },
      /* 排序参数 */
      isorter:{
        column: 'createTime',
        order: 'desc',
      },
      /* 筛选参数 */
      filters: {},
      /* table加载状态 */
      loading:false,
      /* table选中keys*/
      selectedRowKeys: [],
      /* table选中records*/
      selectionRows: [],
      /* 查询折叠 */
      toggleSearchStatus:false,
      /* 高级查询条件生效状态 */
      superQueryFlag:false,
      /* 高级查询条件 */
      superQueryParams: '',
      /** 高级查询拼接方式 */
      superQueryMatchType: 'and',
    }
  },
  created() {
    if(!this.disableMixinCreated){

      console.log(' -- mixin created -- ')
      this.loadData();
      //初始化字典配置 在自己页面定义
      this.initDictConfig();
    }
  },
  methods:{
    searchMenus(arr,menus){
      for(let i of menus){
        if(!i.hidden && "layouts/RouteView"!==i.component){
          arr.push(i)
        }
        if(i.children&& i.children.length>0){
          this.searchMenus(arr,i.children)
        }
      }
    },
    loadData(arg) {
      if(!this.url.list){
        this.$message.error("请设置url.list属性!")
        return
      }
      //加载数据 若传入参数1则加载第一页的内容
      if (arg === 1) {
        this.ipagination.current = 1;
      }
      var params = this.getQueryParams();//查询条件
      this.loading = true;
      getAction(this.url.list, params).then((res) => {
        if (res.success) {
          this.dataSource = res.result.records;
          console.log(this.dataSource)
          this.ipagination.total = res.result.total;
        }
        if(res.code===510){
          this.$message.warning(res.message)
        }
        this.loading = false;
      });
      console.log(this.dataSource)

    },
    initDictConfig(){
      console.log("--这是一个假的方法!")
    },
    handleSuperQuery(params, matchType) {
      //高级查询方法
      if(!params){
        this.superQueryParams=''
        this.superQueryFlag = false
      }else{
        this.superQueryFlag = true
        this.superQueryParams=JSON.stringify(params)
        this.superQueryMatchType = matchType
      }
      this.loadData(1)
    },
    getQueryParams() {
      //获取查询条件
      let sqp = {}
      if(this.superQueryParams){
        sqp['superQueryParams']=encodeURI(this.superQueryParams)
        sqp['superQueryMatchType'] = this.superQueryMatchType
      }
      var param = Object.assign(sqp, this.queryParam, this.isorter ,this.filters);
      param.field = this.getQueryField();
      param.pageNo = this.ipagination.current;
      param.pageSize = this.ipagination.pageSize;
      return filterObj(param);
    },
    getQueryField() {
      //TODO 字段权限控制
      var str = "id,";
      this.columns.forEach(function (value) {
        str += "," + value.dataIndex;
      });
      return str;
    },

    onSelectChange(selectedRowKeys, selectionRows) {
      this.selectedRowKeys = selectedRowKeys;
      this.selectionRows = selectionRows;
    },
    onClearSelected() {
      this.selectedRowKeys = [];
      this.selectionRows = [];
    },
    searchQuery() {
      this.loadData(1);
    },
    superQuery() {
      this.$refs.superQueryModal.show();
    },

    searchReset() {
      this.queryParam = {}
      this.loadData(1);
    },
    batchDel: function () {
      if(!this.url.deleteBatch){
        this.$message.error("请设置url.deleteBatch属性!")
        return
      }
      if (this.selectedRowKeys.length <= 0) {
        this.$message.warning('请选择一条记录！');
        return;
      } else {
        var ids = "";
        for (var a = 0; a < this.selectedRowKeys.length; a++) {
          ids += this.selectedRowKeys[a] + ",";
        }
        var that = this;
        this.$confirm({
          title: "确认删除",
          content: "是否删除选中数据?",
          onOk: function () {
            that.loading = true;
            deleteAction(that.url.deleteBatch, {ids: ids}).then((res) => {
              if (res.success) {
                that.$message.success(res.message);
                that.loadData();
                that.onClearSelected();
              } else {
                that.$message.warning(res.message);
              }
            }).finally(() => {
              that.loading = false;
            });
          }
        });
      }
    },
    handleDelete: function (id) {
      if(!this.url.delete){
        this.$message.error("请设置url.delete属性!")
        return
      }
      var that = this;
      deleteAction(that.url.delete, {id: id}).then((res) => {
        if (res.success) {
          that.$message.success(res.message);
          that.loadData();
        } else {
          that.$message.warning(res.message);
        }
      });
    },
    TurnForm: function(id) {  //商品转正式接口
      var that = this;
      getAction( that.url.changeFormal, {id: id}).then((res) => {
        if (res.success) {
          that.$message.success(res.message);
          that.loadData();
        } else {
          that.$message.warning(res.message);
        }
      });
    },
    handleCheck: function (record) { //用户信息查看
      console.log("======================这里是addddd")
      console.log(record)
      this.$router.push({ path: '/userview',query:record})

    },
    handleCheck2: function (record) { //首营商品品种查看
      console.log("======================这里是addddd")
      console.log(record)
      this.$router.push({ path: '/CommoView',query:record})

    },
    handleCheck3: function (record) { //首营资料查看
      console.log("======================这里是addddd")
      console.log(record)
      this.$router.push({ path: '/ComInfView',query:record})

    },




    handleFobCustomToView(record){
      this.$router.push({ path: '/CustomerFile/customfobview',query:record})

    },

    handleEdit: function (record) { //菜单编辑
      this.$refs.modalForm.edit(record);
      this.$refs.modalForm.title = "编辑";
      this.$refs.modalForm.isTrue = false;
      this.$refs.modalForm.disableSubmit = false;
    },
    handleEdit1: function (record) { //用户信息编辑
      console.log("=======================这是编辑record")
      console.log(record)
      this.$router.push({ path: '/useredit',query:record})
    },
    handleEdit2:function (record) { //首营商品编辑
      console.log("=======================这是编辑record")
      console.log(record)
      this.$router.push({ path: '/commoedit',query:record})
    },
    handleEdit3:function (record) { //首营资料编辑
      console.log("=======================这是编辑record")
      console.log(record)
      this.$router.push({ path: '/ComInfEdit',query:record})
    },


    // 客户的新增编辑跳转


    //客户档案的新增与编辑
    handleCustomDToAddEdit(record){
      console.log("-========================recored")
      console.log(record)


      this.$router.push({ path: '/CustomerFile/YwCustomAdd',query:record})
    },


    handleEditSup(record){
      console.log("==========================供应商")
      console.log(record)
      this.$refs.modalForm.edit(record);
      this.$refs.modalForm.title = "编辑";
      this.$refs.modalForm.isTrue = false;
      this.$refs.modalForm.disableSubmit = false;
    },

    //档案子结算清单
    handAddEdit(record){
      this.$refs.modalForm.edit(record);
      this.$refs.modalForm.title = "编辑";
      this.$refs.modalForm.isTrue = false;
      this.$refs.modalForm.disableSubmit = false;

    },

    //首营客户详情页面跳转
    handleCustomToView(record){
      this.$router.push({ path: '/CustomerFile/FobCustomView',query:record})

    },
    handleCustomToAddEdit(record){

      this.$router.push({ path: '/CustomerFile/YwFobCustomInfoAddEdit',query:record})

    },


    handleCheck4: function (record) { //首营供应商查看
      console.log("======================这里是addddd")
      console.log(record)
      this.$router.push({ path: '/YwSupView',query:record})

    },
    handleCheck5: function (record) { //供应商委托人设置明细
      console.log("======================这里是addddd")
      console.log(record)
      this.$router.push({ path: '/YwCliSetList',query:record})

    },
    handleCheck6: function (record) { //供应商档案详情
      console.log("======================这里是addddd")
      console.log(record)
      this.$router.push({ path: '/YwSupFileView',query:record})

    },
    handleCheck7: function (record) { //供应商档案详情
      console.log("======================这里是addddd")
      console.log(record)
      this.$router.push({ path: '',query:record})

    },



    handleEdit4:function (record) { //首营供应商编辑
      console.log("=======================这是编辑record")
      console.log(record)
      this.$router.push({ path: '/Vendor/sup/SupBasEdit',query:record})
    },
    handleEdit5:function (record) { //供应商委托人设置明细编辑
      console.log("=======================这是编辑record")
      console.log(record)
      this.$router.push({ path: '',query:record})
    },
    handleEdit6:function (record) { //供应商证照管理编辑
      console.log("=======================这是编辑record")
      console.log(record)
      this.$router.push({ path: '/YwCerManEdit',query:record})
    },
    handleEdit7:function (record) { //供应商委托人设置编辑
      console.log("=======================这是编辑record")
      console.log(record)
      this.$router.push({ path: '/YwCliSetEdit',query:record})
    },
    handleEdit8:function (record) { //供应商档案证照信息编辑
      console.log("=======================这是编辑record")
      console.log(record)
      this.$router.push({ path: '/Vendor/supfile/YwSupFileCerEdit',query:record})
    },
    handleEdit9: function(record) {//供应商档案子结算清单编辑
      console.log("=======================这是编辑record")
      console.log(record)
      this.$router.push({ path: '/Vendor/supfile/YwSupFileListEdit',query:record})
    },
    handleEdit10: function(record) {//供应商档案编辑
      console.log("=======================这是编辑record")
      console.log(record)
      this.$router.push({ path: '/Vendor/supfile/YwSupFileBas',query:record})
    },










    handleAdd7: function() {//商品供应商新增
      let that = this
      this.$router.push({ path: '/Vendor/sup/SupBas' })
    },
    handleAdd8: function() {//商品供应商档案新增
      let that = this
      this.$router.push({ path: '/Vendor/supfile/YwSupFileBas' })
    },
    handleAdd9: function() {//供应商档案修改申请表新增
      let that = this
      this.$router.push({ path: '/YwSupFileEditAplAdd' })
    },
    handleAdd10: function() {//供应商委托人设置明细新增
      let that = this
      this.$router.push({ path: '' })
    },
    handleAdd11: function() {//供应商证照管理新增
      let that = this
      this.$router.push({ path: '/YwCerManAdd' })
    },
    handleAdd12: function() {//供应商委托人设置新增
      let that = this
      this.$router.push({ path: '/YwCliSetAdd' })
    },
    handleAdd13: function() {//供应商档案子结算清单新增
      let that = this
      this.$router.push({ path: '/Vendor/supfile/YwSupFileListAdd' })
    },



    handleDetail1:function(record){
      this.$router.push({ path: '/YwPicManView',query:record})
    },




    // 客户子清算账单相关
    handleToEditChild(record){
      this.$refs.edit.add(record);
      this.$refs.edit.title = "编辑";
      this.$refs.edit.disableSubmit = false;
      this.$refs.edit.isTrue = false ;
      this.$router.push()
    },


    handleAdd1: function () {//用户新增
      let that = this
      // this.$refs.modalForm.add();
      // this.$refs.modalForm.title = "用户信息表";
      // this.$refs.modalForm.disableSubmit = false;
      // this.$refs.modalForm.isTrue = false ;
      // this.$router.push()
      this.$router.push({ path: '/useradd' })
      // this.$router.push({ path: '/userinf/userinfadd' ,params:recode})
      // this.$router.push({name:'useradd'})
      // this.$router.push({ name: "userinf-userinfadd" })

    },
    handleAdd: function () { //菜单新增
      this.$refs.modalForm.add();
      this.$refs.modalForm.title = "新增";
      this.$refs.modalForm.disableSubmit = false;
    },
    handleAdd4: function() {//首营商品新增
      let that = this
      this.$router.push({ path: '/CommoAdd' })
    },
    handleAdd5: function() {//商品资料新增
      let that = this
      this.$router.push({ path: '/YwInfAdd',})
    },
    handleAdd6: function() {//商品资料xiu新增
      let that = this
      this.$router.push({ path: '/YwAplAdd' })
    },
    handPicUpLoad:function(id){
      this.$refs.upLoadPic.add(id);
      this.$refs.upLoadPic.title = "上传证件照";
      this.$refs.upLoadPic.disableSubmit = false;
      this.$router.push()
    },
    
    handleAdd3: function (recode) {
      let that = this
      this.$refs.modalForm.add();
      this.$refs.modalForm.title = "新增角色";
      this.$refs.modalForm.disableSubmit = false;
      this.$refs.modalForm.isTrue = false ;
      this.$router.push()
      // this.$router.push({ path: '/userinf/userinfadd' ,params:recode})
      // this.$router.push({name:'useradd'})
      // this.$router.push({ name: "userinf-userinfadd" })

    },
    handUserSt:function(){
      this.$refs.modalForm1.add();
      this.$refs.modalForm1.title = "回收站";
      this.$refs.modalForm1.disableSubmit = false;
      this.$router.push()
    },
    handForget:function(){
      this.$refs.modalForm2.add();
      this.$refs.modalForm2.title = "重新设定密码";
      this.$refs.modalForm2.disableSubmit = false;
      this.$router.push()
    },

    handleTableChange(pagination, filters, sorter) {
      //分页、排序、筛选变化时触发
      //TODO 筛选
      if (Object.keys(sorter).length > 0) {
        this.isorter.column = sorter.field;
        this.isorter.order = "ascend" == sorter.order ? "asc" : "desc"
      }
      this.ipagination = pagination;
      this.loadData();
      console.log("===================change"+this.dataSource)
    },
    handleToggleSearch(){
      this.toggleSearchStatus = !this.toggleSearchStatus;
    },
    // 给popup查询使用(查询区域不支持回填多个字段，限制只返回一个字段)
    getPopupField(fields){
      return fields.split(',')[0]
    },
    modalFormOk() {
      // 新增/修改 成功时，重载列表
      this.loadData();
    },
    handleDetail:function(record){
      this.$router.push({ path: '/comfobpicview',query:record})


    },
    /* 导出 */
    handleExportXls2(){
      let paramsStr = encodeURI(JSON.stringify(this.getQueryParams()));
      let url = `${window._CONFIG['domianURL']}/${this.url.exportXlsUrl}?paramsStr=${paramsStr}`;
      window.location.href = url;
    },
    // 首营查看页面修改跳转
    // handleToywEdit(record){
    //   this.$router.push({ path: '/commoedit',query:record})
    // },
    handleExportXls(fileName){
      var date = new Date();
      var Y = date.getFullYear() ;
      var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) ;
      var D = date.getDate() ;
      fileName=fileName+Y+M+D ;
      if(!fileName || typeof fileName != "string"){
        fileName = "导出文件"
      }
      let param = {...this.queryParam};
      if(this.selectedRowKeys && this.selectedRowKeys.length>0){
        param['selections'] = this.selectedRowKeys.join(",")
      }
      console.log("导出参数",param)
      downFile(this.url.exportXlsUrl,param).then((data)=>{
        if (!data) {
          this.$message.warning("文件下载失败")
          return
        }
        if (typeof window.navigator.msSaveBlob !== 'undefined') {
          window.navigator.msSaveBlob(new Blob([data],{type: 'application/vnd.ms-excel'}), fileName+'.xlsx')
        }else{
          let url = window.URL.createObjectURL(new Blob([data],{type: 'application/vnd.ms-excel'}))
          let link = document.createElement('a')
          link.style.display = 'none'
          link.href = url
          link.setAttribute('download', fileName+'.xlsx')
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link); //下载完成移除元素
          window.URL.revokeObjectURL(url); //释放掉blob对象
        }
      })
    },
    /* 导入 */
    handleImportExcel(info){
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        if (info.file.response.success) {
          // this.$message.success(`${info.file.name} 文件上传成功`);
          if (info.file.response.code === 201) {
            let { message, result: { msg, fileUrl, fileName } } = info.file.response
            let href = window._CONFIG['domianURL'] + fileUrl
            this.$warning({
              title: message,
              content: (
                <div>
                  <span>{msg}</span><br/>
                  <span>具体详情请 <a href={href} target="_blank" download={fileName}>点击下载</a> </span>
                </div>
              )
            })
          } else {
            this.$message.success(info.file.response.message || `${info.file.name} 文件上传成功`)
          }
          this.loadData()
        } else {
          this.$message.error(`${info.file.name} ${info.file.response.message}.`);
        }
      } else if (info.file.status === 'error') {
        this.$message.error(`文件上传失败: ${info.file.msg} `);
      }
    },
    /* 图片预览 */
    getImgView(text){
      if(text && text.indexOf(",")>0){
        text = text.substring(0,text.indexOf(","))
      }
      return getFileAccessHttpUrl(text)
    },
    /* 文件下载 */
    uploadFile(text){
      if(!text){
        this.$message.warning("未知的文件")
        return;
      }
      if(text.indexOf(",")>0){
        text = text.substring(0,text.indexOf(","))
      }
      let url = getFileAccessHttpUrl(text)
      window.open(url);
    },
  }

}