import React, { useEffect, useState, useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";
import Spinner from 'react-native-loading-spinner-overlay';
import { StyleSheet } from 'react-native';
import { AsyncStorage, LogBox } from "react-native";
import { Context } from '../reducers/store';

LogBox.ignoreAllLogs();

const Welcome = ({ navigation }) => {
  const [isNew, setIsNew] = useState("");
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    console.log('Welcome Trust Wallet!');
    getStoredData();
    getMarketData();
  }, []);

  useEffect(() => {
    if (isNew == "") return;
    if (isNew == "true") {
      navigation.navigate("OnboardingScreen");
    }
    else {
      navigation.navigate("PasscodeScreen");
    }

  }, [isNew]);

  // Get Data From LocalStorage. Check New or Old User.
  const getStoredData = async () => {
    console.log("Getting data from localstorage ...");
    try {
      const mnemonic = await AsyncStorage.getItem('@mnemonic');
      const address = await AsyncStorage.getItem('@address');
      const privatekey = await AsyncStorage.getItem('@privatekey');
      if (mnemonic !== null) {
        dispatch({ type: 'SET_WALLETINFO', walletmnemonic: mnemonic, walletaddress: address, walletprivatekey: privatekey });
        setIsNew("false");
      }
      else {
        setIsNew("true");
      }
    } catch (e) {
      console.log(e);
    }
  }

  // Get Crypto Market Info. Price, DailyChange, etc. 
  const getMarketData = async () => {
    console.log("Getting market data ...");
    for (let i = 0; i < 9; i++) {
      let res = await fetch(
        `https://api.poloniex.com/markets/${state.CoinSymbol[i]}_usdt/price`
      );
      let data = await res.json();
      dispatch({ type: 'ADD_COINPRICE', coinprice: data.price });
      dispatch({ type: 'ADD_COINDAILYCHANGE', coindailychange: data.dailyChange });
    }
  };
  return (
    <Container>
      <Body>
        <Image source={require("../assets/images/splash.png")} />
      </Body>
    </Container>
  );
};

export default Welcome;

const Image = styled.Image`
  width: 200px;
  height: 180px;
  position: absolute;
  top: 300px;
`;
const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#fff'
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
