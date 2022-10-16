import React, { useState, useEffect, useContext } from "react";
import { Ionicons, Feather } from "@expo/vector-icons";
import styled from "styled-components";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Linking } from "react-native";
import { Context } from "../reducers/store";

const BuyTokenDetailScreen = ({ navigation }) => {
  const [buyAmount, setBuyAmount] = React.useState(100);
  const [state, dispatch] = useContext(Context);
  const [buyPrice, setBuyPrice] = React.useState(100);
  const [tokenPrice, setTokenPrice] = React.useState(1);

  useEffect(() => {
    let price = state.CoinPrice[state.CoinSymbol.indexOf(state.BuyToken)];
    console.log(price);
    setTokenPrice(price);
  }, []);

  const handleCoinBaseClick = () => {
    console.log("opening...");
    Linking.canOpenURL(
      `https://pay.coinbase.com/buy/select-asset?appId=ab4b8829-a59d-44d3-accc-de77e4f18df2&attribution=extension&destinationWallets=%5B%7B%22address%22%3A%22${state.WalletAddress}%22%2C%22assets%22%3A%5B%22${state.BuyToken}%22%2C%22USDC%22%2C%22DAI%22%5D%7D%5D`
    ).then((supported) => {
      if (supported) {
        Linking.openURL(
          `https://pay.coinbase.com/buy/select-asset?appId=ab4b8829-a59d-44d3-accc-de77e4f18df2&attribution=extension&destinationWallets=%5B%7B%22address%22%3A%22${state.WalletAddress}%22%2C%22assets%22%3A%5B%22${state.BuyToken}%22%2C%22USDC%22%2C%22DAI%22%5D%7D%5D`
        );
      } else {
        console.log(
          `Don't know how to open URI: ` +
            `https://pay.coinbase.com/buy/select-asset?appId=ab4b8829-a59d-44d3-accc-de77e4f18df2&attribution=extension&destinationWallets=%5B%7B%22address%22%3A%22${state.WalletAddress}%22%2C%22assets%22%3A%5B%22${state.BuyToken}%22%2C%22USDC%22%2C%22DAI%22%5D%7D%5D`
        );
      }
    });
  };
  const handleTransakClick = () => {
    console.log(`opening...`);
    Linking.canOpenURL(
      `https://global.transak.com/?apiKey=25ac1309-a49b-4411-b20e-5e56c61a5b1c&hostURL=https%3A%2F%2Fmetamask.io&cryptoCurrencyList=ETH%2CUSDT%2CUSDC%2CDAI&defaultCryptoCurrency=${state.BuyToken}&networks=ethereum&walletAddress=${state.WalletAddress}`
    ).then((supported) => {
      if (supported) {
        Linking.openURL(
          `https://global.transak.com/?apiKey=25ac1309-a49b-4411-b20e-5e56c61a5b1c&hostURL=https%3A%2F%2Fmetamask.io&cryptoCurrencyList=ETH%2CUSDT%2CUSDC%2CDAI&defaultCryptoCurrency=${state.BuyToken}&networks=ethereum&walletAddress=${state.WalletAddress}`
        );
      } else {
        console.log(
          `Don't know how to open URI: ` +
            `https://global.transak.com/?apiKey=25ac1309-a49b-4411-b20e-5e56c61a5b1c&hostURL=https%3A%2F%2Fmetamask.io&cryptoCurrencyList=ETH%2CUSDT%2CUSDC%2CDAI&defaultCryptoCurrency=${state.BuyToken}&networks=ethereum&walletAddress=${state.WalletAddress}`
        );
      }
    });
  };
  const handleMoonPayClick = () => {
    console.log(`opening...`);
    Linking.canOpenURL(
      `https://buy.moonpay.com/?apiKey=pk_live_WbCpe6PxSIcGPCSd6lKCbJNRht7uy&walletAddress=${state.WalletAddress}&defaultCurrencyCode=eth&showOnlyCurrencies=eth%2Cusdt%2Cusdc%2Cdai&signature=UKNTu3Z0YsmtC6jPDTOZuQRU4gg%2FwN1tfCxDu3D2QpE%3D`
    ).then((supported) => {
      if (supported) {
        Linking.openURL(
          `https://buy.moonpay.com/?apiKey=pk_live_WbCpe6PxSIcGPCSd6lKCbJNRht7uy&walletAddress=${state.WalletAddress}&defaultCurrencyCode=eth&showOnlyCurrencies=eth%2Cusdt%2Cusdc%2Cdai&signature=UKNTu3Z0YsmtC6jPDTOZuQRU4gg%2FwN1tfCxDu3D2QpE%3D`
        );
      } else {
        console.log(
          `Don't know how to open URI: ` +
            `https://buy.moonpay.com/?apiKey=pk_live_WbCpe6PxSIcGPCSd6lKCbJNRht7uy&walletAddress=${state.WalletAddress}&defaultCurrencyCode=eth&showOnlyCurrencies=eth%2Cusdt%2Cusdc%2Cdai&signature=UKNTu3Z0YsmtC6jPDTOZuQRU4gg%2FwN1tfCxDu3D2QpE%3D`
        );
      }
    });
  };
  const handleWireClick = () => {
    console.log(`opening...`);
    Linking.canOpenURL(
      `https://pay.sendwyre.com/purchase?accountId=AC-7AG3W4XH4N2&utm_campaign=AC-7AG3W4XH4N2&destCurrency=${state.BuyToken}&utm_medium=widget&paymentMethod=debit-card&reservation=EAXZNRULNJRMYZZVM2EZ&autoRedirect=false&dest=ethereum%3A${state.WalletAddress}utm_source=checkout`
    ).then((supported) => {
      if (supported) {
        Linking.openURL(
          `https://pay.sendwyre.com/purchase?accountId=AC-7AG3W4XH4N2&utm_campaign=AC-7AG3W4XH4N2&destCurrency=${state.BuyToken}&utm_medium=widget&paymentMethod=debit-card&reservation=EAXZNRULNJRMYZZVM2EZ&autoRedirect=false&dest=ethereum%3A${state.WalletAddress}utm_source=checkout`
        );
      } else {
        console.log(
          `Don't know how to open URI: ` +
            `https://pay.sendwyre.com/purchase?accountId=AC-7AG3W4XH4N2&utm_campaign=AC-7AG3W4XH4N2&destCurrency=${state.BuyToken}&utm_medium=widget&paymentMethod=debit-card&reservation=EAXZNRULNJRMYZZVM2EZ&autoRedirect=false&dest=ethereum%3A${state.WalletAddress}utm_source=checkout`
        );
      }
    });
  };
  return (
    <ScrollView
      style={state.DarkMode && { backgroundColor: "#1a222d" }}
      showsVerticalScrollIndicator={false}
      bounces={true}
    >
      <Container style={state.DarkMode && { backgroundColor: "#1a222d" }}>
        <Header style={state.DarkMode && { backgroundColor: "#232f3d" }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name={"arrow-back"} color="#fff" size={28} />
          </TouchableOpacity>
          <HeaderText> Buy {state.BuyToken}</HeaderText>
        </Header>
        <Body>
          <Token style={state.DarkMode && { borderBottomColor: "#3a424d" }}>
            <TokenDetails>
              <Image
                source={
                  state.CoinImage[state.CoinSymbol.indexOf(state.BuyToken)]
                }
              />
              <TokenNamePrice>
                <TokenName style={state.DarkMode && { color: "#ccc" }}>
                  {state.BuyToken}
                </TokenName>
                <TokenPriceAction>
                  <TokenPrice>$1597</TokenPrice>
                  <TokenPercent>+0.0997 %</TokenPercent>
                </TokenPriceAction>
              </TokenNamePrice>
            </TokenDetails>
            <TokenCol2>
              <TokenAmount style={state.DarkMode && { color: "#fff" }}>
                {state.BuyToken == "ETH"
                  ? Number(state.CurrentETHBalance).toFixed(4)
                  : state.BuyToken == "BTC"
                  ? Number(state.CurrentBTCBalance).toFixed(4)
                  : state.BuyToken == "BNBB"
                  ? Number(state.CurrentBNBBBalance).toFixed(4)
                  : state.BuyToken == "BNBS"
                  ? Number(state.CurrentBNBSBalance).toFixed(4)
                  : state.BuyToken == "DOGE"
                  ? Number(state.CurrentDOGEBalance).toFixed(4)
                  : state.BuyToken == "XRP"
                  ? Number(state.CurrentXRPBalance).toFixed(4)
                  : state.BuyToken == "SOL"
                  ? Number(state.CurrentSOLBalance).toFixed(4)
                  : state.BuyToken == "ADA"
                  ? Number(state.CurrentADABalance).toFixed(4)
                  : Number(state.CurrentDOTBalance).toFixed(4)}
              </TokenAmount>
              <TokenSymbol style={state.DarkMode && { color: "#fff" }}>
                {state.BuyToken}
              </TokenSymbol>
            </TokenCol2>
          </Token>
          <BuyPrice style={state.DarkMode && { color: "#fff" }}>
            {state.Currency} {buyPrice}
          </BuyPrice>
          <BuyPriceCrypto style={state.DarkMode && { color: "#fff" }}>
            {state.BuyToken} {buyPrice / tokenPrice}
          </BuyPriceCrypto>

          <Actions>
            <TouchableOpacity onPress={() => setBuyPrice(buyPrice * 10 + 1)}>
              <NumButton style={state.DarkMode && { color: "#fff" }}>
                1
              </NumButton>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setBuyPrice(buyPrice * 10 + 2)}>
              <NumButton style={state.DarkMode && { color: "#fff" }}>
                2
              </NumButton>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setBuyPrice(buyPrice * 10 + 3)}>
              <NumButton style={state.DarkMode && { color: "#fff" }}>
                3
              </NumButton>
            </TouchableOpacity>
          </Actions>
          <Actions>
            <TouchableOpacity onPress={() => setBuyPrice(buyPrice * 10 + 4)}>
              <NumButton style={state.DarkMode && { color: "#fff" }}>
                4
              </NumButton>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setBuyPrice(buyPrice * 10 + 5)}>
              <NumButton style={state.DarkMode && { color: "#fff" }}>
                5
              </NumButton>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setBuyPrice(buyPrice * 10 + 6)}>
              <NumButton style={state.DarkMode && { color: "#fff" }}>
                6
              </NumButton>
            </TouchableOpacity>
          </Actions>
          <Actions>
            <TouchableOpacity onPress={() => setBuyPrice(buyPrice * 10 + 7)}>
              <NumButton style={state.DarkMode && { color: "#fff" }}>
                7
              </NumButton>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setBuyPrice(buyPrice * 10 + 8)}>
              <NumButton style={state.DarkMode && { color: "#fff" }}>
                8
              </NumButton>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setBuyPrice(buyPrice * 10 + 9)}>
              <NumButton style={state.DarkMode && { color: "#fff" }}>
                9
              </NumButton>
            </TouchableOpacity>
          </Actions>
          <Actions>
            <TouchableOpacity>
              <NumButton style={state.DarkMode && { color: "#fff" }}>
                .
              </NumButton>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setBuyPrice(buyPrice * 10 + 0)}>
              <NumButton style={state.DarkMode && { color: "#fff" }}>
                0
              </NumButton>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setBuyPrice((buyPrice - (buyPrice % 10)) / 10)}
            >
              <NumButton style={state.DarkMode && { color: "#fff" }}>
                <Feather
                  name="delete"
                  color={state.DarkMode ? "#fff" : "#000"}
                  size={20}
                />
              </NumButton>
            </TouchableOpacity>
          </Actions>
          {/* <CoinbaseImage source={require("../assets/images/coinbase.png")}></CoinbaseImage> */}
          <TouchableOpacity onPress={() => handleCoinBaseClick()}>
            <Button> Continue to CoinBase Pay </Button>
          </TouchableOpacity>
          {/* <Transak source={require("../assets/images/transak.png")}></Transak> */}
          <TouchableOpacity onPress={() => handleTransakClick()}>
            <Button> Continue to Transak </Button>
          </TouchableOpacity>
          {/* <MoonPay source={require("../assets/images/moonpay.png")}></MoonPay> */}
          <TouchableOpacity onPress={() => handleMoonPayClick()}>
            <Button> Continue to MoonPay </Button>
          </TouchableOpacity>
          {/* <Wire source={require("../assets/images/wyre.png")}></Wire> */}
          <TouchableOpacity onPress={() => handleWireClick()}>
            <Button> Continue to Wyre </Button>
          </TouchableOpacity>
        </Body>
      </Container>
    </ScrollView>
  );
};

