import React, { useContext, useEffect, useState } from "react";
import { Switch, Linking, AsyncStorage } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Context } from '../reducers/store'

const SettingsScreen = ({ navigation }) => {
  const [state, dispatch] = useContext(Context);
  const [dark, setDark] = useState(state.DarkMode);

  const onHandleChange = () => {
    setDark(!dark);
  }

  const onHelpCenter = () => {
    Linking.canOpenURL('https://support.trustwallet.io/').then(supported => {
      if (supported) {
        Linking.openURL('https://support.trustwallet.io/');
      } else {
        console.log(`Don't know how to open URI: ` + 'https://support.trustwallet.io/');
      }
    })
  }

  const onTwitter = () => {
    Linking.canOpenURL('https://twitter.com/').then(supported => {
      if (supported) {
        Linking.openURL('https://twitter.com/');
      } else {
        console.log(`Don't know how to open URI: ` + 'https://twitter.com/');
      }
    })
  }

  const onFacebook = () => {
    Linking.canOpenURL('https://facebook.com/').then(supported => {
      if (supported) {
        Linking.openURL('https://facebook.com/');
      } else {
        console.log(`Don't know how to open URI: ` + 'https://facebook.com/');
      }
    })
  }

  const onAbout = () => {
    Linking.canOpenURL('https://support.trustwallet.io/About').then(supported => {
      if (supported) {
        Linking.openURL('https://support.trustwallet.io/About');
      } else {
        console.log(`Don't know how to open URI: ` + 'https://support.trustwallet.io/About');
      }
    })
  }

  const onTelegram = () => {
    Linking.canOpenURL('https://telegram.org/trustwallet').then(supported => {
      if (supported) {
        Linking.openURL('https://telegram.org/trustwallet');
      } else {
        console.log(`Don't know how to open URI: ` + 'https://telegram.org/trustwallet');
      }
    })
  }

  const onYoutube = () => {
    Linking.canOpenURL('https://youtube.com/').then(supported => {
      if (supported) {
        Linking.openURL('https://youtube.com/');
      } else {
        console.log(`Don't know how to open URI: ` + 'https://youtube.com/');
      }
    })
  }

  const onReddit = () => {
    Linking.canOpenURL('https://reddit.com/').then(supported => {
      if (supported) {
        Linking.openURL('https://reddit.com/');
      } else {
        console.log(`Don't know how to open URI: ` + 'https://reddit.com/');
      }
    })
  }

  const setStorageData = async () => {
    try {
      await AsyncStorage.setItem("@darkmode", dark.toString());
      console.log('Dark Mode Info Successfuly Saved to Local Storage.')
    } catch (e) {
      console.log('Failed To Save Data to Local Storage!!!');
    }
  }
  // useEffect(() => {
  //   setDark(state.DarkMode);
  // }, [])

  useEffect(() => {
    dispatch({ type: 'SET_DARKMODE', darkmode: dark });
    setStorageData();
  }, [dark])
  return (
    <ScrollView showsVerticalScrollIndicator={false} bounces={true}>
      <Container style={state.DarkMode && { backgroundColor: "#1a222d" }}>
        <Header style={state.DarkMode && { backgroundColor: "#232f3d", color: "#fff" }}>Settings</Header>
        <Body>
          <TouchableOpacity
            onPress={() => navigation.navigate("WalletsScreen")}
          >
            <SettingsContainer style={state.DarkMode && { borderBottomColor: "#353535" }} >
              <SettingsName>
                <Image source={require("../assets/images/wallet.png")} />
                <Name style={state.DarkMode && { color: "#fff" }}>Wallets</Name>
              </SettingsName>
              <Wallet>
                <WalletName style={state.DarkMode && { color: "#aaa" }}>Multi-Coin Wallet 1</WalletName>
                <Ionicons name={"chevron-forward"} color="#979797" size={28} />
              </Wallet>
            </SettingsContainer>
          </TouchableOpacity>

          <SettingsContainer style={state.DarkMode && { borderBottomColor: "#353535" }} >
            <SettingsName>
              <Image source={require("../assets/images/dark.png")} />
              <Name style={state.DarkMode && { color: "#fff" }}>Dark Mode</Name>
            </SettingsName>
            <Switch value={dark} onValueChange={() => onHandleChange()} />
          </SettingsContainer>

          <TouchableOpacity
            onPress={() => navigation.navigate("SecurityScreen")}
          >
            <SettingsContainer style={state.DarkMode && { borderBottomColor: "#353535" }} >
              <SettingsName>
                <Image source={require("../assets/images/security.png")} />
                <Name style={state.DarkMode && { color: "#fff" }}>Security</Name>
              </SettingsName>
              <Ionicons name={"chevron-forward"} color="#979797" size={28} />
            </SettingsContainer>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("PushNotificationsScreen")}
          >
            <SettingsContainer style={state.DarkMode && { borderBottomColor: "#353535" }} >
              <SettingsName>
                <Image source={require("../assets/images/push.png")} />
                <Name style={state.DarkMode && { color: "#fff" }}>Push Notifications</Name>
              </SettingsName>
              <Ionicons name={"chevron-forward"} color="#979797" size={28} />
            </SettingsContainer>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("PreferencesScreen")}
          >
            <SettingsContainer style={state.DarkMode && { borderBottomColor: "#353535" }} >
              <SettingsName>
                <Image source={require("../assets/images/pref.png")} />
                <Name style={state.DarkMode && { color: "#fff" }}>Preferences</Name>
              </SettingsName>
              <Ionicons name={"chevron-forward"} color="#979797" size={28} />
            </SettingsContainer>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("PriceAlertsScreen")}
          >
            <SettingsContainer style={state.DarkMode && { borderBottomColor: "#353535" }} >
              <SettingsName>
                <Image source={require("../assets/images/price.png")} />
                <Name style={state.DarkMode && { color: "#fff" }}>Price Alerts</Name>
              </SettingsName>
              <Ionicons name={"chevron-forward"} color="#979797" size={28} />
            </SettingsContainer>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("WalletConnectScreen")}
          >
            <SettingsContainer style={state.DarkMode && { borderBottomColor: "#353535" }} >
              <SettingsName>
                <Image source={require("../assets/images/connect.png")} />
                <Name style={state.DarkMode && { color: "#fff" }}>WalletConnect</Name>
              </SettingsName>
              <Ionicons name={"chevron-forward"} color="#979797" size={28} />
            </SettingsContainer>
          </TouchableOpacity>

          <JoinCommunityText>Join Community</JoinCommunityText>

          <TouchableOpacity onPress={() => onHelpCenter()}>
            <SettingsContainer style={state.DarkMode && { borderBottomColor: "#353535" }} >
              <SettingsName>
                <Image source={require("../assets/images/helpcenter.png")} />
                <Name style={state.DarkMode && { color: "#fff" }}>Help Center</Name>
              </SettingsName>
              <Ionicons name={"chevron-forward"} color="#979797" size={28} />
            </SettingsContainer>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onTwitter()}>
            <SettingsContainer style={state.DarkMode && { borderBottomColor: "#353535" }} >
              <SettingsName>
                <Image source={require("../assets/images/twitter.png")} />
                <Name style={state.DarkMode && { color: "#fff" }}>Twitter</Name>
              </SettingsName>
              <Ionicons name={"chevron-forward"} color="#979797" size={28} />
            </SettingsContainer>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onTelegram()}>
            <SettingsContainer style={state.DarkMode && { borderBottomColor: "#353535" }} >
              <SettingsName>
                <Image source={require("../assets/images/telegram.png")} />
                <Name style={state.DarkMode && { color: "#fff" }}>Telegram</Name>
              </SettingsName>
              <Ionicons name={"chevron-forward"} color="#979797" size={28} />
            </SettingsContainer>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onFacebook()}>
            <SettingsContainer style={state.DarkMode && { borderBottomColor: "#353535" }} >
              <SettingsName>
                <Image source={require("../assets/images/facebook.png")} />
                <Name style={state.DarkMode && { color: "#fff" }}>Facebook</Name>
              </SettingsName>
              <Ionicons name={"chevron-forward"} color="#979797" size={28} />
            </SettingsContainer>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onReddit()}>
            <SettingsContainer style={state.DarkMode && { borderBottomColor: "#353535" }} >
              <SettingsName>
                <Image source={require("../assets/images/reddit.png")} />
                <Name style={state.DarkMode && { color: "#fff" }}>Reddit</Name>
              </SettingsName>
              <Ionicons name={"chevron-forward"} color="#979797" size={28} />
            </SettingsContainer>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onYoutube()}>
            <SettingsContainer style={state.DarkMode && { borderBottomColor: "#353535" }} >
              <SettingsName>
                <Image source={require("../assets/images/youtube.png")} />
                <Name style={state.DarkMode && { color: "#fff" }}>Youtube</Name>
              </SettingsName>
              <Ionicons name={"chevron-forward"} color="#979797" size={28} />
            </SettingsContainer>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onAbout()}>
            <SettingsContainer style={state.DarkMode && { borderBottomColor: "#353535" }} >
              <SettingsName>
                <Image source={require("../assets/images/about.png")} />
                <Name style={state.DarkMode && { color: "#fff" }}>About</Name>
              </SettingsName>
              <Ionicons name={"chevron-forward"} color="#979797" size={28} />
            </SettingsContainer>
          </TouchableOpacity>
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
  width: 25px;
  height: 25px;
  border-radius: 5px;
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
