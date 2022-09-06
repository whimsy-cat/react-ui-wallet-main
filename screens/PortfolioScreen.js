import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Dimensions, SafeAreaView, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { useNavigation } from "@react-navigation/native";

import "react-native-get-random-values"
import "@ethersproject/shims"
import { ethers } from "ethers";
const provider = ethers.getDefaultProvider();

//var url = 'HTTP://127.0.0.1:7545';
//const provider = new ethers.providers.JsonRpcProvider(url, { chainId: 1337 });

function FirstRoute() {
  const [ethBalance, setEthBalance] = useState("0.0");
  const [ethCoins, setEthCoins] = useState([]);
  const [bitCoins, setBitCoins] = useState([]);
  const navigation = useNavigation();

  const getBalance = async (address) => {
    console.log(address);
    const balance = await provider.getBalance(address);
    const balanceInEth = ethers.utils.formatEther(balance);
    setEthBalance(balanceInEth);
    console.log(balanceInEth);
  }
  const loadData = async () => {
    const res = await fetch(
      "https://api.poloniex.com/markets/eth_usdt/price"
    );
    const data = await res.json();
    setEthCoins(data);

    const res1 = await fetch(
      "https://api.poloniex.com/markets/btc_usdt/price"
    );
    const data1 = await res1.json();
    setBitCoins(data1);
  };

  useEffect(() => {
    getBalance("0x35fD12f4ED2Eb8678710063795A7a20d32541aa0"); // wallet address
    loadData();
  }, []);
  return (
    <First>
      <ScrollView showsVerticalScrollIndicator={false} bounces={true}>
        <Token>
          <TokenDetails>
            <Image source={require("../assets/images/bitcoin.png")} />
            <TokenNamePrice>
              <TokenName>Bitcoin</TokenName>
              <TokenPriceAction>
                <TokenPrice>${bitCoins.price}</TokenPrice>
                <TokenPercent>{bitCoins.dailyChange > 0 ? "+" : ""} {bitCoins.dailyChange} %</TokenPercent>
              </TokenPriceAction>
            </TokenNamePrice>
          </TokenDetails>
          <TokenCol2>
            <TokenAmount>0</TokenAmount>
            <TokenSymbol>BTC</TokenSymbol>
          </TokenCol2>
        </Token>
        <Token>
          <TokenDetails>
            <Image source={require("../assets/images/ethereum.png")} />
            <TokenNamePrice>
              <TokenName>Ethereum</TokenName>
              <TokenPriceAction>
                <TokenPrice>${ethCoins.price}</TokenPrice>
                <TokenPercent>{ethCoins.dailyChange > 0 ? "+" : "-"} {ethCoins.dailyChange} %</TokenPercent>
              </TokenPriceAction>
            </TokenNamePrice>
          </TokenDetails>
          <TokenCol2>
            <TokenAmount>{ethBalance}</TokenAmount>
            <TokenSymbol>ETH</TokenSymbol>
          </TokenCol2>
        </Token>
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

const SecondRoute = () => (
  <Second>
    <ScrollView showsVerticalScrollIndicator={false} bounces={true}>
      <NftImage source={require("../assets/images/nft.png")} />
      <NftSubtext>Collectibles will appear here</NftSubtext>
      <NftRecieve>Recieve</NftRecieve>
      <OpenSeaCTA>Open on Opensea.io</OpenSeaCTA>
    </ScrollView>
  </Second>
);

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
  return (
    <Container>
      <Header>
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
            onPress={() => navigation.navigate("SendTokenFormScreen")}
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
            onPress={() => navigation.navigate("RecieveTokenScreen")}
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

      <Body>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          style={{
            marginTop: 3,
            backgroundColor: "#ffffff",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
          renderTabBar={(props) => (
            <TabBar
              {...props}
              // indicatorStyle={{ backgroundColor: '#695CFF' }}
              // style={{ backgroundColor: '#695CFF' }}
              tabStyle={{ backgroundColor: "#fff", minHeight: 30 }} // here
              renderLabel={({ route, focused }) => (
                <Text
                  style={{
                    color: "#000",
                    margin: 8,
                  }}
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
const TokenPercent = styled.Text`
  font-size: 12px;
  color: #6eb8aa;
  margin-left: 8px;
`;
const AddToken = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 30px auto 0 auto;
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
