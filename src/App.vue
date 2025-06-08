<script setup lang="ts">

import Sidebar from "@/components/common/SidebarNav.vue";
import TopNav from "@/components/common/TopNav.vue";
</script>

<template>
  <div class="main-container" style="flex-direction: column;width: 100vw;height: 100vh">
    <!-- 全局公共组件 头部菜单 -->
    <top-nav class="app-header" style="height: 85px"></top-nav>
    <div class="main-container" style="flex-direction: row;background: #04051a;height: calc(100% - 85px)">
      <!-- 全局公共组件 侧边栏 -->
      <sidebar class="sidebar-nav"></sidebar>
      <el-main class="main-container" style="width: calc(100% - 120px);background-color: #F2F3F5">
        <!-- 路由页面 -->
        <RouterView/>
      </el-main>

    </div>
  </div>
</template>

<style scoped lang="scss">
</style>
