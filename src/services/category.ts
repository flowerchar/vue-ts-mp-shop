import type { CategoryItem } from '@/types/home'
import { http } from '@/utils/http'

export const getCategoryTopAPI = () => {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/category/top',
  })
}
