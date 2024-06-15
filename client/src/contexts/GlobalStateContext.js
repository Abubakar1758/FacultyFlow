import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const GlobalStateContext = createContext();

// Create the context provider
export const GlobalStateProvider = ({ children }) => {
   
    
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem('isLoggedIn') === 'true'
    );

    useEffect(() => {
        const loggedInStatus = localStorage.getItem('isLoggedIn');
       
        if (loggedInStatus === 'true') {
            setIsLoggedIn(true);
        }
    }, []);

    const updateLoggedInStatus = (status) => {
        setIsLoggedIn(status);
        localStorage.setItem('isLoggedIn', status);
    };

    

    

    return (
        <GlobalStateContext.Provider value={{
            isLoggedIn,
            updateLoggedInStatus
        }}>
            {children}
        </GlobalStateContext.Provider>
    );
};
