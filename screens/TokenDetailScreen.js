import React, { useState, useContext, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Context } from "../reducers/store";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { View, Text, Switch, Dimensions } from "react-native";
import { Description } from "@ethersproject/properties";

import Transaction from "../components/Transaction";

const TokenDetailScreen = ({ navigation }) => {
  const [state, dispatch] = useContext(Context);
  const [price, setPrice] = React.useState(0.0);
  const [chart, setChart] = React.useState(["100", "200"]);
  const [dailyChange, setDailyChange] = React.useState(0.0);
  const [transactionAddrs, setTransactionAddr] = React.useState([]);
  const [transactionValues, setTransactionValue] = React.useState([]);
  const [address, setAddress] = React.useState("");
  const [transaction, setTransaction] = useState(false);
  const [currentUSD, setCurrentUSD] = useState(0.0);

  let min = 9999;

  useEffect(() => {
    setPrice(
      Number(state.CoinPrice[state.CoinFullName.indexOf(state.DetailToken)])
    );
    setDailyChange(
      Number(
        state.CoinDailyChange[state.CoinFullName.indexOf(state.DetailToken)]
      )
    );
    console.log("price: " + price);
    console.log("dailychage: " + dailyChange);
    let tPrice = Number(
      state.CoinPrice[state.CoinFullName.indexOf(state.DetailToken)]
    );
    let tDailyChange = Number(
      state.CoinDailyChange[state.CoinFullName.indexOf(state.DetailToken)]
    );
    let tmpArray = [];
    for (var i = 0; i < 10; i++) {
      tmpArray[i] = tPrice + (Math.random() - 1) * tPrice * tDailyChange;
      if (min > tmpArray[i]) min = tmpArray[i];
    }
    setChart(tmpArray);
    let currentUSD =
      state.DetailToken == "Ethereum"
        ? Number(state.CurrentETHBalance).toFixed(4)
        : state.DetailToken == "BNB Beacon Chain"
        ? Number(state.CurrentBNBBBalance).toFixed(4)
        : state.DetailToken == "BNB Smart Chain"
        ? Number(state.CurrentBNBSBalance).toFixed(4)
        : state.DetailToken == "Bitcoin"
        ? Number(state.CurrentBTCBalance).toFixed(4)
        : state.DetailToken == "DogeCoin"
        ? Number(state.CurrentDOGEBalance).toFixed(4)
        : state.DetailToken == "XRP"
        ? Number(state.CurrentXRPBalance).toFixed(4)
        : state.DetailToken == "Solana"
        ? Number(state.CurrentSOLBalance).toFixed(4)
        : state.DetailToken == "Cardano"
        ? Number(state.CurrentADABalance).toFixed(4)
        : Number(state.CurrentDOTBalance).toFixed(4);
    setCurrentUSD(currentUSD);

    let address =
      state.DetailToken == "Ethereum" ||
      state.DetailToken == "BNB Beacon Chain" ||
      state.DetailToken == "BNB Smart Chain"
        ? state.WalletAddress.toString()
        : state.DetailToken == "Bitcoin"
        ? state.BTCAddress.toString()
        : state.DetailToken == "DogeCoin"
        ? state.DOGEAddress.toString()
        : state.DetailToken == "XRP"
        ? state.XRPAddress.toString()
        : state.DetailToken == "Solana"
        ? state.SOLAddress.toString()
        : state.DetailToken == "Cardano"
        ? state.ADAAddress.toString()
        : state.DOTAddress.toString();
    setAddress(address);
    if (state.DetailToken == "Ethereum") getETHTransaction(address);
    else if (state.DetailToken == "Bitcoin") getBTCTransaction(address);
    else if (state.DetailToken == "DogeCoin") getDOGETransaction(address);
    else if (state.DetailToken == "XRP") getXRPTransaction(address);
    else if (state.DetailToken == "Solana") getSOLTransaction(address);
    else if (state.DetailToken == "Cardano") getADATransaction(address);
    else if (state.DetailToken == "Pokadot") getDOTTransaction(address);
    else getBNBTransaction(address);
  }, []);

  useEffect(() => {
    console.log(chart);
  }, [chart]);

  const getETHTransaction = async (address) => {
    console.log("Loading transactions ...");
    const query = new URLSearchParams({ pageSize: "10" }).toString();
    const resp = await fetch(
      `https://api-eu1.tatum.io/v3/ethereum/account/transaction/${address}?${query}`,
      {
        method: "GET",
        headers: {
          "x-api-key": "57e98f74-9e98-4391-80d1-f1532cecf4fd",
        },
      }
    );
    const data = await resp.json();
    let transactionAddr = [];
    let transactionValue = [];
    console.log("ETH transaction : " + data.length);
    for (var i = 0; i < data.length; i++) {
      transactionAddr.push(data[i]["from"]);
      transactionValue.push(Number(data[i]["value"]) / 1000000000000000000);
    }
    console.log("**** : " + transactionAddr);
    console.log("//// : " + transactionValue);
    setTransactionAddr(transactionAddr);
    setTransactionValue(transactionValue);
  };
  const getBTCTransaction = async (address) => {
    const query = new URLSearchParams({ pageSize: "1" }).toString();
    const resp = await fetch(
      `https://api-eu1.tatum.io/v3/bitcoin/transaction/address/${address}?${query}`,
      {
        method: "GET",
        headers: {
          "x-api-key": "57e98f74-9e98-4391-80d1-f1532cecf4fd",
        },
      }
    );
    const data = await resp.json();
    let transactionAddr = [];
    let transactionValue = [];
    console.log(
      "BTC transaction : " +
        (data[0]["inputs"].length + data[0]["outputs"].length)
    );

    for (var i = 0; i < data[0]["inputs"].length; i++) {
      var input = data[0]["inputs"][i];
      var addr = input["coin"]["address"];
      var balance = Number(input["coin"]["value"]) / 1000000000;
      transactionAddr.push(addr);
      transactionValue.push(balance);
    }
    for (i = 0; i < data[0]["outputs"].length; i++) {
      var output = data[0]["outputs"][i];
      var outaddr = output["address"];
      var outbalance = Number(output["value"]) / 1000000000;
      transactionAddr.push(outaddr);
      transactionValue.push(outbalance);
    }
    console.log(transactionAddr);
    console.log(transactionValue);
  };
  const getXRPTransaction = async (address) => {
    const resp = await fetch(
      `https://api-eu1.tatum.io/v3/xrp/account/tx/${address}`,
      {
        method: "GET",
        headers: {
          "x-api-key": "57e98f74-9e98-4391-80d1-f1532cecf4fd",
        },
      }
    );
    const data = await resp.json();
    let transactionAddr = [];
    let transactionValue = [];
    console.log("XRP transaction : " + data["transactions"].length);
    for (var i = 0; i < data["transactions"].length; i++) {
      let transaction = data["transactions"][i];
      var tx = transaction["tx"];
      var takerGets = tx["TakerGets"];

      transactionAddr.push(tx["Account"]);
      transactionValue.push(
        (Number(takerGets["value"]) * 0.274366675).toFixed(4)
      );
    }
    console.log(transactionAddr);
    console.log(transactionValue);
  };

  const getSOLTransaction = async (address) => {
    if (!transaction) return;
    const resp = await fetch(
      `https://api-eu1.tatum.io/v3/solana/block/155378575`,
      {
        method: "GET",
        headers: {
          "x-api-key": "57e98f74-9e98-4391-80d1-f1532cecf4fd",
        },
      }
    );
    const data = await resp.json();
    let transactionAddr = [];
    let transactionValue = [];
    console.log("SOL transaction : " + data["transactions"].length);
    for (var i = 0; i < data["transactions"].length; i++) {
      let transaction = data["transactions"][i];
      var meta = transaction["meta"];
      var tranx = transaction["transaction"];
      var message = tranx["message"];

      transactionAddr.push(message["accountKeys"][0]);
      transactionValue.push(
        (Number(meta["postBalances"][0]) / 1000000000).toFixed(4)
      );
    }
    console.log(transactionAddr);
    console.log(transactionValue);
  };

  const getBSCTransaction = async (address) => {
    if (!transaction) return;
    const resp = await fetch(
      `https://api-eu1.tatum.io/v3/solana/block/155378575`,
      {
        method: "GET",
        headers: {
          "x-api-key": "57e98f74-9e98-4391-80d1-f1532cecf4fd",
        },
      }
    );
    const data = await resp.json();
    let transactionAddr = [];
    let transactionValue = [];
    console.log("SOL transaction : " + data["transactions"].length);
    for (var i = 0; i < data["transactions"].length; i++) {
      let transaction = data["transactions"][i];
      var meta = transaction["meta"];
      var tranx = transaction["transaction"];
      var message = tranx["message"];

      transactionAddr.push(message["accountKeys"][0]);
      transactionValue.push(
        (Number(meta["postBalances"][0]) / 1000000000).toFixed(4)
      );
    }
    console.log(transactionAddr);
    console.log(transactionValue);
  };

  const getBBCTransaction = async (address) => {
    if (!transaction) return;
    const resp = await fetch(
      `https://api-eu1.tatum.io/v3/solana/block/155378575`,
      {
        method: "GET",
        headers: {
          "x-api-key": "57e98f74-9e98-4391-80d1-f1532cecf4fd",
        },
      }
    );
    const data = await resp.json();
    let transactionAddr = [];
    let transactionValue = [];
    console.log("SOL transaction : " + data["transactions"].length);
    for (var i = 0; i < data["transactions"].length; i++) {
      let transaction = data["transactions"][i];
      var meta = transaction["meta"];
      var tranx = transaction["transaction"];
      var message = tranx["message"];

      transactionAddr.push(message["accountKeys"][0]);
      transactionValue.push(
        (Number(meta["postBalances"][0]) / 1000000000).toFixed(4)
      );
    }
    console.log(transactionAddr);
    console.log(transactionValue);
  };
  const getDOTTransaction = async (address) => {
    if (!transaction) return;
    const resp = await fetch(
      `https://api-eu1.tatum.io/v3/polkadot/block/${address}`,
      {
        method: "GET",
        headers: {
          "x-api-key": "57e98f74-9e98-4391-80d1-f1532cecf4fd",
        },
      }
    );
    const data = await resp.json();
    let transactionAddr = [];
    let transactionValue = [];
    console.log("DOT transaction : " + data.length);
    for (var i = 0; i < data.length; i++) {
      let transaction = data[i];
      var account = transaction["source_account"];
      var tranx = transaction["source_account_sequence"];

      transactionAddr.push(account);
      transactionValue.push(tranx);
    }
    console.log(transactionAddr);
    console.log(transactionValue);
  };
  const getDOGETransaction = async (address) => {
    if (!transaction) return;
    const resp = await fetch(
      `https://api-eu1.tatum.io/v3/dogecoin/block/${address}`,
      {
        method: "GET",
        headers: {
          "x-api-key": "57e98f74-9e98-4391-80d1-f1532cecf4fd",
        },
      }
    );
    const data = await resp.json();
    let transactionAddr = [];
    let transactionValue = [];
    console.log("DOGE transaction : " + data.length);
    for (var i = 0; i < data.length; i++) {
      let transaction = data[i];
      var account = transaction["source_account"];
      var tranx = transaction["source_account_sequence"];

      transactionAddr.push(account);
      transactionValue.push(tranx);
    }
    console.log(transactionAddr);
    console.log(transactionValue);
  };

  const getADATransaction = async (address) => {
    if (!transaction) return;
    const resp = await fetch(
      `https://api-eu1.tatum.io/v3/cardano/block/${address}`,
      {
        method: "GET",
        headers: {
          "x-api-key": "57e98f74-9e98-4391-80d1-f1532cecf4fd",
        },
      }
    );
    const data = await resp.json();
    let transactionAddr = [];
    let transactionValue = [];
    console.log("ADA transaction : " + data.length);
    for (var i = 0; i < data.length; i++) {
      let transaction = data[i];
      var account = transaction["source_account"];
      var tranx = transaction["source_account_sequence"];

      transactionAddr.push(account);
      transactionValue.push(tranx);
    }
    console.log(transactionAddr);
    console.log(transactionValue);
  };

  const getBNBTransaction = async (address) => {
    if (!transaction) return;
    const resp = await fetch(
      `https://api-eu1.tatum.io/v3/cardano/block/${address}`,
      {
        method: "GET",
        headers: {
          "x-api-key": "57e98f74-9e98-4391-80d1-f1532cecf4fd",
        },
      }
    );
    const data = await resp.json();
    let transactionAddr = [];
    let transactionValue = [];
    console.log("ADA transaction : " + data.length);
    for (var i = 0; i < data.length; i++) {
      let transaction = data[i];
      var account = transaction["source_account"];
      var tranx = transaction["source_account_sequence"];

      transactionAddr.push(account);
      transactionValue.push(tranx);
    }
    console.log(transactionAddr);
    console.log(transactionValue);
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      bounces={true}
      style={state.DarkMode && { backgroundColor: "#1a222d" }}
    >
      <Container style={state.DarkMode && { backgroundColor: "#1a222d" }}>
        <Header
          style={
            state.DarkMode && { backgroundColor: "#232f3d", color: "#fff" }
          }
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name={"arrow-back"} color="#fff" size={28} />
          </TouchableOpacity>
          <HeaderText>{state.DetailToken}</HeaderText>
          <Continue></Continue>
        </Header>
        <Body>
          <CryptoDetailContainer>
            <CryptoCurrency style={state.DarkMode && { color: "#eee" }}>
              ${price}
            </CryptoCurrency>
            <CryptoChange>
              {dailyChange > 0 ? "$" : "- $"}
              {Math.abs(price * dailyChange).toFixed(2)}{" "}
              {dailyChange > 0 ? `+${dailyChange}` : `-${dailyChange}`}%
            </CryptoChange>
            <ChartView>
              <LineChart
                data={{
                  labels: [],
                  datasets: [
                    {
                      data: chart,
                    },
                  ],
                }}
                segments={5}
                width={Dimensions.get("window").width * 0.85} // from react-native
                height={220}
                yAxisLabel="$"
                yAxisInterval={10} // optional, defaults to 1
                chartConfig={{
                  backgroundColor: state.DarkMode ? "#000" : "#fff",
                  backgroundGradientFrom: state.DarkMode ? "#252f38" : "#fff",
                  backgroundGradientTo: state.DarkMode ? "#252f38" : "#fff",
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => (state.DarkMode ? "#5f7" : "#5af"),
                  labelColor: (opacity = 1) =>
                    state.DarkMode ? "#eee" : "#333",
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: "0",
                    strokeWidth: "2",
                    stroke: "#80c796",
                  },
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
              />
            </ChartView>
          </CryptoDetailContainer>
          <TransHeader style={state.DarkMode && { color: "#fff" }}>
            Transactions{transactionAddrs.length == 0 ? " No history" : ""}{" "}
            {Number(currentUSD * price).toFixed(4)} $
          </TransHeader>
          {transactionAddrs.map((Addr, index) => (
            <Transaction
              Type={Addr == { address } ? "Sent" : "Recieved"}
              key={index}
              Address={Addr.toString().substring(0, 20).concat(" . . .")}
              Amount={transactionValues[index]}
            ></Transaction>
          ))}
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
              {state.DetailToken} is a cryptocurrency and worldwide payment
              system. It is the first decentralized digital currency, as the
              system works without a central bank or single administrator.
            </PriceDescription>
            <PriceAlert>
              <PriceAlertLabel style={state.DarkMode && { color: "#eee" }}>
                Website
              </PriceAlertLabel>
              <PriceAlertLink>{state.DetailToken}.org</PriceAlertLink>
            </PriceAlert>
            <PriceAlert>
              <PriceAlertLabel style={state.DarkMode && { color: "#eee" }}>
                Explorer
              </PriceAlertLabel>
              <PriceAlertLink>{state.DetailToken}.info</PriceAlertLink>
            </PriceAlert>
          </CryptoSetting>
        </Body>
      </Container>
    </ScrollView>
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
const PriceAlertSwitch = styled.View``;
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

const TransHeader = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-left: 25px;
`;

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
`;
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
  background-color: #fff;
  border-radius: 20px;
  border-width: 1px;
  border-color: #fff;
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
