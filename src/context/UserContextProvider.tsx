import React, {useState} from "react";
import {User} from "../Modal/User.ts";

export const UserContext = React.createContext<UserContextType | null>(null);

export const UserContextProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [user, setUser] = useState<User>({id: '', email: '', firstName: '', lastName: ''});

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export type UserContextType = {
    user: User;
    setUser: (user: User) => void;
};
