"use client";

import { createContext, useContext, useState } from "react";

const ReservationContext = createContext();

const initialState = { from: undefined, to: undefined };

function ReservationProvider({ children }) {
  const [range, setRange] = useState(initialState);
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const resetRange = () => setRange(initialState);

  const toggleOpen = () => setIsOpen((i) => !i);
  const closeNav = () => setIsOpen(false);

  const toggleModal = () => setShowModal((s) => !s);
  const closeModal = () => setShowModal(false);

  return (
    <ReservationContext.Provider
      value={{
        range,
        setRange,
        resetRange,
        isOpen,
        setIsOpen,
        toggleOpen,
        closeNav,
        showModal,
        toggleModal,
        closeModal,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined) throw new Error("Context was used outside of the provider");
  return context;
}

export { ReservationProvider, useReservation };
