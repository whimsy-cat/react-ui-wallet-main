import React, { useContext } from "react";
import { Context } from "../reducers/store";
import styled from "styled-components";

const DiscoverScreen = () => {
  const [state, dispatch] = useContext(Context);

  return (
    <Container style={state.DarkMode && { backgroundColor: "#1a222d" }}>
      <Header
        style={state.DarkMode && { backgroundColor: "#232f3d", color: "#fff" }}
      >
        Discover
      </Header>
      <Body>
        <Staking>
          <DiscoveryHead>
            <DiscoverySubHead style={state.DarkMode && { color: "#fff" }}>
              Staking
            </DiscoverySubHead>
          </DiscoveryHead>
          <StakingTokenInfo
            style={state.DarkMode && { borderBottomColor: "#353535" }}
          >
            <Image source={require("../assets/images/solana.png")} />
            <TokenDetails>
              <StakingTokenName style={state.DarkMode && { color: "#fff" }}>
                Solana (SOL)
              </StakingTokenName>
              <APR>
                <APRText style={state.DarkMode && { color: "#ccc" }}>
                  APR:
                </APRText>
                <APRPercent style={state.DarkMode && { color: "#ccc" }}>
                  6.5%
                </APRPercent>
              </APR>
            </TokenDetails>
          </StakingTokenInfo>
          <StakingTokenInfo
            style={state.DarkMode && { borderBottomColor: "#353535" }}
          >
            <Image source={require("../assets/images/cardano.png")} />
            <TokenDetails>
              <StakingTokenName style={state.DarkMode && { color: "#fff" }}>
                Osmosis (OSMO)
              </StakingTokenName>
              <APR>
                <APRText style={state.DarkMode && { color: "#ccc" }}>
                  APR:
                </APRText>
                <APRPercent style={state.DarkMode && { color: "#ccc" }}>
                  6.5%
                </APRPercent>
              </APR>
            </TokenDetails>
          </StakingTokenInfo>
          <StakingTokenInfo
            style={state.DarkMode && { borderBottomColor: "#353535" }}
          >
            <Image source={require("../assets/images/polkadot.png")} />
            <TokenDetails>
              <StakingTokenName style={state.DarkMode && { color: "#ccc" }}>
                Kava (KAVA)
              </StakingTokenName>
              <APR>
                <APRText style={state.DarkMode && { color: "#ccc" }}>
                  APR:
                </APRText>
                <APRPercent style={state.DarkMode && { color: "#ccc" }}>
                  6.5%
                </APRPercent>
              </APR>
            </TokenDetails>
          </StakingTokenInfo>
        </Staking>
        {/* <DefiTokens>
          <DiscoveryHead>
            <DiscoverySubHead style={state.DarkMode && { color: "#fff" }}>DeFi Tokens</DiscoverySubHead>
            <SeeAll style={state.DarkMode && { color: "#ccc" }}>See All</SeeAll>
          </DiscoveryHead>
          <DefiTokenInfo style={state.DarkMode && { borderBottomColor: "#353535" }}>
            <Col1>
              <Image source={require("../assets/images/solana.png")} />
              <TokenName style={state.DarkMode && { color: "#fff" }}>Solana (SOL)</TokenName>
            </Col1>
            <Col2>
              <TokenPrice style={state.DarkMode && { color: "#ccc" }}>$43.31</TokenPrice>
              <TokenPercent style={state.DarkMode && { color: "#ccc" }}>-12.92%</TokenPercent>
            </Col2>
          </DefiTokenInfo>
          <DefiTokenInfo style={state.DarkMode && { borderBottomColor: "#353535" }}>
            <Col1>
              <Image source={require("../assets/images/doge.png")} />
              <TokenName style={state.DarkMode && { color: "#fff" }}>dYdX (DYDX)</TokenName>
            </Col1>
            <Col2>
              <TokenPrice style={state.DarkMode && { color: "#ccc" }}>$43.31</TokenPrice>
              <TokenPercent style={state.DarkMode && { color: "#ccc" }}>-12.92%</TokenPercent>
            </Col2>
          </DefiTokenInfo>
          <DefiTokenInfo style={state.DarkMode && { borderBottomColor: "#353535" }}>
            <Col1>
              <Image source={require("../assets/images/xrp.png")} />
              <TokenName style={state.DarkMode && { color: "#fff" }}>Synthetix (SNX)</TokenName>
            </Col1>
            <Col2>
              <TokenPrice style={state.DarkMode && { color: "#ccc" }}>$43.31</TokenPrice>
              <TokenPercent style={state.DarkMode && { color: "#ccc" }}>-12.92%</TokenPercent>
            </Col2>
          </DefiTokenInfo>
        </DefiTokens> */}
      </Body>
    </Container>
  );
};

export default DiscoverScreen;

const Container = styled.View`
  flex: 1;
  background: #fff;
`;
const Body = styled.View`
  padding: 0 20px;
`;
const Header = styled.Text`
  background: #3275bb;
  padding: 20px 0 20px 20px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  width: 100%;
`;
const Staking = styled.View``;
const DiscoveryHead = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;
const DiscoverySubHead = styled.Text`
  font-weight: bold;
  color: #3275bb;
  font-size: 14px;
`;
const SeeAll = styled.Text`
  font-weight: bold;
  color: #3275bb;
  font-size: 14px;
  text-transform: uppercase;
`;
const StakingTokenInfo = styled.View`
  flex-direction: row;
  align-items: center;
  border-bottom-color: #eee;
  border-bottom-width: 1px;
  padding: 20px 0;
`;
const Image = styled.Image`
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 20px;
  border-width: 1px;
  border-color: #fff;
`;
const TokenDetails = styled.View`
  margin-left: 20px;
`;
const StakingTokenName = styled.Text`
  font-size: 16px;
`;
const TokenName = styled.Text`
  font-size: 16px;
  margin-left: 20px;
`;
const APR = styled.View`
  flex-direction: row;
  align-items: center;
`;
const APRText = styled.Text`
  color: #979797;
  font-size: 14px;
`;
const APRPercent = styled.Text`
  color: #6eb8aa;
  font-size: 14px;
  margin-left: 4px;
`;
const DefiTokens = styled.View``;
const DefiTokenInfo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-color: #eee;
  border-bottom-width: 1px;
  padding: 20px 0;
`;
const Col1 = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Col2 = styled.View``;
const TokenPrice = styled.Text`
  font-size: 14px;
  color: #979797;
`;
const TokenPercent = styled.Text`
  color: #883937;
`;
