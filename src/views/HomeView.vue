<script setup>
import { ShoppingCart, Menu, User } from '@element-plus/icons-vue'
import CategoriaView from './CategoriaView.vue';
</script>

<template>
 <el-tabs type="border-card" class="demo-tabs">
    <el-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <el-icon><Menu></Menu></el-icon>
        </span>
        <CategoriaView />
      </template>
      Route
    </el-tab-pane>
    
    <el-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <el-icon><ShoppingCart></ShoppingCart></el-icon>
        </span>
      </template>adasdasdasd
    </el-tab-pane>
    
    <el-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <el-icon><User></User></el-icon>
        </span>
      </template>adasdas
    </el-tab-pane>
  </el-tabs>
</template>




<style>
  main{
  height: 100vh;
  }

  .el-tabs{
    height: 100vh;
  }

  .menu-tabs .el-tabs__nav{
    float: none
  }

  .menu-tabs .el-tabs__nav-scroll, 
  .menu-tabs .el-tabs__nav-wrap,
  .menu-tabs .el-tabs__nav-nav{
    height: 100%;
  }

  .menu-tabs .el-tabs-items{
    flex: 1;
  }

</style>