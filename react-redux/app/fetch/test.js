export function getData() {
	// '/api/1' 获取字符串
	var result = fetch('/api/1', {
		credentials: 'include',
		headers: {
			'Accept': 'application/json, text/plain, */*'
		}
	})
	// 结果为一个Promise对象
	console.log(result)
	result.then(res => {
		// 结果是一个response对象
		console.log(res)
		return res.text()
	}).then(text => {
		console.log(text)
	})

	// '/api/2' 获取json
	var result1 = fetch('/api/2', {
		credentials: 'include',
		headers: {
			'Accept': 'application/json, text/plain, */*'
		}
	})

	result1.then(res => {
		return res.json()
	}).then(json => {
		console.log(json)
	})
}

export function postData() {
	// 'api/post' 提交数据
	var result = fetch('/api/post', {
		method: 'POST',
		credentials: 'include',
		headers: {
			'Accept': 'application/json, text/plain, */*',
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		// 重要：post提交数据的参数形式
		// body: 'a=100&b=200'
		body: 'message=潘金莲'
	})

	result.then(res => {
		console.log(res)
		if (res.ok) {
			return res.json()
		} else {
			console.error('服务器出错')
		}
	}).then(json => {
		console.log(json)
	})
}