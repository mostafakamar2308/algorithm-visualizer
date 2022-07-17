const SearchBar = (props) => {
  return (
    <input
      id="searchbar"
      type="search"
      placeholder="Search for an Algorithm"
      className="block w-8/12 mx-auto p-3 rounded-xl focus:outline-none active:border-none text-black"
      onInput={props.whenInput}
    />
  );
};

export default SearchBar;
