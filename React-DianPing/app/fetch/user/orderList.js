import { get } from '../get'
import { post } from '../post'

export function getOrderListData(username) {
    let url = '/api/orderList/' + username
    // 如果不是开发环境，访问服务器订单列表api接口
    if (!__DEV__) {
        url = `${config.HTTP}${config.SERVER_PATH}:${config.PORT}${url}`
    }
    const result = get(url)
    return result
}

export function postComment(id, comment) {
    let url = '/api/submitComment'
    // 如果不是开发环境，访问服务器提交评论api接口
    if (!__DEV__) {
        url = `${config.HTTP}${config.SERVER_PATH}:${config.PORT}${url}`
    }
    const result = post(url, {
        id: id,
        comment: comment
    })
    return result
}