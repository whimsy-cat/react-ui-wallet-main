import React from "react";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const NotificationScreen = ({ navigation }) => {
  return (
    <Container>
        <ScrollView showsVerticalScrollIndicator={false} bounces={true}>
            <NotificationImage source={require("../assets/images/nft.png")} />
            <NotificationSubtext>Notifications will appear here</NotificationSubtext>
            <NotificationRecieve>Refresh</NotificationRecieve>
        </ScrollView>
    </Container>
  );
};

export default NotificationScreen;

const Container = styled.View`
  flex: 1;
  padding-top: 250px;
  background: #fff;
`;
const NotificationImage = styled.Image`
  width: 150px;
  height: 150px;
  margin: 20px auto 0 auto;
`;
const NotificationSubtext = styled.Text`
  text-align: center;
  margin-top: 20px;
  font-size: 16px;
  color: #979797;
`;
const NotificationRecieve = styled.Text`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #3275bb;
  margin-top: 14px;
`;
const OpenSeaCTA = styled.Text`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #3275bb;
  margin-top: 40px;
`;
