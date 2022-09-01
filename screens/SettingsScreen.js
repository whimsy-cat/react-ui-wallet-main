import React from "react";
import { Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const SettingsScreen = ({ navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} bounces={true}>
      <Container>
        <Header>Settings</Header>
        <Body>
          <TouchableOpacity
            onPress={() => navigation.navigate("WalletsScreen")}
          >
            <SettingsContainer>
              <SettingsName>
                <Image source={require("../assets/images/wallet.png")} />
                <Name>Wallets</Name>
              </SettingsName>
              <Wallet>
                <WalletName>Multi-Coin Wallet 1</WalletName>
                <Ionicons name={"chevron-forward"} color="#979797" size={28} />
              </Wallet>
            </SettingsContainer>
          </TouchableOpacity>

          <SettingsContainer>
            <SettingsName>
              <Image source={require("../assets/images/dark.png")} />
              <Name>Dark Mode</Name>
            </SettingsName>
            <Switch />
          </SettingsContainer>

          <TouchableOpacity
            onPress={() => navigation.navigate("SecurityScreen")}
          >
            <SettingsContainer>
              <SettingsName>
                <Image source={require("../assets/images/security.png")} />
                <Name>Security</Name>
              </SettingsName>
              <Ionicons name={"chevron-forward"} color="#979797" size={28} />
            </SettingsContainer>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("PushNotificationsScreen")}
          >
            <SettingsContainer>
              <SettingsName>
                <Image source={require("../assets/images/push.png")} />
                <Name>Push Notifications</Name>
              </SettingsName>
              <Ionicons name={"chevron-forward"} color="#979797" size={28} />
            </SettingsContainer>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("PreferencesScreen")}
          >
            <SettingsContainer>
              <SettingsName>
                <Image source={require("../assets/images/pref.png")} />
                <Name>Preferences</Name>
              </SettingsName>
              <Ionicons name={"chevron-forward"} color="#979797" size={28} />
            </SettingsContainer>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("PriceAlertsScreen")}
          >
            <SettingsContainer>
              <SettingsName>
                <Image source={require("../assets/images/price.png")} />
                <Name>Price Alerts</Name>
              </SettingsName>
              <Ionicons name={"chevron-forward"} color="#979797" size={28} />
            </SettingsContainer>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("WalletConnectScreen")}
          >
            <SettingsContainer>
              <SettingsName>
                <Image source={require("../assets/images/connect.png")} />
                <Name>WalletConnect</Name>
              </SettingsName>
              <Ionicons name={"chevron-forward"} color="#979797" size={28} />
            </SettingsContainer>
          </TouchableOpacity>

          <JoinCommunityText>Join Community</JoinCommunityText>

          <SettingsContainer>
            <SettingsName>
              <Image source={require("../assets/images/helpcenter.png")} />
              <Name>Help Center</Name>
            </SettingsName>
            <Ionicons name={"chevron-forward"} color="#979797" size={28} />
          </SettingsContainer>
          <SettingsContainer>
            <SettingsName>
              <Image source={require("../assets/images/twitter.png")} />
              <Name>Twitter</Name>
            </SettingsName>
            <Ionicons name={"chevron-forward"} color="#979797" size={28} />
          </SettingsContainer>
          <SettingsContainer>
            <SettingsName>
              <Image source={require("../assets/images/telegram.png")} />
              <Name>Telegram</Name>
            </SettingsName>
            <Ionicons name={"chevron-forward"} color="#979797" size={28} />
          </SettingsContainer>
          <SettingsContainer>
            <SettingsName>
              <Image source={require("../assets/images/facebook.png")} />
              <Name>Facebook</Name>
            </SettingsName>
            <Ionicons name={"chevron-forward"} color="#979797" size={28} />
          </SettingsContainer>
          <SettingsContainer>
            <SettingsName>
              <Image source={require("../assets/images/reddit.png")} />
              <Name>Reddit</Name>
            </SettingsName>
            <Ionicons name={"chevron-forward"} color="#979797" size={28} />
          </SettingsContainer>
          <SettingsContainer>
            <SettingsName>
              <Image source={require("../assets/images/youtube.png")} />
              <Name>Youtube</Name>
            </SettingsName>
            <Ionicons name={"chevron-forward"} color="#979797" size={28} />
          </SettingsContainer>
          <SettingsContainer>
            <SettingsName>
              <Image source={require("../assets/images/about.png")} />
              <Name>About</Name>
            </SettingsName>
            <Ionicons name={"chevron-forward"} color="#979797" size={28} />
          </SettingsContainer>
        </Body>
      </Container>
    </ScrollView>
  );
};

export default SettingsScreen;

const Container = styled.View`
  flex: 1;
  background: #fff;
`;
const Header = styled.Text`
  background: #3275bb;
  padding: 20px 0 20px 20px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  width: 100%;
`;
const Body = styled.View`
  padding: 0 20px;
`;
const Wallet = styled.View`
  flex-direction: row;
  align-items: center;
`;
const WalletName = styled.Text`
  margin-right: 10px;
  color: #979797;
  font-size: 16px;
`;
const SettingsContainer = styled.View`
  width: 109%;
  padding-right: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;
const SettingsName = styled.View`
  flex-direction: row;
  padding: 20px 20px 20px 0;
`;
const Image = styled.Image`
  width: 30px;
  height: 30px;
`;
const Name = styled.Text`
  font-size: 18px;
  margin-left: 16px;
`;
const JoinCommunityText = styled.Text`
  color: #3275bb;
  font-weight: bold;
  margin: 35px 0 20px 0;
`;
