import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PhraseWord from "../components/PhraseWord";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "react-native";
import { Seed } from "./PhraseScreen";

var tmpSeed = [];
var secretPhrase = "";
var currentSeed = "";
const VerifyPhraseScreen = ({ navigation }) => {
  const [seed, setSeed] = useState("");
  const [words, setWords] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [selectedWords, setSelectedWords] = useState([]);

  const mixOrder = () => {
    let i1 = 0, i2 = 0, tmp;
    for (let i = 0; i < 100; i++) {
      i1 = Math.floor(Math.random() * 12);
      i2 = Math.floor(Math.random() * 12);

      tmp = Seed[i1], Seed[i1] = Seed[i2], Seed[i2] = tmp;
    }
  }
  const onPress = (word) => {
    if (selectedWords.includes(word) == false) {
      setSeed((prevSeed) => prevSeed + word + " ");

      let tmpArray = selectedWords;
      tmpArray = [...tmpArray, word];
      setSelectedWords(tmpArray);
      // setDisabled(disabled === false ? true : false);
    }
    else {

    }
  }

  const onRemove = (deletedIndex) => {
    console.log("index : " + deletedIndex);
    console.log("word : " + selectedWords[deletedIndex]);
    const tmpArray = selectedWords.filter((word) => selectedWords.indexOf(word) !== deletedIndex)
    console.log(tmpArray)
    setSelectedWords(tmpArray);
  }
  const onNextScene = () => {
    console.log(secretPhrase);
    console.log(seed);
    if (secretPhrase != seed) { // ********************************************************************** I have to change this like '=='
      navigation.navigate("TabNavigator", {
        screen: "PortfolioScreen",
      })
    }
    else {
      console.log("Error!");
    }
  }

  useEffect(() => {
    //    setWords(JSON.parse(window.localStorage.getItem("security")));
    tmpSeed = Seed;
    for (let i = 0; i < 12; i++) {
      secretPhrase += tmpSeed[i] + " ";
    }
    mixOrder();
    setWords(Seed);
  }, [])

  useEffect(() => {
    console.log(selectedWords)
  }, [selectedWords]);

  return (
    <Container>
      <Body>
        <Header>Verify Secret Phrase</Header>
        <SubHeader>
          Tap the words to put them next to each other in the correct order.
        </SubHeader>
      </Body>
      <PhraseContainer>
        <SeedPhrase>
          {selectedWords.map((word, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => onRemove(index)}
            >
              <PhraseWord key={index} number={""} word={word} close={"x"} />
            </TouchableOpacity>
          ))}
        </SeedPhrase>
      </PhraseContainer>
      <SeedPhrase>
        {words.map((word, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => onPress(word)}
          >
            <PhraseWord key={index} number={""} word={word} close={""} selected={selectedWords.includes(word) ? true : false} />
          </TouchableOpacity>
        ))}
      </SeedPhrase>
      <Footer>
        <TouchableOpacity
          onPress={() => onNextScene()}
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

// const words = [
//   {
//     number: "1",
//     word: "broken",
//   },
//   {
//     number: "2",
//     word: "task",
//   },
//   {
//     number: "3",
//     word: "violin",
//   },
//   {
//     number: "4",
//     word: "steak",
//   },
//   {
//     number: "5",
//     word: "key",
//   },
//   {
//     number: "6",
//     word: "desert",
//   },
//   {
//     number: "7",
//     word: "follow",
//   },
//   {
//     number: "8",
//     word: "find",
//   },
//   {
//     number: "9",
//     word: "peace",
//   },
//   {
//     number: "10",
//     word: "awkward",
//   },
//   {
//     number: "11",
//     word: "tortoise",
//   },
//   {
//     number: "12",
//     word: "surprise",
//   },
// ];