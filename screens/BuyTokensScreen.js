import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";
import TokensContainer from "../components/TokensContainer";

const BuyTokensScreen = ({ navigation }) => {
  const [searchKeyWord, setSearchKeyWord] = React.useState("");

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
  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name={"arrow-back"} color="#fff" size={28} />
        </TouchableOpacity>
        <SearchBar placeholder="Search - Buy" placeholderTextColor="#CCDDEE" value={searchKeyWord} onChangeText={setSearchKeyWord} />
      </Header>
      <Body>
        <TokensContainer tokenImage={require("../assets/images/bitcoin.png")}
          tokenName="Bitcoin"
          tokenAmount="0"
          tokenSymbol="BTC"
          hide={searchFilter("BitcoinBTC")}
        >
        </TokensContainer>
        <TokensContainer tokenImage={require("../assets/images/ethereum.png")}
          tokenName="Ethereum"
          tokenAmount="0"
          tokenSymbol="ETH"
          hide={searchFilter("Ethereum")}>
        </TokensContainer>
        <TokensContainer tokenImage={require("../assets/images/bnb2.png")}
          tokenName="BNB Beacon Chain"
          tokenAmount="0"
          tokenSymbol="BNB"
          hide={searchFilter("BNBBeaconChainBNB")}>
        </TokensContainer>
        <TokensContainer tokenImage={require("../assets/images/bnb.png")}
          tokenName="BNB Smart Chain"
          tokenAmount="0"
          tokenSymbol="BNB"
          hide={searchFilter("BNBSmartChainBNB")}>
        </TokensContainer>
        <TokensContainer tokenImage={require("../assets/images/cardano.png")}
          tokenName="Cardano"
          tokenAmount="0"
          tokenSymbol="ADA"
          hide={searchFilter("CardanoADA")}>
        </TokensContainer>
        <TokensContainer tokenImage={require("../assets/images/xrp.png")}
          tokenName="XRP"
          tokenAmount="0"
          tokenSymbol="XRP"
          hide={searchFilter("XRP")}>
        </TokensContainer>
        <TokensContainer tokenImage={require("../assets/images/solana.png")}
          tokenName="Solana"
          tokenAmount="0"
          tokenSymbol="SOL"
          hide={searchFilter("SolanaSOL")}>
        </TokensContainer>
        <TokensContainer tokenImage={require("../assets/images/doge.png")}
          tokenName="DogeCoin"
          tokenAmount="0"
          tokenSymbol="DOGE"
          hide={searchFilter("DogeCoinDOGE")}>
        </TokensContainer>
        <TokensContainer tokenImage={require("../assets/images/polkadot.png")}
          tokenName="Polkadot"
          tokenAmount="0"
          tokenSymbol="DOT"
          hide={searchFilter("PolkadotDot")}>
        </TokensContainer>
      </Body>
    </Container>
  );
};

export default BuyTokensScreen;

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