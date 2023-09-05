<script setup lang="ts">
//

import CustomNavbar from './components/CustomNavbar.vue'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import { getHomeBannerAPI } from '@/services/home'

const bannerList = ref([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}
</script>

<template>
  <CustomNavbar />
  <XtxSwiper />
  <view class="index">index</view>
</template>

<style lang="scss">
//
</style>
