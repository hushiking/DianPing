# redux 单独使用案例

redux 可以不结合 react 单独使用，监测数据变化并作出回应。

## redux 使用步骤

1. 定义计算规则，即 `reducer`
    ```js
    function reducer(state=0, action) {
        switch (action.type) {
            case 'INCREMENT':
                return state + 1
            case 'DECREMENT':
                return state - 1
            default:
                return state
        }
    }
    ```
1. 根据计算规则生成 `store`
    ```js
    let store = createStore(reducer)
    ```
1. 定义数据（即 `state` ）变化之后的派发规则
    ```js
    store.subscribe(() => {
        console.log('fn1 -> current state', store.getState())
    })
    ```
1. 触发数据变化
    ```js
    store.dispatch({ type: 'INCREMENT' })
    store.dispatch({ type: 'DECREMENT' })
    ```

## 项目运行

1. `npm install`
1. `npm start`
