<template>
  <a-layout>
    <Sider />
    <!-- <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
        <a-menu-item key="1">
          <user-outlined />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <video-camera-outlined />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <upload-outlined />
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider> -->
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

const collapsed: boolean = false
const selectedKeys: Array<string> = []
</script>