<script setup lang="ts">
//
import { ref } from 'vue'
const a = ref(false)
let b = false
const updateA = () => {
  a.value = true
}
const updateB = () => {
  b = true
}
</script>

<template>
  <view class="cart">cart</view>
  <button @click="updateA">按钮 A</button>
  <button @click="updateB">按钮 B</button>

  <view>{{ a ? '按钮 A 被点击' : '按钮 A 未点击' }}</view>
  <view>{{ b ? '按钮 B 被点击' : '按钮 B 未点击' }}</view>
</template>

<style lang="scss">
//
</style>
