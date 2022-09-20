import React, { useEffect, useState, useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { CheckBox } from "react-native-elements";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";
import { wallet } from './OnboardingScreen';
import { Context } from '../reducers/store';
import { AsyncStorage } from "react-native";

import "react-native-get-random-values"
import "@ethersproject/shims"
import { ethers } from "ethers";
const provider = ethers.getDefaultProvider();

const LegalScreen = ({ navigation }) => {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    createNewWallet();
    getETHBalance(wallet.address);
  }, []);

  // Create a new wallet. Mnemonic, Address, PrivateKey.
  const createNewWallet = () => {
    console.log("Creating a new wallet ...");
    dispatch({ type: 'SET_WALLETINFO', walletmnemonic: wallet.mnemonic.phrase, walletaddress: wallet.address, walletprivatekey: wallet.privateKey });
    setStorageData();
  }

  // Set Wallet Info to Local Storage.
  const setStorageData = async () => {
    try {
      await AsyncStorage.setItem("@mnemonic", wallet.mnemonic.phrase);
      await AsyncStorage.setItem("@address", wallet.address);
      await AsyncStorage.setItem("@privatekey", wallet.privateKey);
      console.log('Wallet Info Successfuly Saved to Local Storage.')
    } catch (e) {
      console.log('Failed To Save Data to Local Storage!!!');
    }
  }

  // Get ETH Balance from My Wallet Address
  const getETHBalance = (address) => {
    provider.getBalance(address).then((balance) => {
      // convert a currency unit from wei to ether
      const ethBalance = ethers.utils.formatEther(balance);
      dispatch({ type: 'SET_BALANCE', currentethbalance: ethBalance });
    })
  }

  return (
    <Container>
      <Header>Legal</Header>
      <Body>
        <ReviewText>
          Please review the Trust Wallet Terms of Service and Privacy Policy.
        </ReviewText>
        <PolicyContainer elevation={2}>
          <PrivacyPolicy>
            <PrivacyText>Privacy Policy</PrivacyText>
            <Ionicons name="chevron-forward" color="#848484" size={20} />
          </PrivacyPolicy>
          <TermsOfService>
            <TermsText>Terms of Service</TermsText>
            <Ionicons name="chevron-forward" color="#848484" size={20} />
          </TermsOfService>
        </PolicyContainer>
      </Body>
      <Footer>
        <AcceptContainer>
          <CheckBox
            title="I've read and accept the Terms of Service and Privacy Policy."
            checked={true}
          />
        </AcceptContainer>
        <TouchableOpacity onPress={() => navigation.navigate("PhraseScreen")}>
          <Button>Continue</Button>
        </TouchableOpacity>
      </Footer>
    </Container>
  );
};

export default LegalScreen;

const Container = styled.View`
  flex: 1;
  background: #fff;
`;
const Body = styled.View`
  padding: 0 20px;
`;
const Header = styled.Text`
  background: #3275bb;
  padding: 20px 0;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  width: 100%;
`;
const ReviewText = styled.Text`
  margin-left: 10px;
  font-size: 14px;
  margin-top: 40px;
  color: #848484;
  line-height: 22px;
`;
const PolicyContainer = styled.View`
  height: 150px;
  background: #fff;
  border-radius: 20px;
  margin: 30px 10px 0 10px;
  padding: 20px 20px;
`;
const PrivacyPolicy = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 25px;
  border-bottom-color: #efefef;
  border-bottom-width: 1px;
`;
const PrivacyText = styled.Text`
  font-size: 18px;
  color: #848484;
`;
const TermsOfService = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;
const TermsText = styled.Text`
  font-size: 18px;
  color: #848484;
`;
const Footer = styled.View`
  background: #fff;
  position: absolute;
  bottom: 50px;
  left: 20px;
`;
const AcceptContainer = styled.View``;
const AcceptText = styled.Text``;
const Button = styled.Text`
  width: 300px;
  padding: 20px 0;
  background: #3275bb;
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  margin: 25px auto 0 auto;
`;
