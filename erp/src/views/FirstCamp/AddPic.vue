<template>
  <a-card :bordered="false" style="height:100%;padding-bottom:200px; ">

    <div class="table-page-search-wrapper">
      <a-form layout="inline" :form="form">

        <a-row :gutter="24">
          <a-col :span="12">
            <a-form-item label="上传多张图片">
              <j-image-upload v-model="imgList"></j-image-upload>
            </a-form-item>
          </a-col>
          <a-col :span="12">选中的值(v-model)：{{ imgList }}</a-col>
        </a-row>

      </a-form>
    </div>

  </a-card>
</template>

<script>

  import JDictSelectTag from '../../components/dict/JDictSelectTag.vue'
  import JSelectDepart from '@/components/jeecgbiz/JSelectDepart'
  import JSelectUserByDep from '@/components/jeecgbiz/JSelectUserByDep'
  import JSelectMultiUser from '@/components/jeecgbiz/JSelectMultiUser'
  import JSelectRole from '@/components/jeecgbiz/JSelectRole'
  import JCheckbox from '@/components/jeecg/JCheckbox'
  import JCodeEditor from '@/components/jeecg/JCodeEditor'
  import JDate from '@/components/jeecg/JDate'
  import JEditor from '@/components/jeecg/JEditor'
  import JEllipsis from '@/components/jeecg/JEllipsis'
  import JSlider from '@/components/jeecg/JSlider'
  import JSelectMultiple from '@/components/jeecg/JSelectMultiple'
  import JTreeDict from "../../components/jeecg/JTreeDict.vue";
  import JCron from "@/components/jeecg/JCron.vue";
  import JTreeSelect from '@/components/jeecg/JTreeSelect'
  import JSuperQuery from '@/components/jeecg/JSuperQuery'
  import JUpload from '@/components/jeecg/JUpload'
  import JImageUpload from '@/components/jeecg/JImageUpload'
  import JSelectPosition from '@comp/jeecgbiz/JSelectPosition'
  import JCategorySelect from '@comp/jeecg/JCategorySelect'
  import JMultiSelectTag from '@comp/dict/JMultiSelectTag'
  import JInput from '@comp/jeecg/JInput'
  import JAreaLinkage from '@comp/jeecg/JAreaLinkage'
  import JSearchSelectTag from '@/components/dict/JSearchSelectTag'

  export default {
    name: 'AddPic',
    inject:['closeCurrent'],
    components: {
      JAreaLinkage,
      JInput,
      JCategorySelect,
      JSelectPosition,
      JImageUpload,
      JUpload,
      JTreeDict,
      JDictSelectTag,
      JSelectDepart,
      JSelectUserByDep,
      JSelectMultiUser,
      JSelectRole,
      JCheckbox,
      JCodeEditor,
      JDate, JEditor, JEllipsis, JSlider, JSelectMultiple,
      JCron, JTreeSelect, JSuperQuery, JMultiSelectTag,
      JSearchSelectTag
    },
    data() {
      return {

        imgList:[],


    computed: {
      nameList: function() {

        var names = []
        for (var a = 0; a < this.selectList.length; a++) {
          names.push(this.selectList[a].name)
        }
        return names
      }
    },
    methods: {


      handleCloseCurrentPage() {
        // 注意：以下代码必须存在
        // inject:['closeCurrent'],
        this.closeCurrent()
      },

    }
</style>