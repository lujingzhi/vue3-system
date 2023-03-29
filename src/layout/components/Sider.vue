<template>
  <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
    <div class="logo" />
    <a-menu
      v-model:selectedKeys="selectedKeys"
      theme="dark"
      mode="inline"
      name-value="sd"
    >
      <a-menu-item key="1">
        <span>nav 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <span>nav 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <span>nav 3</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts" setup>
const collapsed = 'sdf'
const selectedKeys = []
</script>
