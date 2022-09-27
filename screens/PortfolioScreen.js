import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Dimensions, SafeAreaView, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { useNavigation } from "@react-navigation/native";
import { myCustomContractAdrress, myCustomSymbol, myCustomTokenName, myCustomTokenDecimals } from "./AddCustomTokenScreen";
import { Context } from '../reducers/store'

import "react-native-get-random-values"
import "@ethersproject/shims"

function FirstRoute() {
  const [state, dispatch] = useContext(Context);
  const navigation = useNavigation();

  const onDetailToken = (coin) => {
    dispatch({ type: 'SET_DETAILTOKEN', detailtoken: coin });
    navigation.navigate("TokenDetailScreen");
  }

  useEffect(() => {
    console.log(state.DarkMode);
  }, []);
  return (
    <First style={state.DarkMode && { backgroundColor: "#0c0c0c" }}>
      <ScrollView showsVerticalScrollIndicator={false} bounces={true}>
        {state.ImportedCoinFullName.map((coin, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => onDetailToken(coin)}
          >
            <Token style={state.DarkMode && { borderBottomColor: "#191919" }}>
              <TokenDetails>
                <Image source={state.CoinImage[state.CoinFullName.indexOf(state.ImportedCoinFullName[index])]} />
                <TokenNamePrice>
                  <TokenName style={state.DarkMode && { color: "#fff" }}>{coin}</TokenName>
                  <TokenPriceAction>
                    <TokenPrice style={state.DarkMode && { color: "#c3c3c3" }}>{state.CoinPrice[state.CoinFullName.indexOf(state.ImportedCoinFullName[index])]}</TokenPrice>
                    <TokenPercent>{state.CoinDailyChange[index] > 0 ? "+" : ""}{state.CoinDailyChange[index]} %</TokenPercent>
                  </TokenPriceAction>
                  <TokenAddress>{coin == "Ethereum" ||
                    coin == "BNB Beacon Chain" ||
                    coin == "BNB Smart Chain" ?
                    state.WalletAddress.toString().substring(0, 25).concat(" . . . ") :
                    coin == "Bitcoin" ?
                      state.BTCAddress.toString().substring(0, 25).concat(" . . .") :
                      coin == "DogeCoin" ?
                        state.DOGEAddress.toString().substring(0, 25).concat(" . . .") :
                        coin == "XRP" ?
                          state.XRPAddress.toString().substring(0, 25).concat(" . . .") :
                          coin == "Solana" ?
                            state.SOLAddress.toString().substring(0, 25).concat(" . . .") :
                            coin == "Cardano" ?
                              state.ADAAddress.toString().substring(0, 25).concat(" . . .") :
                              state.DOTAddress.toString().substring(0, 25).concat(" . . .")}
                  </TokenAddress>
                </TokenNamePrice>
              </TokenDetails>
              <TokenCol2>
                <TokenAmount style={state.DarkMode && { color: "#eee" }}>{coin == "Ethereum" ?
                  Number(state.CurrentETHBalance).toFixed(4) :
                  coin == "Bitcoin" ?
                    Number(state.CurrentBTCBalance).toFixed(4) :
                    Number(state.CurrentDOGEBalance).toFixed(4)}</TokenAmount>
                <TokenSymbol style={state.DarkMode && { color: "#eee" }}>{state.CoinSymbol[state.CoinFullName.indexOf(state.ImportedCoinFullName[index])]}</TokenSymbol>
              </TokenCol2>
            </Token>
          </TouchableOpacity>
        ))}
        {/* <TouchableOpacity
          onPress={() => navigation.navigate("TokenDetailScreen")}
        >
          <Token>
            <TokenDetails>
              <Image source={require("../assets/images/eth.png")} />
              <TokenNamePrice>
                <TokenName>Ethereum</TokenName>
                <TokenPriceAction>
                  <TokenPrice>${ethCoins.price}</TokenPrice>
                  <TokenPercent>{ethCoins.dailyChange > 0 ? "+" : "-"}{ethCoins.dailyChange} %</TokenPercent>
                </TokenPriceAction>
              </TokenNamePrice>
            </TokenDetails>
            <TokenCol2>
              <TokenAmount>{ethBalance}</TokenAmount>
              <TokenSymbol>ETH</TokenSymbol>
            </TokenCol2>
          </Token>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("TokenDetailScreen")}
        >
          <Token>
            <TokenDetails>
              <Image source={require("../assets/images/bnb.png")} />
              <TokenNamePrice>
                <TokenName>BNB Smart Chain</TokenName>
                <TokenPriceAction>
                  <TokenPrice>$268.10</TokenPrice>
                  <TokenPercent>+1.75%</TokenPercent>
                </TokenPriceAction>
              </TokenNamePrice>
            </TokenDetails>
            <TokenCol2>
              <TokenAmount>0</TokenAmount>
              <TokenSymbol>BNB</TokenSymbol>
            </TokenCol2>
          </Token>
        </TouchableOpacity> */}
        {(myCustomTokenName != "") && (<Token>
          <TokenDetails>
            <Image source={require("../assets/images/cardano.png")} />
            <TokenNamePrice>
              <TokenName>{myCustomTokenName}</TokenName>
              <TokenPriceAction>
                <TokenPrice>$0.514</TokenPrice>
                <TokenPercent>+0.75%</TokenPercent>
              </TokenPriceAction>
            </TokenNamePrice>
          </TokenDetails>
          <TokenCol2>
            <TokenAmount>0</TokenAmount>
            <TokenSymbol>{myCustomSymbol}</TokenSymbol>
          </TokenCol2>
        </Token>)}
        <TouchableOpacity
          onPress={() => navigation.navigate("AddCustomTokenScreen")}
        >
          <AddToken>
            <Ionicons name={"options-outline"} color="#979797" size={24} />
            <AddTokenText>Add Tokens</AddTokenText>
          </AddToken>
        </TouchableOpacity>
      </ScrollView>
    </First>
  );
}

