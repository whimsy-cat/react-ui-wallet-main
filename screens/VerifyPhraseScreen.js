import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import PhraseWord from "../components/PhraseWord";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "react-native";
import { Seed } from "./PhraseScreen";
import { Context } from "../reducers/store";
import axios from "axios";
import { StyleSheet, AsyncStorage } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

var tmpSeed = [];
var secretPhrase = "";

const VerifyPhraseScreen = ({ navigation }) => {
  const [seed, setSeed] = useState("");
  const [words, setWords] = useState([]);
  const [state, dispatch] = useContext(Context);
  const [selectedWords, setSelectedWords] = useState([]);
  const [spinner, setSpinner] = React.useState(false);

  useEffect(() => {
    tmpSeed = Seed;
    for (let i = 0; i < 12; i++) {
      secretPhrase += tmpSeed[i] + " ";
    }
    mixOrder();
    setWords(Seed);
  }, []);

  // Mix Mnemonic Words in Random Order.
  const mixOrder = () => {
    let i1 = 0,
      i2 = 0,
      tmp;
    for (let i = 0; i < 100; i++) {
      i1 = Math.floor(Math.random() * 12);
      i2 = Math.floor(Math.random() * 12);

      (tmp = Seed[i1]), (Seed[i1] = Seed[i2]), (Seed[i2] = tmp);
    }
  };

  const createBTCaddress = async () => {
    console.log("Generating BTC address...");
    axios
      .post("https://api.blockcypher.com/v1/btc/main/addrs?bech32=true")
      .then((response) => {
        console.log(response.data);
        setSpinner(false);
        setBTCToLocalStorage(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const createDOGEaddress = async () => {
    console.log("Generating DOGE address...");
    axios
      .post("https://api.blockcypher.com/v1/doge/main/addrs")
      .then((response) => {
        console.log(response.data);
        setDOGEToLocalStorage(response.data);
        //        onPorfolio()
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const createSOLaddress = async () => {
    console.log("Generating SOL address...");
    const resp = await fetch(`https://api-eu1.tatum.io/v3/solana/wallet`, {
      method: "GET",
      headers: {
        "x-api-key": "57e98f74-9e98-4391-80d1-f1532cecf4fd",
      },
    });

    const data = await resp.json();
    console.log("SOLANA : " + data);
    setSOLToLocalStorage(data);
  };

  const createADAaddress = async () => {
    console.log("Generating ADA address...");
    const resp = await fetch(`https://api-eu1.tatum.io/v3/algorand/wallet`, {
      method: "GET",
      headers: {
        "x-api-key": "57e98f74-9e98-4391-80d1-f1532cecf4fd",
      },
    });

    const data = await resp.json();
    console.log("CARDANO : " + data);
    setADAToLocalStorage(data);
  };

  const createDOTaddress = async () => {
    console.log("Generating DOT address...");
    const resp = await fetch(`https://api-eu1.tatum.io/v3/xlm/account`, {
      method: "GET",
      headers: {
        "x-api-key": "57e98f74-9e98-4391-80d1-f1532cecf4fd",
      },
    });

    const data = await resp.json();
    console.log("POLKADOT : " + data);
    setDOTToLocalStorage(data);
  };

  const createXRPaddress = async () => {
    console.log("Generating XRO address...");
    const resp = await fetch(`https://api-eu1.tatum.io/v3/xrp/account`, {
      method: "GET",
      headers: {
        "x-api-key": "57e98f74-9e98-4391-80d1-f1532cecf4fd",
      },
    });

    const data = await resp.json();
    console.log("XRP : " + data);
    setXRPToLocalStorage(data);
  };
  const setBTCToLocalStorage = async (BTCdata) => {
    try {
      console.log("Bitcoin address : " + BTCdata.address);
      dispatch({
        type: "SET_BTCWALLETINFO",
        btcaddress: BTCdata.address,
        btcprivatekey: BTCdata.private,
        btcpublickey: BTCdata.public,
      });
      await AsyncStorage.setItem("@btcaddress", BTCdata.address);
      await AsyncStorage.setItem("@btcprivatekey", BTCdata.private);
      await AsyncStorage.setItem("@btcpublickey", BTCdata.public);

      console.log("BTC Info Successfuly Saved to Local Storage.");
    } catch (e) {
      console.log("BFailed To Save Data to Local Storage!!!");
    }
  };

  const setDOGEToLocalStorage = async (DOGEdata) => {
    try {
      console.log("Doge address : " + DOGEdata.address);
      dispatch({
        type: "SET_DOGEWALLETINFO",
        dogeaddress: DOGEdata.address,
        dogeprivatekey: DOGEdata.private,
        dogepublickey: DOGEdata.public,
      });
      await AsyncStorage.setItem("@dogeaddress", DOGEdata.address);
      await AsyncStorage.setItem("@dogeprivatekey", DOGEdata.private);
      await AsyncStorage.setItem("@dogepublickey", DOGEdata.public);

      console.log("DOGE Info Successfuly Saved to Local Storage.");
    } catch (e) {
      console.log("DFailed To Save Data to Local Storage!!!");
    }
  };

  const setSOLToLocalStorage = async (SOLdata) => {
    try {
      console.log("Solana address : " + SOLdata.address);
      dispatch({
        type: "SET_SOLWALLETINFO",
        soladdress: SOLdata.address,
        solprivatekey: SOLdata.privateKey,
        solpublickey: "SOL_PUB",
      });
      await AsyncStorage.setItem("@soladdress", SOLdata.address);
      await AsyncStorage.setItem("@solprivatekey", SOLdata.privateKey);
      await AsyncStorage.setItem("@solpublickey", "SOL_PUB");

      console.log("SOL Info Successfuly Saved to Local Storage.");
    } catch (e) {
      console.log("SFailed To Save Data to Local Storage!!!");
    }
  };

  const setADAToLocalStorage = async (ADAdata) => {
    try {
      console.log("Cadano address : " + ADAdata.address);
      dispatch({
        type: "SET_ADAWALLETINFO",
        adaaddress: ADAdata.address,
        adaprivatekey: ADAdata.secret,
        adapublickey: "ADA_PUB",
      });
      await AsyncStorage.setItem("@adaaddress", ADAdata.address);
      await AsyncStorage.setItem("@adaprivatekey", ADAdata.secret);
      await AsyncStorage.setItem("@adapublickey", "ADA_PUB");

      console.log("ADA Info Successfuly Saved to Local Storage.");
    } catch (e) {
      console.log("AFailed To Save Data to Local Storage!!!");
    }
  };

  const setDOTToLocalStorage = async (DOTdata) => {
    try {
      console.log("Pokadot address : " + DOTdata.address);
      dispatch({
        type: "SET_DOTWALLETINFO",
        dotaddress: DOTdata.address,
        dotprivatekey: DOTdata.secret,
        dotpublickey: "DOT_PUB",
      });
      await AsyncStorage.setItem("@dotaddress", DOTdata.address);
      await AsyncStorage.setItem("@dotprivatekey", DOTdata.secret);
      await AsyncStorage.setItem("@dotpublickey", "DOT_PUB");

      console.log("DOT Info Successfuly Saved to Local Storage.");
    } catch (e) {
      console.log("DTFailed To Save Data to Local Storage!!!");
    }
  };

  const setXRPToLocalStorage = async (XRPData) => {
    try {
      console.log("XRP address : " + XRPData.address);
      dispatch({
        type: "SET_XRPWALLETINFO",
        xrpaddress: XRPData.address,
        xrpprivatekey: XRPData.secret,
        xrppublickey: "XRP_PUB",
      });
      await AsyncStorage.setItem("@xrpaddress", XRPData.address);
      await AsyncStorage.setItem("@xrpprivatekey", XRPData.secret);
      await AsyncStorage.setItem("@xrppublickey", "XRP_PUB");

      console.log("XRP Info Successfuly Saved to Local Storage.");

      navigation.navigate("TabNavigator", {
        screen: "PortfolioScreen",
      });
    } catch (e) {
      console.log("XFailed To Save Data to Local Storage!!!");
    }
  };
  const onPressWord = (word) => {
    if (selectedWords.includes(word) == false) {
      setSeed((prevSeed) => prevSeed + word + " ");

      let tmpArray = selectedWords;
      tmpArray = [...tmpArray, word];
      setSelectedWords(tmpArray);
    }
  };

  const onRemove = (deletedIndex) => {
    const tmpArray = selectedWords.filter(
      (word) => selectedWords.indexOf(word) !== deletedIndex
    );
    setSelectedWords(tmpArray);
  };

  const onNextScene = () => {
    onPorfolio();
  };

  const onPorfolio = () => {
    let compareSeed = "";
    compareSeed = selectedWords.join(" ");
    console.log("compare : " + compareSeed);
    console.log("compare : " + state.WalletMnemonic);

    if (compareSeed == state.WalletMnemonic) {
      setSpinner(true);
      createBTCaddress();
      createDOGEaddress();
      createSOLaddress();
      createADAaddress();
      createDOTaddress();
      createXRPaddress();
    } else {
      alert("Secret Phrase doesn't correct!");
    }
  };

  return (
    <Container style={state.DarkMode && { backgroundColor: "#1a222d" }}>
      <Spinner
        visible={spinner}
        textContent={"Generating Wallet info..."}
        textStyle={styles.spinnerTextStyle}
        color="#3275bb"
        size="large"
      />
      <Body>
        <Header
          style={
            state.DarkMode && { backgroundColor: "#232f3d", color: "#fff" }
          }
        >
          Verify Secret Phrase
        </Header>
        <SubHeader>
          Tap the words to put them next to each other in the correct order.
        </SubHeader>
      </Body>
      <PhraseContainer>
        <SeedPhrase>
          {selectedWords.map((word, index) => (
            <TouchableOpacity key={index} onPress={() => onRemove(index)}>
              <PhraseWord key={index} number={""} word={word} close={"x"} />
            </TouchableOpacity>
          ))}
        </SeedPhrase>
      </PhraseContainer>
      <SeedPhrase>
        {words.map((word, index) => (
          <TouchableOpacity key={index} onPress={() => onPressWord(word)}>
            <PhraseWord
              key={index}
              number={""}
              word={word}
              close={""}
              selected={selectedWords.includes(word) ? true : false}
            />
          </TouchableOpacity>
        ))}
      </SeedPhrase>
      <Footer>
        <TouchableOpacity onPress={() => onNextScene()}>
          <Button>Done</Button>
        </TouchableOpacity>
      </Footer>
    </Container>
  );
};

export default VerifyPhraseScreen;

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: "#fff",
  },
});
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
