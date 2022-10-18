import React, { useContext, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Switch } from "react-native";
import styled from "styled-components";
import { Context } from "../reducers/store";
import { AsyncStorage } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const SecurityScreen = ({ navigation }) => {
  const [pass, setPass] = React.useState(false);
  const [state, dispatch] = useContext(Context);
  const [transactionSigning, setTransactionSigning] = React.useState(false);

  useEffect(() => {
    console.log("state : " + state.WalletPassword);
    if (state.WalletPassword != "") setPass(true);
    else setPass(false);
  });

  const onHandleChange = () => {
    setPass(!pass);
    setPassStateLocalStorage(!pass);
    navigation.navigate("PasswordSettingScreen");
  };

  const onHandleTransaction = () => {
    setTransactionSigning(!transactionSigning);
  };

  const setPassStateLocalStorage = async (state) => {
    try {
      let st = state == true ? "true" : "false";
      await AsyncStorage.setItem("@passcodestate", st);
      console.log("Passcode state successfuly saved to local storage.");
    } catch (e) {
      console.log("Failed To Save Data to Local Storage!!!");
    }
  };

  return (
    <Container style={state.DarkMode && { backgroundColor: "#1a222d" }}>
      <Header
        style={state.DarkMode && { backgroundColor: "#232f3d", color: "#fff" }}
      >
        <HeaderTitle>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name={"arrow-back"} color="#fff" size={28} />
          </TouchableOpacity>
          <HeaderText>Security</HeaderText>
        </HeaderTitle>
        <Ionicons name={"information-circle-outline"} color="#fff" size={28} />
      </Header>
      <Body
        style={state.DarkMode && { backgroundColor: "#1a222d", color: "#fff" }}
      >
        <Setting style={state.DarkMode && { borderBottomColor: "#252525" }}>
          <Row>
            <Title style={state.DarkMode && { color: "#fff" }}>Passcode</Title>
            <Switch value={pass} onChange={() => onHandleChange()} />
          </Row>
        </Setting>
        <TouchableOpacity>
          <Setting style={state.DarkMode && { borderBottomColor: "#252525" }}>
            <Title style={state.DarkMode && { color: "#fff" }}>Auto-Lock</Title>

            <Description style={state.DarkMode && { color: "#aaa" }}>
              Immediate
            </Description>
          </Setting>
        </TouchableOpacity>
        <TouchableOpacity>
          <Setting style={state.DarkMode && { borderBottomColor: "#252525" }}>
            <Title style={state.DarkMode && { color: "#fff" }}>
              Lock Method
            </Title>

            <Description style={state.DarkMode && { color: "#aaa" }}>
              Passcode / Biometric
            </Description>
          </Setting>
        </TouchableOpacity>
        <AuthText style={state.DarkMode && { color: "#72a5fb" }}>
          Ask authentication for
        </AuthText>
        <Setting style={state.DarkMode && { borderBottomColor: "#252525" }}>
          <Row>
            <Title style={state.DarkMode && { color: "#fff" }}>
              Transaction Signing
            </Title>
            <Switch
              value={transactionSigning}
              onValueChange={() => onHandleTransaction()}
            />
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
