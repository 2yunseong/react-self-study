import axios from 'axios';
import styled from 'styled-components';

import { API_KEY } from '../env/env';
import NewsItem from './NewsItem';
import usePromise from '../lib/hooks/usePromise';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${API_KEY}`
    );
  }, [category]);

  if (loading) {
    return <NewsListBlock>로딩 중...</NewsListBlock>;
  }

  if (!response) {
    return <div>No loading</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  const { articles } = response.data;

  return (
    <NewsListBlock>
      {articles.map((article, index) => (
        <NewsItem article={article} key={index} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
