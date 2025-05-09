import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        if (!savedUser) return null;

        try {
            return JSON.parse(savedUser);
        } catch (error) {
            console.error('Invalid user data in localStorage:', error);
            localStorage.removeItem('user'); // Optional: clean up invalid data
            return null;
        }
    });

    const login = (userData) => {
        setUser(userData);
        console.log("userData",userData);
        
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);