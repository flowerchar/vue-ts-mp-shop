import type { AddressParams } from '@/types/address'
import { http } from '@/utils/http'

export const postMemberAddressAPI = (data: AddressParams) => {
  return http({
    method: 'POST',
    url: '/member/address',
    data,
  })
}
