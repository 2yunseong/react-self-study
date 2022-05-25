import { useReducer } from 'react';

const reducer = (state, action) => {
  // 불변성을 지키면서 업데이트한 새로운 상태를 반환
  switch(action.type){
    case 'INCREMENT':
      return {value : state.value + 1};
    case 'DECREMENT': 
      return {value : state.value - 1};
    default:
      return state;
  }
}

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, { value : 0 });
  
  return (<div>
    <h1>{state.value}</h1>
    <button onClick={() => dispatch({type : 'INCREMENT'})}> +1 </button>
    <button onClick={() => dispatch({type : 'DECREMENT'})}> -1 </button>
  </div>);

}

export default UseReducerExample;