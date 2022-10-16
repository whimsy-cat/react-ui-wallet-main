import React, { useState, useEffect, useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";
import TokensContainer from "../components/TokensContainer";
import { Context } from "../reducers/store";
import { useNavigation } from "@react-navigation/native";
import Currency from "../components/Currency";

const CurrencySetting = ({ navigation }) => {
  const [state, dispatch] = useContext(Context);
  const [searchKeyWord, setSearchKeyWord] = React.useState("");

  useEffect(() => {
    console.log(searchKeyWord);
  }, [searchKeyWord]);

  const searchFilter = (text) => {
    let lowerText = text.toLowerCase();
    if (lowerText.includes(searchKeyWord)) {
      return false;
    }
    return true;
  };

  const onHandleClick = (token) => {
    dispatch({ type: "SET_CURRENCY", currency: token });
    navigation.navigate("PreferencesScreen");
  };
  return (
    <Container style={state.DarkMode && { backgroundColor: "#1a222d" }}>
      <Header
        style={state.DarkMode && { backgroundColor: "#232f3d", color: "#fff" }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name={"arrow-back"} color="#fff" size={28} />
        </TouchableOpacity>
        <SearchBar
          style={
            state.DarkMode && { backgroundColor: "#232f3d", color: "#fff" }
          }
          placeholder="Search - Currency"
          placeholderTextColor="#CCDDEE"
          value={searchKeyWord}
          onChangeText={setSearchKeyWord}
        />
      </Header>
      <Body>
        <TouchableOpacity onPress={() => onHandleClick("USD")}>
          <Currency Type="USD - US Dollar" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onHandleClick("GBP")}>
          <Currency Type="GBP - British Pound" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onHandleClick("EUR")}>
          <Currency Type="EUR - Euro" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onHandleClick("AUD")}>
          <Currency Type="AUD - Australian Dollar" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onHandleClick("RUB")}>
          <Currency Type="RUB - Russian Ruble" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onHandleClick("BTC")}>
          <Currency Type="BTC - Bitcoin" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onHandleClick("ETH")}>
          <Currency Type="ETH - Ethereum" />
        </TouchableOpacity>
      </Body>
    </Container>
  );
};

export default CurrencySetting;

const Container = styled.View`
  flex: 1;
  background: #fff;
`;
const Header = styled.View`
  background: #3275bb;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  color: #fff;
  width: 100%;
`;
const SearchBar = styled.TextInput`
  background: #3275bb;
  padding-left: 20px;
  font-size: 18px;
  color: #fff;
  width: 100%;
  padding: 0 20px;
  overflow: hidden;
`;
const Body = styled.View`
  padding: 0 20px;
`;
