import axios from 'axios';
import { createContext, useState, useEffect } from 'react';
import { useLocalStorage } from "../src/hooks/useLocalStorage";
import { useNavigate, redirect, useLocation  } from "react-router-dom";
export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [user, setUser] = useLocalStorage("user", null);
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        if (!user && (location.state.doctor_email || location.state.doctor_email)) {
            axios.post('/profile', {email: location.state.doctor_email }).then(({ data }) => {
                setUser(data)
            })
        }
        console.log(user);
    })

    const logout = () => {
        setUser(null);
        document.cookie = "token=; path=/;"
        navigate("/", { replace: true });
        //redirect("/")
    }

    return (
        <UserContext.Provider value={{ user, setUser, logout }}>
            {children}
        </UserContext.Provider>
    )
}