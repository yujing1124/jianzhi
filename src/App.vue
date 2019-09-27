<template>
  <div id="app">
    <nav-title v-bind:name='$route.name'/>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
<!--    <router-view/>-->
    <tabbar v-bind:name='$route.name'/>
  </div>
</template>

<script type="text/javascript">
	import navTitle from './components/header.vue'
	import BMap from 'BMap'
import tabbar from './components/tabbar.vue'
export default {
  name: 'home',
  components: {
    navTitle,
    tabbar
  },
  onload(){

  },
  mounted(){
  	var pathname = sessionStorage.getItem('pathname')
  	if(pathname==null ||pathname==''){
  		sessionStorage.setItem('pathname','首页')
  	}

  }
}
</script>
<style lang="less">

</style>
