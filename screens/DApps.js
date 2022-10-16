import React, { useContext } from "react";
import { ScrollView } from "react-native";
import styled from "styled-components";
import { Context } from "../reducers/store";
import DAppsCard from "../components/DAppsCard";

const DAppsScreen = () => {
  const [state, dispatch] = useContext(Context);
  return (
    <ScrollView showsVerticalScrollIndicator={false} bounces={true}>
      <Container style={state.DarkMode && { backgroundColor: "#1a222d" }}>
        <Header
          style={
            state.DarkMode && { backgroundColor: "#232f3d", color: "#fff" }
          }
        >
          <SearchBar
            style={
              state.DarkMode && { backgroundColor: "#232f3d", color: "#fff" }
            }
            placeholderTextColor={state.DarkMode && "#898989"}
            placeholder="Search or enter website url"
          />
        </Header>
        <Body>
          <NewDApps>
            <DAppsHead>
              <DAppsSubHead style={state.DarkMode && { color: "#fff" }}>
                New Dapps
              </DAppsSubHead>
              {/* <SeeAll style={state.DarkMode && { color: "#eee" }}>See All</SeeAll> */}
            </DAppsHead>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              bounces={true}
              horizontal={true}
            >
              {cards.map((card, index) => (
                <DAppsCard
                  key={index}
                  image={card.image}
                  head={card.head}
                  body={card.body}
                  darkmode={state.DarkMode}
                />
              ))}
            </ScrollView>
          </NewDApps>
          <Defi>
            <DAppsHead>
              <DAppsSubHead style={state.DarkMode && { color: "#fff" }}>
                Popular
              </DAppsSubHead>
              {/* <SeeAll style={state.DarkMode && { color: "#eee" }}>See All</SeeAll> */}
            </DAppsHead>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              bounces={true}
              horizontal={true}
            >
              {cards1.map((card, index) => (
                <DAppsCard
                  key={index}
                  image={card.image}
                  head={card.head}
                  body={card.body}
                  darkmode={state.DarkMode}
                />
              ))}
            </ScrollView>
          </Defi>
        </Body>
      </Container>
    </ScrollView>
  );
};

export default DAppsScreen;

const Container = styled.View`
  flex: 1;
  background: #fff;
`;
const Body = styled.View`
  padding: 0 0 0 20px;
`;
const Header = styled.View`
  background: #3275bb;
  padding: 20px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  width: 100%;
`;
const SearchBar = styled.TextInput`
  width: auto;
  height: 50px;
  background: #fff;
  border-radius: 10px;
  padding-left: 20px;
  font-size: 16px;
`;
const NewDApps = styled.View``;
const Defi = styled.View``;
const DAppsHead = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;
const DAppsSubHead = styled.Text`
  font-size: 18px;
`;
const SeeAll = styled.Text`
  color: #3275bb;
  font-size: 16px;
`;

const cards = [
  {
    image: require("../assets/images/Aave.png"),
    head: "Aave",
    body: "Open Source and Non-Custodial protocal to earn interest on deposits",
  },
  {
    image: require("../assets/images/Stacking.png"),
    head: "0x Staking",
    body: "Maximize your rewards by delegating your tokens to market makers",
  },
  {
    image: require("../assets/images/Zerion.png"),
    head: "Zerion",
    body: "A simple interface to access decentralized finance to invest, earn",
  },
];

const cards1 = [
  {
    image: require("../assets/images/Bidali.png"),
    head: "Bidali",
    body: "Buy from top brands with ETH and ERC20 tokens.",
  },
  {
    image: require("../assets/images/liTex.png"),
    head: "loTeX Voting",
    body: "Vote for loTeX Delegates and Earn",
  },
  {
    image: require("../assets/images/Compound.png"),
    head: "Compound",
    body: "Supply assets to the Compound protocol and earn interest",
  },
  {
    image: require("../assets/images/1inch.png"),
    head: "1inch.exchange",
    body: "Token Swap Aggregator",
  },
];
