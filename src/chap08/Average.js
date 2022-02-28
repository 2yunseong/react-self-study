import { useRef, useCallback, useMemo, useState } from "react";

const getAverage = (numbers) => {
  console.log("평균 값 계산중..");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const avg = useMemo(() => getAverage(list), [list]);
  const inputRef = useRef(null);

  const onInsert = useCallback(() => {
    if (Number.isNaN(parseInt(number)) === false) {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
    }
    setNumber("");
    inputRef.current.focus();
  }, [number, list]);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);
  return (
    <>
      <input type='text' value={number} onChange={onChange} ref={inputRef} />
      <button onClick={onInsert}>등록하기</button>
      <ul>
        {list.map((num, index) => {
          return <li key={index}>{num}</li>;
        })}
      </ul>
      <div>평균 값 : {avg}</div>
    </>
  );
};

export default Average;
