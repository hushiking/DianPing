import * as actionTypes from '../constants/userinfo'

const initialState = {}

// 1.定义 userinfo 计算规则，action -> reducer
export default function userinfo(state = initialState, action) {
  switch (action.type) {
    // 登录
    case actionTypes.USERINFO_LOGIN:
      return action.data
    // 修改城市
    case actionTypes.UPDATE_CITY:
      return action.data
    default:
      return state
  }
}