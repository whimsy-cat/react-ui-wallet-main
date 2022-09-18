import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import "react-native-get-random-values"
import "@ethersproject/shims"
import { ethers } from "ethers";


export const wallet = ethers.Wallet.createRandom();

const { width, height } = Dimensions.get("window");
const COLORS = { primary: "#3275BB", white: "#fff" };

const Slide = ({ item }) => {

  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={item?.image}
        style={{ height: "55%", width, resizeMode: "contain", marginTop: 80 }}
      />
      <View>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.subtitle}>{item?.subtitle}</Text>
      </View>
    </View>
  );
};

const OnboardingScreen = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        {/* Indicator container */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 80,
            marginTop: 20,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: COLORS.primary,
                  width: 10,
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        <View style={{ marginBottom: 50 }}>
          <View style={{ height: 50 }}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.replace("LegalScreen")}
            >
              <Text style={{ fontSize: 15, color: "#fff" }}>
                CREATE A NEW WALLET
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.btnSubtext}>I already have a wallet</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar backgroundColor={COLORS.primary} />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{ height: height * 0.75 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({ item }) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  subtitle: {
    color: "#848484",
    fontSize: 15,
    marginTop: 10,
    maxWidth: "70%",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    lineHeight: 23,
  },
  btnSubtext: {
    color: "#3275BB",
    fontSize: 14,
    marginTop: 20,
    maxWidth: "70%",
    textAlign: "center",
    lineHeight: 23,
    marginLeft: "auto",
    marginRight: "auto",
  },
  title: {
    color: "#343849",
    fontSize: 26,
    // fontWeight: 'bold',
    marginTop: 20,
    textAlign: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  indicator: {
    height: 10,
    width: 10,
    backgroundColor: "#D9D9D9",
    marginHorizontal: 3,
    borderRadius: 5,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#3275BB",
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

const slides = [
  {
    id: "1",
    image: require("../assets/images/screen1.png"),
    title: "Private and secure",
    subtitle: "Private keys never leave your device.",
  },
  {
    id: "2",
    image: require("../assets/images/screen2.png"),
    title: "All assets in one place",
    subtitle: "View and store your assets seamlessly.",
  },
  {
    id: "3",
    image: require("../assets/images/screen3.png"),
    title: "Trade assets",
    subtitle: "Trade your assets anonymously.",
  },
  {
    id: "4",
    image: require("../assets/images/screen4.png"),
    title: "Explore decentralized apps",
    subtitle: "Earn, explore, utilize, spend, trade, and more.",
  },
];
