import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";

import "react-native-get-random-values"
import "@ethersproject/shims"
import { ethers } from "ethers";
const provider = ethers.getDefaultProvider();

const SendTokenFormScreen = ({ navigation }) => {
  const [recipentAddress, setRecipentAddress] = React.useState(null);
  const [amount, setAmount] = React.useState('0.0');
  const sendToken = () => {
    console.log("Sending to : " + recipentAddress + " with " + amount);
    let privateKey = '' // ba777afd45b2b4db18f2ac061c0a7b556c77eddb3a67408cd91fc20ea2e97760
    // Create a wallet instance
    let wallet = new ethers.Wallet(privateKey, provider)
    // Receiver Address which receives Ether
    let receiverAddress = receiverAddress;
    // Ether amount to send
    let amountInEther = amount;
    // Create a transaction object
    let tx = {
      to: receiverAddress,
      // Convert currency unit from ether to wei
      value: ethers.utils.parseEther(amountInEther)
    }
    // Send a transaction
    wallet.sendTransaction(tx)
      .then((txObj) => {
        console.log('txHash', txObj.hash)
        // => 0x9c172314a693b94853b49dc057cf1cb8e529f29ce0272f451eea8f5741aa9b58
        // A transaction result can be checked in a etherscan with a transaction hash which can be obtained here.
      })
  }
  useEffect(() => {
    console.log(recipentAddress);
  }, [recipentAddress]);
  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name={"arrow-back"} color="#fff" size={28} />
        </TouchableOpacity>
        <HeaderText>Send BTC</HeaderText>
        <Continue onPress={() => sendToken()}>Continue</Continue>
      </Header>
      <Body>
        <RecipientInfoContainer>
          <Recipient>
            <RecipientAddress placeholder="Recipient Address" value={recipentAddress} onChangeText={setRecipentAddress} />
            <Paste>
              <Ionicons name={"clipboard-outline"} color="#3275bb" size={24} />
              <PasteText>Paste</PasteText>
            </Paste>
          </Recipient>
          <AmountContainer>
            <Amount placeholder="Amount BTC" value={amount} onChangeText={setAmount} />
            <MaxContainer>
              <Max>Max</Max>
              <TokenName>BTC</TokenName>
            </MaxContainer>
          </AmountContainer>
          <AmountInUSD>~$146,577,914.13</AmountInUSD>
        </RecipientInfoContainer>
      </Body>
    </Container>
  );
};

export default SendTokenFormScreen;

const Container = styled.View`
  flex: 1;
  background: #fff;
`;
const Header = styled.View`
  background: #3275bb;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  width: 100%;
`;
const HeaderText = styled.Text`
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;
const Continue = styled.Text`
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
`;
const Body = styled.View``;
const RecipientInfoContainer = styled.View`
  padding: 0 20px 0 20px;
  margin: 0 10px;
`;
const Recipient = styled.View`
  height: 60px;
  border-color: #eaeaea;
  border-width: 1px;
  border-radius: 5px;
  padding: 0 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0 30px 0;
`;
const RecipientAddress = styled.TextInput`
  height: 60px;
  font-size: 16px;
`;
const Paste = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const PasteText = styled.Text`
  color: #3275bb;
  text-transform: uppercase;
  margin-left: 10px;
  font-weight: bold;
`;
const AmountContainer = styled.View`
  height: 60px;
  border-color: #eaeaea;
  border-width: 1px;
  border-radius: 5px;
  padding: 0 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0 30px 0;
`;
const Amount = styled.TextInput`
  height: 60px;
  font-size: 16px;
`;
const MaxContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Max = styled.Text`
  color: #3275bb;
  text-transform: uppercase;
  font-weight: bold;
`;
const TokenName = styled.Text`
  color: #3275bb;
  text-transform: uppercase;
  margin-left: 10px;
  font-weight: bold;
`;
const AmountInUSD = styled.Text`
  color: #979797;
`;
