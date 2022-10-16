import React, { useContext, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { CheckBox } from "react-native-elements";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";
import { wallet } from "./OnboardingScreen";
import { Clipboard } from "react-native";
import { Context } from "../reducers/store";
import DialogInput from "react-native-dialog-input";
import { Dialog } from "react-native-simple-dialogs";

const RecieveTokenScreen = ({ navigation }) => {
  const [state, dispatch] = useContext(Context);
  const [recievePrice, setRecievePrice] = React.useState(100);
  const [isDialogVisible, showDialog] = React.useState(false);
  const [showShareDlg, setShowShareDlg] = React.useState(false);

  const onHandleCopy = () => {
    Clipboard.setString(
      state.RecieveToken == "ETH" || state.RecieveToken == "BNB"
        ? state.WalletAddress
        : state.RecieveToken == "BTC"
        ? state.BTCAddress
        : state.RecieveToken == "DOGE"
        ? state.DOGEAddress
        : state.RecieveToken == "XRP"
        ? state.XRPAddress
        : state.RecieveToken == "SOL"
        ? state.SOLAddress
        : state.RecieveToken == "ADA"
        ? state.ADAAddress
        : state.DOTAddress
    );
  };
  useEffect(() => {
    console.log(state.RecieveToken);
  }, []);
  return (
    <Container style={state.DarkMode && { backgroundColor: "#1a222d" }}>
      <DialogInput
        isDialogVisible={isDialogVisible}
        title={"Enter Amount"}
        submitInput={(inputText) => {
          setRecievePrice(inputText), showDialog(false);
        }}
        closeDialog={() => {
          showDialog(false);
        }}
        submitText="Confirm"
      ></DialogInput>
      <Dialog
        visible={showShareDlg}
        onTouchOutside={() => setShowShareDlg(false)}
      >
        <QRContainer style={state.DarkMode && { backgroundColor: "#fff" }}>
          <Image
            width={450}
            source={{
              uri: `https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=${
                state.RecieveToken == "ETH" || state.RecieveToken == "BNB"
                  ? state.WalletAddress.toString()
                  : state.RecieveToken == "BTC"
                  ? state.BTCAddress.toString()
                  : state.RecieveToken == "DOGE"
                  ? state.DOGEAddress.toString()
                  : state.RecieveToken == "XRP"
                  ? state.XRPAddress.toString()
                  : state.RecieveToken == "SOL"
                  ? state.SOLAddress.toString()
                  : state.RecieveToken == "ADA"
                  ? state.ADAAddress.toString()
                  : state.DOTAddress.toString()
              }`,
            }}
          />
          <ShareText>Share Via</ShareText>
          <WalletAddress>
            {state.RecieveToken == "ETH" || state.RecieveToken == "BNB"
              ? state.WalletAddress.toString()
              : state.RecieveToken == "BTC"
              ? state.BTCAddress.toString()
              : state.RecieveToken == "DOGE"
              ? state.DOGEAddress.toString()
              : state.RecieveToken == "XRP"
              ? state.XRPAddress.toString()
              : state.RecieveToken == "SOL"
              ? state.SOLAddress.toString()
              : state.RecieveToken == "ADA"
              ? state.ADAAddress.toString()
              : state.DOTAddress.toString()}
          </WalletAddress>
        </QRContainer>
        <Actions>
          <TouchableOpacity onPress={() => console.log("234")}>
            <Action>
              <ShareImage source={require("../assets/images/hangouts.jpg")} />
              <ActionText>Hangouts</ActionText>
            </Action>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => showDialog(true)}>
            <Action>
              <ShareImage
                source={require("../assets/images/googleimage.png")}
              />
              <ActionText>Search Image</ActionText>
            </Action>
          </TouchableOpacity>
          <TouchableOpacity>
            <Action>
              <ShareImage source={require("../assets/images/gmail.png")} />
              <ActionText>Gmail</ActionText>
            </Action>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onHandleCopy()}>
            <Action>
              <ShareImage source={require("../assets/images/googlemeet.png")} />
              <ActionText>Meet</ActionText>
            </Action>
          </TouchableOpacity>
        </Actions>
        <Actions>
          <TouchableOpacity onPress={() => onHandleCopy()}>
            <Action>
              <ShareImage source={require("../assets/images/androidapp.png")} />
              <ActionText>Upload to Photos</ActionText>
            </Action>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => showDialog(true)}>
            <Action>
              <ShareImage source={require("../assets/images/messages.png")} />
              <ActionText>Message</ActionText>
            </Action>
          </TouchableOpacity>
          <TouchableOpacity>
            <Action>
              <ShareImage source={require("../assets/images/googlemap.png")} />
              <ActionText>Google Map</ActionText>
            </Action>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onHandleCopy()}>
            <Action>
              <ShareImage source={require("../assets/images/drive.png")} />
              <ActionText>Drive</ActionText>
            </Action>
          </TouchableOpacity>
        </Actions>
      </Dialog>
      <Header
        style={state.DarkMode && { backgroundColor: "#232f3d", color: "#fff" }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" color="#fff" size={24} />
        </TouchableOpacity>
        <Title>Recieve {state.RecieveToken}</Title>
      </Header>
      <Body
        style={state.DarkMode && { backgroundColor: "#1a222d", color: "#fff" }}
      >
        <QRContainer
          elevation={1}
          style={state.DarkMode && { backgroundColor: "#fff" }}
        >
          <Image
            source={{
              uri: `https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=${
                state.RecieveToken == "ETH" ||
                state.RecieveToken == "BNBB" ||
                state.RecieveToken == "BNBS"
                  ? state.WalletAddress.toString()
                  : state.RecieveToken == "BTC"
                  ? state.BTCAddress.toString()
                  : state.RecieveToken == "DOGE"
                  ? state.DOGEAddress.toString()
                  : state.RecieveToken == "XRP"
                  ? state.XRPAddress.toString()
                  : state.RecieveToken == "SOL"
                  ? state.SOLAddress.toString()
                  : state.RecieveToken == "ADA"
                  ? state.ADAAddress.toString()
                  : state.DOTAddress.toString()
              }`,
            }}
          />
          <WalletAddress>
            {state.RecieveToken == "ETH" ||
            state.RecieveToken == "BNBB" ||
            state.RecieveToken == "BNBS"
              ? state.WalletAddress.toString()
              : state.RecieveToken == "BTC"
              ? state.BTCAddress.toString()
              : state.RecieveToken == "DOGE"
              ? state.DOGEAddress.toString()
              : state.RecieveToken == "XRP"
              ? state.XRPAddress.toString()
              : state.RecieveToken == "SOL"
              ? state.SOLAddress.toString()
              : state.RecieveToken == "ADA"
              ? state.ADAAddress.toString()
              : state.DOTAddress.toString()}
          </WalletAddress>
        </QRContainer>
        <RecievePrice
          style={
            state.DarkMode && { backgroundColor: "#1a222d", color: "#fff" }
          }
        >
          {state.Currency} {recievePrice}
        </RecievePrice>
        <WarningText
          style={
            state.DarkMode && { backgroundColor: "#1a222d", color: "#fff" }
          }
        >
          Send only Ethereum ({state.RecieveToken}) to this address. Sending any
          other coins may result in permanent loss.
        </WarningText>
        <Actions>
          <TouchableOpacity onPress={() => onHandleCopy()}>
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
              <ActionText1>Copy</ActionText1>
            </Action>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => showDialog(true)}>
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
              <ActionText1>Set Amount</ActionText1>
            </Action>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShowShareDlg(true)}>
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
              <ActionText1>Share</ActionText1>
            </Action>
          </TouchableOpacity>
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

const RecievePrice = styled.Text`
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  font-size: 30px;
`;

const Image = styled.Image`
  width: 220px;
  height: 220px;
  margin: 20px 0;
`;

const ShareImage = styled.Image`
  width: 50px;
  height: 50px;
  margin: 5px 5px;
  border-radius: 30px;
  border: 1px;
  border-color: #adadad;
`;
const WalletAddress = styled.Text`
  text-align: center;
`;
const WarningText = styled.Text`
  text-align: center;
  margin: 10px auto;
`;
const ShareText = styled.Text`
  text-align: center;
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
  width: 60px;
  text-align: center;
`;

const ActionText1 = styled.Text`
  color: #3275bb;
  margin-top: 10px;
`;
