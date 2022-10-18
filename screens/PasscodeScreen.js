import React, { useEffect, useState, useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";
import Spinner from "react-native-loading-spinner-overlay";
import { StyleSheet } from "react-native";
import { AsyncStorage, LogBox } from "react-native";
import { Context } from "../reducers/store";

LogBox.ignoreAllLogs();

const PasscodeScreen = ({ navigation }) => {
  const [inputPassword, setInputPassword] = React.useState("");
  const [walletPassword, setWalletPassword] = React.useState("");
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    getStoredData();
  }, []);
  const onHandleUnlock = () => {
    console.log("inputpassword : " + inputPassword);
    console.log("walletpassword : " + walletPassword);
    if (inputPassword != walletPassword) {
      alert("Password incorrect!");
    } else {
      navigation.navigate("TabNavigator", {
        screen: "PortfolioScreen",
      });
    }
  };
  const getStoredData = async () => {
    console.log("Getting data from localstorage ...");
    try {
      const password = await AsyncStorage.getItem("@walletpassword");
      console.log("wallet password : " + password);
      dispatch({ type: "SET_PASSWORD", walletpassword: password });

      setWalletPassword(password);
      if (password == null) {
        navigation.navigate("TabNavigator", {
          screen: "PortfolioScreen",
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Container style={state.DarkMode && { backgroundColor: "#1a222d" }}>
      <Body>
        <Image source={require("../assets/images/splash.png")} />
        <Text style={state.DarkMode && { color: "#cdcdcd" }}>
          Secure and trusted multi-chain crypto wallet.
        </Text>
        <Input
          style={
            state.DarkMode && {
              backgroundColor: "#0a121d",
              color: "#fff",
              borderColor: "#666",
            }
          }
          placeholderTextColor={state.DarkMode && "#444"}
          secureTextEntry={true}
          placeholder="Password"
          value={inputPassword}
          onChangeText={(newText) => setInputPassword(newText)}
        />
        <TouchableOpacity onPress={() => onHandleUnlock()}>
          <Button>Unlock</Button>
        </TouchableOpacity>
      </Body>
    </Container>
  );
};

export default PasscodeScreen;

const Input = styled.TextInput`
  font-size: 20px;
  padding: 10px 20px;
  margin: 30px 0;
  width: 330px;
  border: 1px #ccc;
  border-radius: 5px;
  background-color: #f2f5f2;
`;
const Image = styled.Image`
  width: 180px;
  height: 170px;
  position: absolute;
  top: 150px;
`;
const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: "#fff",
  },
});
const Container = styled.View`
  flex: 1;
  background: #fff;
`;
const Body = styled.View`
  padding: 0 20px;
  align-items: center;
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
const Text = styled.Text`
  margin: 300px 0 0 0;
  font-size: 16px;
`;
const Button = styled.Text`
  width: 330px;
  padding: 15px 0;
  background: #3275bb;
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  margin: 0 auto;
  border-radius: 5px;
`;
