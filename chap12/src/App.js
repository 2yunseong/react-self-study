import { useCallback, useRef, useState } from 'react';
import produce from 'immer';

const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: '', username: '' });
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
  });

  // input 수정을 위한 함수
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm(
      produce((draft) => {
        draft[name] = value;
      })
    );
  }, []);

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
      setData(
        produce((draft) => {
          draft.array.push(info);
        })
      );
      // form 초기화
      setForm({
        name: '',
        username: '',
      });
      nextId.current += 1;
    },
    [form.name, form.username]
  );

  const onRemove = useCallback((id) => {
    setData(
      produce((draft) => {
        draft.array.splice(
          draft.array.findIndex((info) => info.id === id),
          1
        );
      })
    );
  }, []);

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
