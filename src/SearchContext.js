import React, { createContext, useState } from 'react';

export const SearchContext = createContext(null);

function Search({ children }) {
  const [searchContext, setsearchContext] = useState([]);

  return (
    <SearchContext.Provider value={[searchContext, setsearchContext]}>
      {children}
    </SearchContext.Provider>
  );
}

export default Search;
