import { Dimensions, StyleSheet, Image, ScrollView, Pressable} from "react-native";
import React, {useState} from 'react';
import { Text, View } from "@/components/Themed";
import Modal from 'react-native-modal';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { ImageBackground } from 'react-native';

const dimensions = Dimensions.get("window");
const imageWidth = dimensions.width * 0.5;
const imageHeight = dimensions.height * 0.3;
const characterHeight = imageHeight/2;
const characterWidth = imageWidth/2;

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const colorScheme = useColorScheme();

  return (
    
    <ScrollView>
      <View style={styles.container}>

        <View>
          <View style={styles.centeredView}>
            <Modal
              isVisible={modalVisible}
              animationIn="slideInLeft"
              animationOut="slideOutLeft"
              hasBackdrop={false}
              onBackdropPress={() => setModalVisible(false)}
            >
              <Pressable
                onPress={() => setModalVisible(false)}
              >
                <View style={styles.modalBackground}>
                  <View style={styles.modalView}>
                    <View style={styles.exit}>
                      <Text style={styles.textStyle}>
                        Menu
                      </Text>
                    </View>
                  </View>
                </View>
              </Pressable>
            </Modal>
            <Pressable style={{
              paddingLeft: 1
            }}
              onPress={() => setModalVisible(true)}>
                {({ pressed }) => (
                  <FontAwesome
                    name="list"
                    size={40}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
            </Pressable>
          </View>

          <View style={{
            flexDirection: 'row',
            backgroundColor: '#38A3A5',
            }}>
            <Image
            style={styles.characters}
            resizeMode="contain"
            source={require("/workspace/TaBProject/mobile/tab-to-stop/assets/images/Charlotte-Waving.png")}
            />
            <Image
            style={styles.logo}
            resizeMode="contain"
            source={require("/workspace/TaBProject/mobile/tab-to-stop/assets/images/tab.png")}
            />
            <Image
            style={styles.characters}
            resizeMode="contain"
            source={require("/workspace/TaBProject/mobile/tab-to-stop/assets/images/Dr.Breeze-Confident.png")}
            />
          </View>          
          
          {/* <Text style={{
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            backgroundColor: '#38A3A5'
          }}>
            Welcome to TaB (Take a Breath) To Stop
          </Text> */}
          
        </View>

        <View>
          <ImageBackground>

            <View style={{
            alignItems: 'center',
            }}>
              <Text style={styles.title}>Our Goal and Visions:</Text>
                <View
                  style={styles.separator}
                  lightColor="#eee"
                  darkColor="rgba(255,255,255,0.1)"
                  />
                </View>

            <View style={{
              alignItems: 'center',
              padding: 20
              }}>
              <Text style={{
                textAlign: 'center',
                fontSize: 20
                }}>
                The TaB (Take a Breath) to Stop series and mobile app aims to achieve clinical outcomes of better asthma control, better disease 
                knowledge, improved quality of life, better adherence to follow-ups, fewer hospitalizations, and fewer emergency room visits among the 
                child participants.
              </Text>
            </View>
        </ImageBackground>
          

        </View>
        

        

        {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    width: "90%",
  },
  logo: {
    height: imageHeight,
    width: imageWidth,
    alignSelf: "center",
  },
  characters: {
    height: characterHeight,
    width: characterWidth,
    alignSelf: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 70,
    paddingLeft: 1,
    backgroundColor: '#38A3A5',
  },
  modalBackground: {
    top: 51.4,
    left: -22,
    width: '50%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 3,
  },
  modalView: {
    width: '100%',
    backgroundColor: 'transparent',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  exit: {
    position: 'absolute',
    alignItems: 'center',
    backgroundColor: 'transparent'
  }
});
