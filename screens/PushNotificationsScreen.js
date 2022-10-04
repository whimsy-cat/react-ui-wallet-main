import React, { useContext, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Switch } from "react-native";
import { Context } from '../reducers/store'
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";

const PushNotificationsScreen = ({ navigation }) => {
  const [state, dispatch] = useContext(Context);
  const [pushNotification, setPushNotification] = React.useState(false);

  useEffect(() => {
    setPushNotification(state.PushNotification);
  }, [])
  const onHandlePushNotification = () => {
    dispatch({ type: 'SET_PUSHNOTIFICATION', pushnotification: !pushNotification });
    setPushNotification(!pushNotification);
  }
  return (
    <Container style={state.DarkMode && { backgroundColor: "#1a222d" }}>
      <Header style={state.DarkMode && { backgroundColor: "#232f3d", color: "#fff" }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name={"arrow-back"} color="#fff" size={28} />
        </TouchableOpacity>
        <HeaderText>Push Notifications</HeaderText>
      </Header>
      <Body>
        <Setting style={state.DarkMode && { borderBottomColor: "#343434" }}>
          <Row>
            <Title style={state.DarkMode && { color: "#fff" }}>Allow Push Notifications</Title>
            <Switch value={state.PushNotification} onValueChange={() => onHandlePushNotification()} />
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
