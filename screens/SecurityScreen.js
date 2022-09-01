import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Switch } from "react-native";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";

const SecurityScreen = ({ navigation }) => {
  return (
    <Container>
      <Header>
        <HeaderTitle>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name={"arrow-back"} color="#fff" size={28} />
          </TouchableOpacity>
          <HeaderText>Security</HeaderText>
        </HeaderTitle>
        <Ionicons name={"information-circle-outline"} color="#fff" size={28} />
      </Header>
      <Body>
        <Setting>
          <Row>
            <Title>Passcode</Title>
            <Switch />
          </Row>
        </Setting>
        <Setting>
          <Title>Auto-Lock</Title>

          <Description>Immediate</Description>
        </Setting>
        <Setting>
          <Title>Lock Method</Title>

          <Description>Passcode / Biometric</Description>
        </Setting>
        <AuthText>Ask authentication for</AuthText>
        <Setting>
          <Row>
            <Title>Transaction Signing</Title>
            <Switch />
          </Row>
        </Setting>
      </Body>
    </Container>
  );
};

export default SecurityScreen;

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
const Title = styled.Text`
  font-size: 18px;
`;
const Description = styled.Text`
  color: #979797;
`;
const AuthText = styled.Text`
  color: #3275bb;
  margin: 30px 0 10px 0;
  font-weight: bold;
`;
