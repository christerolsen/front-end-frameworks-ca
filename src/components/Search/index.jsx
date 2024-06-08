// /src/components/ProductList/Search.jsx

import { SearchContainer, SearchInput } from "./styled";

import React from "react";

const Search = ({ query, onQueryChange }) => {
  return (
    <>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Search for a product..."
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
        />
      </SearchContainer>
    </>
  );
};

export default Search;
