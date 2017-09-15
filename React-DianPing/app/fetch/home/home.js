import config from '../../config/config'
import { get } from '../get'

export function getAdData() {
    let url = '/api/homead'
    // 如果不是开发环境，访问服务器广告api接口
    if (!__DEV__) {
        url = `${config.HTTP}${config.SERVER_PATH}:${config.PORT}${url}`
    }
    const result = get(url)
    return result
}
export function getListData(city, page) {
    let url = '/api/homelist/' + encodeURIComponent(city) + '/' + page
    // 如果不是开发环境，访问服务器推荐列表api接口
    if (!__DEV__) {
        url = `${config.HTTP}${config.SERVER_PATH}:${config.PORT}${url}`
    }
    const result = get(url)
    return result
}