function SecondRoute() {
  const [state, dispatch] = useContext(Context);
  return (
    <Second style={state.DarkMode && { backgroundColor: "#0c0c0c" }}>
      <ScrollView showsVerticalScrollIndicator={false} bounces={true}>
        <NftImage source={require("../assets/images/nft.png")} />
        <NftSubtext style={state.DarkMode && { color: "#eee" }}>Collectibles will appear here</NftSubtext>
        <NftRecieve>Recieve</NftRecieve>
        <OpenSeaCTA>Open on Opensea.io</OpenSeaCTA>
      </ScrollView>
    </Second>
  )
}

const initialLayout = { width: Dimensions.get("window").width };

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function PortfolioScreen({ navigation }) {

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Tokens" },
    { key: "second", title: "NFTs" },
  ]);
  const [state, dispatch] = useContext(Context);
  return (
    <Container style={state.DarkMode && { backgroundColor: "#151515" }} >
      <Header style={state.DarkMode && { backgroundColor: "#151515" }}>
        <WalletBalance>
          <Ionicons name={"notifications-outline"} color="#fff" size={28} />
          <Balance>$0.00</Balance>
          <TouchableOpacity
            onPress={() => navigation.navigate("ImportTokensScreen")}
          >
            <Ionicons name={"options-outline"} color="#fff" size={28} />
          </TouchableOpacity>
        </WalletBalance>
        <WalletName>Multi-Coin Wallet 1</WalletName>
        <HeaderActions>
          <TouchableOpacity
            onPress={() => navigation.navigate("SendTokenChoose")}
          >
            <Action>
              <Ionicons
                name={"arrow-up-outline"}
                color="#fff"
                size={28}
                style={{
                  backgroundColor: "#4781C0",
                  padding: 10,
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  textAlign: "center",
                }}
              />
              <ActionText>Send</ActionText>
            </Action>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("SearchRecieveTokensScreen")}
          >
            <Action>
              <Ionicons
                name={"arrow-down-outline"}
                color="#fff"
                size={28}
                style={{
                  backgroundColor: "#4781C0",
                  padding: 10,
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  textAlign: "center",
                }}
              />
              <ActionText>Recieve</ActionText>
            </Action>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("BuyTokensScreen")}
          >
            <Action>
              <Ionicons
                name={"pricetag-outline"}
                color="#fff"
                size={28}
                style={{
                  backgroundColor: "#4781C0",
                  padding: 10,
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  textAlign: "center",
                }}
              />
              <ActionText>Buy</ActionText>
            </Action>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("SwapScreen")}>
            <Action>
              <Ionicons
                name={"swap-horizontal-outline"}
                color="#fff"
                size={28}
                style={{
                  backgroundColor: "#4781C0",
                  padding: 10,
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  textAlign: "center",
                }}
              />
              <ActionText>Swap</ActionText>
            </Action>
          </TouchableOpacity>
        </HeaderActions>
      </Header>

      <Body style={state.DarkMode && { backgroundColor: "#151515" }}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          style={!state.DarkMode ? {
            marginTop: 3,
            backgroundColor: "#ffffff",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          } : {
            marginTop: 3,
            backgroundColor: "#000",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }
          }
          renderTabBar={(props) => (
            <TabBar
              {...props}
              // indicatorStyle={{ backgroundColor: '#695CFF' }}
              // style={{ backgroundColor: '#695CFF' }}
              tabStyle={state.DarkMode ? { backgroundColor: "#0c0c0c", minHeight: 30 } : { backgroundColor: "#fff", minHeight: 30 }} // here
              renderLabel={({ route, focused }) => (
                <Text
                  style={state.DarkMode ? {
                    color: "#fff",
                    margin: 8,
                  } : {
                    color: "#050505",
                    margin: 8,
                  }
                  }
                >
                  {route.title}
                </Text>
              )}
              activeColor="#695CFF"
              bounces
            />
          )}
        />
      </Body>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background: #3275bb;
