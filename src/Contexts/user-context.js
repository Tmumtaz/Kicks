import { createContext, useState } from "react";

// as the actaul value to be accessed
export const UserContext = createContext({
    //default value
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value= {currentUser, setCurrentUser}
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}