"use client";
import React, { ReactNode } from "react";
import { createContext, useContext, useState } from "react";

const UserContext = createContext<any>({});

export function UserProvider({
  children,
  initialValue,
}: {
  children: ReactNode;
  initialValue?: any;
}) {
  const [user, setUser] = useState(initialValue);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useMyContext debe usarse dentro de MyProvider");
  }
  return context;
}
