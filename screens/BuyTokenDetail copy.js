import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";
import NumericInput from 'react-native-numeric-input'

const BuyTokenDetailScreen = ({ navigation }) => {
  const [buyAmount, setBuyAmount] = React.useState(100);
  return (
    <Container style={state.DarkMode && { backgroundColor: "#151515" }}>
      <Header style={state.DarkMode && { backgroundColor: "#0c0c0c", color: "#fff" }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name={"arrow-back"} color="#fff" size={28} />
        </TouchableOpacity>
        <HeaderText>Buy BTC</HeaderText>
      </Header>
      <Body>
        <Token>
          <TokenDetails>
            <Image source={require("../assets/images/eth.png")} />
            <TokenNamePrice>
              <TokenName>Ethereum</TokenName>
              <TokenPriceAction>
                <TokenPrice>$1597</TokenPrice>
                <TokenPercent>+0.0997 %</TokenPercent>
              </TokenPriceAction>
            </TokenNamePrice>
          </TokenDetails>
          <TokenCol2>
            <TokenAmount>0</TokenAmount>
            <TokenSymbol>ETH</TokenSymbol>
          </TokenCol2>
        </Token>
        <SText>
          $<NumericInput
            type='up-down'
            value={buyAmount}
            onChange={value => setBuyAmount(value)} totalWidth={240}
            totalHeight={50}
            step={1}
            valueType='real'
            rounded
            textColor='#333333'
            iconStyle={{ color: 'black' }}
            rightButtonBackgroundColor='#EA3788'
            leftButtonBackgroundColor='#E56B70'
            borderColor="#ffffff"
          />
        </SText>
        <CryptoInfo>
          0.061295343 ETH
        </CryptoInfo>

        <TouchableOpacity>
          <PaymentButton>  Add Payment Method </PaymentButton>
        </TouchableOpacity>
        <TouchableOpacity
        >
          <Button>Next</Button>
        </TouchableOpacity>
      </Body>
    </Container>
  );
};

export default BuyTokenDetailScreen;

const Container = styled.View`
  flex: 1;
  background: #fff;
`;
const Header = styled.View`
  background: #3275bb;
  padding: 20px;
  flex-direction: row;
  align-items: center;
  color: #fff;
  width: 100%;
`;
const HeaderText = styled.Text`
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;
const Continue = styled.Text`
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
`;
const Body = styled.View`
  width: 90%;
  margin-left: 5%;
`;
const RecipientInfoContainer = styled.View`
  padding: 0 20px 0 20px;
  margin: 0 10px;
`;
const Recipient = styled.View`
  height: 60px;
  border-color: #eaeaea;
  border-width: 1px;
  border-radius: 5px;
  padding: 0 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0 30px 0;
`;
const RecipientAddress = styled.TextInput`
  height: 60px;
  font-size: 16px;
`;
const Paste = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const PasteText = styled.Text`
  color: #3275bb;
  text-transform: uppercase;
  margin-left: 10px;
  font-weight: bold;
`;
const AmountContainer = styled.View`
  height: 60px;
  border-color: #eaeaea;
  border-width: 1px;
  border-radius: 5px;
  padding: 0 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0 30px 0;
`;
const Amount = styled.TextInput`
  height: 60px;
  font-size: 16px;
`;
const MaxContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Max = styled.Text`
  color: #3275bb;
  text-transform: uppercase;
  font-weight: bold;
`;

const TokenDetails = styled.View`
  flex-direction: row;
`;
const TokenName = styled.Text`
  color: #3275bb;
  text-transform: uppercase;
  margin-left: 10px;
  font-weight: bold;
`;
const PriceUSD = styled.Text`
`;
const SText = styled.Text`
  margin:auto;
  margin-top: 100px;
  font-size: 50px;
`;

const CryptoInfo = styled.Text`
  margin: auto;
  margin-top: 5px;
  color: #555;
  font-size: 15px;
`;
const AmountInUSD = styled.Text`
  color: #979797;
`;
const Image = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;
const Token = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #f1f1f1;
`;
const TokenNamePrice = styled.View`
  margin-left: 15px;
`;
const TokenPriceAction = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
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
const TokenPrice = styled.Text`
  font-size: 12px;
  color: #979797;
`;
const TokenPercent = styled.Text`
  font-size: 12px;
  color: #6eb8aa;
  margin-left: 8px;
`;

const PaymentButton = styled.Text`
  width: 300px;
  padding: 20px 0;
  border-radius: 5px;
  border-width: 1px;
  border-color: #dcdcdc;
  background: #3275bb;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  margin: 35px auto 0 auto;
`;


const Button = styled.Text`
  width: 300px;
  padding: 20px 0;
  background: #3275bb;
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  margin: 30px auto 0 auto;
`;
