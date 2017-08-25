import { combineReducers } from 'redux'
import userinfo from './userinfo'

// 将 userinfo 绑定在 stata 上
const rootReducer = combineReducers({
    userinfo
})

export default rootReducer