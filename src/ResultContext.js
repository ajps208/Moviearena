import React, { createContext, useState } from 'react';

export const ResultContext = createContext(null);

function Result({ children }) {
  const [resultContext, setresultContext] = useState(null);

  return (
    <ResultContext.Provider value={[resultContext, setresultContext]}>
      {children}
    </ResultContext.Provider>
  );
}

export default Result;
