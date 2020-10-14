<template>
  <div class="clearfix">
    <a-upload
      :title="title"
      :visible="visible"
      :confirmLoading="confirmLoading"
      list-type="picture-card"
      :file-list="fileList"
      :headers="headers"
      @preview="handlePreview"
      @change="handleChange1"
    >
      <div v-if="fileList.length < 8">
        <a-icon type="plus" />
        <div class="ant-upload-text">
          点击上传
        </div>
      </div>
    </a-upload>
    <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>
  </div>
</template>

<script>


  import pick from 'lodash.pick'
  import Vue from 'vue'
  import {ACCESS_TOKEN} from "@/store/mutation-types"
  import JImageUpload from '@/components/jeecg/JImageUpload'
  import { validateDuplicateValue } from '@/utils/util'
  
  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
  export default {
    name: "upLoadPic",
    inject:['closeCurrent'],
    components: {
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
        headers: {
        },

        previewVisible: false,
        previewImage: '',
        fileList: [
          // {
          //   uid: '-1',
          //   name: 'image.png',
          //   status: 'done',
          //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          // }
        ],
        url: {
          add: "/ywwarelicensescan/ywWareLicenseScan/upload",
          
        }
      }
    },
    created () {
        const token = Vue.ls.get(ACCESS_TOKEN);
        this.headers = {"X-Access-Token":token}
    },

    methods: {
      handleChange({ info }) {
        if(info.file.status !== 'uploading'){
          console.log(info.file,info.fileList);
        }
        if(info.file.status == 'done'){
          this.$message.success(`${info.file.name}文件上传成功`);
        }else if(info.file.status == 'error'){
          this.$message.error(`${info,file.name}文件上传失败`)
        }
      },

      handleCancel() {
        this.previewVisible = false;
      },
      async handlePreview(file) {
        if (!file.url && !file.preview) {
          file.preview = await getBase64(file.originFileObj);
        }
        this.previewImage = file.url || file.preview;
        this.previewVisible = true;
      },
      handleChange1({ fileList }) {
        this.fileList = fileList;
      },
    }
  }
</script>
<style>
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>