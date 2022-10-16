import React, { useState, useEffect, useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Clipboard } from "react-native";
import "react-native-get-random-values";
import "@ethersproject/shims";
import { ethers } from "ethers";
import { selectedSendToken } from "./SendTokenChoose";
import { Context } from "../reducers/store";
// const provider = ethers.getDefaultProvider("ropsten");

var contract_address = "";
var send_abi = "";
var send_address = "0x9381D7598F28fAbd2f94Aa9d01B4040C5F436197";
var private_key =
  "69b2ce785561f97e2aa896e67f6f61e9c8442a9f11b3cbb476439219141db91f";
const gas_limit = "0x100000";

window.ethersProvider = new ethers.getDefaultProvider(); //ethers.providers.InfuraProvider("ropsten")
const SendTokenFormScreen = ({ navigation }) => {
  const [recipentAddress, setRecipentAddress] = React.useState("");
  const [send_token_amount, setAmount] = React.useState(0.0);
  const [state, dispatch] = useContext(Context);
  const [tokenBalanceUSD, setTokenBalanceUSD] = React.useState(0.0);
  const [tokenBalance, setTokenBalance] = React.useState(0.0);

  useEffect(() => {
    let balance =
      selectedSendToken == "eth"
        ? Number(state.CurrentETHBalance).toFixed(4)
        : selectedSendToken == "btc"
        ? Number(state.CurrentBTCBalance).toFixed(4)
        : selectedSendToken == "bnbb"
        ? Number(state.CurrentBNBBBalance).toFixed(4)
        : selectedSendToken == "bnbs"
        ? Number(state.CurrentBNBSBalance).toFixed(4)
        : selectedSendToken == "doge"
        ? Number(state.CurrentDOGEBalance).toFixed(4)
        : selectedSendToken == "xrp"
        ? Number(state.CurrentXRPBalance).toFixed(4)
        : selectedSendToken == "sol"
        ? Number(state.CurrentSOLBalance).toFixed(4)
        : selectedSendToken == "ada"
        ? Number(state.CurrentADABalance).toFixed(4)
        : Number(state.CurrentDOTBalance).toFixed(4);
    let balanceUSD =
      selectedSendToken == "eth"
        ? Number(state.CurrentETHBalance * state.CoinPrice[1]).toFixed(4)
        : selectedSendToken == "btc"
        ? Number(state.CurrentBTCBalance * state.CoinPrice[0]).toFixed(4)
        : selectedSendToken == "bnbb"
        ? Number(state.CurrentBNBBBalance * state.CoinPrice[2]).toFixed(4)
        : selectedSendToken == "bnbs"
        ? Number(state.CurrentBNBSBalance * state.CoinPrice[3]).toFixed(4)
        : selectedSendToken == "doge"
        ? Number(state.CurrentDOGEBalance * state.CoinPrice[7]).toFixed(4)
        : selectedSendToken == "xrp"
        ? Number(state.CurrentXRPBalance * state.CoinPrice[5]).toFixed(4)
        : selectedSendToken == "sol"
        ? Number(state.CurrentSOLBalance * state.CoinPrice[6]).toFixed(4)
        : selectedSendToken == "ada"
        ? Number(state.CurrentADABalance * state.CoinPrice[4]).toFixed(4)
        : Number(state.CurrentDOTBalance * state.CoinPrice[8]).toFixed(4);
    setTokenBalanceUSD(balanceUSD);
    setTokenBalance(balance);
  }, []);
  const sendToken = async () => {
    if (
      selectedSendToken == "eth" ||
      selectedSendToken == "bnbb" ||
      selectedSendToken == "bnbs"
    ) {
      console.log(
        "Out : " +
          (Number(send_token_amount) +
            0.000000059347321 * Number(send_token_amount))
      );
      console.log("In : " + state.CurrentETHBalance);
      if (
        state.CurrentETHBalance <
        Number(send_token_amount) +
          0.000000059347321 * Number(send_token_amount)
      ) {
        alert(`You have no enough ${selectedSendToken.toUpperCase()} to send!`);
        return;
      }
      send_address = state.WalletAddress;
      private_key = state.WalletPrivateKey;
      console.log("Sender : " + send_address);
      console.log("Sender Key : " + private_key);
      console.log("Receive : " + recipentAddress);
      console.log("Amount : " + send_token_amount);
      if (
        recipentAddress.length != 42 ||
        !(recipentAddress[0] == "0" && recipentAddress[1] == "x")
      ) {
        alert("Please input correct recipentAddress!");
        return;
      }

      if (selectedSendToken == "bnbb")
        contract_address = "0x250632378e573c6be1ac2f97fcdf00515d0aa91b";
      if (selectedSendToken == "bnbs")
        contract_address = "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c";
      send_token(
        contract_address,
        send_token_amount,
        recipentAddress,
        send_address,
        private_key
      );
    } else {
      if (selectedSendToken == "btc") {
        if (state.CurrentBTCBalance <= send_token_amount) {
          alert(
            `You have no enough ${selectedSendToken.toUpperCase()} to send!`
          );
        } else {
          const resp = await fetch(
            `https://api-eu1.tatum.io/v3/bitcoin/transaction`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "x-api-key": "b55c658b-d259-4ffe-b4d2-efbb4e6c099e",
              },
              body: JSON.stringify({
                fromAddress: [
                  {
                    address: state.BTCAddress,
                    privateKey: state.BTCPrivateKey,
                  },
                ],
                to: [
                  {
                    address: recipentAddress,
                    value: send_token_amount,
                  },
                ],
              }),
            }
          );
          const data = await resp.json();
          navigation.navigate("PortfolioScreen");
          alert("Successfuly Sent!");
        }
      } else if (selectedSendToken == "ada") {
        if (state.CurrentADABalance <= send_token_amount) {
          alert(
            `You have no enough ${selectedSendToken.toUpperCase()} to send!`
          );
        } else {
          const resp = await fetch(
            `https://api-eu1.tatum.io/v3/algorand/transaction`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "x-api-key": "b55c658b-d259-4ffe-b4d2-efbb4e6c099e",
              },
              body: JSON.stringify({
                from: state.ADAAddress,
                to: recipentAddress,
                amount: send_token_amount,
                fromPrivateKey: state.ADAPrivateKey,
              }),
            }
          );
          const data = await resp.json();
          navigation.navigate("PortfolioScreen");
          alert("Successfuly Sent!");
        }
      } else if (selectedSendToken == "xrp") {
        if (state.CurrentXRPBalance <= send_token_amount) {
          alert(
            `You have no enough ${selectedSendToken.toUpperCase()} to send!`
          );
        } else {
          const resp = await fetch(
            `https://api-eu1.tatum.io/v3/xrp/transaction`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "x-api-key": "b55c658b-d259-4ffe-b4d2-efbb4e6c099e",
              },
              body: JSON.stringify({
                fromAccount: state.XRPAddress,
                to: recipentAddress,
                amount: send_token_amount,
                fromSecret: state.XRPPrivateKey,
              }),
            }
          );

          const data = await resp.json();
          navigation.navigate("PortfolioScreen");
          alert("Successfuly Sent!");
        }
      } else if (selectedSendToken == "sol") {
        if (state.CurrentSOLBalance <= send_token_amount) {
          alert(
            `You have no enough ${selectedSendToken.toUpperCase()} to send!`
          );
        } else {
          const resp = await fetch(
            `https://api-eu1.tatum.io/v3/solana/transaction`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "x-api-key": "b55c658b-d259-4ffe-b4d2-efbb4e6c099e",
              },
              body: JSON.stringify({
                from: state.SOLAddress,
                to: recipentAddress,
                amount: send_token_amount,
                fromPrivateKey: state.SOLPrivateKey,
              }),
            }
          );

          const data = await resp.json();
          navigation.navigate("PortfolioScreen");
          alert("Successfuly Sent!");
        }
      } else if (selectedSendToken == "doge") {
        if (state.CurrentDOGEBalance <= send_token_amount) {
          alert(
            `You have no enough ${selectedSendToken.toUpperCase()} to send!`
          );
        } else {
          const resp = await fetch(
            `https://api-eu1.tatum.io/v3/dogecoin/transaction`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "x-api-key": "b55c658b-d259-4ffe-b4d2-efbb4e6c099e",
              },
              body: JSON.stringify({
                fee: "0.0015",
                changeAddress: state.DOGEAddress,
                fromUTXO: [
                  {
                    txHash:
                      "53faa103e8217e1520f5149a4e8c84aeb58e55bdab11164a95e69a8ca50f8fcc",
                    value: "0.0015",
                    address: state.DOGEAddress,
                    index: 0,
                    privateKey: state.DOGEPrivateKey,
                  },
                ],
                to: [
                  {
                    address: recipentAddress,
                    value: send_token_amount,
                  },
                ],
              }),
            }
          );

          const data = await resp.json();
          navigation.navigate("PortfolioScreen");
          alert("Successfuly Sent!");
        }
      } else if (selectedSendToken == "dot") {
        if (state.CurrentDOTBalance <= send_token_amount) {
          alert(
            `You have no enough ${selectedSendToken.toUpperCase()} to send!`
          );
        } else {
          const resp = await fetch(
            `https://api-eu1.tatum.io/v3/xlm/transaction`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "x-api-key": "b55c658b-d259-4ffe-b4d2-efbb4e6c099e",
              },
              body: JSON.stringify({
                fromAccount: state.DOTAddress,
                to: recipentAddress,
                amount: send_token_amount,
                fromSecret: state.DOTPrivateKey,
              }),
            }
          );

          const data = await resp.json();
          navigation.navigate("PortfolioScreen");
          alert("Successfuly Sent!");
        }
      }
    }
  };
  function send_token(
    contract_address,
    send_token_amount,
    recipentAddress,
    send_account,
    private_key
  ) {
    console.log("send transaction");
    let wallet = new ethers.Wallet(private_key);
    let walletSigner = wallet.connect(window.ethersProvider);

    window.ethersProvider.getGasPrice().then((currentGasPrice) => {
      let gas_price = ethers.utils.hexlify(parseInt(currentGasPrice));
      console.log(`gas_price: ${gas_price}`);

      if (contract_address) {
        // general token send
        let contract = new ethers.Contract(
          contract_address,
          send_abi,
          walletSigner
        );

        // How many tokens?
        let numberOfTokens = ethers.utils.parseUnits(
          send_token_amount.toString(),
          18
        );
        console.log(`numberOfTokens: ${numberOfTokens}`);

        // Send tokens
        contract
          .transfer(recipentAddress, numberOfTokens)
          .then((transferResult) => {
            console.dir(transferResult);
            alert("Sent finished");
            navigation.navigate("PortfolioScreen");
          });
      } // ether send
      else {
        const tx = {
          from: send_account,
          to: recipentAddress,
          value: ethers.utils.parseEther(send_token_amount.toString()),
          nonce: window.ethersProvider.getTransactionCount(
            send_account,
            "latest"
          ),
          gasLimit: ethers.utils.hexlify(gas_limit), // 100000
          gasPrice: gas_price,
        };
        console.log(tx);
        try {
          walletSigner.sendTransaction(tx).then((transaction) => {
            console.log(transaction);
            alert("Send finished!");
            navigation.navigate("PortfolioScreen");
          });
        } catch (error) {
          alert("failed to send!!");
        }
      }
    });
  }

  const onHandlePaste = async () => {
    const text = await Clipboard.getString();
    setRecipentAddress(text);
  };
  const onHandleMaxBalance = () => {
    setAmount(tokenBalance);
  };
  return (
    <Container style={state.DarkMode && { backgroundColor: "#1a222d" }}>
      <Header
        style={state.DarkMode && { backgroundColor: "#232f3d", color: "#fff" }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name={"arrow-back"} color="#fff" size={28} />
        </TouchableOpacity>
        <HeaderText>Send {selectedSendToken.toUpperCase()}</HeaderText>
        <Continue onPress={() => sendToken()}>Continue</Continue>
      </Header>
      <Body>
        <RecipientInfoContainer>
          <Recipient style={state.DarkMode && { borderColor: "#353535" }}>
            <RecipientAddress
              style={state.DarkMode && { color: "#fff" }}
              placeholderTextColor={state.DarkMode && "#999"}
              placeholder="Recipient Address"
              value={recipentAddress}
              onChangeText={(newText) => setRecipentAddress(newText)}
            />
            <Paste>
              <Ionicons name={"clipboard-outline"} color="#62b5fb" size={24} />
              <TouchableOpacity onPress={() => onHandlePaste()}>
                <PasteText style={state.DarkMode && { color: "#62b5fb" }}>
                  Paste
                </PasteText>
              </TouchableOpacity>
            </Paste>
          </Recipient>
          <AmountContainer style={state.DarkMode && { borderColor: "#353535" }}>
            <Amount
              style={state.DarkMode && { color: "#fff" }}
              placeholderTextColor={state.DarkMode && "#999"}
              placeholder="Amount BTC"
              value={send_token_amount.toString()}
              onChangeText={(newText) => setAmount(Number(newText))}
            />
            <TouchableOpacity onPress={() => onHandleMaxBalance()}>
              <MaxContainer>
                <Max style={state.DarkMode && { color: "#62b5fb" }}>Max</Max>
                <TokenName style={state.DarkMode && { color: "#62b5fb" }}>
                  {selectedSendToken.toUpperCase()}
                </TokenName>
              </MaxContainer>
            </TouchableOpacity>
          </AmountContainer>
          <AmountInUSD>~${tokenBalanceUSD}</AmountInUSD>
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
  overflow: hidden;
  width: 200px;
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
  width: 200px;
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
