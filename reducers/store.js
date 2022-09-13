import React, { createContext, useReducer } from "react";
import Reducer from './reducer'


const initialState = {
    CoinFullName: ["Bitcoin", "Ethereum", "BNB Beacon Chain", "BNB Smart Chain", "Cardano", "XRP", "Solana", "DogeCoin", "Polkadot"],
    CoinSymbol: ["BTC", "ETH", "BNB", "BNB", "ADA", "XRP", "SOL", "DOGE", "DOT"],
    ImportedCoinFullName: ["Bitcoin", "Ethereum"],
    CoinImage: [
        31,
        29,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
    ],
    CoinPrice: [],
    CoinDailyChange: [],
    Swap1Token: "ETH",
    Swap2Token: "BNB",
    BuyToken: "ETH",
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