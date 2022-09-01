import React from "react";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";

const AddCustomTokenScreen = ({ navigation }) => {
  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name={"arrow-back"} color="#3275bb" size={28} />
        </TouchableOpacity>
        <HeaderText>Add Custom Token</HeaderText>
        <Done>Done</Done>
      </Header>
      <Body>
        <TokenInfoContainer>
          <TokenNetwork>
            <Network>Network</Network>
            <Token>
              <TokenName>Ethereum</TokenName>
              <Ionicons name={"chevron-forward"} color="#979797" size={28} />
            </Token>
          </TokenNetwork>
          <CA>
            <CAInput placeholder="Contract Address" />
            <Paste>
              <PasteText>Paste</PasteText>
              <Ionicons name={"clipboard-outline"} color="#3275bb" size={24} />
            </Paste>
          </CA>
          <Name placeholder="Name" />
          <Symbol placeholder="Symbol" />
          <Decimals placeholder="Decimals" />
        </TokenInfoContainer>
        <Warning>
          <Ionicons name={"warning-outline"} color="#c87527" size={24} />
          <WarningText>
            Anyone can create a token, including fake versions of existing
            tokens. Learn about scams and security risks.
          </WarningText>
        </Warning>
        <CustomToken>What is a Custom Token?</CustomToken>
      </Body>
    </Container>
  );
};

export default AddCustomTokenScreen;

const Container = styled.View`
  flex: 1;
  background: #fff;
`;
const Header = styled.View`
  background: #fff;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  width: 100%;
`;
const HeaderText = styled.Text`
  text-align: center;
  color: #000;
  font-weight: bold;
  font-size: 18px;
`;
const Done = styled.Text`
  text-transform: uppercase;
  color: #3275bb;
  font-weight: bold;
`;
const Body = styled.View``;
const TokenInfoContainer = styled.View`
  padding: 20px 20px 0 20px;
  margin: 20px 10px;
  border-radius: 10px;
  border-color: #efefef;
  border-width: 1px;
`;
const TokenNetwork = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Network = styled.Text`
  font-size: 16px;
`;
const Token = styled.View`
  flex-direction: row;
  align-items: center;
`;
const TokenName = styled.Text`
  color: #979797;
  font-size: 16px;
`;
const CA = styled.View`
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
const CAInput = styled.TextInput`
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
  margin-right: 10px;
  font-weight: bold;
`;
const Name = styled.TextInput`
  height: 60px;
  border-color: #eaeaea;
  border-width: 1px;
  border-radius: 5px;
  padding-left: 20px;
  font-size: 16px;
  margin-bottom: 30px;
`;
const Symbol = styled.TextInput`
  height: 60px;
  border-color: #eaeaea;
  border-width: 1px;
  border-radius: 5px;
  padding-left: 20px;
  font-size: 16px;
  margin-bottom: 30px;
`;
const Decimals = styled.TextInput`
  height: 60px;
  border-color: #eaeaea;
  border-width: 1px;
  border-radius: 5px;
  padding-left: 20px;
  font-size: 16px;
  margin-bottom: 30px;
`;
const Warning = styled.View`
  background: #fef1de;
  border-radius: 10px;
  padding: 15px;
  margin: 0 auto;
  flex-direction: row;
  align-items: center;
`;
const WarningText = styled.Text`
  margin-left: 20px;
  width: 280px;
  line-height: 20px;
  color: #c87527;
  font-weight: bold;
`;
const CustomToken = styled.Text`
  margin: 30px auto 0 auto;
  text-align: center;
  color: #3275bb;
  font-size: 16px;
  font-weight: bold;
`;
