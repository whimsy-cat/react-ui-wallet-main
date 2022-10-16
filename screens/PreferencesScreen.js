import React, { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Context } from "../reducers/store";
import { Linking } from "react-native";

const PreferencesScreen = ({ navigation }) => {
  const [state, dispatch] = useContext(Context);

  const onDappBrowser = () => {
    Linking.canOpenURL("https://trustwallet.com/dapp/").then((supported) => {
      if (supported) {
        Linking.openURL("https://trustwallet.com/dapp/");
      } else {
        console.log(
          `Don't know how to open URI: ` + "https://trustwallet.com/dapp/"
        );
      }
    });
  };

  const onHandleCurrency = () => {
    console.log(state.Currency);
    navigation.navigate("CurrencySetting");
  };
  return (
    <Container style={state.DarkMode && { backgroundColor: "#1a222d" }}>
      <Header
        style={state.DarkMode && { backgroundColor: "#232f3d", color: "#fff" }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name={"arrow-back"} color="#fff" size={28} />
        </TouchableOpacity>
        <HeaderText
          style={
            state.DarkMode && { backgroundColor: "#232f3d", color: "#fff" }
          }
        >
          Preferences
        </HeaderText>
      </Header>
      <Body>
        <TouchableOpacity onPress={() => onHandleCurrency()}>
          <Setting style={state.DarkMode && { borderBottomColor: "#343434" }}>
            <Title
              style={
                state.DarkMode && { backgroundColor: "#1a222d", color: "#fff" }
              }
            >
              Currency
            </Title>
            <Description
              style={
                state.DarkMode && { backgroundColor: "#1a222d", color: "#aaa" }
              }
            >
              {state.Currency}
            </Description>
          </Setting>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDappBrowser()}>
          <Setting style={state.DarkMode && { borderBottomColor: "#343434" }}>
            <Row>
              <Title
                style={
                  state.DarkMode && {
                    backgroundColor: "#1a222d",
                    color: "#fff",
                  }
                }
              >
                DApp Browser
              </Title>
              <Ionicons name={"chevron-forward"} color="#979797" size={28} />
            </Row>
          </Setting>
        </TouchableOpacity>
      </Body>
    </Container>
  );
};

export default PreferencesScreen;

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
const Description = styled.Text`
  color: #979797;
  margin-top: 10px;
`;
