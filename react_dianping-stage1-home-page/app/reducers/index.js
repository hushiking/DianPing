import { combineReducers } from 'redux'
import userinfo from './userinfo'
import store from './store'

// 将 userinfo，store 绑定在 state 上
const rootReducer = combineReducers({
    userinfo,
    store
})

export default rootReducer