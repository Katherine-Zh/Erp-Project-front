<template>

  <div style="background-color: white">
    <a-button @click="handleTableCheck" type="primary">表单验证</a-button>
    <span style="padding-left:8px;"></span>
    <a-tooltip placement="top" title="获取值，忽略表单验证" :autoAdjustOverflow="true">
      <a-button @click="handleTableGet" type="primary">获取值</a-button>
    </a-tooltip>
    <a-button type="primary" html-type="submit" @click="handleOk" style="margin-right: 16px">
                  确定
    </a-button>


    <j-editable-table
      ref="editableTable"
      :loading="loading"
      :columns="columns"
      :dataSource="dataSource"
      :rowNumber="true"
      :rowSelection="true"
      :actionButton="true"
      :dragSort="true"
      style="margin-top: 8px;"
      @selectRowChange="handleSelectRowChange">

      <template v-slot:action="props">
        <a @click="handleDelete(props)">删除</a>
      </template>
      <template slot="htmlSlot" slot-scope="text">
          <div v-html="text"></div>
        </template>
        <template slot="imgSlot" slot-scope="text">
          <span v-if="!text" style="font-size: 12px;font-style: italic;">无图片</span>
          <img v-else :src="getImgView(text)" height="25px" alt="" style="max-width:80px;font-size: 12px;font-style: italic;"/>
        </template>
        <template slot="fileSlot" slot-scope="text">
          <span v-if="!text" style="font-size: 12px;font-style: italic;">无文件</span>
          <a-button
            v-else
            :ghost="true"
            type="primary"
            icon="download"
            size="small"
            @click="uploadFile(text)">
            下载
          </a-button>
        </template>



    </j-editable-table>
  </div>

</template>

<script>
  import { httpAction } from '@/api/manage'
  import moment from 'moment'
  import pick from 'lodash.pick'
  import { JeecgListMixin } from '@/mixins/JeecgListMixin'
  import { validateDuplicateValue } from '@/utils/util'
  import { FormTypes } from '@/utils/JEditableTableUtil'
  import { randomUUID, randomNumber } from '@/utils/util'
  import JEditableTable from '@/components/jeecg/JEditableTable'
  import JDate from '@/components/jeecg/JDate'
  import JDictSelectTag from "@/components/dict/JDictSelectTag"
  import JMultiSelectTag from "@/components/dict/JMultiSelectTag"
  import {filterMultiDictText} from '@/components/dict/JDictSelectUtil'

  export default {
    name: 'DefaultTable',
    components: { 
      JEditableTable,
      JDate,
      JDictSelectTag,
      JMultiSelectTag, },
    data() {
      return {
        loading: false,
        form: this.$form.createForm(this),
        title: "操作",
        columns: [
          {
            title: '证书类别编码',
            key: 'licenseTypeId',
            width: '320px',
            type: FormTypes.inputNumber,
            defaultValue: '',
            placeholder: '请选择${title}',
            validateRules: [{ required: false, message: '请选择${title}' }]
          },
          {
            title: '证照名称',
            key: 'licenseName',
            width: '320px',
            type: FormTypes.input,
            defaultValue: '',
            placeholder: '请选择${title}',
            validateRules: [{ required: false, message: '请选择${title}' }]
          },
          {
            title: '一级分类',
            key: 'firstClass',
            width: '320px',
            type: FormTypes.input,
            defaultValue: '',
            placeholder: '请选择${title}',
            validateRules: [{ required: false, message: '请选择${title}' }]
          },
          {
            title: '控制类别编码',
            key: 'controlClassCode',
            width: '320px',
            type: FormTypes.input,
            defaultValue: '',
            placeholder: '请选择${title}',
            validateRules: [{ required: false, message: '请选择${title}' }]
          },
          {
            title: '提醒状态',
            key: 'remindStatus',
            width: '320px',
            type: FormTypes.select,
            dictCode: 'sd_remind_status',
            placeholder: '请选择${title}',
            validateRules: [{ required: false, message: '请选择${title}' }]
          },
          {
            title: '最终修改人',
            key: 'updateBy',
            width: '320px',
            type: FormTypes.input,
            defaultValue: '100.32',
            placeholder: '请选择${title}',
            validateRules: [{ required: false, message: '请选择${title}' }]
          },
          {
            title: '最终修改时间',
            key: 'updateTime',
            width: '320px',
            type: FormTypes.input,
            defaultValue: '',
            placeholder: '请选择${title}',
            validateRules: [{ required: false, message: '请选择${title}' }]
          },
          {
            title: '备注',
            key: 'notes',
            width: '320px',
            type: FormTypes.inputNumber,
            defaultValue: '100.32',
            placeholder: '请选择${title}',
            validateRules: [{ required: true, message: '请选择${title}' }]
          },
          {
            title: '操作',
            dataIndex: 'action',
            // width: '8%',
            width: '100px',
            type: FormTypes.slot,
            slotName: 'action',
          },
        ],
        dataSource: [],
        selectedRowIds: [],
        url: {
          add: "/ywvendorlicensemange/ywVendorLicenseMange/add",
          list: "/ywvendorlicensemange/ywVendorLicenseMange/list",
          delete: "/ywvendorlicensemange/ywVendorLicenseMange/delete",
          deleteBatch: "/ywvendorlicensemange/ywVendorLicenseMange/deleteBatch",
          edit: "/ywvendorlicensemange/ywVendorLicenseMange/edit",
          queryById: "/ywvendorlicensemange/ywVendorLicenseMange/queryById",
          exportXlsUrl: "/ywvendorlicensemange/ywVendorLicenseMange/exportXls",
        },
        
      }
    },
    created() {
    },
    mounted() {
      this.edit()
    },
    methods: {

      add () {
        this.edit({});
      },
      
      edit (record) {
        this.form.resetFields();
        this.model = Object.assign({}, record);
        this.visible = true;
        this.$nextTick(() => {
          this.form.setFieldsValue(pick(this.model,'licenseTypeId','licenseName','firstClass','controlClassCode','controlClassName','commonName','remindStatus','notes'))
        })
      },
      close () {
        this.$emit('close');
        this.visible = false;
      },
      handleTableGet() {
        this.$refs.editableTable.getValues((error, values) => {
          console.log('values:', values)
        }, false)
        console.log('deleteIds:', this.$refs.editableTable.getDeleteIds())

        this.$message.info('获取值成功，请看控制台输出')

      },
      handleOk () {
        const that = this;
        // 触发表单验证
        this.$refs.editableTable.getValues((err, values) =>  {

          if (!err) {
            that.confirmLoading = true;
            let httpurl = '';
            let method = '';
            if(!this.model.id){
              httpurl+=this.url.add;
              method = 'post';
            }else{
              httpurl+=this.url.edit;
              method = 'put';
            }
            let formData = Object.assign(this.model, values);
            console.log("表单提交数据",formData)
            httpAction(httpurl,formData,method).then((res)=>{
              if(res.success){
                that.$message.success(res.message);
                that.$emit('ok');
              }else{
                that.$message.warning(res.message);
              }
            }).finally(() => {
              that.confirmLoading = false;
              that.close();
              // that.$router.push({path:"/Vendor/YwCerMan"})
            })
          }
        })
      },
      handleCancel () {
        this.close()
      },
      popupCallback(row){
        this.form.setFieldsValue(pick(row,'licenseTypeId','licenseName','firstClass','controlClassCode','controlClassName','commonName','remindStatus','notes'))
      },
      Reset(){
        this.form.resetFields();
      }
    }
  }
</script>

<style scoped>

</style>