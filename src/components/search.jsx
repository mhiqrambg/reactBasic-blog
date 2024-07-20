import { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ onSearch, totalPost }) => {
  const [search, setSearch] = useState();

  const handleButton = (e) => {
    return e.key === 'Enter' && onSearch(search);
  };

  const handleButSearch = () => {
    return onSearch(search);
  };
  return (
    <>
      <div>
        <div>
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleButton}
          />
          <button onClick={handleButSearch}>Search</button>
        </div>
        <br />
        <label>
          Jumlah Mata Kuliah: {totalPost} dengan kata {search}
        </label>
      </div>
    </>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
  totalPost: PropTypes.number.isRequired,
};

export default Search;
