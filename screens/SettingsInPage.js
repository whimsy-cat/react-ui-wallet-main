import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Switch } from "react-native";
import styled from "styled-components";
const SettingsInScreen = () => {
  return (
    <Container style={state.DarkMode && { backgroundColor: "#1a222d" }}>
      <Header style={state.DarkMode && { backgroundColor: "#232f3d", color: "#fff" }}>
        <Ionicons name={"arrow-back"} color="#fff" size={28} />
        <HeaderText>Price Alerts</HeaderText>
      </Header>
      <Body>
        <Setting>
          <Row>
            <Title>Price Alerts</Title>
            <Switch />
          </Row>
          <Description>
            Get alerts for significant price changes of your favorite
            cryptocurrencies.
          </Description>
        </Setting>
      </Body>
    </Container>
  );
};

export default SettingsInScreen;

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
  margin-left: 100px;
`;
const Setting = styled.View`
  margin: 20px 0;
`;
const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.Text`
  font-size: 18px;
`;
const Description = styled.Text`
  color: #979797;
  margin-top: 10px;
`;
