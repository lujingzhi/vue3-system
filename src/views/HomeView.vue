<script setup lang="ts" name="Home">
import TheWelcome from '../components/TheWelcome.vue'
import { useUserStore } from '@/stores/modules/user'
import { SlidersTwoTone } from '@ant-design/icons-vue'

const userStore = useUserStore()
</script>

<template>
 <SlidersTwoTone />
</template>
