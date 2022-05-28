import axios from 'axios';
import { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const onClick = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => {
        setData(response.data);
      });
  };
  return (
    <div className="App">
      <button onClick={onClick}>불러오기</button>
    </div>
  );
}

export default App;
