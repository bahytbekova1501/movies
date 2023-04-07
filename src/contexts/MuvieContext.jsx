import React, { createContext, useContext } from "react";

const muvieContext = createContext();

export function useMuvieContext() {
  return useContext(muvieContext);
}

function MuvieContext() {
  return <div></div>;
}

export default MuvieContext;
