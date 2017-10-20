import {createStore} from 'redux'
import rootReducer from '../reducers'

// 2.根据计算规则生产 store
// redux 执行数据流：3. reducer -> store，因为 userinfo 被绑定到 state 上了，reducer 会触发 store 中的数据变化
export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, 
    // 触发 redux-devtools
    window.devToolsExtension ? window.devToolsExtension() : undefined
  )
  return store
}