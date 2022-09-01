import React from "react";
import styled from "styled-components";
import PhraseWord from "../components/PhraseWord";
import { TouchableOpacity } from "react-native-gesture-handler";

const VerifyPhraseScreen = ({ navigation }) => {
  return (
    <Container>
      <Body>
        <Header>Verify Secret Phrase</Header>
        <SubHeader>
          Tap the words to put them next to each other in the correct order.
        </SubHeader>
      </Body>
      <PhraseContainer></PhraseContainer>
      <SeedPhrase>
        {words.map((word, index) => (
          <PhraseWord key={index} number={word.number} word={word.word} />
        ))}
      </SeedPhrase>
      <Footer>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("TabNavigator", {
              screen: "PortfolioScreen",
            })
          }
        >
          <Button>Done</Button>
        </TouchableOpacity>
      </Footer>
    </Container>
  );
};

export default VerifyPhraseScreen;

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
const PhraseContainer = styled.View`
  background: #eeeeee;
  padding: 20px 20px;
  margin: 30px auto 0 auto;
  width: 100%;
  height: 200px;
`;
const Footer = styled.View`
  background: #fff;
  position: absolute;
  bottom: 50px;
  left: 0;
  width: 100%;
`;
const SeedPhrase = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 40px 20px 0 20px;
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
