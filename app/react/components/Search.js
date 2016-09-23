import React from 'react';

const Search = (props) => {
  return (
    <input className="search"
      type="search"
      onChange={props.performSearch} />
  );
}

Search.propTypes = {
  performSearch: React.PropTypes.func.isRequired,
};

export default Search;
