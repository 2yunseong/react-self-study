import { useDispatch, useSelector } from 'react-redux';
import Counter from './components/Counter';
import { useActions } from './Hooks/useActions';
import { decrease, increase } from './modules/counter';

const CountContainer = () => {
  const number = useSelector((state) => state.counter);
  const [onIncrease, onDecrease] = useActions([increase, decrease], []);

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CountContainer;
