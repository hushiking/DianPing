import * as actionTypes from '../constants/userinfo'

const initialState = {}

// 定义了 userinfo 的计算规则
export default function userinfo(state = initialState, action) {
    switch (action.type) {
        case actionTypes.USERINFO_UPDATE:
            return action.data
        default:
            return state
    }
}