export default BuyTokenDetailScreen;

const CoinbaseImage = styled.Image`
  margin-top: 30px;
  width: 350px;
  height: 150px;
`;
const Transak = styled.Image`
  margin-top: 30px;
  width: 370px;
  height: 220px;
`;
const MoonPay = styled.Image`
  margin-top: 30px;
  width: 370px;
  height: 220px;
`;
const Wire = styled.Image`
  margin-top: 30px;
  width: 370px;
  height: 280px;
`;
const CoinBaseInfo = styled.Text`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 30px;
`;
const CoinBaseHeder = styled.Text`
  margin: auto;
`;
const CoinBase = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: #3355cc;
`;
const CoinBaseRow = styled.View`
  width: 50%;
  margin: auto;
`;
const CoinBaseDetail = styled.Text`
  font-size: 20px;
  color: #989898;
`;
const CoinBaseSmallDetail = styled.Text`
  font-size: 15px;
  color: #989898;
`;
const Container = styled.View`
  flex: 1;
  background: #fff;
`;
const Header = styled.View`
  background: #3275bb;
  padding: 20px;
  flex-direction: row;
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

const BuyPrice = styled.Text`
  margin-top: 30px;
  text-align: center;
  color: #000;
  font-weight: bold;
  font-size: 50px;
`;

