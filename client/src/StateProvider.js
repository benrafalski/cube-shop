import { createContext, useContext, useReducer } from "react";

// prepares data layer
export const StateContext = createContext();

// wrap our app and provide date layer 
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// pull info from data layer
export const useStateValue = () => useContext(StateContext)