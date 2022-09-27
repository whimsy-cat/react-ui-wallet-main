import React, { useContext, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { CheckBox } from "react-native-elements";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";
import { wallet } from "./OnboardingScreen";
import { Clipboard } from "react-native";
import { Context } from '../reducers/store';

const RecieveTokenScreen = ({ navigation }) => {
  const [state, dispatch] = useContext(Context);

  const onHandleCopy = () => {
    Clipboard.setString(state.RecieveToken == "ETH" ||
      state.RecieveToken == "BNB" ?
      state.WalletAddress :
      state.RecieveToken == "BTC" ?
        state.BTCAddress :
        state.RecieveToken == "DOGE" ?
          state.DOGEAddress :
          state.RecieveToken == "XRP" ?
            state.XRPAddress :
            state.RecieveToken == "SOL" ?
              state.SOLAddress :
              state.RecieveToken == "ADA" ?
                state.ADAAddress :
                state.DOTAddress);
  }
  useEffect(() => {
    console.log(state.RecieveToken);
  }, []);
  return (
    <Container style={state.DarkMode && { backgroundColor: "#151515" }}>
      <Header style={state.DarkMode && { backgroundColor: "#0c0c0c", color: "#fff" }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" color="#fff" size={24} />
        </TouchableOpacity>
        <Title>Recieve {state.RecieveToken}</Title>
      </Header>
      <Body style={state.DarkMode && { backgroundColor: "#151515", color: "#fff" }}>
        <QRContainer elevation={1} style={state.DarkMode && { backgroundColor: "#fff" }}>
          <Image source={{
            uri: `https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=${state.RecieveToken == "ETH" ||
              state.RecieveToken == "BNB" ?
              state.WalletAddress :
              state.RecieveToken == "BTC" ?
                state.BTCAddress :
                state.RecieveToken == "DOGE" ?
                  state.DOGEAddress :
                  state.RecieveToken == "XRP" ?
                    state.XRPAddress :
                    state.RecieveToken == "SOL" ?
                      state.SOLAddress :
                      state.RecieveToken == "ADA" ?
                        state.ADAAddress :
                        state.DOTAddress}`
          }} />
          <WalletAddress>
            {state.RecieveToken == "ETH" ||
              state.RecieveToken == "BNB" ?
              state.WalletAddress.toString() :
              state.RecieveToken == "BTC" ?
                state.BTCAddress.toString() :
                state.RecieveToken == "DOGE" ?
                  state.DOGEAddress.toString() :
                  state.RecieveToken == "XRP" ?
                    state.XRPAddress.toString() :
                    state.RecieveToken == "SOL" ?
                      state.SOLAddress.toString() :
                      state.RecieveToken == "ADA" ?
                        state.ADAAddress.toString() :
                        state.DOTAddress.toString()}
          </WalletAddress>
        </QRContainer>
        <WarningText style={state.DarkMode && { backgroundColor: "#151515", color: "#fff" }}>
          Send only Ethereum ({state.RecieveToken}) to this address. Sending any other coins may
          result in permanent loss.
        </WarningText>
        <Actions>
          <TouchableOpacity
            onPress={() => onHandleCopy()}
          >
            <Action>
              <Ionicons
                name="copy-outline"
                color="#fff"
                size={20}
                style={{
                  backgroundColor: "#3275bb",
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  textAlign: "center",
                  padding: 15,
                }}
              />
              <ActionText>Copy</ActionText>
            </Action>
          </TouchableOpacity>
          <Action>
            <Ionicons
              name="pricetag-outline"
              color="#3275bb"
              size={20}
              style={{
                backgroundColor: "#EAF1F9",
                width: 50,
                height: 50,
                borderRadius: 25,
                textAlign: "center",
                padding: 15,
              }}
            />
            <ActionText>Set Amount</ActionText>
          </Action>
          <Action>
            <Ionicons
              name="share-social"
              color="#3275bb"
              size={20}
              style={{
                backgroundColor: "#EAF1F9",
                width: 50,
                height: 50,
                borderRadius: 25,
                textAlign: "center",
                padding: 15,
              }}
            />
            <ActionText>Share</ActionText>
          </Action>
        </Actions>
      </Body>
    </Container>
  );
};

export default RecieveTokenScreen;

const Container = styled.View`
  flex: 1;
  background: #fff;
`;
const Body = styled.View`
  flex: 1;
  padding: 0 20px;
  align-items: center;
  justify-content: center;
`;
const Header = styled.View`
  background: #3275bb;
  padding: 20px 20px;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;
const Title = styled.Text`
  margin-left: 20px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;
const QRContainer = styled.View`
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  padding: 10px 20px;
  width: 250px;
`;
const Image = styled.Image`
  width: 220px;
  height: 220px;
  margin: 20px 0;
`;
const WalletAddress = styled.Text`
  text-align: center;
`;
const WarningText = styled.Text`
  text-align: center;
  margin: 70px auto;
`;
const Actions = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 280px;
`;
const Action = styled.View`
  align-items: center;
`;
const ActionText = styled.Text`
  color: #3275bb;
  margin-top: 10px;
`;
