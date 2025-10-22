// src/context/Context.jsx
import { createContext, useState, useEffect } from "react";

export const Context = createContext(null);

const ContextProvider = (props) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (variant, title, type) => {
    const newToast = { variant, title, type };
    setToasts((prev) => [...prev, newToast]);
    const timer = setTimeout(() => {
      removeToast(title);
    }, 3000);

    return () => clearTimeout(timer);
  };

  const removeToast = (title) => {
    setToasts((prev) => prev.filter((toast) => toast.title != title));
  };
  const contextValue = { toasts, addToast, removeToast };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
