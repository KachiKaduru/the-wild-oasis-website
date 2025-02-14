"use client";

import { createContext, useContext, useState } from "react";

const HeaderContext = createContext();

function HeaderProvider({ children }) {
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);

  const toggleHeader = () => setIsHeaderOpen((o) => !o);
  const closeHeader = () => setIsHeaderOpen(false);

  return (
    <HeaderContext.Provider value={{ isHeaderOpen, toggleHeader, closeHeader }}>
      {children}
    </HeaderContext.Provider>
  );
}

function useHeader() {
  const context = useContext(HeaderContext);
  if (context === undefined) throw new Error("Context was used outside the provider");
  return context;
}

export { HeaderProvider, useHeader };
