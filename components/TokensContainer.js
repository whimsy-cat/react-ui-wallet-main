import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Switch,
} from 'react-native';
import styled from "styled-components";
import { Context } from '../reducers/store'

const TokensContainer = (props) => {
  const { tokenImage, tokenName, tokenAmount, tokenSymbol, hide, isSwitch } = props;
  const [isEnabled, setIsEnabled] = useState(true);
  const [state, dispatch] = useContext(Context);

  const toggleSwitch = () => {
    if (!state.ImportedCoinFullName.includes(tokenName))
      dispatch({ type: 'ADD_POST', importedcoinfullname: tokenName });
    else
      dispatch({ type: 'REMOVE_POST', importedcoinfullname: tokenName });
  }
  if (hide) {
    return null;
  }
  if (isSwitch != false) {
    return (
      <View style={state.DarkMode ?
        { width: "109%", paddingRight: 30, flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: "#222", backgroundColor: "#1a222d" } :
        { width: "109%", paddingRight: 30, flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: "#eee", backgroundColor: "#fff" }}>
        <TokenLeft>
          <TokenName>
            <Image source={tokenImage} />
            <Token>
              <Name style={state.DarkMode && { backgroundColor: "#1a222d", color: "#fff" }}>{tokenName}</Name>
            </Token>
          </TokenName>
          <TokenCol2>
            <TokenAmount style={state.DarkMode && { color: "#fff" }}>{tokenAmount}</TokenAmount>
            <TokenSymbol1 style={state.DarkMode && { color: "#fff" }}>{tokenSymbol}</TokenSymbol1>
          </TokenCol2>
        </TokenLeft>
        <TokenRight>
          <Switch
            onValueChange={toggleSwitch}
            value={isSwitch == "show_check" ? true : false} />
        </TokenRight>
      </View>
    );
  }
  return (
    <View style={state.DarkMode ?
      { width: "109%", paddingRight: 30, flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: "#222" } :
      { width: "109%", paddingRight: 30, flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: "#eee" }}>
      <TokenName>
        <Image source={tokenImage} />
        <Token>
          <Name style={state.DarkMode && { color: "#fff" }}>{tokenName}</Name>
        </Token>
      </TokenName>
      <TokenCol2>
        <TokenAmount style={state.DarkMode && { color: "#fff" }}>{tokenAmount}</TokenAmount>
        <TokenSymbol style={state.DarkMode && { color: "#fff" }}>{tokenSymbol}</TokenSymbol>
      </TokenCol2>
    </View >
  );
};

export default TokensContainer;

const TokenLeft = styled.View`
  width : 85%;
  flex-direction: row;
  align-items: center; 
  justify-content: space-between;
`;

const TokenRight = styled.View`
`;
const Token = styled.View`
  flex-direction: row;
  align-items: center;
`;
const TokenName = styled.View`
  flex-direction: row;
  padding: 20px 20px 20px 0;
`;
const Image = styled.Image`
  width: 30px;
  height: 30px;
  background-color: #fff; 
  border-radius: 20px;
  border-width: 1px;
  border-color: #fff;
`;
const Name = styled.Text`
  font-size: 18px;
  margin-left: 16px;
`;
const TokenAmount = styled.Text`
  font-size: 18px;
`;
const TokenSymbol = styled.Text`
  font-size: 18px;
  margin-left: 5px;
`;
const TokenSymbol1 = styled.Text`
  margin-left: 10px;
  color: #979797;
  font-size: 16px;
`;
const TokenCol2 = styled.View`
  flex-direction: row;
  align-items: center;
`;
