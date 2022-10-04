import React, { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Switch } from "react-native";
import styled from "styled-components";
import { Context } from '../reducers/store'
import { TouchableOpacity } from "react-native-gesture-handler";

const PriceAlertsScreen = ({ navigation }) => {
  const [state, dispatch] = useContext(Context);
  const [priceAlert, setPriceAlert] = React.useState(false);

  const onHandleChange = () => {
    setPriceAlert(!priceAlert);
  }
  return (
    <Container style={state.DarkMode && { backgroundColor: "#1a222d" }}>
      <Header style={state.DarkMode && { backgroundColor: "#232f3d", color: "#fff" }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name={"arrow-back"} color="#fff" size={28} />
        </TouchableOpacity>
        <HeaderText>Price Alerts</HeaderText>
      </Header>
      <Body>
        <Setting style={state.DarkMode && { borderBottomColor: "#343434" }}>
          <Row>
            <Title style={state.DarkMode && { color: "#fff" }}>Price Alerts</Title>
            <Switch value={priceAlert} onValueChange={() => onHandleChange()} />
          </Row>
          <Description style={state.DarkMode && { color: "#fff" }}>
            Get alerts for significant price changes of your favorite
            cryptocurrencies.
          </Description>
        </Setting>
      </Body>
    </Container>
  );
};

export default PriceAlertsScreen;

const Container = styled.View`
  flex: 1;
  background: #fff;
`;
const Body = styled.View`
  padding: 0 20px;
`;
const Header = styled.View`
  background: #3275bb;
  padding: 20px 20px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const HeaderText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  margin-left: 100px;
`;
const Setting = styled.View`
  margin: 20px 0;
`;
const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.Text`
  font-size: 18px;
`;
const Description = styled.Text`
  color: #979797;
  margin-top: 10px;
`;
