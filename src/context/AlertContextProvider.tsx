import React, {useState} from "react";

export const AlertContext = React.createContext<AlertContextType | null>(null);

export const AlertContextProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");

    return (
        <AlertContext.Provider value={{isSuccess, setIsSuccess, open, setOpen, message, setMessage}}>
            {children}
        </AlertContext.Provider>
    )
}

export type AlertContextType = {
    isSuccess: boolean;
    setIsSuccess: (des: boolean) => void;
    open: boolean;
    setOpen: (des: boolean) => void;
    message?: string;
    setMessage?: (des: string) => void;
};
