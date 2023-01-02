import { createAction, handleActions } from 'redux-actions';

// 액션 정의
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 초기 상태
const defaultState = {
  number: 0,
};

// 리듀서 정의

const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  defaultState
);

export default counter;
