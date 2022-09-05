import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
} from 'react-native';
import styled from "styled-components";

const TokensContainer = (props) => {
    const { tokenImage, tokenName, tokenAmount, tokenSymbol, hide } = props;
    if (hide) {
        return null;
    }
    return (
        <View style={{ width: "109%", paddingRight: 30, flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: "#eee" }}>
            <TokenName>
                <Image source={tokenImage} />
                <Token>
                    <Name>{tokenName}</Name>
                </Token>
            </TokenName>
            <TokenCol2>
                <TokenAmount>{tokenAmount}</TokenAmount>
                <TokenSymbol>{tokenSymbol}</TokenSymbol>
            </TokenCol2>
        </View>
    );
};

export default TokensContainer;

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
const TokenCol2 = styled.View`
  flex-direction: row;
  align-items: center;
`;
