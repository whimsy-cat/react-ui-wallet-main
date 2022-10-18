import React, { useState, useEffect, createContext, useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Context } from "../reducers/store";
import { ActivityIndicator, StyleSheet } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

const SwapScreen = ({ navigation }) => {
  const [token1, setToken1] = React.useState("");
  const [state, dispatch] = useContext(Context);
  const [payBalance, setPayBalance] = React.useState(0.0);
  const [getBalance, setGetBalance] = React.useState(0.0);
  const [swapAPI, setSwapAPI] = React.useState("");
  const [spinner, setSpinner] = React.useState(false);
  const [swap1Balance, setSwap1Balance] = React.useState(0.0);
  const [swap2Balance, setSwap2Balance] = React.useState(0.0);

  useEffect(() => {
    let balance =
      state.Swap1Token == "ETH"
        ? Number(state.CurrentETHBalance).toFixed(4)
        : state.Swap1Token == "BTC"
        ? Number(state.CurrentBTCBalance).toFixed(4)
        : state.Swap1Token == "BNB"
        ? Number(state.CurrentBNBSBalance).toFixed(4)
        : state.Swap1Token == "DOGE"
        ? Number(state.CurrentDOGEBalance).toFixed(4)
        : state.Swap1Token == "XRP"
        ? Number(state.CurrentXRPBalance).toFixed(4)
        : state.Swap1Token == "SOL"
        ? Number(state.CurrentSOLBalance).toFixed(4)
        : state.Swap1Token == "ADA"
        ? Number(state.CurrentADABalance).toFixed(4)
        : Number(state.CurrentDOTBalance).toFixed(4);
    setSwap1Balance(balance);

    let balance1 =
      state.Swap2Token == "ETH"
        ? Number(state.CurrentETHBalance).toFixed(4)
        : state.Swap2Token == "BTC"
        ? Number(state.CurrentBTCBalance).toFixed(4)
        : state.Swap2Token == "BNB"
        ? Number(state.CurrentBNBSBalance).toFixed(4)
        : state.Swap2Token == "DOGE"
        ? Number(state.CurrentDOGEBalance).toFixed(4)
        : state.Swap2Token == "XRP"
        ? Number(state.CurrentXRPBalance).toFixed(4)
        : state.Swap2Token == "SOL"
        ? Number(state.CurrentSOLBalance).toFixed(4)
        : state.Swap2Token == "ADA"
        ? Number(state.CurrentADABalance).toFixed(4)
        : Number(state.CurrentDOTBalance).toFixed(4);
    setSwap2Balance(balance1);
  }, []);

  useEffect(() => {
    setGetBalance(
      (payBalance *
        state.CoinPrice[state.CoinSymbol.indexOf(state.Swap1Token)]) /
        state.CoinPrice[state.CoinSymbol.indexOf(state.Swap2Token)]
    );
    // value * state.CoinPrice[state.CoinSymbol.indexOf(state.Swap1Token)] / state.CoinPrice[state.CoinSymbol.indexOf(state.Swap2Token)]);
  }, [payBalance]);

  useEffect(() => {
    console.log(getBalance);
  }, [getBalance]);

  useEffect(() => {
    console.log(swapAPI);
    if (swapAPI != "") {
      doSwap();
    }
  }, [swapAPI]);

  const doSwap = async () => {
    console.log("Start swapping...");
    let res = await fetch(`${swapAPI}`);
    let data = await res.json();
    console.log(data);
    setSpinner(false);
    if (data.statusCode == "400") {
      if (data.description.includes("sync")) {
        alert("Not Enough Balance to Swap!");
      } else alert(data.description);
    } else {
      alert("Finish to swap");
    }
  };
  const onSwapHandle = () => {
    if (
      state.CurrentETHBalance * 10 ** 18 < payBalance ||
      state.Swap1Token != "ETH"
    ) {
      alert("Not Enough Balance to Swap!");
      return;
    }
    setSwapAPI(
      `https://api.1inch.io/v4.0/1/swap?fromTokenAddress=${
        state.ContractAddress[state.CoinSymbol.indexOf(state.Swap1Token)]
      }&toTokenAddress=${
        state.ContractAddress[state.CoinSymbol.indexOf(state.Swap2Token)]
      }&amount=${
        payBalance * 10 ** 18
      }&fromAddress=0x35fD12f4ED2Eb8678710063795A7a20d32541aa0&slippage=20`
    );
    setSpinner(true);
  };
  return (
    <Container style={state.DarkMode && { backgroundColor: "#1a222d" }}>
      <Header
        style={state.DarkMode && { backgroundColor: "#232f3d", color: "#fff" }}
      >
        Swap
      </Header>
      <Body>
        <Spinner
          visible={spinner}
          textContent={"Wait a few minutes..."}
          textStyle={styles.spinnerTextStyle}
          color="#3275bb"
          size="large"
        />
        <SwapContainer
          style={state.DarkMode && { borderColor: "#353535", color: "#fff" }}
        >
          <Token1>
            <InputContainer>
              <SmallInfoText>You Pay</SmallInfoText>
              <Input
                style={state.DarkMode && { color: "#fff" }}
                placeholderTextColor={state.DarkMode && "#555"}
                placeholder="0"
                keyboardType="numeric"
                value={payBalance.toString()}
                onChangeText={(newText) => setPayBalance(newText)}
              />
              <BalanceInfo>
                <Balance>Balance:</Balance>
                <BalanceNumber> {swap1Balance}</BalanceNumber>
                <BalanceToken>{state.Swap1Token}</BalanceToken>
              </BalanceInfo>
            </InputContainer>
            <TouchableOpacity
              onPress={() => navigation.navigate("SwapToken1Select")}
            >
              <TokenSelect>
                <Image
                  source={
                    state.CoinImage[state.CoinSymbol.indexOf(state.Swap1Token)]
                  }
                />
                <TokenName style={state.DarkMode && { color: "#ccc" }}>
                  {state.Swap1Token}
                </TokenName>
                <Ionicons
                  name={"chevron-forward"}
                  color="#979797"
                  size={28}
                  style={{
                    marginLeft: 20,
                  }}
                />
              </TokenSelect>
            </TouchableOpacity>
            <Ionicons
              name={"swap-vertical"}
              color="#3275bb"
              size={28}
              style={{
                position: "absolute",
                bottom: -30,
                right: 10,
                backgroundColor: "#fff",
                width: 60,
                height: 60,
                borderRadius: 30,
                borderWidth: 1,
                borderColor: "#eaeaea",
                textAlign: "center",
                padding: 15,
              }}
            />
          </Token1>
          <Token2>
            <InputContainer>
              <SmallInfoText>You Get</SmallInfoText>
              <Input
                style={state.DarkMode && { color: "#fff" }}
                placeholderTextColor={state.DarkMode && "#555"}
                placeholder="0"
                keyboardType="numeric"
                value={getBalance.toFixed(5).toString()}
              />
              <BalanceInfo>
                <Balance>Balance:</Balance>
                <BalanceNumber> {swap2Balance} </BalanceNumber>
                <BalanceToken>{state.Swap2Token}</BalanceToken>
              </BalanceInfo>
            </InputContainer>
            <TouchableOpacity
              onPress={() => navigation.navigate("SwapToken2Select")}
            >
              <TokenSelect>
                <Image
                  source={
                    state.CoinImage[state.CoinSymbol.indexOf(state.Swap2Token)]
                  }
                />
                <TokenName style={state.DarkMode && { color: "#ccc" }}>
                  {state.Swap2Token}
                </TokenName>
                <Ionicons
                  name={"chevron-forward"}
                  color="#979797"
                  size={28}
                  style={{
                    marginLeft: 20,
                  }}
                />
              </TokenSelect>
            </TouchableOpacity>
          </Token2>
        </SwapContainer>

        <Slippage>
          <SlippagePercent>25%</SlippagePercent>
          <SlippagePercent>50%</SlippagePercent>
          <SlippagePercent>75%</SlippagePercent>
          <SlippagePercent>100%</SlippagePercent>
        </Slippage>
        <Conversion>
          <TokenOne>
            <One>{payBalance > 0 ? payBalance : "0"}</One>
            <PayToken>{state.Swap1Token}</PayToken>
          </TokenOne>
          <Equals>=</Equals>
          <TokenTwo>
            <TokenTwoConverted>{getBalance}</TokenTwoConverted>
            <GetToken>{state.Swap2Token}</GetToken>
          </TokenTwo>
        </Conversion>
        <TouchableOpacity onPress={() => onSwapHandle()}>
          <Button>Swap</Button>
        </TouchableOpacity>
      </Body>
    </Container>
  );
};

