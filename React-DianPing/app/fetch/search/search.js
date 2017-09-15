import config from '../../config/config'
import { get } from '../get'

export function getSearchData(page, cityName, category, keyword) {
    const keywordStr = keyword ? '/' + keyword : ''
    let url = '/api/search/' + page + '/' + cityName + '/' + category + keywordStr
    // 如果不是开发环境，访问服务器搜索结果api接口
    if (!__DEV__) {
        url = `${config.HTTP}${config.SERVER_PATH}:${config.PORT}${url}`
    }
    const result = get(url)
    return result
}