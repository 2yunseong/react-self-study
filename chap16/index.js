const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

const InitialState = {
  toggle: false,
  counter: 0,
};

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