export default SwapScreen;

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: "#fff",
  },
});
const Container = styled.View`
  flex: 1;
  background: #fff;
`;
const Body = styled.View``;
const Header = styled.Text`
  background: #3275bb;
  padding: 20px 0;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  width: 100%;
`;
const SwapContainer = styled.View`
  padding: 20px;
  margin: 20px 10px;
  border-radius: 10px;
  border-color: #efefef;
  border-width: 1px;
`;
const Token1 = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: #eaeaea;
  padding-bottom: 30px;
`;
const Token2 = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 30px;
`;
const InputContainer = styled.View``;
const SmallInfoText = styled.Text`
  color: #979797;
  font-size: 16px;
`;
const Input = styled.TextInput`
  font-size: 28px;
  margin: 10px 0;
  overflow: hidden;
  width: 180px;
`;
const BalanceInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Balance = styled.Text`
  font-size: 16px;
  color: #979797;
`;
const BalanceNumber = styled.Text`
  margin-left: 5px;
  font-size: 16px;
  color: #979797;
`;
const BalanceToken = styled.Text`
  margin-left: 5px;
  font-size: 16px;
  color: #979797;
  text-transform: uppercase;
`;
const TokenSelect = styled.View`
  flex-direction: row;
  align-items: center;
`;
const TokenName = styled.Text`
  font-size: 18px;
  margin-left: 10px;
  text-transform: uppercase;
`;
const Image = styled.Image`
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 20px;
  border-width: 1px;
  border-color: #fff;
`;
const Slippage = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;
const SlippagePercent = styled.Text`
  background: #f2f5fa;
  color: #3275bb;
  text-align: center;
  padding: 8px;
  width: 85px;
  height: 40px;
  border-radius: 10px;
`;
const Conversion = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 20px auto 0 auto;
`;
const TokenOne = styled.View`
  flex-direction: row;
  align-items: center;
`;
const TokenTwo = styled.View`
  flex-direction: row;
  align-items: center;
`;
const One = styled.Text`
  font-size: 16px;
  color: #979797;
`;
const PayToken = styled.Text`
  margin-left: 5px;
  font-size: 16px;
  color: #979797;
`;
const Equals = styled.Text`
  margin: 0 5px;
  font-size: 16px;
  color: #979797;
`;
const TokenTwoConverted = styled.Text`
  font-size: 16px;
  color: #979797;
`;
const GetToken = styled.Text`
  margin-left: 5px;
  font-size: 16px;
  color: #979797;
`;
const Button = styled.Text`
  width: 300px;
  padding: 20px 0;
  background: #3275bb;
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  margin: 40px auto 0 auto;
`;
