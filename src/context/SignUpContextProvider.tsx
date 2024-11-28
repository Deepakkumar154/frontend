import React, {useState} from "react";

export const SignUpContext = React.createContext<SignUpContextType | null>(null);

export const SignUpContextProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [openSignUpPanel, setOpenSignUpPanel] = useState(false);

    return (
        <SignUpContext.Provider value={{openSignUpPanel, setOpenSignUpPanel}}>
            {children}
        </SignUpContext.Provider>
    )
}

export type SignUpContextType = {
    openSignUpPanel: boolean;
    setOpenSignUpPanel: (des: boolean) => void;
};
