import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Switch } from "react-native";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";

const WalletEditScreen = ({ navigation }) => {
  return (
    <Container>
      <Header>
        <HeaderTitle>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name={"arrow-back"} color="#fff" size={28} />
          </TouchableOpacity>
          <HeaderText>Wallet</HeaderText>
        </HeaderTitle>
        <Ionicons name={"trash"} color="#fff" size={28} />
      </Header>
      <Body>
        <WalletNameInput placeholder="Multi-Coin Wallet 1" />
        <TouchableOpacity
          onPress={() => navigation.navigate("WalletEditScreen")}
        >
          <Row>
            <SecretPhrase>
              <Ionicons name={"document-text"} color="#000" size={28} />
              <SubText>Show Secret Phrase</SubText>
            </SecretPhrase>

            <Ionicons name={"chevron-forward"} color="#979797" size={28} />
          </Row>
          <SecretPhraseWarning>
            If you lose access to this device, your funds will be lost, unless
            you back up!
          </SecretPhraseWarning>
        </TouchableOpacity>
      </Body>
    </Container>
  );
};

export default WalletEditScreen;

const Container = styled.View`
  flex: 1;
  background: #fff;
`;
const Body = styled.View`
  padding: 0 20px;
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
const WalletNameInput = styled.TextInput`
  height: 60px;
  font-size: 16px;
  border-color: #eaeaea;
  border-width: 1px;
  border-radius: 5px;
  padding: 0 20px;
  margin-top: 30px;
`;
const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
`;
const SecretPhrase = styled.View`
  flex-direction: row;
  align-items: center;
`;
const SubText = styled.Text`
  font-size: 16px;
  margin-left: 20px;
`;
const SecretPhraseWarning = styled.Text`
  color: #979797;
`;
