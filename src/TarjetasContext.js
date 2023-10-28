import React, { createContext, useContext, useState } from 'react';

const TarjetasContext = createContext();

export function TarjetasProvider({ children }) {
  const [cards, setCards] = useState([]);

  return (
    <TarjetasContext.Provider value={{ cards, setCards }}>
      {children}
    </TarjetasContext.Provider>
  );
}

export function useTarjetas() {
  return useContext(TarjetasContext);
}
