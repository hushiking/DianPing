import * as actionTypes from '../constants/userinfo'

// 规定动作，执行之后把信息传到 reducers 里面，reducers 通过 return 来更改提交的信息
// 然后通过 redux 的机制触发全局的数据更新
export function update(data) {
    return {
        type: actionTypes.USERINFO_UPDATE,
        data
    }
}
