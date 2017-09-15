import config from '../../config/config'
import { get } from '../get'

export function getInfoData(id) {
    let url = '/api/detail/info/' + id
    // 如果不是开发环境，访问服务器商户详情api接口
    if (!__DEV__) {
        url = `${config.HTTP}${config.SERVER_PATH}:${config.PORT}${url}`
    }
    const result = get(url)
    return result
}

export function getCommentData(page, id) {
    let url = '/api/detail/comment/' + page + '/' + id
    // 如果不是开发环境，访问服务器用户评论api接口
    if (!__DEV__) {
        url = `${config.HTTP}${config.SERVER_PATH}:${config.PORT}${url}`
    }
    const result = get(url)
    return result
}