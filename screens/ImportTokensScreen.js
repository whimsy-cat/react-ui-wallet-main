import React from "react";
import { Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";

const ImportTokensScreen = ({ navigation }) => {
  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name={"arrow-back"} color="#fff" size={28} />
        </TouchableOpacity>
        <SearchBar placeholder="Search tokens" placeholderTextColor="#CCDDEE" />
        <Ionicons name={"add"} color="#fff" size={28} />
      </Header>
      <Body>
        <TokensContainer>
          <TokenName>
            <Image source={require("../assets/images/bitcoin.png")} />
            <Token>
              <Name>Bitcoin</Name>
              <TokenSymbol>BTC</TokenSymbol>
            </Token>
          </TokenName>
          <Switch />
        </TokensContainer>
        <TokensContainer>
          <TokenName>
            <Image source={require("../assets/images/ethereum.png")} />
            <Token>
              <Name>Ethereum</Name>
              <TokenSymbol>ETH</TokenSymbol>
            </Token>
          </TokenName>
          <Switch />
        </TokensContainer>
        <TokensContainer>
          <TokenName>
            <Image source={require("../assets/images/bnb2.png")} />
            <Token>
              <Name>BNB Beacon Chain</Name>
              <TokenSymbol>BNB</TokenSymbol>
            </Token>
          </TokenName>
          <Switch />
        </TokensContainer>
        <TokensContainer>
          <TokenName>
            <Image source={require("../assets/images/bnb.png")} />
            <Token>
              <Name>BNB Smart Chain</Name>
              <TokenSymbol>BNB</TokenSymbol>
            </Token>
          </TokenName>
          <Switch />
        </TokensContainer>
        <TokensContainer>
          <TokenName>
            <Image source={require("../assets/images/cardano.png")} />
            <Token>
              <Name>Cardano</Name>
              <TokenSymbol>ADA</TokenSymbol>
            </Token>
          </TokenName>
          <Switch />
        </TokensContainer>
        <TokensContainer>
          <TokenName>
            <Image source={require("../assets/images/xrp.png")} />
            <Token>
              <Name>XRP</Name>
              <TokenSymbol>XRP</TokenSymbol>
            </Token>
          </TokenName>
          <Switch />
        </TokensContainer>
        <TokensContainer>
          <TokenName>
            <Image source={require("../assets/images/solana.png")} />
            <Token>
              <Name>Solana</Name>
              <TokenSymbol>SOL</TokenSymbol>
            </Token>
          </TokenName>
          <Switch />
        </TokensContainer>
        <TokensContainer>
          <TokenName>
            <Image source={require("../assets/images/doge.png")} />
            <Token>
              <Name>DogeCoin</Name>
              <TokenSymbol>DOGE</TokenSymbol>
            </Token>
          </TokenName>
          <Switch />
        </TokensContainer>
        <TokensContainer>
          <TokenName>
            <Image source={require("../assets/images/polkadot.png")} />
            <Token>
              <Name>Polkadot</Name>
              <TokenSymbol>DOT</TokenSymbol>
            </Token>
          </TokenName>
          <Switch />
        </TokensContainer>
      </Body>
    </Container>
  );
};

export default ImportTokensScreen;

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
  width: 80%;
  padding: 0 20px;
  overflow: hidden;
`;
const Body = styled.View`
  padding: 0 20px;
`;
const Token = styled.View`
  flex-direction: row;
  align-items: center;
`;
const TokenSymbol = styled.Text`
  margin-left: 10px;
  color: #979797;
  font-size: 16px;
`;
const TokensContainer = styled.View`
  width: 109%;
  padding-right: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;
const TokenName = styled.View`
  flex-direction: row;
  padding: 20px 20px 20px 0;
`;
const Image = styled.Image`
  width: 30px;
  height: 30px;
`;
const Name = styled.Text`
  font-size: 18px;
  margin-left: 16px;
`;
