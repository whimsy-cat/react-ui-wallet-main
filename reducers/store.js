import React, { createContext, useReducer } from "react";
import Reducer from './reducer'


const initialState = {
    CoinFullName: ["Bitcoin", "Ethereum", "BNB Smart Chain"],
    CoinSymbol: ["BTC", "ETH", "BNB"],
    CoinImage: [
        require("../assets/images/btc.png"),
        require("../assets/images/eth.png"),
        require("../assets/images/bnb.png"),
    ],
    CoinPrice: [],
    CoinDailyChange: [],
};

const Store = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);
export default Store;