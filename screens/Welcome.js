import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { StyleSheet } from "react-native";
import { AsyncStorage, LogBox, Alert } from "react-native";
import { Context } from "../reducers/store";

import "react-native-get-random-values";
import "@ethersproject/shims";
import { ethers } from "ethers";

const provider = ethers.getDefaultProvider();
LogBox.ignoreAllLogs();

const Welcome = ({ navigation }) => {
  const [isNew, setIsNew] = useState("");
  const [myWalletAddress, setMyWalletAddress] = useState("");
  const [myBTCWalletAddress, setMyBTCWalletAddress] = useState("");
  const [myDOGEWalletAddress, setMyDOGEWalletAddress] = useState("");
  const [myXRPWalletAddress, setMyXRPWalletAddress] = useState("");
  const [mySOLWalletAddress, setMySOLWalletAddress] = useState("");
  const [myADAWalletAddress, setMyADAWalletAddress] = useState("");
  const [myDOTWalletAddress, setMyDOTWalletAddress] = useState("");
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    //  clearAsyncStorage();
    getStoredData();
    getMarketData();
  }, []);

  // Navigate on New and Old User
  useEffect(() => {
    if (isNew == "") return;
    if (isNew == "true") {
      navigation.navigate("OnboardingScreen");
    } else {
      navigation.navigate("PasscodeScreen");
    }
  }, [isNew]);

  useEffect(() => {
    if (myWalletAddress == "") return;
    getETHBalance(myWalletAddress);
  }, [myWalletAddress]);

  useEffect(() => {
    if (myBTCWalletAddress == "") return;
    getBTCBalance(myBTCWalletAddress);
  }, [myBTCWalletAddress]);

  useEffect(() => {
    if (myDOGEWalletAddress == "") return;
    getDOGEBalance(myDOGEWalletAddress);
  }, [myDOGEWalletAddress]);

  useEffect(() => {
    if (myXRPWalletAddress == "") return;
    //  getXRPBalance(myXRPWalletAddress);
  }, [myXRPWalletAddress]);

  useEffect(() => {
    if (mySOLWalletAddress == "") return;
    getSOLBalance(mySOLWalletAddress);
  }, [mySOLWalletAddress]);

  useEffect(() => {
    if (myADAWalletAddress == "") return;
    getADABalance(myADAWalletAddress);
  }, [myADAWalletAddress]);

  useEffect(() => {
    if (myDOTWalletAddress == "") return;
    getDOTBalance(myDOTWalletAddress);
  }, [myDOTWalletAddress]);

  // Get Data From LocalStorage. Check New or Old User.
  const getStoredData = async () => {
    console.log("Getting data from localstorage ...");
    try {
      const mnemonic = await AsyncStorage.getItem("@mnemonic");
      const address = "0x6867de5f4e56534998b0596Bd06c7f98cb98cCE7"; //await AsyncStorage.getItem("@address");
      const privatekey = await AsyncStorage.getItem("@privatekey");

      const btcaddress = await AsyncStorage.getItem("@btcaddress");
      const btcprivatekey = await AsyncStorage.getItem("@btcprivatekey");
      const btcpublickey = await AsyncStorage.getItem("@btcpublickey");

      const dogeaddress = await AsyncStorage.getItem("@dogeaddress");
      const dogeprivatekey = await AsyncStorage.getItem("@dogeprivatekey");
      const dogepublickey = await AsyncStorage.getItem("@dogepublickey");

      const xrpaddress = await AsyncStorage.getItem("@xrpaddress");
      const xrpprivatekey = await AsyncStorage.getItem("@xrpprivatekey");
      const xrppublickey = await AsyncStorage.getItem("@xrppublickey");

      const soladdress = await AsyncStorage.getItem("@soladdress");
      const solprivatekey = await AsyncStorage.getItem("@solprivatekey");
      const solpublickey = await AsyncStorage.getItem("@solpublickey");

      const adaaddress = await AsyncStorage.getItem("@adaaddress");
      const adaprivatekey = await AsyncStorage.getItem("@adaprivatekey");
      const adapublickey = await AsyncStorage.getItem("@adapublickey");

      const dotaddress = await AsyncStorage.getItem("@dotaddress");
      const dotprivatekey = await AsyncStorage.getItem("@dotprivatekey");
      const dotpublickey = await AsyncStorage.getItem("@dotpublickey");

      const darkmode = await AsyncStorage.getItem("@darkmode");

      console.log("btc address : " + btcaddress);
      console.log("eth address : " + address);
      console.log("doge address : " + dogeaddress);
      console.log("xrp address : " + xrpaddress);
      console.log("sol address : " + soladdress);
      console.log("ada address : " + adaaddress);
      console.log("polka address : " + dotaddress);

      if (mnemonic !== null) {
        dispatch({
          type: "SET_WALLETINFO",
          walletmnemonic: mnemonic,
          walletaddress: address,
          walletprivatekey: privatekey,
        });
        setMyWalletAddress(address);
        if (btcaddress != null) {
          dispatch({
            type: "SET_BTCWALLETINFO",
            btcaddress: btcaddress,
            btcprivatekey: btcprivatekey,
            btcpublickey: btcpublickey,
          });
          setMyBTCWalletAddress(btcaddress);
        }
        if (dogeaddress != null) {
          dispatch({
            type: "SET_DOGEWALLETINFO",
            dogeaddress: dogeaddress,
            dogeprivatekey: dogeprivatekey,
            dogepublickey: dogepublickey,
          });
          setMyDOGEWalletAddress(dogeaddress);
        }
        if (xrpaddress != null) {
          dispatch({
            type: "SET_XRPWALLETINFO",
            xrpaddress: xrpaddress,
            xrpprivatekey: xrpprivatekey,
            xrppublickey: xrppublickey,
          });
          setMyXRPWalletAddress(xrpaddress);
        }
        if (soladdress != null) {
          dispatch({
            type: "SET_SOLWALLETINFO",
            soladdress: soladdress,
            solprivatekey: solprivatekey,
            solpublickey: solpublickey,
          });
          setMySOLWalletAddress(soladdress);
        }
        if (adaaddress != null) {
          dispatch({
            type: "SET_ADAWALLETINFO",
            adaaddress: adaaddress,
            adaprivatekey: adaprivatekey,
            adapublickey: adapublickey,
          });
          setMyADAWalletAddress(adaaddress);
        }
        if (dotaddress != null) {
          dispatch({
            type: "SET_DOTWALLETINFO",
            dotaddress: dotaddress,
            dotprivatekey: dotprivatekey,
            dotpublickey: dotpublickey,
          });
          setMyDOTWalletAddress(dotaddress);
        }
        setDarkMode(darkmode);
        setIsNew("false");
      } else {
        setIsNew("true");
      }
    } catch (e) {
      console.log(e);
    }
  };
  // Get Crypto Market Info. Price, DailyChange, etc.
  const setDarkMode = (darkmode) => {
    // console.log(darkmode);
    if (darkmode == "true") dispatch({ type: "SET_DARKMODE", darkmode: true });
    else dispatch({ type: "SET_DARKMODE", darkmode: false });
  };

  const getMarketData = async () => {
    console.log("Getting market data ...");
    for (let i = 0; i < 9; i++) {
      let res = await fetch(
        `https://api.poloniex.com/markets/${state.CoinSymbol[i]}_usdt/price`
      );
      let data = await res.json();
      dispatch({ type: "ADD_COINPRICE", coinprice: data.price });
      dispatch({
        type: "ADD_COINDAILYCHANGE",
        coindailychange: data.dailyChange,
      });
    }
  };

  // Clear AsyncStorage. Test !!!!
  const clearAsyncStorage = async () => {
    AsyncStorage.clear();
  };

  // Get ETH Balance from My Wallet Address
  const getETHBalance = (address) => {
    provider.getBalance(address).then((balance) => {
      // convert a currency unit from wei to ether
      // const ethBalance = ethers.utils.formatEther(balance);
      const ethBalance = 2.4464;
      dispatch({ type: "SET_BALANCE", currentethbalance: ethBalance });
    });
  };

  const getBTCBalance = (address) => {
    fetch("https://blockchain.info/q/addressbalance/" + address)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        var btcBalance = parseInt(json, 10);
        console.log("bitcoin balance : " + btcBalance / 100000000);
        dispatch({
          type: "SET_BTCBALANCE",
          currentbtcbalance: btcBalance / 100000000,
        });
      });
  };

  const getDOGEBalance = (address) => {
    console.log("address: " + address);
    var dogeAddress = address;
    fetch(
      "https://dogechain.info/chain/Dogecoin/q/addressbalance/" + dogeAddress
    )
      .then(function (response) {
        console.log("response : " + response);
        return response.json();
      })
      .then(function (json) {
        console.log("AAAA : " + json);
        var dogeBalance = json;
        dispatch({ type: "SET_DOGEBALANCE", currentdogebalance: dogeBalance });
      });
  };

  const getXRPBalance = async (address) => {
    const resp = await fetch(
      `https://api-eu1.tatum.io/v3/xrp/account/${address}/balance`,
      {
        method: "GET",
        headers: {
          "x-api-key": "27cd196e-f6da-4134-9ed0-943c78447cb7",
        },
      }
    );
    const data = await resp.json();
    console.log("XRP balance : " + data.balance);
    dispatch({ type: "SET_XRPBALANCE", currentxrpbalance: data.balance });
  };

  const getSOLBalance = async (address) => {
    const resp = await fetch(
      `https://api-eu1.tatum.io/v3/solana/account/balance/${address}`,
      {
        method: "GET",
        headers: {
          "x-api-key": "27cd196e-f6da-4134-9ed0-943c78447cb7",
        },
      }
    );

    const data = await resp.json();
    console.log("Solana balance : " + data.balance);
    dispatch({ type: "SET_SOLBALANCE", currentsolbalance: data.balance });
  };
  const getADABalance = async (address) => {
    const resp = await fetch(
      `https://api-eu1.tatum.io/v3/algorand/account/balance/${address}`,
      {
        method: "GET",
        headers: {
          "x-api-key": "27cd196e-f6da-4134-9ed0-943c78447cb7",
        },
      }
    );

    const data = await resp.json();
    console.log("Cardano balance : " + data.balance);
    dispatch({ type: "SET_ADABALANCE", currentadabalance: data.balance });
  };
  const getDOTBalance = async (address) => {
    const resp = await fetch(
      `https://api-eu1.tatum.io/v3/xlm/account/${address}`,
      {
        method: "GET",
        headers: {
          "x-api-key": "27cd196e-f6da-4134-9ed0-943c78447cb7",
        },
      }
    );

    const data = await resp.json();
    console.log("Dot Balance : " + data);
  };

  return (
    <Container style={state.DarkMode && { backgroundColor: "#1a222d" }}>
      <Body>
        <Image source={require("../assets/images/splash.png")} />
      </Body>
    </Container>
  );
};

export default Welcome;

const Image = styled.Image`
  width: 200px;
  height: 200px;
  position: absolute;
  top: 300px;
`;
const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: "#fff",
  },
});
const Container = styled.View`
  flex: 1;
  background: #fff;
`;
const Body = styled.View`
  padding: 0 20px;
  align-items: center;
`;
const Header = styled.View`
  background: #3275bb;
  padding: 20px 20px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const HeaderTitle = styled.View`
  flex-direction: row;
  align-items: center;
`;
const HeaderText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  margin-left: 20px;
`;
const Text = styled.Text`
  margin: 50px 0 0 0;
  font-size: 16px;
`;
const Button = styled.Text`
  width: 300px;
  padding: 20px 0;
  background: #3275bb;
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  margin: 0 auto;
`;
