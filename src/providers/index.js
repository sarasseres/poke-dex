import React, { useState, createContext } from 'react';
export const Hooks = createContext();
const Index = (props) => {
  const [data, setData] = useState([]);
  const valx = { data, setData };
  return <Hooks.Provider value={valx}>{props.children}</Hooks.Provider>;
};

export default Index;
