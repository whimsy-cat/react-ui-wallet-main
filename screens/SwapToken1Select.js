import React, { useState, useEffect, useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";
import TokensContainer from "../components/TokensContainer";
import { useNavigation } from "@react-navigation/native";
import { Context } from '../reducers/store'

const SwapToken1Select = ({ navigation }) => {
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
  }

  const selectToken = (token) => {
    dispatch({ type: 'SET_SWAP1TOKEN', swap1token: token });
    navigation.navigate("SwapScreen");
  }
  return (
    <Container style={state.DarkMode && { backgroundColor: "#1a222d" }}>
      <Header style={state.DarkMode && { backgroundColor: "#232f3d", color: "#fff" }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name={"arrow-back"} color="#fff" size={28} />
        </TouchableOpacity>
        <SearchBar placeholder="Search - Swap" placeholderTextColor="#CCDDEE" value={searchKeyWord} onChangeText={setSearchKeyWord} />
      </Header>
      <Body>
        <TouchableOpacity onPress={() => selectToken("BTC")}>
          <TokensContainer tokenImage={require("../assets/images/btc.png")}
            tokenName="Bitcoin"
            tokenAmount="0"
            tokenSymbol="BTC"
            hide={searchFilter("BitcoinBTC")}
            isSwitch={false}
          >
          </TokensContainer>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => selectToken("ETH")}>
          <TokensContainer tokenImage={require("../assets/images/eth.png")}
            tokenName="Ethereum"
            tokenAmount="0"
            tokenSymbol="ETH"
            hide={searchFilter("Ethereum")}
            isSwitch={false}>
          </TokensContainer>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => selectToken("BNB")}>
          <TokensContainer tokenImage={require("../assets/images/bnb2.png")}
            tokenName="BNB Beacon Chain"
            tokenAmount="0"
            tokenSymbol="BNB"
            hide={searchFilter("BNBBeaconChainBNB")}
            isSwitch={false}>
          </TokensContainer>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => selectToken("BNB")}>
          <TokensContainer tokenImage={require("../assets/images/bnb.png")}
            tokenName="BNB Smart Chain"
            tokenAmount="0"
            tokenSymbol="BNB"
            hide={searchFilter("BNBSmartChainBNB")}
            isSwitch={false}>
          </TokensContainer>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => selectToken("ADA")}>
          <TokensContainer tokenImage={require("../assets/images/cardano.png")}
            tokenName="Cardano"
            tokenAmount="0"
            tokenSymbol="ADA"
            hide={searchFilter("CardanoADA")}
            isSwitch={false}>
          </TokensContainer>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => selectToken("XRP")}>
          <TokensContainer tokenImage={require("../assets/images/xrp.png")}
            tokenName="XRP"
            tokenAmount="0"
            tokenSymbol="XRP"
            hide={searchFilter("XRP")}
            isSwitch={false}>
          </TokensContainer>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => selectToken("SOL")}>
          <TokensContainer tokenImage={require("../assets/images/solana.png")}
            tokenName="Solana"
            tokenAmount="0"
            tokenSymbol="SOL"
            hide={searchFilter("SolanaSOL")}
            isSwitch={false}>
          </TokensContainer>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => selectToken("DOGE")}>
          <TokensContainer tokenImage={require("../assets/images/doge.png")}
            tokenName="DogeCoin"
            tokenAmount="0"
            tokenSymbol="DOGE"
            hide={searchFilter("DogeCoinDOGE")}
            isSwitch={false}>
          </TokensContainer>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => selectToken("DOT")}>
          <TokensContainer tokenImage={require("../assets/images/polkadot.png")}
            tokenName="Polkadot"
            tokenAmount="0"
            tokenSymbol="DOT"
            hide={searchFilter("PolkadotDot")}
            isSwitch={false}>
          </TokensContainer>
        </TouchableOpacity>
      </Body>
    </Container>
  );
};

export default SwapToken1Select;

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