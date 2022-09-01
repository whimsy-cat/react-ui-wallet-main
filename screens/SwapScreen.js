import React from "react";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";

const SwapScreen = () => {
  return (
    <Container>
      <Header>Swap</Header>
      <Body>
        <SwapContainer>
          <Token1>
            <InputContainer>
              <SmallInfoText>You Pay</SmallInfoText>
              <Input placeholder="0" keyboardType="numeric" />
              <BalanceInfo>
                <Balance>Balance:</Balance>
                <BalanceNumber>0</BalanceNumber>
                <BalanceToken>BNB</BalanceToken>
              </BalanceInfo>
            </InputContainer>
            <TokenSelect>
              <Image source={require("../assets/images/bnb2.png")} />
              <TokenName>BNB</TokenName>
              <Ionicons
                name={"chevron-forward"}
                color="#979797"
                size={28}
                style={{
                  marginLeft: 20,
                }}
              />
            </TokenSelect>
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
              <Input placeholder="0" keyboardType="numeric" />
              <BalanceInfo>
                <Balance>Balance:</Balance>
                <BalanceNumber>0</BalanceNumber>
                <BalanceToken>TWT</BalanceToken>
              </BalanceInfo>
            </InputContainer>
            <TokenSelect>
              <Image source={require("../assets/images/twt.png")} />
              <TokenName>TWT</TokenName>
              <Ionicons
                name={"chevron-forward"}
                color="#979797"
                size={28}
                style={{
                  marginLeft: 20,
                }}
              />
            </TokenSelect>
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
            <One>1</One>
            <PayToken>BNB</PayToken>
          </TokenOne>
          <Equals>=</Equals>
          <TokenTwo>
            <TokenTwoConverted>309.441719979</TokenTwoConverted>
            <GetToken>TWT</GetToken>
          </TokenTwo>
        </Conversion>
        <Button>Swap</Button>
      </Body>
    </Container>
  );
};

export default SwapScreen;

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
  width: 150px;
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
