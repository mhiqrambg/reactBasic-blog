import React from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from '../context';

const Article = ({ title, isNew, jadwal, tags }) => {
  const user = React.useContext(GlobalContext);
  return (
    <div>
      <h3>
        {title} | {isNew && 'True'}
      </h3>
      <div>
        <small>Jadwal: {jadwal}</small>
      </div>
      <div>
        <small>{tags.join(', ')}</small>
      </div>
      <div>di buat oleh: {user.username}</div>
    </div>
  );
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  isNew: PropTypes.bool.isRequired,
  jadwal: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Article;
