<script setup>
import { ShoppingCart, Menu, User } from '@element-plus/icons-vue'
import CategoriaView from './CategoriaView.vue';
</script>

<template>
  <main>
    <el-tabs  class="menu-tabs" tab-position="bottom" type="border-card">
      <el-tab-pane>
        <template #label>
          <span class="tabs-label">
            <el-icon><Menu /></el-icon>
          </span>
        </template>
        <CategoriaView />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="tabs-label">
            <el-icon><ShoppingCart /></el-icon>
          </span>
        </template>
        Config
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="tabs-label">
            <el-icon><User /></el-icon>
          </span>
        </template>
        Role
      </el-tab-pane>
    </el-tabs>
  </main>
</template>




<style>
  main{
  height: 100vh;
  }

  .el-tabs{
    height: 100vh;
  }

  .menu-tabs > .el-tabs__header{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 56px;
  }

  .menu-tabs .el-tabs__nav-scroll, 
  .menu-tabs .el-tabs__nav-wrap,
  .menu-tabs .el-tabs__nav{
    height: 100%;
    float: none;
  }

  .menu-tabs .el-tabs__item{
    flex: 1;
    height: 100%;
  }

</style>