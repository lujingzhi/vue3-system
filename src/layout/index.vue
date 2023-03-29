<template>
  <a-layout>
    <Sider />
    
    <a-layout>
      <!-- <Header/> -->
      <!-- <a-layout-header style="background: #fff; padding: 0">
        <MenuUnfoldOutlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <MenuFoldOutlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
      </a-layout-header> -->
      <!-- <Main /> -->
      <!-- <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        Content
      </a-layout-content> -->
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import Sider from './components/Sider.vue'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
</script>