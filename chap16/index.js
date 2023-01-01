import { createStore } from 'redux';

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

// 액션의 이름을 정의
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// 액션 생성 함수
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

// 초기 상태
const InitialState = {
  toggle: false,
  counter: 0,
};

// 리듀서 함수 정의. dispatcher 로부터 액션을 전달 받는다.
function reducer(state = InitialState, action) {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return { ...state, toggle: !state.toggle };
    case INCREASE:
      return { ...state, counter: state.counter + 1 };
    case DECREASE:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}

const store = createStore(reducer);

// 스토어를 구독하는 함수.
const render = () => {
  const state = store.getState();
  if (state.toggle) {
    divToggle.classList.add('active');
  } else {
    divToggle.classList.remove('active');
  }

  counter.innerText = state.counter;
};

// 사용자 interact가 발생하면, dispatcher를 실행시킨다. 이 때, 액션 생성 함수가 액션 정의
divToggle.addEventListener('click', () => {
  store.dispatch(toggleSwitch());
});

btnIncrease.addEventListener('click', () => {
  store.dispatch(increase(1));
});

btnDecrease.addEventListener('click', () => {
  store.dispatch(decrease());
});
render();
store.subscribe(render);
