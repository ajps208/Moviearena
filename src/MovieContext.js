import React from 'react'
import { createContext,useState } from 'react'
 
 export const MovieContext = createContext(null)



function Context({children}) {
    const [movieContext, setMovieContext] = useState(null)
  return (
    
    <MovieContext.Provider value={[movieContext, setMovieContext]}>
        {children}
        </MovieContext.Provider>
  )
}

export default Context