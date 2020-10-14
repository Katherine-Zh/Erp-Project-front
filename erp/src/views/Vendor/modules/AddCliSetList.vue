<template>
  <j-modal
    :title="title"
    :width="width"
    :visible="visible"
    :confirmLoading="confirmLoading"
    switchFullscreen
    @ok="handleOk"
  
    @cancel="handleCancel"
    cancelText="关闭">
      
      <a-spin :spinning="confirmLoading">
        <a-form :form="form"  >
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="8">
              <p style="margin-bottom: 0px">委托人</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input :disabled="true" v-decorator="['client', validatorRules.client]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">一级分类</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-select  v-decorator="['firstClassName', validatorRules.firstClassName]" v-model="spdlnow">
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
            <a-col :span="8">
              <p style="margin-bottom: 0px">类别编码</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input :disabled="true" v-decorator="['classCode', validatorRules.classCode]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>

          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col :span="16">
              <p style="margin-bottom: 0px">类别名称</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
               <a-input  v-decorator="['className', validatorRules.className]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">商品编码</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['wareId', validatorRules.wareId]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>
            

          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]" >

            <a-col :span="8">
              <p style="margin-bottom: 0px">通用名称</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['commonName', validatorRules.commonName]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">商品规格</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['wareSpeci', validatorRules.wareSpeci]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">商品单位</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <j-dict-select-tag type="list"  v-decorator="['wareUnit', validatorRules.wareUnit]" :trigger-change="true" dictCode="sd_ware_unit" placeholder="请选择单位"/>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]" >

            <a-col :span="16">
              <p style="margin-bottom: 0px">生产企业名称</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['manufacture', validatorRules.manufacture]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">备注</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input v-decorator="['notes', validatorRules.notes]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>
          </a-row>

          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]" >

            <a-col :span="8">
              <p style="margin-bottom: 0px">创建人</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input :disabled="true" v-decorator="['createBy', validatorRules.createBy]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">创建时间</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input :disabled="true" v-decorator="['createTime', validatorRules.createTime]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <p style="margin-bottom: 0px">最终修改人</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input :disabled="true" v-decorator="['updateBy', validatorRules.updateBy]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>

          </a-row>
          <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]" >

            <a-col :span="8">
              <p style="margin-bottom: 0px">最终修改时间</p>
              <a-form-item  :labelCol="labelCol" :wrapperCol="wrapperCol">
                <a-input :disabled="true" v-decorator="['updateTime', validatorRules.updateTime]" placeholder="" ></a-input>
              </a-form-item>
            </a-col>
          </a-row>
          <!-- <a-row justify="center" style="margin-left: 120px" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
            <a-col style="float: right ;overflow: hidden;" class="table-page-search-submitButtons">
                <span>
                  <a-button @click="handReturn" style="margin-right: 8px">
                    取消
                  </a-button>
                  <a-button  @click="Reset" style="margin-right: 8px">
                    重置
                  </a-button>
                  <a-button type="primary" html-type="submit" @click="handleOk" style="margin-right: 16px">
                    确定
                  </a-button>
                </span>
            </a-col>
          </a-row> -->
        </a-form>
      </a-spin>
   </j-modal>
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
    name: "AddCliSetList",
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
        description: '供应商委托人设置明细新增',
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
          client: {
            rules: [
              { required: false, message: '委托人！' },
            ]
          },
          firstClassName: {
            rules: [
              { required: false, message: '一级分类！' },
            ]
          },
          classCode: {
            rules: [
              { required: false, message: '类别编码!' },
            ]
          },
          className: {
            rules: [
              { required: false, message: '类别名称!' },
            ]
          },
          wareId: {
            rules: [
              { required: false, message: '商品编码!' },
            ]
          },
          commonName: {
            rules: [
              { required: false, message: '通用名称!' },
            ]
          },
          wareSpeci: {
            rules: [
              { required: false, message: '商品规格!' },
            ]
          },
          wareUnit: {
            rules: [
              { required: false, message: '商品单位!' },
            ]
          },
          manufacture: {
            rules: [
              { required: false, message: '生产企业名称!' },
            ]
          },
          notes: {
            rules: [
              { required: false, message: '备注!' },
            ]
          },
          createBy: {
            rules: [
              { required: false, message: '创建人!' },
            ]
          },
          createTime: {
            rules: [
              { required: false, message: '创建时间!' },
            ]
          },
          updateBy: {
            rules: [
              { required: false, message: '最终修改人!' },
            ]
          },
         updateTime: {
            rules: [
              { required: false, message: '最终修改时间!' },
            ]
          },
        },
        url: {
          add: "/ywvendorclientware/ywVendorClientWare/add",
          spdlHttp:"/sys/category/firstList?name=商品大类",

          queryById: "/ywvendorclientware/ywVendorClientWare/queryById",
          editByInsert: "/ywvendorclientmanage/ywVendorClientManage/editByInsert"
        }
      }
    },
    created () {
    },
    mounted() {
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
      });
    },
    methods: {
      
      add () {
        this.edit({});
      },
      handReturn () {
        // this.$router.push({path:"/Vendor/YwCliSetList"})
      },
      edit (record) {
        this.form.resetFields();
        this.model = Object.assign({}, record);
        this.visible = true;
        this.$nextTick(() => {
          this.form.setFieldsValue(pick(this.model,'client','firstClass','classCode','className','wareId','commonName','wareSpeci','wareUnit','manufacture','notes','createBy','createTime','updateBy','updateTime'))
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
          values.firstClassName= dlall[values.firstClassName]  
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
              
            })
          }
        })
      },
      handleCancel () {
        this.close()
      },
      popupCallback(row){
        this.form.setFieldsValue(pick(row,'client','firstClass','classCode','className','wareId','commonName','wareSpeci','wareUnit','manufacture','notes','createBy','createTime','updateBy','updateTime'))
      },
      Reset(){
        this.form.resetFields();
      }
    }
  }

</script>

<style scoped>

</style>