import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { decrease, increase } from '../modules/counter';

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();

  return (
    <Counter
      number={number}
      increase={() => dispatch(increase())}
      decrease={() => dispatch(decrease())}
    />
  );
};

export default CounterContainer;

/*
  혹은
  export default connect(mapStateToProps, { increase, decrease })(CounterContainer);
  이러면 connect가 내부적으로  dispatch 함수를 처리해준다.
  */
