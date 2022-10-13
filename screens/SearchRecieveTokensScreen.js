import React, { useState, useEffect, useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";
import TokensContainer from "../components/TokensContainer";
import { Context } from "../reducers/store";

const SearchRecieveTokensScreen = ({ navigation }) => {
  const [searchKeyWord, setSearchKeyWord] = React.useState("");
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    console.log(searchKeyWord);
  }, [searchKeyWord]);

  const searchFilter = (text) => {
    let lowerText = text.toLowerCase();
    if (lowerText.includes(searchKeyWord)) {
      return false;
    }
    return true;
  };

  const onHandleClick = (token) => {
    dispatch({ type: "SET_RECIEVETOKEN", recievetoken: token.toUpperCase() });
    navigation.navigate("RecieveTokenScreen");
  };
  return (
    <Container style={state.DarkMode && { backgroundColor: "#1a222d" }}>
      <Header
        style={state.DarkMode && { backgroundColor: "#232f3d", color: "#fff" }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name={"arrow-back"} color="#fff" size={28} />
        </TouchableOpacity>
        <SearchBar
          style={
            state.DarkMode && { backgroundColor: "#1a222d", color: "#fff" }
          }
          placeholder="Search - Recieve"
          placeholderTextColor="#CCDDEE"
          value={searchKeyWord}
          onChangeText={setSearchKeyWord}
        />
      </Header>
      <Body>
        <TouchableOpacity onPress={() => onHandleClick("btc")}>
          <TokensContainer
            tokenImage={require("../assets/images/btc.png")}
            tokenName="Bitcoin"
            tokenAmount={Number(state.CurrentBTCBalance).toFixed(4)}
            tokenSymbol="BTC"
            hide={searchFilter("BitcoinBTC")}
            isSwitch={false}
          ></TokensContainer>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onHandleClick("eth")}>
          <TokensContainer
            tokenImage={require("../assets/images/eth.png")}
            tokenName="Ethereum"
            tokenAmount={Number(state.CurrentETHBalance).toFixed(4)}
            tokenSymbol="ETH"
            hide={searchFilter("Ethereum")}
            isSwitch={false}
          ></TokensContainer>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onHandleClick("bnbb")}>
          <TokensContainer
            tokenImage={require("../assets/images/bnb2.png")}
            tokenName="BNB Beacon Chain"
            tokenAmount={Number(state.CurrentBNBBBalance).toFixed(4)}
            tokenSymbol="BNB"
            hide={searchFilter("BNBBeaconChainBNB")}
            isSwitch={false}
          ></TokensContainer>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onHandleClick("bnbs")}>
          <TokensContainer
            tokenImage={require("../assets/images/bnb.png")}
            tokenName="BNB Smart Chain"
            tokenAmount={Number(state.CurrentBNBSBalance).toFixed(4)}
            tokenSymbol="BNB"
            hide={searchFilter("BNBSmartChainBNB")}
            isSwitch={false}
          ></TokensContainer>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onHandleClick("ada")}>
          <TokensContainer
            tokenImage={require("../assets/images/cardano.png")}
            tokenName="Cardano"
            tokenAmount={Number(state.CurrentADABalance).toFixed(4)}
            tokenSymbol="ADA"
            hide={searchFilter("CardanoADA")}
            isSwitch={false}
          ></TokensContainer>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onHandleClick("xrp")}>
          <TokensContainer
            tokenImage={require("../assets/images/xrp.png")}
            tokenName="XRP"
            tokenAmount={Number(state.CurrentXRPBalance).toFixed(4)}
            tokenSymbol="XRP"
            hide={searchFilter("XRP")}
            isSwitch={false}
          ></TokensContainer>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onHandleClick("sol")}>
          <TokensContainer
            tokenImage={require("../assets/images/solana.png")}
            tokenName="Solana"
            tokenAmount={Number(state.CurrentSOLBalance).toFixed(4)}
            tokenSymbol="SOL"
            hide={searchFilter("SolanaSOL")}
            isSwitch={false}
          ></TokensContainer>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onHandleClick("doge")}>
          <TokensContainer
            tokenImage={require("../assets/images/doge.png")}
            tokenName="DogeCoin"
            tokenAmount={Number(state.CurrentDOGEBalance).toFixed(4)}
            tokenSymbol="DOGE"
            hide={searchFilter("DogeCoinDOGE")}
            isSwitch={false}
          ></TokensContainer>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onHandleClick("dot")}>
          <TokensContainer
            tokenImage={require("../assets/images/polkadot.png")}
            tokenName="Polkadot"
            tokenAmount={Number(state.CurrentDOTBalance).toFixed(4)}
            tokenSymbol="DOT"
            hide={searchFilter("PolkadotDot")}
            isSwitch={false}
          ></TokensContainer>
        </TouchableOpacity>
      </Body>
    </Container>
  );
};

export default SearchRecieveTokensScreen;

const Container = styled.View`
  flex: 1;
  background: #fff;
`;
const Header = styled.View`
  background: #3275bb;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  color: #fff;
  width: 100%;
`;
const SearchBar = styled.TextInput`
  background: #3275bb;
  padding-left: 20px;
  font-size: 18px;
  color: #fff;
  width: 100%;
  padding: 0 20px;
  overflow: hidden;
`;
const Body = styled.View`
  padding: 0 20px;
`;
