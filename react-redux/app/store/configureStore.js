import {createStore} from 'redux'
import rootReducer from '../reducers'

// 2.根据计算规则生产store，reducer -> store
export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, 
    // 触发redux-devtools
    window.devToolsExtension ? window.devToolsExtension() : undefined
  )
  return store
}