import type { ProfileDetail } from '@/types/member'
import { http } from '@/utils/http'

export const getMemberProfileAPI = () => {
  return http<ProfileDetail>({
    method: 'GET',
    url: '/member/profile',
  })
}
