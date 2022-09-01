import React from "react";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
const SearchReceiveTokensScreen = () => {
  return (
    <Container>
      <Header>
        <Ionicons name={"arrow-back"} color="#fff" size={28} />
        <SearchBar
          placeholder="Search - Receive"
          placeholderTextColor="#CCDDEE"
        />
      </Header>
      <Body>
        <TokensContainer>
          <TokenName>
            <Image source={require("../assets/images/bitcoin.png")} />
            <Token>
              <Name>Bitcoin</Name>
            </Token>
          </TokenName>
          <TokenCol2>
            <TokenAmount>0</TokenAmount>
            <TokenSymbol>BTC</TokenSymbol>
          </TokenCol2>
        </TokensContainer>
        <TokensContainer>
          <TokenName>
            <Image source={require("../assets/images/ethereum.png")} />
            <Token>
              <Name>Ethereum</Name>
            </Token>
          </TokenName>
          <TokenCol2>
            <TokenAmount>0</TokenAmount>
            <TokenSymbol>ETH</TokenSymbol>
          </TokenCol2>
        </TokensContainer>
        <TokensContainer>
          <TokenName>
            <Image source={require("../assets/images/bnb2.png")} />
            <Token>
              <Name>BNB Beacon Chain</Name>
            </Token>
          </TokenName>
          <TokenCol2>
            <TokenAmount>0</TokenAmount>
            <TokenSymbol>BNB</TokenSymbol>
          </TokenCol2>
        </TokensContainer>
        <TokensContainer>
          <TokenName>
            <Image source={require("../assets/images/bnb.png")} />
            <Token>
              <Name>BNB Smart Chain</Name>
            </Token>
          </TokenName>
          <TokenCol2>
            <TokenAmount>0</TokenAmount>
            <TokenSymbol>BNB</TokenSymbol>
          </TokenCol2>
        </TokensContainer>
        <TokensContainer>
          <TokenName>
            <Image source={require("../assets/images/cardano.png")} />
            <Token>
              <Name>Cardano</Name>
            </Token>
          </TokenName>
          <TokenCol2>
            <TokenAmount>0</TokenAmount>
            <TokenSymbol>ADA</TokenSymbol>
          </TokenCol2>
        </TokensContainer>
        <TokensContainer>
          <TokenName>
            <Image source={require("../assets/images/xrp.png")} />
            <Token>
              <Name>XRP</Name>
            </Token>
          </TokenName>
          <TokenCol2>
            <TokenAmount>0</TokenAmount>
            <TokenSymbol>XRP</TokenSymbol>
          </TokenCol2>
        </TokensContainer>
        <TokensContainer>
          <TokenName>
            <Image source={require("../assets/images/solana.png")} />
            <Token>
              <Name>Solana</Name>
            </Token>
          </TokenName>
          <TokenCol2>
            <TokenAmount>0</TokenAmount>
            <TokenSymbol>SOL</TokenSymbol>
          </TokenCol2>
        </TokensContainer>
        <TokensContainer>
          <TokenName>
            <Image source={require("../assets/images/doge.png")} />
            <Token>
              <Name>DogeCoin</Name>
            </Token>
          </TokenName>
          <TokenCol2>
            <TokenAmount>0</TokenAmount>
            <TokenSymbol>DOGE</TokenSymbol>
          </TokenCol2>
        </TokensContainer>
        <TokensContainer>
          <TokenName>
            <Image source={require("../assets/images/polkadot.png")} />
            <Token>
              <Name>Polkadot</Name>
            </Token>
          </TokenName>
          <TokenCol2>
            <TokenAmount>0</TokenAmount>
            <TokenSymbol>DOT</TokenSymbol>
          </TokenCol2>
        </TokensContainer>
      </Body>
    </Container>
  );
};

export default SearchReceiveTokensScreen;

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
  padding: 0 20px;
  overflow: hidden;
  font-size: 18px;
  color: #fff;
  width: 100%;
`;
const Body = styled.View`
  padding: 0 20px;
`;
const Token = styled.View`
  flex-direction: row;
  align-items: center;
`;
const TokensContainer = styled.View`
  width: 109%;
  padding-right: 30px;
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
const TokenAmount = styled.Text`
  font-size: 18px;
`;
const TokenSymbol = styled.Text`
  font-size: 18px;
  margin-left: 5px;
`;
const TokenCol2 = styled.View`
  flex-direction: row;
  align-items: center;
`;
