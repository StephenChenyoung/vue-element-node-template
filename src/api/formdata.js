import request from '@/utils/request'

export function submitForm(params) {
  return request({
    url: '/table/add',
    method: 'post',
    params: params
  })
}
