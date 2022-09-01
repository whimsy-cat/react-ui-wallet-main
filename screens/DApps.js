import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components";
import DAppsCard from "../components/DAppsCard";
const DAppsScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} bounces={true}>
      <Container>
        <Header>
          <SearchBar placeholder="Search or enter website url" />
        </Header>
        <Body>
          <NewDApps>
            <DAppsHead>
              <DAppsSubHead>Staking</DAppsSubHead>
              <SeeAll>See All</SeeAll>
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
                />
              ))}
            </ScrollView>
          </NewDApps>
          <Defi>
            <DAppsHead>
              <DAppsSubHead>DeFi</DAppsSubHead>
              <SeeAll>See All</SeeAll>
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
    image: require("../assets/images/ethereum.png"),
    head: "WazirX  NFT",
    body: "Create & Collect Timeless NFTs. NFT Marketplace Made Simpler.",
  },
  {
    image: require("../assets/images/nft.png"),
    head: "WazirX  NFT",
    body: "Create & Collect Timeless NFTs. NFT Marketplace Made Simpler.",
  },
  {
    image: require("../assets/images/bitcoin.png"),
    head: "WazirX  NFT",
    body: "Create & Collect Timeless NFTs. NFT Marketplace Made Simpler.",
  },
];
