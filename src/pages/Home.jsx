import React from 'react';
import MatkulData from '../../dummyArticle.json';
import Article from '../components/article';
import Search from '../components/search';

function HomePage() {
  const [Matkul, setMatkul] = React.useState(MatkulData);
  const [totalPost, setTotal] = React.useState(0);

  const handleSearch = (e) => {
    const resFilter = MatkulData.filter((item) => {
      return item.title.includes(e);
    });
    setMatkul(resFilter);
    setTotal(resFilter.length);
  };

  return (
    <>
      <div>
        <h1>Mata Kuliah</h1>
      </div>
      <Search onSearch={handleSearch} totalPost={totalPost} />
      {Matkul.map((mk) => (
        <Article {...mk} key={mk.title} />
      ))}
    </>
  );
}

export default HomePage;
