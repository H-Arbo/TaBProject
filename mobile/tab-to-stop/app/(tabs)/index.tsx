import { Dimensions, StyleSheet, Image, ScrollView } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import axios from "axios";

const dimensions = Dimensions.get("window");
const imageWidth = dimensions.width * 0.5;
const imageHeight = dimensions.height * 0.3;
axios.defaults.baseURL = "http://localhost:5555";
axios.defaults.withCredentials = true;

function HomeScreen() {
  return console.log("Hello");
  // <ScrollView>
  //   <View style={styles.container}>
  //     <Image
  //       style={styles.logo}
  //       resizeMode="contain"
  //       source={require("/workspace/TaBProject/mobile/tab-to-stop/assets/images/tab.png")}
  //     />

  //     <View style={styles.text}>
  //       <Text style={styles.title}>Tab 1</Text>
  //     </View>

  //     <View
  //       style={styles.separator}
  //       lightColor="#eee"
  //       darkColor="rgba(255,255,255,0.1)"
  //     />

  //     {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
  //   </View>
  // </ScrollView>
}

//const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    // </NavigationContainer>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require("/workspace/TaBProject/mobile/tab-to-stop/assets/images/tab.png")}
        />

        <View style={styles.text}>
          <Text style={styles.title}>Tab 1</Text>
        </View>

        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />

        <EditScreenInfo path="app/(tabs)/index.tsx" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#ffffff",
  },
  contentContainer: {
    flex: 1,
  },
  text: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: "100%",
  },
  logo: {
    height: imageHeight,
    width: imageWidth,
    alignSelf: "center",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
