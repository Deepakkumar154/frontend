import React, {useState} from "react";

export const LoginContext = React.createContext<LoginContextType | null>(null);

export const LoginContextProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [openLoginPanel, setOpenLoginPanel] = useState(false);

    return (
        <LoginContext.Provider value={{openLoginPanel, setOpenLoginPanel}}>
            {children}
        </LoginContext.Provider>
    )
}

export type LoginContextType = {
    openLoginPanel: boolean;
    setOpenLoginPanel: (des: boolean) => void;
};
