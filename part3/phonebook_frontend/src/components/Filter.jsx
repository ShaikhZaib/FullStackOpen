function Filter({ searchName, handleSearch }) {
  return (
    <div>
      {" "}
      Filter shown with <input value={searchName} onChange={handleSearch} />
    </div>
  );
}

export default Filter;
