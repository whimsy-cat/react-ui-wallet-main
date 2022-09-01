import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { CheckBox } from "react-native-elements";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";

const RecieveTokenScreen = ({ navigation }) => {
  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" color="#fff" size={24} />
        </TouchableOpacity>
        <Title>Recieve ETH</Title>
      </Header>
      <Body>
        <QRContainer elevation={1}>
          <Image source={require("../assets/images/QR.png")} />
          <WalletAddress>
            0xBA31440510794D3c0edFfc4badcde62960C55241
          </WalletAddress>
        </QRContainer>
        <WarningText>
          Send only Ethereum (ETH) to this address. Sending any other coins may
          result in permanent loss.
        </WarningText>
        <Actions>
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
