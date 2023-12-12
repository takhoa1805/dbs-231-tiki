import React, { createContext, useState } from 'react';
export const Context = createContext();
export const ContextProvider = ({ children }) => {
  const [numProduct, setNumProduct] = useState(0);
  const increaseProductQuantity = () => setNumProduct(numProduct + 1);
  const decreaseProductQuantity = () => setNumProduct(numProduct - 1);
  return (
    <Context.Provider
      value={{
        numProduct,
        increaseProductQuantity,
        decreaseProductQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};
