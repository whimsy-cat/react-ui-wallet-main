import React, { createContext, useReducer } from "react";
import Reducer from "./reducer";

const initialState = {
  CoinFullName: [
    "Bitcoin",
    "Ethereum",
    "BNB Beacon Chain",
    "BNB Smart Chain",
    "Cardano",
    "XRP",
    "Solana",
    "DogeCoin",
    "Polkadot",
  ],
  CoinSymbol: ["BTC", "ETH", "BNB", "BNB", "ADA", "XRP", "SOL", "DOGE", "DOT"],
  ImportedCoinFullName: [
    "Bitcoin",
    "Ethereum",
    "BNB Smart Chain",
    "DogeCoin",
    "XRP",
  ],
  CoinImage: [
    require("../assets/images/btc.png"),
    require("../assets/images/eth.png"),
    require("../assets/images/bnb2.png"),
    require("../assets/images/bnb.png"),
    require("../assets/images/cardano.png"),
    require("../assets/images/xrp.png"),
    require("../assets/images/solana.png"),
    require("../assets/images/doge.png"),
    require("../assets/images/polkadot.png"),
  ],
  CoinPrice: [],
  CoinDailyChange: [],
  Swap1Token: "ETH",
  Swap2Token: "BNB",
  BuyToken: "ETH",
  RecieveToken: "BTC",
  DetailToken: "BTC",
  Currency: "USD",
  ContractAddress: [
    "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599", // Bitcoin -> WBTC(Ethereum Chain)
    "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", // Ethereum(Native) -> WETH(Ethereum Chain)
    "0x250632378e573c6be1ac2f97fcdf00515d0aa91b",
    "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
    "0xc14777c94229582e5758c5a79b83dde876b9be98",
    "0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe",
    "0x41848d32f281383f214c69b7b248dc7c2e0a7374",
    "0x8b9C35C79AF5319C70dd9A3E3850F368822ED64E",
    "0x3BfC20f0B9aFcAcE800D73D2191166FF16540258",
  ],
  CurrentETHBalance: 0.0,
  CurrentBTCBalance: 0.0,
  CurrentBNBBBalance: 0.0,
  CurrentBNBSBalance: 0.0,
  CurrentDOGEBalance: 0.0,
  CurrentSOLBalance: 0.0,
  CurrentXRPBalance: 0.0,
  CurrentADABalance: 0.0,
  CurrentDOTBalance: 0.0,

  WalletPassword: "", // Password of Wallet

  WalletMnemonic: "",
  WalletAddress: "", // Ethereum, BNB Smart Chain, BNB Beacon Chain
  WalletPrivateKey: "", // Ethereum, BNB Smart Chain, BNB Beacon Chain

  BTCAddress: "", // BTC
  BTCPrivateKey: "", // BTC
  BTCPublicKey: "", // BTC

  DOGEAddress: "", // DOGE
  DOGEPrivateKey: "", // DOGE
  DOGEPublicKey: "", // DOGE

  XRPAddress: "", // XRP
  XRPPrivateKey: "", // XRP
  XRPPublicKey: "", // XRP

  SOLAddress: "", // SOL
  SOLPrivateKey: "", // SOL
  SOLPublicKey: "", // SOL

  ADAAddress: "", // ADA
  ADAPrivateKey: "", // ADA
  ADAPublicKey: "", // ADA

  DOTAddress: "", // DOT
  DOTPrivateKey: "", // DOT
  DOTPublicKey: "", // DOT

  // Environment Varialbles
  DarkMode: false, // Dark Screen Mode
  PushNotification: true, // Push Notification
  PassCodeSetting: false, // PassCode Set
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);
export default Store;
