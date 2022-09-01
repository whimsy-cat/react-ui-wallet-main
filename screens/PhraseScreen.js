import React from "react";
import styled from "styled-components";
import PhraseWord from "../components/PhraseWord";
import { TouchableOpacity } from "react-native-gesture-handler";

const PhraseScreen = ({ navigation }) => {
  return (
    <Container>
      <Body>
        <Header>Your Secret Phrase</Header>
        <SubHeader>
          Write down or copy these words in the right order and save them
          somewhere safe.
        </SubHeader>
        <SeedPhrase>
          {words.map((word, index) => (
            <PhraseWord key={index} number={word.number} word={word.word} />
          ))}
        </SeedPhrase>
        <Copy>Copy</Copy>
      </Body>
      <Footer>
        <WarningContainer>
          <WarningHeader>Do not share your secret phrase!</WarningHeader>
          <WarningText>
            If someone has your secret phrase, they will have full control of
            your wallet.
          </WarningText>
        </WarningContainer>
        <TouchableOpacity
          onPress={() => navigation.navigate("VerifyPhraseScreen")}
        >
          <Button>Continue</Button>
        </TouchableOpacity>
      </Footer>
    </Container>
  );
};

export default PhraseScreen;

const Container = styled.View`
  flex: 1;
  background: #fff;
`;
const Body = styled.View`
  padding: 0 20px;
`;
const Header = styled.Text`
  font-size: 18px;
  color: #343849;
  text-align: center;
  width: 100%;
  margin-top: 40px;
`;
const SubHeader = styled.Text`
  margin-left: 10px;
  font-size: 14px;
  margin-top: 20px;
  color: #848484;
  line-height: 22px;
  text-align: center;
`;
const Copy = styled.Text`
  text-transform: uppercase;
  font-size: 16px;
  margin-top: 20px;
  color: #3275bb;
  text-align: center;
`;
const Footer = styled.View`
  background: #fff;
  position: absolute;
  bottom: 50px;
  left: 0;
  width: 100%;
`;
const WarningContainer = styled.View`
  background: #f1e4e4;
  padding: 20px 20px;
  margin: 0 auto;
  border-radius: 5px;
`;
const WarningHeader = styled.Text`
  text-align: center;
  color: #883937;
  font-weight: bold;
`;
const WarningText = styled.Text`
  text-align: center;
  margin-top: 10px;
  color: #883937;
  width: 320px;
`;
const SeedPhrase = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 40px;
`;
const Button = styled.Text`
  width: 300px;
  padding: 20px 0;
  background: #3275bb;
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  margin: 25px auto 0 auto;
`;

const words = [
  {
    number: "1",
    word: "broken",
  },
  {
    number: "2",
    word: "task",
  },
  {
    number: "3",
    word: "violin",
  },
  {
    number: "4",
    word: "steak",
  },
  {
    number: "5",
    word: "key",
  },
  {
    number: "6",
    word: "desert",
  },
  {
    number: "7",
    word: "follow",
  },
  {
    number: "8",
    word: "find",
  },
  {
    number: "9",
    word: "peace",
  },
  {
    number: "10",
    word: "awkward",
  },
  {
    number: "11",
    word: "tortoise",
  },
  {
    number: "12",
    word: "surprise",
  },
];
