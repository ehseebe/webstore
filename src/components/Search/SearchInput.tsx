import { useState } from 'react';
import PropTypes from 'prop-types';

export default function SearchInput({searchQuery, setSearchQuery}) {

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    if (searchQuery === '' || null) {
      return null;
    }

    console.log('searching for', searchQuery);
    // setSearchQuery('');
  };

  return (
    <form className="search__input" aria-label="Keyword/text search">
      <label htmlFor="search-query">
        <input
          id="search-query"
          className="search__input__field"
          placeholder="Search by keyword"
          type="text"
          onChange={(event) => setSearchQuery(event.target.value)}
          value={searchQuery}
        />
      </label>
      <label htmlFor="search-submit">
        <input
          id="search-submit"
          className="search__input__button"
          onClick={handleSearchSubmit}
          type="submit"
          value=""
          aria-label="Submit search query"
        />
      </label>
      {searchQuery.length > 0 && (
        <button
          className="search__input__clear"
          onClick={() => setSearchQuery('')}
          type="button"
          aria-label="Clear search query"
        />
      )}
    </form>
  );
}

SearchInput.propTypes = {
  placeholder: PropTypes.string,
};

SearchInput.defaultProps = {
  placeholder: '',
};
