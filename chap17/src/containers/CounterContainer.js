import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Counter from '../components/Counter';
import { decrease, increase } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return <Counter number={number} increase={increase} decrease={decrease} />;
};

const mapStateToProps = ({ counter }) => ({
  number: counter.number,
});

export default connect(mapStateToProps, (dispatch) =>
  bindActionCreators({ increase, decrease }, dispatch)
)(CounterContainer);

/*
  혹은
  export default connect(mapStateToProps, { increase, decrease })(CounterContainer);
  이러면 connect가 내부적으로  dispatch 함수를 처리해준다.
  */
