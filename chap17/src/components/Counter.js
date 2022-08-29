const Counter = ({ number, increase, decrease }) => {
  return (
    <div className='counter'>
      <h1>{number}</h1>
      <button onClick={increase}>+ 1</button>
      <button onClick={decrease}>- 1</button>
    </div>
  );
};

export default Counter;
