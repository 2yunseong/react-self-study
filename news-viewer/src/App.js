import axios from 'axios';
import { useState } from 'react';
import API_KEY from './key';

import './App.css';
const URL = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=';
function App() {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(`${URL}${API_KEY}`);
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="App">
      <button onClick={onClick}>불러오기</button>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
}

export default App;
