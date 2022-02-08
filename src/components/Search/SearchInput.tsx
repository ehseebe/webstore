type Props = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>
};

const SearchInput: React.FC<Props> = ({searchQuery, setSearchQuery}) => {

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
        <span
          className="search__input__icon"
        />
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

export default SearchInput;
