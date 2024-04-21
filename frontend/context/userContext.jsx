import axios from 'axios';
import { createContext, useState, useEffect, useMemo } from 'react';
import { useLocalStorage } from "../src/hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [user, setUser] = useLocalStorage("user", null);
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) {
            axios.get('/profile').then(({ data }) => {
                setUser(data)
            })
        }
        console.log(user);
    })

    const logout = () => {
        setUser(null);
        document.cookie = "token=; path=/;"
        navigate("/", { replace: true });
    }
    const value = useMemo(
        () => ({
          user,
          logout,
        }),
        [user]
      );
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}