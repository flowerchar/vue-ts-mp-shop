<script setup lang="ts">
//
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import type { XtxGuessInstance } from '@/types/components'
import CustomNavbar from './components/CustomNavbar.vue'
// import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import PageSkeleton from './components/PageSkeleton.vue'
import { onLoad } from '@dcloudio/uni-app'
const bannerList = ref<BannerItem[]>([])
const categoryList = ref<CategoryItem[]>([])
const hotList = ref<HotItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}
const isLoading = ref(false)
onLoad(async () => {
  isLoading.value = true
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()])
  isLoading.value = false
})
const guessRef = ref<XtxGuessInstance>()
const onScrolltolower = () => {
  guessRef.value!.getMore()
}
const isTriggered = ref(false)
// let isTriggered = false
const onRefresherrefresh = async () => {
  isTriggered.value = true
  // isTriggered = true
  // await getHomeBannerData()
  // await getHomeCategoryData()
  // await getHomeHotData()
  guessRef.value!.resetData()
  await Promise.all([
    getHomeBannerData(),
    getHomeCategoryData(),
    getHomeHotData(),
    guessRef.value!.getMore(),
  ])
  isTriggered.value = false
  // isTriggered = false
}
// 这里一开始组件加载好之后istriggered的值为false，那么之后就不会变了。即使之后更新也不会通知，因为不是响应式
</script>

<template>
  <CustomNavbar />
  <scroll-view
    scroll-y
    class="scroll-view"
    @scrolltolower="onScrolltolower"
    :refresher-triggered="isTriggered"
    refresher-enabled
    @refresherrefresh="onRefresherrefresh"
  >
    <PageSkeleton v-if="isLoading" />
    <template v-else>
      <XtxSwiper :list="bannerList" />
      <CategoryPanel :list="categoryList" />
      <HotPanel :list="hotList" />
      <XtxGuess ref="guessRef" />
    </template>
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll-view {
  flex: 1;
}
</style>
