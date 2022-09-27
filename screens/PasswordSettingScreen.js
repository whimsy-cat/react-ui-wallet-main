import React, { useEffect, useState, useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";
import Spinner from 'react-native-loading-spinner-overlay';
import { StyleSheet } from 'react-native';
import { AsyncStorage, LogBox } from "react-native";
import { Context } from '../reducers/store';

LogBox.ignoreAllLogs();

const PasswordSettingScreen = ({ navigation }) => {
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const onHandleUnlock = () => {
    if (newPassword != confirmPassword) {
      alert("Password not match!");
    }
    else if (newPassword.length < 8) {
      alert("Your password is too short. Please enter more than 8 charactors.")
    }
    else {
      alert("Password Successfully Changed!");
      setStorageData();
    }
  }
  const setStorageData = async () => {
    try {
      await AsyncStorage.setItem("@walletpassword", newPassword);
      console.log('Password Successfuly Saved to Local Storage.');
      navigation.navigate("SecurityScreen");
    } catch (e) {
      console.log('Failed To Save Data to Local Storage!!!');
    }
  }
  return (
    <Container style={state.DarkMode && { backgroundColor: "#151515" }}>
      <Body>
        <Image source={require("../assets/images/splash.png")} />
        <Text>Secure and trusted multi-chain crypto wallet.</Text>
        <Input secureTextEntry={true} placeholder="New Password" value={newPassword} onChangeText={newText => setNewPassword(newText)} />
        <Input secureTextEntry={true} placeholder="Confirm Password" value={confirmPassword} onChangeText={newText => setConfirmPassword(newText)} />
        <TouchableOpacity onPress={() => onHandleUnlock()}>
          <Button>Set Password</Button>
        </TouchableOpacity>
      </Body>
    </Container >
  );
};

export default PasswordSettingScreen;

const Input = styled.TextInput`
  font-size: 20px;
  padding: 10px 20px;
  margin-top: 20px;
  width: 330px;
  border:1px solid #ccc;
  border-radius:5px;
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
    color: '#fff'
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
  padding: 20px 0;
  background: #3275bb;
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  margin: 20px auto;
  border-radius:5px;
`;
