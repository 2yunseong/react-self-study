import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux'; // store 생성을 위한 메서드
import { Provider } from 'react-redux'; // redux store 사용을 위한 Provider
import { composeWithDevTools } from 'redux-devtools-extension'; // redux devtool 사용을 위한 것
import rootReducer from './modules'; // 만들어 놓은 reducer
import App from './App';

// store 생성
const store = createStore(rootReducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById('root'));
// 렌더링 시 Provider에 store를 props로 전달해 공급
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
