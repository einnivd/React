function SearchBox({ value, onChange }) {
  return (
    <>
      <input
        text="text"
        className="search-box"
        placeholder="검색어 입력"
        value={value}
        onChange={onChange}
      ></input>
    </>
  );
}
export default SearchBox;
