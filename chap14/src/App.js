import { useState } from 'react';
import axios from 'axios';
import { API_KEY } from './env/env';
import NewsList from './components/NewsList';

function App() {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='App'>
      <button onClick={onClick}>불러오기</button>
      {data && <NewsList articles={data.articles} />}
    </div>
  );
}

export default App;