const BuyPriceCrypto = styled.Text`
  margin-top: 5px;
  text-align: center;
  color: #000;
  font-size: 20px;
`;

const Continue = styled.Text`
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
`;
const Body = styled.View`
  width: 90%;
  margin-left: 5%;
`;
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

const TokenDetails = styled.View`
  flex-direction: row;
`;
const TokenName = styled.Text`
  color: #3275bb;
  text-transform: uppercase;
  margin-left: 10px;
  font-weight: bold;
`;
const PriceUSD = styled.Text``;
const SText = styled.Text`
  margin: auto;
  margin-top: 100px;
  font-size: 50px;
`;

const CryptoInfo = styled.Text`
  margin: auto;
  margin-top: 5px;
  color: #555;
  font-size: 15px;
`;
const AmountInUSD = styled.Text`
  color: #979797;
`;
const Image = styled.Image`
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 20px;
  border-width: 1px;
  border-color: #fff;
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
const TokenPrice = styled.Text`
  font-size: 12px;
  color: #979797;
`;
const TokenPercent = styled.Text`
  font-size: 12px;
  color: #6eb8aa;
  margin-left: 8px;
`;

const PaymentButton = styled.Text`
  width: 300px;
  padding: 20px 0;
  border-radius: 5px;
  border-width: 1px;
  border-color: #dcdcdc;
  background: #3275bb;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  margin: 35px auto 0 auto;
`;

const Button = styled.Text`
  width: 300px;
  padding: 15px 0;
  background: #3275bb;
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  font-weight: bold;
  margin: 8px auto 5px auto;
`;

const Actions = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 350px;
`;

const NumButton = styled.Text`
  color: #000;
  padding: 15px;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
`;