`;
const DarkContainer = styled.View`
  flex: 1;
  background: #222222;
`;
const Body = styled.View`
  flex: 2.5;
  padding: 0;
  background: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
const Header = styled.View`
  flex: 1;
  font-size: 18px;
  background: #3275bb;
  text-align: center;
  align-items: center;
  padding: 20px 20px 20px 20px;
  width: 100%;
`;
const WalletBalance = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
const Balance = styled.Text`
  color: #fff;
  font-size: 30px;
`;
const WalletName = styled.Text`
  color: #ccddee;
  margin-top: 20px;
  font-size: 16px;
  text-align: center;
`;
const HeaderActions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  /* padding: 0 40px; */
  padding: 0 10px;
  width: 100%;
  position: absolute;
  bottom: 20px;
`;
const Action = styled.View`
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
const TokenDetails = styled.View`
  flex-direction: row;
`;
const ActionText = styled.Text`
  color: #fff;
  margin-top: 10px;
  font-size: 12px;
`;

const First = styled.View`
  flex: 1;
  background: #fff;
  padding: 0 20px;
`;

const Second = styled.View`
  flex: 1;
  background: #fff;
  padding: 0 20px;
  align-items: center;
`;

const Token = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #f1f1f1;
`;
const TokenNamePrice = styled.View`
  margin-left: 15px;
`;
const TokenPriceAction = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;
const TokenAmount = styled.Text`
  font-size: 18px;
`;
const TokenSymbol = styled.Text`
  font-size: 18px;
  margin-left: 5px;
`;
const TokenCol2 = styled.View`
  flex-direction: row;
  align-items: center;
`;
const TokenName = styled.Text`
  font-size: 16px;
`;
const TokenPrice = styled.Text`
  font-size: 12px;
  color: #979797;
`;
const TokenAddress = styled.Text`
  font-size: 12px;
  color:#777777;
`
const TokenPercent = styled.Text`
  font-size: 12px;
  color: #6eb8aa;
  margin-left: 8px;
`;
const AddToken = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 30px auto 30px auto;
`;
const AddTokenText = styled.Text`
  color: #979797;
  font-size: 16px;
  font-weight: bold;
  margin-left: 8px;
`;
const Image = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;
const NftImage = styled.Image`
  width: 150px;
  height: 150px;
  margin: 20px auto 0 auto;
`;
const NftSubtext = styled.Text`
  text-align: center;
  margin-top: 20px;
  font-size: 16px;
  color: #979797;
`;
const NftRecieve = styled.Text`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #3275bb;
  margin-top: 14px;
`;
const OpenSeaCTA = styled.Text`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #3275bb;
  margin-top: 40px;
`;
