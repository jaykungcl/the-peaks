import { createContext, useState } from "react";

export const SortContext = createContext();

const SortContextProvider = ({ children }) => {
  const [sort, setSort] = useState("newest");

  return (
    <SortContext.Provider value={{ sort, setSort }}>
      {children}
    </SortContext.Provider>
  );
};

export default SortContextProvider;
