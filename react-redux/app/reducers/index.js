import {combineReducers} from 'redux'

import userinfo from './userinfo'

// 定义规则后将 userinfo 绑定在 state 上（准备创建store）
const rootReducer = combineReducers({
  userinfo
})

export default rootReducer