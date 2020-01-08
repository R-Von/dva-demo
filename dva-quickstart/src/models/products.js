export default {
  namespace:'products',
  state:[],
  reducers:{
    'delete'(state,{payload:id}){
      return state.filter(item => item.id !== id)
    }
  }
}

// 在这个model里 
// - ```namespace``` 表示在全局state上的key
// - ```state``` 是初始值 在这里是空数组
// - ```reducers``` 等同于redux里面的 reducer 接收action 同步更新state