export function get(url) {
    var result = fetch(url, {
        // 默认情况下，标准的跨域请求是不会发送cookie等用户认证凭据的
        // Fetch 跨域请求时默认不会带 cookie，需要时得手动指定 credentials: 'include'
        // 
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*'
        }
    })

    return result
}