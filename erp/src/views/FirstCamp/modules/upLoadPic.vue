<template>
  <j-modal
    :title="title"
    :visible="visible"
    :confirmLoading="confirmLoading"
    switchFullscreen
    @ok="handleOk"
    @cancel="handleCancel"
    cancelText="关闭">
    <a-spin :spinning="confirmLoading" style="width:800px;height:300px">
      <div class="table-page-search-wrapper">
        <a-form layout="inline" :form="form">

          <a-row :gutter="24">
            <a-col :span="12">
              <a-form-item label="上传多张图片">
                <j-image-upload v-model="imgList" :isMultiple="true"></j-image-upload>

              </a-form-item>
            </a-col>
<!--            <a-col :span="12">选中的值(v-model)：{{ imgList }}</a-col>-->
          </a-row>

        </a-form>
      </div>
    </a-spin>
  </j-modal>
</template>

<script>

  import { httpAction } from '@/api/manage'
  import pick from 'lodash.pick'

  import { validateDuplicateValue } from '@/utils/util'
  import JDate from '@/components/jeecg/JDate'
  import JImageUpload from '@/components/jeecg/JImageUpload'

  var id = null ;


  export default {
    name: "upLoadPic",
    inject:['closeCurrent'],
    components: {
      JDate,
      JImageUpload

    },
    computed: {
      nameList: function() {

        var names = []
        for (var a = 0; a < this.selectList.length; a++) {
          names.push(this.selectList[a].name)
        }
        return names
      }
    },
    data () {
      return {
        imgList:[],
        form: this.$form.createForm(this),
        title:"操作",

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
        user_acc:"",
        user_passwd:"",
        user_passwd_con:"",
        url: {
          add: "/ywwarelicensescan/ywWareLicenseScan/upload",
          edit: "/userrb/userRb/edit",
        }
      }
    },
    created () {
    },

    methods: {
      add (did) {
        id = did ;
        this.edit({});
      },
      edit (record) {
        this.form.resetFields();
        this.model = Object.assign({}, record);
        this.visible = true;
        this.$nextTick(() => {
          this.form.setFieldsValue(pick(this.model,'userAcc','userPasswd','userPassedCon','userName','userNum','userJob','userDep','userRole','userIde','userChadep','userSex','userNat','userBri','userIdenum','userPoli','userMar','userLocal','userSchool','userPro','userEdu','userJobdata','userStartjob','userMed','userGuild','userHonor','userEmail','userPhone','userPhonenum','userStatus'))
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
          if (!err) {
            values['certificateFilePath'] = this.imgList ;
            values['id'] = id ;
            console.log(values)
            that.confirmLoading = true;
            let httpurl = '';
            let method = '';

            httpurl+=this.url.add;
            method = 'post';

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
        this.form.setFieldsValue(pick(row,'userAcc','userPasswd','userPassedCon','userName','userNum','userJob','userDep','userRole','userIde','userChadep','userSex','userNat','userBri','userIdenum','userPoli','userMar','userLocal','userSchool','userPro','userEdu','userJobdata','userStartjob','userMed','userGuild','userHonor','userEmail','userPhone','userPhonenum','userStatus'))
      },


    }
  }
</script>