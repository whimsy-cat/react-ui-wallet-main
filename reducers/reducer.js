import { ActivityIndicatorComponent } from "react-native";

const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_POSTS":
      return {
        ...state,
        ImportedCoinFullName: action.importedcoinfullname,
        CoinImage: action.coinimage,
        CoinPrice: action.coinprice,
        CoinDailyChange: action.coindailychange,
      };

    case "SET_SWAP1TOKEN":
      return {
        ...state,
        Swap1Token: action.swap1token,
      };
    case "SET_SWAP2TOKEN":
      return {
        ...state,
        Swap2Token: action.swap2token,
      };
    case "SET_BUYTOKEN":
      return {
        ...state,
        BuyToken: action.buytoken,
      };
    case "SET_RECIEVETOKEN":
      return {
        ...state,
        RecieveToken: action.recievetoken,
      };
    case "SET_DETAILTOKEN":
      return {
        ...state,
        DetailToken: action.detailtoken,
      };
    case "SET_BALANCE":
      return {
        ...state,
        CurrentETHBalance: action.currentethbalance,
      };
    case "SET_BTCBALANCE":
      return {
        ...state,
        CurrentBTCBalance: action.currentbtcbalance,
      };

    case "SET_DOGEBALANCE":
      return {
        ...state,
        CurrentDOGEBalance: action.currentdogebalance,
      };

    case "SET_XRPBALANCE":
      return {
        ...state,
        CurrentXRPBalance: action.currentxrpbalance,
      };

    case "SET_ADABALANCE":
      return {
        ...state,
        CurrentADABalance: action.currentadabalance,
      };

    case "SET_SOLBALANCE":
      return {
        ...state,
        CurrentSOLBalance: action.currentsolbalance,
      };

    case "SET_DOTBALANCE":
      return {
        ...state,
        CurrentDOTBalance: action.currentdotbalance,
      };
    case "SET_WALLETINFO": // ETH
      return {
        ...state,
        WalletMnemonic: action.walletmnemonic,
        WalletAddress: action.walletaddress,
        WalletPrivateKey: action.walletprivatekey,
      };
    case "SET_BTCWALLETINFO": // BTC
      return {
        ...state,
        BTCAddress: action.btcaddress,
        BTCPublicKey: action.btcpublickey,
        BTCPrivateKey: action.btcprivatekey,
      };
    case "SET_DOGEWALLETINFO": // DOGE
      return {
        ...state,
        DOGEAddress: action.dogeaddress,
        DOGEPublicKey: action.dogepublickey,
        DOGEPrivateKey: action.dogeprivatekey,
      };
    case "SET_XRPWALLETINFO": // DOGE
      return {
        ...state,
        XRPAddress: action.xrpaddress,
        XRPPublicKey: action.xrppublickey,
        XRPPrivateKey: action.xrpprivatekey,
      };
    case "SET_SOLWALLETINFO": // DOGE
      return {
        ...state,
        SOLAddress: action.soladdress,
        SOLPublicKey: action.solpublickey,
        SOLPrivateKey: action.solprivatekey,
      };
    case "SET_ADAWALLETINFO": // DOGE
      return {
        ...state,
        ADAAddress: action.adaaddress,
        ADAPublicKey: action.adapublickey,
        ADAPrivateKey: action.adaprivatekey,
      };
    case "SET_DOTWALLETINFO": // DOGE
      return {
        ...state,
        DOTAddress: action.dotaddress,
        DOTPublicKey: action.dotpublickey,
        DOTPrivateKey: action.dotprivatekey,
      };
    case "SET_DARKMODE": // Dark Mode
      return {
        ...state,
        DarkMode: action.darkmode,
      };
    case "SET_CURRENCY": // Currency
      return {
        ...state,
        Currency: action.currency,
      };
    case "SET_PUSHNOTIFICATION": // Dark Mode
      return {
        ...state,
        PushNotification: action.pushnotification,
      };
    case "SET_PASSCODE": // Passcode Set Mode
      return {
        ...state,
        PassCodeSetting: action.passcodesetting,
      };
    case "SET_PASSWORD": // Password Set
      return {
        ...state,
        WalletPassword: action.walletpassword,
      };
    case "ADD_POST":
      return {
        ...state,
        ImportedCoinFullName: state.ImportedCoinFullName.concat(
          action.importedcoinfullname
        ),
      };
    case "ADD_COINPRICE":
      return {
        ...state,
        CoinPrice: state.CoinPrice.concat(action.coinprice),
      };
    case "ADD_COINDAILYCHANGE":
      return {
        ...state,
        CoinDailyChange: state.CoinDailyChange.concat(action.coindailychange),
      };
    case "REMOVE_POST":
      return {
        ...state,
        ImportedCoinFullName: state.ImportedCoinFullName.filter(
          (importedcoinfullname) =>
            importedcoinfullname !== action.importedcoinfullname
        ),
      };
    default:
      return state;
  }
};

export default Reducer;
