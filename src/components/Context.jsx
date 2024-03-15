import { createContext, useContext, useState } from "react";

const GlobleContext = createContext();
export const UseContext = () => useContext(GlobleContext);
// eslint-disable-next-line react/prop-types
const Context = ({ children }) => {
  const [exit, open] = useState(false);

  const handleBar = () => {
    open(!exit);
  };
  return (
    <GlobleContext.Provider value={{ handleBar, exit }}>
      {children}
    </GlobleContext.Provider>
  );
};

export default Context;
