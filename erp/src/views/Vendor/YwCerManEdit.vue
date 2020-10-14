<template>
  <div>

    <div style="background-color: white">
      <br>
      <p align="left" style="font-size:20px">
        <b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;编辑证照</b>
      </p>
      <a-divider/>
      <a-spin :spinning="confirmLoading">
        <a-form :form="form"  >
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px">证照类别编码</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input :disabled="true" v-decorator="['licenseTypeId', validatorRules.licenseTypeId]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">证照名称</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input :disabled="true" v-decorator="['licenseName', validatorRules.licenseName]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">一级分类</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-select  v-decorator="['firstClass', validatorRules.firstClass]" v-model="spdlnow">
                <div slot="dropdownRender" slot-scope="menu">
                    <v-nodes :vnodes="menu"
                    />
                    <a-divider style="margin: 4px 0;" />
                  </div>
                  <a-select-option  v-for="item in spdlItems" :key="item" :value="item" >
                    {{ item }}
                  </a-select-option>
                </a-select>
              </a-form-item>
            </a-col>

          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px">控制类别编码</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
               <a-input :disabled="true" v-decorator="['controlClassCode', validatorRules.controlClassCode]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="16">
              <p style="margin-bottom: 0px">控制类别名称</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['controlClassName', validatorRules.controlClassName]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>
            

          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]" >

            <a-col :span="8">
              <p style="margin-bottom: 0px">提醒状态</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <j-dict-select-tag type="list"  v-decorator="['remindStatus', validatorRules.remindStatus]" :trigger-change="true" dictCode='sd_remind_status' placeholder="请选择"/>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">备注</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['notes', validatorRules.notes]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>
          </a-row>

          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col style="float: right ;overflow: hidden;" class="table-page-search-submitButtons">
                <span>
                  <a-button @click="handReturn" style="margin-right: 8px">
                    取消
                  </a-button>
                  
                  <a-button type="primary" html-type="submit" @click="handleOk" style="margin-right: 16px">
                    确定
                  </a-button>
                </span>
            </a-col>
          </a-row>
        </a-form> 
      </a-spin>
    </div>
  </div>
</template>

<script>

  import { httpAction } from '@/api/manage'
  import pick from 'lodash.pick'
  import { validateDuplicateValue } from '@/utils/util'
  import JDate from '@/components/jeecg/JDate'
  import JDictSelectTag from "@/components/dict/JDictSelectTag"

  var dlall = [];
  var dlCode = [] ;

  export default {
    name: "YwCerManEdit",
    components: {
      JDate,
      JDictSelectTag,
      validateDuplicateValue,

      VNodes: {
        functional: true,
        render: (h, ctx) => ctx.props.vnodes,
      },
    },
    data () {
      return {
        spdlItems: [],
        spdlnow:null ,
        description: '供应商证照管理编辑',
        items: [],
        //treeData,
        //进口国家是否需要填写
        jinkouguojiaInputRequire: false,
        //itemsdep: [],
        // itemsrole: [],
        isTrue: false,
        form: this.$form.createForm(this),
        title: "操作",
        width: 800,
        visible: false,
        model: {},
        labelCol: {
          xs: { span: 24 },
          sm: { span: 5 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
        confirmLoading: false,
        validatorRules: {
          licenseTypeId: {
            rules: [
              { required: false, message: '证照类别编码！' },
            ]
          },
          licenseName: {
            rules: [
              { required: false, message: '证照名称！' },
            ]
          },
          firstClass: {
            rules: [
              { required: false, message: '一级分类!' },
            ]
          },
          controlClassCode: {
            rules: [
              { required: false, message: '控制类别编码!' },
            ]
          },
          controlClassName: {
            rules: [
              { required: false, message: '控制类别名称!' },
            ]
          },
          remindStatus: {
            rules: [
              { required: false, message: '提醒状态!' },
            ]
          },
          notes: {
            rules: [
              { required: false, message: '备注!' },
            ]
          },

        },
        url: {
          add: "/ywvendorlicensemange/ywVendorLicenseMange/add",
          delete: "/ywvendorlicensemange/ywVendorLicenseMange/delete",
          deleteBatch: "/ywvendorlicensemange/ywVendorLicenseMange/deleteBatch",
          edit: "/ywvendorlicensemange/ywVendorLicenseMange/edit",
          spdlHttp:"/sys/category/firstList?name=商品大类",
        }
      }
    },
    
    mounted () {
      httpAction(this.url.spdlHttp,"","get").then((res)=>{
        if(res.success){
          console.log("-------------------这是商品大类的-----------------------")

          console.log(res)
          console.log("------------------------------------------")
          let len = res.result.length
          let result1 = [];
          let result2 = [];
          for (var i = 0; i < len; i++) {
            result1[i] = res.result[i]['name'];
            result2[i] = res.result[i]['code'];
            dlall[res.result[i]['name']]=res.result[i]['name']
            dlCode[res.result[i]['name']]=res.result[i]['code']
            
          }
          this.spdlItems= result1
          console.log(result1)
          console.log(result2)
        }else{

          console.log(res)
        }
      }).finally(() => {
        this.edit()
      });
      
    },

    methods: {
      add () {
        this.edit({});
      },
      handReturn () {
        this.$router.push({path:"/Vendor/YwCerMan"})
      },
      edit (record) {
        this.form.resetFields();
        this.model = Object.assign({}, this.$route.query);
        this.visible = true;
        this.$nextTick(() => {
          this.form.setFieldsValue(pick(this.model,'licenseTypeId','licenseName','firstClass','controlClassCode','controlClassName','commonName','remindStatus','notes'))
        })
      },
      close () {
        this.$emit('close');
        this.visible = false;
      },
      handleOk () {
        const that = this;
        // 触发表单验证
        this.form.validateFields((err, values) => {
          values.firstClass= dlall[values.firstClass]  
          values.firstClassCode= dlCode[values.firstClass]  
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
              that.$router.push({path:"/Vendor/YwCerMan"})
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