import React,  {useContext} from "react";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
import { Context } from '../reducers/store'
import { TouchableOpacity } from "react-native-gesture-handler";

const WalletConnectScreen = ({ navigation }) => {
  const [state, dispatch] = useContext(Context);
  return (
    <Container style={state.DarkMode && { backgroundColor: "#1a222d" }}>
      <Header style={state.DarkMode && { backgroundColor: "#232f3d", color: "#fff" }}>
        <HeaderTitle>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name={"arrow-back"} color="#fff" size={28} />
          </TouchableOpacity>
          <HeaderText >WalletConnect</HeaderText>
        </HeaderTitle>
        <Ionicons name={"information-circle-outline"} color="#fff" size={28} />
      </Header>
      <Body>
        <Text style={state.DarkMode && { color: "#fff" }} >
          Connect your wallet with WalletConnect to make transactions.
        </Text>
      </Body>
    </Container>
  );
};

export default WalletConnectScreen;

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
  justify-content: space-between;
`;
const HeaderTitle = styled.View`
  flex-direction: row;
  align-items: center;
`;
const HeaderText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  margin-left: 20px;
`;
const Text = styled.Text`
  margin: 30px 0 30px 0;
  font-size: 16px;
`;
const Button = styled.Text`
  width: 300px;
  padding: 20px 0;
  background: #3275bb;
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  margin: 0 auto;
`;