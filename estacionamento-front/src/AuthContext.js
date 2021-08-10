import React, { createContext, useState } from 'react';
import api from './api';

const Context = createContext();

function AuthProvider({children}) {
  const [authenticated, setAuthenticated] = useState(false);

async function handleLogin() {
   const { data } =  await api.get('/api/posts');
   setAuthenticated(true);
   console.log(data);
  }

  return (
    <Context.Provider value={{ authenticated }}>
      {children}
    </Context.Provider>
  )
}

export { Context, AuthProvider };