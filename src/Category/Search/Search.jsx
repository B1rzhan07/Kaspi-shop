import React from "react";
import "./Search.scss";

const Search = () => {
  const [search, setSearch] = React.useState("");
  return (
    <div className="mainW">
      <div className="wrap">
        <div className="search">
          <input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type="text"
            className="searchTerm"
            placeholder="Поиск..."
          />
          <button type="submit" className="searchButton">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
