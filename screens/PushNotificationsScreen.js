import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Switch } from "react-native";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";

const PushNotificationsScreen = ({ navigation }) => {
  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name={"arrow-back"} color="#fff" size={28} />
        </TouchableOpacity>
        <HeaderText>Push Notifications</HeaderText>
      </Header>
      <Body>
        <Setting>
          <Row>
            <Title>Allow Push Notifications</Title>
            <Switch />
          </Row>
        </Setting>
      </Body>
    </Container>
  );
};

export default PushNotificationsScreen;

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
const Title = styled.Text`
  font-size: 18px;
`;
