import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Switch } from "react-native";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";

const WalletsScreen = ({ navigation }) => {
  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name={"arrow-back"} color="#fff" size={28} />
        </TouchableOpacity>
        <HeaderText>Wallets</HeaderText>
      </Header>
      <Body>
        <TopDescription>Multi Coin Wallets</TopDescription>
        <Setting>
          <Row>
            <WalletImageTitle>
              <Image source={require("../assets/images/twt-white.png")} />
              <WalletTitleGroup>
                <Title>Multi-Coin Wallet 1</Title>
                <Description>Multi Coin Wallet</Description>
              </WalletTitleGroup>
            </WalletImageTitle>
            <TouchableOpacity
              onPress={() => navigation.navigate("WalletEditScreen")}
            >
              <Ionicons name={"ellipsis-vertical"} color="#979797" size={28} />
            </TouchableOpacity>
          </Row>
        </Setting>
      </Body>
    </Container>
  );
};

export default WalletsScreen;

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
  justify-content: flex-start;
`;
const HeaderText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  margin-left: 20px;
`;
const Setting = styled.View`
  padding: 20px 0;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;
const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const WalletImageTitle = styled.View`
  flex-direction: row;
  align-items: center;
`;
const WalletTitleGroup = styled.View`
  align-items: flex-start;
  margin-left: 20px;
`;
const Image = styled.Image`
  width: 44px;
  height: 44px;
`;
const Title = styled.Text`
  font-size: 18px;
`;
const TopDescription = styled.Text`
  color: #979797;
  margin: 30px 0 0 50px;
`;
const Description = styled.Text`
  color: #979797;
  margin-top: 10px;
`;
