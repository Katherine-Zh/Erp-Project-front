<template>
  <a-layout-sider
    :class="['sider', isDesktop() ? null : 'shadow', theme, fixSiderbar ? 'ant-fixed-sidemenu' : null ]"
    width="200px"
    :collapsible="collapsible"
    v-model="collapsed"
    :trigger="null">
    <logo />
    <!--    <component :is="searchMenuComp" v-show="searchMenuVisible || isMobile()" class="borders" :visible="searchMenuVisible" title="功能搜索" :footer="null" @cancel="searchMenuVisible=false">-->
    <a-select
      style="width: 200px"
      class="search-input"
      showSearch
      :showArrow="false"
      placeholder="功能搜索"
      optionFilterProp="children"
      :filterOption="filterOption"
      :open="isMobile()?true:null"
      :getPopupContainer="(node) => node.parentNode"
      :style="collapsed?{width:'80px'}:isMobile()?{width: '100%',marginBottom:'50px'}:{}"
      @change="searchMethods"
      @blur="hiddenClick"
    >
      <a-select-option v-for="(site,index) in searchMenuOptions" :key="index" :value="site.id">{{site.meta.title}}</a-select-option>
    </a-select>
    <!--    </component>-->
    <s-menu
      :collapsed="collapsed"
      :menu="menus"
      :theme="theme"
      @select="onSelect"
      :mode="mode"
      :style="smenuStyle">
    </s-menu>
  </a-layout-sider>
</template>
<script>
  import ALayoutSider from "ant-design-vue/es/layout/Sider"
  import Logo from '../tools/Logo'
  import SMenu from './index'
  import { mixin, mixinDevice } from '@/utils/mixin.js'
  import { mapActions, mapGetters, mapState } from 'vuex'
  import { getFileAccessHttpUrl } from "@/api/manage"

  export default {
    name: "SideMenu",
    components: { ALayoutSider, Logo, SMenu },
    mixins: [mixin, mixinDevice],
    data(){
      return{
        // update-begin author:sunjianlei date:20200219 for: 头部菜单搜索规范命名 --------------
        searchMenuOptions:[],
        searchMenuComp: 'span',
        searchMenuVisible: false,
        // update-begin author:sunjianlei date:20200219 for: 头部菜单搜索规范命名 --------------
      }
    },
    props: {
      mode: {
        type: String,
        required: false,
        default: 'inline'
      },
      theme: {
        type: String,
        required: false,
        default: 'dark'
      },
      collapsible: {
        type: Boolean,
        required: false,
        default: false
      },
      collapsed: {
        type: Boolean,
        required: false,
        default: false
      },
      menus: {
        type: Array,
        required: true
      }
    },
    created() {
      let lists = []
      this.searchMenus(lists,this.permissionMenuList)
      this.searchMenuOptions=[...lists]
    },
    computed:{
      smenuStyle() {
        let style = { 'padding': '0' }
        if (this.fixSiderbar) {
          style['height'] = 'calc(100% - 59px)'
          style['overflow'] = 'auto'
          style['overflow-x'] = 'hidden'
        }
        return style
      },
      ...mapState({
        // 后台菜单
        permissionMenuList: state => state.user.permissionList

      })
    },
    watch: {
      // update-begin author:sunjianlei date:20200219 for: 菜单搜索改为动态组件，在手机端呈现出弹出框
      device: {
        immediate: true,
        handler() {
          this.searchMenuVisible = false
          this.searchMenuComp = this.isMobile() ? 'a-modal' : 'span'
        },
      },
      // update-end author:sunjianlei date:20200219 for: 菜单搜索改为动态组件，在手机端呈现出弹出框
    },
    methods: {
      showClick() {
        this.searchMenuVisible = true
      },
      ...mapActions(["Logout"]),
      ...mapGetters(["nickname", "avatar","userInfo"]),
      onSelect (obj) {
        this.$emit('menuSelect', obj)
      },
      hiddenClick(){
        this.shows = false
      },
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
      filterOption(input, option) {
        // const PinyinMatch = require('pinyin-match');
        // if (str.charCodeAt(input) < 255){
        //   var result=[]
        //   this.copysearchMenuOptions.foreach(item => {
        //     var m=PinyinMatch.match(item.id,input)
        //     if (m){
        //       result.push({ path: route.path })
        //     }
        //   })
        //   this.searchMenuOptions=result;
        // }else{
        return option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
      },
      getAvatar(){
        return getFileAccessHttpUrl(this.avatar())
      },
      searchMethods(value) {
        let route = this.searchMenuOptions.filter(item => item.id === value)[0]
        if (route.meta.internalOrExternal === true || route.component.includes('layouts/IframePageView')) {
          window.open(route.meta.url, '_blank')
        } else {
          this.$router.push({ path: route.path })
        }
        this.searchMenuVisible = false
      }
    }
  }
</script>
<style lang="less" scoped>

  /* update_begin author:sunjianlei date:20190509 for: 修改侧边导航栏滚动条的样式 */
  .sider {
    @scrollBarSize: 10px;

    ul.ant-menu {

      /* 定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
      &::-webkit-scrollbar {
        width: @scrollBarSize;
        height: @scrollBarSize;
        background-color: transparent;
        display: none;
      }

      & .-o-scrollbar {
        display: none;
      }

      /* 兼容IE */
      -ms-overflow-style: none;
      -ms-scroll-chaining: chained;
      -ms-content-zooming: zoom;
      -ms-scroll-rails: none;
      -ms-content-zoom-limit-min: 100%;
      -ms-content-zoom-limit-max: 500%;
      -ms-scroll-snap-type: proximity;
      -ms-scroll-snap-points-x: snapList(100%, 200%, 300%, 400%, 500%);

      /* 定义滚动条轨道 */
      &::-webkit-scrollbar-track {
        background-color: transparent;
      }

      /* 定义滑块 */
      &::-webkit-scrollbar-thumb {
        border-radius: @scrollBarSize;
        background-color: #eee;
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);

        &:hover {
          background-color: #dddddd;
        }

        &:active {
          background-color: #bbbbbb;
        }
      }
    }

    /** 暗色系滚动条样式 */
    &.dark ul.ant-menu {
      &::-webkit-scrollbar-thumb {
        background-color: #666666;

        &:hover {
          background-color: #808080;
        }

        &:active {
          background-color: #999999;
        }
      }
    }

  }

  /* update_end author:sunjianlei date:20190509 for: 修改侧边导航栏滚动条的样式 */

</style>

<!-- update_begin author:sunjianlei date:20190530 for: 选中首页的时候不显示背景颜色 -->
<style lang="less">
  .ant-menu.ant-menu-root {
    & > .ant-menu-item:first-child {
      background-color: transparent;

      & > a, & > a:hover {
        color: rgba(0, 0, 0, 0.65);
      }

      &.ant-menu-item-selected {
        & > a, & > a:hover {
          color: @primary-color;
        }
      }
    }

    &.ant-menu-dark > .ant-menu-item:first-child {
      & > a, & > a:hover {
        color: rgba(255, 255, 255, 0.65);
      }

      &.ant-menu-item-selected {
        & > a, & > a:hover {
          color: rgba(255, 255, 255, 1);
        }
      }
    }
  }
</style>
<!-- update_end author:sunjianlei date:20190530 for: 选中首页的时候不显示背景颜色 -->