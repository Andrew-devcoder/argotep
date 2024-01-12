import { createContext, useContext, useState } from "react";

export const CheckboxContext = createContext(null);

export const CheckboxContextProvider = ({ children }) => {
    const [today, setToday] = useState(false);
    const [newRows, setNewRows] = useState([]);

    const contextValue = { today, setToday, newRows, setNewRows };

    return (
        <CheckboxContext.Provider value={contextValue}>
            {children}
        </CheckboxContext.Provider>
    );
};
