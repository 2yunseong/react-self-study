import { useCallback, useRef, useState } from 'react';

const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: '', username: '' });
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
  });

  // input 수정을 위한 함수
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setForm({
        ...form,
        [name]: value,
      });
    },
    [form]
  );

  //form 등록을 위한 함수
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
      };
      // array 에 새 항목 등록
      setData({
        ...data,
        array: data.array.concat(info),
      });
      // form 초기화
      setForm({
        name: '',
        username: '',
      });
      nextId.current += 1;
    },
    [data, form.name, form.username]
  );

  const onRemove = useCallback(
    (id) => {
      setData({
        ...data,
        array: data.array.filter((info) => info.id !== id),
      });
    },
    [data]
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name='name'
          placeholder='이름'
          value={form.name}
          onChange={onChange}
        />
        <input
          name='username'
          placeholder='닉네임'
          value={form.username}
          onChange={onChange}
        />
        <button type='submit'>제출</button>
      </form>
      <ul>
        {data.array.map((info) => (
          <li key={info.id} onClick={() => onRemove(info.id)}>
            {info.name} ({info.username})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
