import { Dimensions, StyleSheet, Image, ScrollView, Pressable, Platform} from "react-native";
import React, {useState} from 'react';
import { Text, View } from "@/components/Themed";
import Modal from 'react-native-modal';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useColorScheme } from "@/components/useColorScheme";

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
        
        {/* Top logo and modal */}
        <View style={{ 
          ...Platform.select({
            ios: {
              shadowColor: 'black',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 1,
              shadowRadius: 0,
            },
            android: {
              elevation: 4,
            },
          }),
          marginBottom: 2,
        }}>
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
                      <Text>
                        Home
                      </Text>
                      <Text>
                        About us
                      </Text>
                      <Text>
                        Resources
                      </Text>
                    </View>
                  </View>
                </View>
              </Pressable>
            </Modal>
            
            <Pressable style={{
              paddingLeft: 10
            }}
              onPress={() => setModalVisible(true)}>
                {({ pressed }) => (
                  <FontAwesome
                    name="list"
                    size={40}
                    color={'white'}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
            </Pressable>

            <View style={styles.imageRow}>
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
          </View>
        </View>

        {/* Information Content */}
        <View style={{ 
          backgroundColor: '#D2EBDE',
          }}>
          {/* Goal and visions */}
          <View style={{
            ...Platform.select({
              ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.40,
                shadowRadius: 4,
              },
              android: {
                elevation: 4,
              },
            }),
            backgroundColor: '#fff',
            borderRadius: 4,
            borderWidth: 0.5,
            borderColor: '#000',
            padding: 10,
            margin: 20,
          }}>
            <View style={{
              alignItems: 'center',
              backgroundColor: 'transparent',
              marginBottom: -50
              }}>
              <Text style={styles.title1}>Our Goal and Visions:</Text>
              <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
              />
              <Image
              resizeMode= 'contain'
              source={require("/workspace/TaBProject/mobile/tab-to-stop/assets/images/Picture1.png")}
              style={{ width: '85%'}}
              />
            </View>

            <View style={{
              alignItems: 'center',
              padding: 20,
              backgroundColor: 'transparent'
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
          </View>

          <View style={{
            ...Platform.select({
              ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.40,
                shadowRadius: 4,
              },
              android: {
                elevation: 4,
              },
            }),
            backgroundColor: '#38A3A5',
            borderRadius: 4,
            borderWidth: 0.5,
            borderColor: '#000',
            padding: 10,
            margin: 20,
          }}>
            <View style={{
              alignItems: 'center',
              backgroundColor: 'transparent',
              marginBottom: 0
              }}>
              <Text style={styles.title4}>Link to account</Text>
            </View>

            
          </View>

          {/* What is asthma */}
          <View style={{
            ...Platform.select({
              ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.40,
                shadowRadius: 4,
              },
              android: {
                elevation: 4,
              },
            }),
            backgroundColor: '#fff',
            borderRadius: 4,
            borderWidth: 0.5,
            borderColor: '#000',
            marginTop: 25,
            padding: 10,
            margin: 20,
            flexDirection: 'column'
          }}>
            <View style={{
              alignItems: 'center',
              backgroundColor: 'transparent',
              marginBottom: -10
              }}>
              <Text style={styles.title2}>What is Asthma?</Text>
            </View>
          </View>
          
          {/* Ashtma information */}
          <View style={{
            backgroundColor: '#D2EBDE',
          }}>
            <View style={{
              ...Platform.select({
                ios: {
                  shadowColor: 'black',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.40,
                  shadowRadius: 4,
                },
                android: {
                  elevation: 4,
                },
              }),
              backgroundColor: '#fff',
              borderRadius: 4,
              borderWidth: 0.5,
              borderColor: '#000',
              padding: 10,
              margin: 20,
              flexDirection: 'column'
              }}>
              <View style={{
                padding: 20,
                backgroundColor: 'transparent'
                }}>
                <Text style={{
                  textAlign: 'left',
                  fontSize: 20,
                  paddingBottom: 10
                  }}>
                  Asthma is a chronic condition that causes inflammation and swelling of the airways, leading to the narrowing of the air passages that transport air from the nose and mouth to the lungs.
                </Text>
                <Text style={{
                  textAlign: 'left',
                  fontSize: 20,
                  paddingBottom: 10
                  }}>
                  Symptoms of asthma include difficulty breathing, wheezing, coughing, and pain or tightness in the chest.
                </Text>
                <Text style={{
                  textAlign: 'left',
                  fontSize: 20,
                  paddingBottom: 10
                  }}>
                  Asthma attacks can be triggered by various factors, such as allergens like dust or pet dander, some foods, or physical activity. Asthma can be a fatal condition.
                </Text>
                <Text style={{
                  textAlign: 'left',
                  fontSize: 20,
                  paddingBottom: 10
                  }}>
                  Unfortunately, there is no cure for asthma, but proper treatment can help prevent asthma attacks and improve your quality of life.
                </Text>
                <Text style={{
                  textAlign: 'left',
                  fontSize: 20,
                  paddingBottom: 10
                  }}>
                  Asthma is among the most prevalent and costly diseases in the United States and most common chronic disease in children for all around the world.
                </Text>
              </View>
            </View>
          </View>

          {/* Asthma data */}
          <View style={{
            backgroundColor: '#D2EBDE',
          }}>
            {/* Title */}
            <Text style={styles.title3}>Asthma</Text>

            {/* First bubble */}
            <View style={{
              alignItems: 'flex-start',
              backgroundColor: '#D2EBDE',
            }}>
              <View style={{
                marginLeft: 10,
                width: 200,
                height: 200,
                borderRadius: 200 / 2,
                backgroundColor: '#23577A',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Text style={{ 
                  textAlign: 'center', 
                  fontSize: 13, 
                  color: '#ffff', 
                  fontFamily: 'Courier New',
                  textShadowColor: 'black',
                  textShadowOffset: { width: .5, height: 1 },
                  textShadowRadius: 4,
                  }}>
                  In 2020,{' '}
                  <Text style={{ fontWeight: 'bold', color: '#ffff' }}>42.7% of children</Text>{' '}
                  who were 18 years old or younger and had asthma reported experiencing one or more asthma attacks in the preceding year.
                </Text>
              </View>
            </View>
            
            {/* Second bubble */}
            <View style={{
              alignItems: 'flex-end',
              backgroundColor: '#D2EBDE',
            }}> 
              <View style={{
                marginRight: 10,
                width: 200,
                height: 200,
                borderRadius: 200 / 2,
                backgroundColor: '#63C196',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Text style={{ 
                  textAlign: 'center', 
                  fontSize: 13, 
                  color: '#ffff', 
                  fontFamily: 'Courier New',
                  textShadowColor: 'black',
                  textShadowOffset: { width: .5, height: 1 },
                  textShadowRadius: 4, 
                  }}>
                  Among children{' '}
                  <Text style={{ fontWeight: 'bold', color: '#ffff' }}>under the age of 5 with asthma, this figure was about 52.9%.</Text>
                  
                </Text>
                
              </View>
            </View>

            {/* Third bubble */}
            <View style={{
              alignItems: 'flex-start',
              backgroundColor: '#D2EBDE',
            }}>
              <View style={{
                marginLeft: 10,
                width: 200,
                height: 200,
                borderRadius: 200 / 2,
                backgroundColor: '#91CD91',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Text style={{ 
                  textAlign: 'center', 
                  fontSize: 13, 
                  color: '#ffff', 
                  fontFamily: 'Courier New',
                  textShadowColor: 'black',
                  textShadowOffset: { width: .5, height: 1 },
                  textShadowRadius: 4,
                  }}>
                  It is estimated that{' '}
                  <Text style={{ fontWeight: 'bold', color: '#ffff' }}>50% of children</Text>{' '}
                  with asthma have uncontrolled asthma despite it being a manageable condition.
                </Text>
                
              </View>
            </View>

          </View>

          {/* Go to website */}
          <View>

          </View>
        </View>  
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
  title1: {
    fontSize: 30,
    fontWeight: "bold",
    backgroundColor: 'transparent'
  },
  title2: {
    fontSize: 30,
    fontWeight: "bold",
    backgroundColor: 'transparent',
    paddingBottom: 10
  },
  title3: {
    fontSize: 30,
    fontWeight: "bold",
    backgroundColor: 'transparent',
    paddingBottom: 10,
    textAlign: 'center'
  },
  title4: {
    fontSize: 30,
    fontWeight: "bold",
    backgroundColor: 'transparent',
    paddingBottom: 10,
    textAlign: 'center'
  },
  separator: {
    marginVertical: 10,
    marginBottom: -20,
    height: 2,
    width: "95%",
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
    marginHorizontal: 0,
  },
  imageRow: {
    flexDirection: 'row',
    height: characterHeight,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#38A3A5',
    marginBottom: 40,
    paddingTop: 20,

  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 50,
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
