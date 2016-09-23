import React from 'react';

const Search = (props) => {
  return (
    <div>
      <input type="search" onChange={props.performSearch} />
    </div>
  );
}

Search.propTypes = {
  performSearch: React.PropTypes.func.isRequired,
};

export default Search;
