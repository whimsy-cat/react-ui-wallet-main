import React from "react";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";
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
  Dimensions,
} from "react-native";
const TokenDetailScreen = ({ navigation }) => {
  return (
    <Container>

      <Header>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name={"arrow-back"} color="#fff" size={28} />
        </TouchableOpacity>
        <HeaderText>Bitcoin BTC</HeaderText>
        <Continue></Continue>
      </Header>
      <Body>
        <CryptoDetailContainer>
          <CryptoCurrency>$22043.34</CryptoCurrency>
          <CryptoChange>-$1,599.66 -6.62%</CryptoChange>
          <ChartView>
            <LineChart
              data={{
                labels: ["2022.1", "2022.2", "2022.3", "2022.4", "2022.5", "2022.6"],
                datasets: [
                  {
                    data: [
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100
                    ]
                  }
                ]
              }}
              width={Dimensions.get("window").width * 0.85} // from react-native
              height={220}
              yAxisLabel="$"
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: "#ffffff",
                backgroundGradientFrom: "#ffffff",
                backgroundGradientTo: "#ffffff",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(30, 200, 200, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(30, 30, 30, ${opacity})`,
                style: {
                  borderRadius: 16
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#3ff726"
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

      </Body>
    </Container>
  );
};

export default TokenDetailScreen;

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
  font-size: 18px;
`;
const Continue = styled.Text`
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
`;
const CryptoDetailContainer = styled.View`
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
