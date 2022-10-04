import React, { useState, useContext, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Context } from '../reducers/store'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import {
  View,
  Text,
  Switch,
  Dimensions,
} from "react-native";
import { Description } from "@ethersproject/properties";

const TokenDetailScreen = ({ navigation }) => {
  const [state, dispatch] = useContext(Context);
  const [price, setPrice] = React.useState(0.0);
  const [chart, setChart] = React.useState(["100", "200"]);
  const [dailyChange, setDailyChange] = React.useState(0.0);

  let min = 9999;

  useEffect(() => {
    setPrice(Number(state.CoinPrice[state.CoinFullName.indexOf(state.DetailToken)]));
    setDailyChange(Number(state.CoinDailyChange[state.CoinFullName.indexOf(state.DetailToken)]));
    console.log("price: " + price);
    console.log("dailychage: " + dailyChange);
    let tPrice = Number(state.CoinPrice[state.CoinFullName.indexOf(state.DetailToken)]);
    let tDailyChange = Number(state.CoinDailyChange[state.CoinFullName.indexOf(state.DetailToken)]);
    let tmpArray = [];
    for (var i = 0; i < 10; i++) {
      tmpArray[i] = tPrice + (Math.random() - 1) * tPrice * tDailyChange;
      if (min > tmpArray[i])
        min = tmpArray[i];
    }
    setChart(tmpArray);
  }, [])

  useEffect(() => {
    console.log(chart);
  }, [chart]);


  return (
    <Container style={state.DarkMode && { backgroundColor: "#151515" }}>
      <Header style={state.DarkMode && { backgroundColor: "#0c0c0c", color: "#fff" }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name={"arrow-back"} color="#fff" size={28} />
        </TouchableOpacity>
        <HeaderText>{state.DetailToken}</HeaderText>
        <Continue></Continue>
      </Header>
      <Body>
        <CryptoDetailContainer>
          <CryptoCurrency style={state.DarkMode && { color: "#eee" }}>${price}</CryptoCurrency>
          <CryptoChange>{dailyChange > 0 ? "$" : "- $"}{Math.abs(price * dailyChange).toFixed(2)}  {dailyChange > 0 ? `+${dailyChange}` : `-${dailyChange}`}%</CryptoChange>
          <ChartView>
            <LineChart
              data={{
                labels: [],
                datasets: [
                  {
                    data: chart
                  }
                ]
              }}
              segments={5}
              width={Dimensions.get("window").width * 0.85} // from react-native
              height={220}
              yAxisLabel="$"
              yAxisInterval={10} // optional, defaults to 1
              chartConfig={{
                backgroundColor: state.DarkMode ? "#000" : "#fff",
                backgroundGradientFrom: state.DarkMode ? "#151515" : "#fff",
                backgroundGradientTo: state.DarkMode ? "#151515" : "#fff",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => state.DarkMode ? "#5f7" : "#5fa",
                labelColor: (opacity = 1) => state.DarkMode ? "#eee" : "#333",
                style: {
                  borderRadius: 16
                },
                propsForDots: {
                  r: "0",
                  strokeWidth: "2",
                  stroke: "#80c796"
                }
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16
              }}
            />
          </ChartView>
        </CryptoDetailContainer>
        <CryptoSetting>
          <PriceAlert>
            <PriceAlertLabel style={state.DarkMode && { color: "#eee" }}>
              Price Alert
            </PriceAlertLabel>
            <PriceAlertSwitch>
              <Switch />
            </PriceAlertSwitch>
          </PriceAlert>
          <PriceDescription>
            {state.DetailToken} is a cryptocurrency and worldwide payment system. It is the first decentralized digital currency, as the system works without a central bank or single administrator.
          </PriceDescription>
          <PriceAlert>
            <PriceAlertLabel style={state.DarkMode && { color: "#eee" }}>
              Website
            </PriceAlertLabel>
            <PriceAlertLink>
              {state.DetailToken}.org
            </PriceAlertLink>
          </PriceAlert>
          <PriceAlert>
            <PriceAlertLabel style={state.DarkMode && { color: "#eee" }}>
              Explorer
            </PriceAlertLabel>
            <PriceAlertLink>
              {state.DetailToken}.info
            </PriceAlertLink>
          </PriceAlert>
        </CryptoSetting>
      </Body>
    </Container>
  );
};

export default TokenDetailScreen;

const PriceAlert = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const PriceAlertLabel = styled.Text`
  margin-top: 10px;
  font-size: 15px;
  color: #0f0f0f;
`;
const PriceAlertSwitch = styled.View`

`;
const PriceAlertLink = styled.Text`
  color: #7f7f7f;

`;
const PriceDescription = styled.Text`
  color: #7f7f7f;
  font-size: 14px;
`;
const Container = styled.View`
  flex: 1;
  background: #fff;
`;
const Body = styled.View``;

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
  font-size: 26px;
`;
const Continue = styled.Text`
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
`;
const CryptoDetailContainer = styled.View`
  padding: 20px;
  margin: 10px 10px;
  border-radius: 10px;
  border-color: #efefef;
  border-width: 1px;
`;
const CryptoSetting = styled.View`
  padding: 20px;
  margin: 20px 10px;
  border-radius: 10px;
  border-color: #efefef;
  border-width: 1px;
`;
const ChartView = styled.View`
  width: 100%;
`
const CryptoCurrency = styled.Text`
  text-align: center;
  font-size: 30px;
`;
const CryptoChange = styled.Text`
  text-align: center;
  font-size: 12px;
  color: #999999;
`;
const Token1 = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: #eaeaea;
  padding-bottom: 30px;
`;
const Token2 = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 30px;
`;
const InputContainer = styled.View``;
const SmallInfoText = styled.Text`
  color: #979797;
  font-size: 16px;
`;
const Input = styled.TextInput`
  font-size: 28px;
  margin: 10px 0;
  overflow: hidden;
  width: 150px;
`;
const BalanceInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Balance = styled.Text`
  font-size: 16px;
  color: #979797;
`;
const BalanceNumber = styled.Text`
  margin-left: 5px;
  font-size: 16px;
  color: #979797;
`;
const BalanceToken = styled.Text`
  margin-left: 5px;
  font-size: 16px;
  color: #979797;
  text-transform: uppercase;
`;
const TokenSelect = styled.View`
  flex-direction: row;
  align-items: center;
`;
const TokenName = styled.Text`
  font-size: 18px;
  margin-left: 10px;
  text-transform: uppercase;
`;
const Image = styled.Image`
  width: 40px;
  height: 40px;
`;
const Slippage = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;
const SlippagePercent = styled.Text`
  background: #f2f5fa;
  color: #3275bb;
  text-align: center;
  padding: 8px;
  width: 85px;
  height: 40px;
  border-radius: 10px;
`;
const Conversion = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 20px auto 0 auto;
`;
const TokenOne = styled.View`
  flex-direction: row;
  align-items: center;
`;
const TokenTwo = styled.View`
  flex-direction: row;
  align-items: center;
`;
const One = styled.Text`
  font-size: 16px;
  color: #979797;
`;
const PayToken = styled.Text`
  margin-left: 5px;
  font-size: 16px;
  color: #979797;
`;
const Equals = styled.Text`
  margin: 0 5px;
  font-size: 16px;
  color: #979797;
`;
const TokenTwoConverted = styled.Text`
  font-size: 16px;
  color: #979797;
`;
const GetToken = styled.Text`
  margin-left: 5px;
  font-size: 16px;
  color: #979797;
`;
const Button = styled.Text`
  width: 300px;
  padding: 20px 0;
  background: #3275bb;
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  margin: 40px auto 0 auto;
`;
