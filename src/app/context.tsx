'use client'

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ContextProps {
    started: boolean;
    setStarted: React.Dispatch<React.SetStateAction<boolean>>;
}

const Context = createContext<ContextProps | null>(null);

export const useGlobalContext = () => {
    const context = useContext(Context);
    if (!context) {
        throw new Error("useSharedContext must be used within a SharedProvider");
    }
    return context;
};

export const ContextProvider = ({ children }: { children: ReactNode }) => {
    const [started, setStarted] = useState<boolean>(false);

    return (
        <Context.Provider value={{ started, setStarted }}>
            {children}
        </Context.Provider>
    );
};
