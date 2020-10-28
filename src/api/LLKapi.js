import request from '@/utils/request'

// const ceshi = () => {
//   return request({
//     url: '/vue-admin-template/user/login',
//     method: 'post',
//     data
//   })
// }
// export {ceshi}

export function ceshi(data) {
  return request({
    url: '/ceshi/api',
    method: 'post',
    data
  })
}
