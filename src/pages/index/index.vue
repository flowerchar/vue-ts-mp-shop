<script setup lang="ts">
//
import type { BannerItem, CategoryItem } from '@/types/home'
import CustomNavbar from './components/CustomNavbar.vue'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import { getHomeBannerAPI, getHomeCategoryAPI } from '@/services/home'
import CategoryPanel from './components/CategoryPanel.vue'
const bannerList = ref<BannerItem[]>([])
const categoryList = ref<CategoryItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}
onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
})
</script>

<template>
  <CustomNavbar />
  <XtxSwiper :list="bannerList" />
  <CategoryPanel :list="categoryList" />
  <view class="index">index</view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>
