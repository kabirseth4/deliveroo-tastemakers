import "./Search.scss";

const Search = () => {
  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        placeholder='Try "Wine, perfume, flowers..."'
      />
    </div>
  );
};

export default Search;
