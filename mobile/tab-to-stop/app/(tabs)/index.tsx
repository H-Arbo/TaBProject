import { Dimensions, StyleSheet, Image, ScrollView, Button, Platform, TouchableOpacity} from "react-native";
import React from 'react';
import { Text, View } from "@/components/Themed";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import email from 'react-native-email';

import {ExternalLink} from '@/components/ExternalLink';

const dimensions = Dimensions.get("window");
const imageWidth = dimensions.width * 0.5;
const imageHeight = dimensions.height * 0.3;
const characterHeight = imageHeight/2;
const characterWidth = imageWidth/2;

export default function App() {
  const handleEmail = () => {
    const to = ['aakcasumengen@ua.edu'];
    email(to, {
        checkCanOpen: false
    }).catch(console.error);
  };

  return (
    
    <ScrollView>
      <View style={styles.container}>
        
        {/* Top logo */}
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
            <View style={styles.imageRow}>
              <Image
              style={styles.characters}
              resizeMode="contain"
              source={require("/workspace/TaBProject/mobile/tab-to-stop/assets/images/Charlotte-Waving.png")}
              />
              <View style={{
                alignItems: 'center',
                backgroundColor: 'transparent',
                marginTop: -80
                }}>
                <TouchableOpacity 
                  activeOpacity={ 0.75 }
                >
                  <ExternalLink
                    href="http://cs495-spring2024-01.ua.edu:8080">
                    <Image
                    style={styles.logo}
                    resizeMode='center'
                    source={require("/workspace/TaBProject/mobile/tab-to-stop/assets/images/tab.png")}
                    />
                  </ExternalLink>
                </TouchableOpacity>
              </View>
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
                fontSize: 20,
                fontFamily: 'Georgia',
                }}>
                The TaB (Take a Breath) to Stop series and mobile app aims to achieve clinical outcomes of better asthma control, better disease 
                knowledge, improved quality of life, better adherence to follow-ups, fewer hospitalizations, and fewer emergency room visits among the 
                child participants.
              </Text>
            </View>
          </View>

          <View style={{
            backgroundColor: '#D2EBDE',
            padding: 10,
            margin: 20,
          }}>
            <View style={{
              alignItems: 'center',
              backgroundColor: 'transparent',
              marginBottom: 0,
              flexDirection: 'row', justifyContent: 'center'
              }}>
              <TouchableOpacity 
                activeOpacity={ 0.75 }
              >
                <ExternalLink
                  href="http://cs495-spring2024-01.ua.edu:8080">
                  <Text style={styles.title4}>Access Website</Text>
                  <FontAwesome name="arrow-right" size={24} color="#38A3A5" style={{ textDecorationLine: 'underline' }} />                
                </ExternalLink>
              </TouchableOpacity>
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
                flexDirection: 'row',
                alignItems: 'flex-start'
                }}>
                <View style={{ flex: 1 }}>
                  <View style={{
                    flexDirection: 'row',
                    marginBottom: 10,
                  }}>
                    <Text style={{
                      fontSize: 20,
                      marginRight: 5
                    }}>
                      &#8226;
                    </Text>
                    <Text style={{
                      textAlign: 'left',
                      fontSize: 20,
                      paddingBottom: 10,
                      fontFamily: 'Georgia',
                      }}>
                      Asthma is a chronic condition that causes inflammation and swelling of the airways, leading to the narrowing of the air passages that transport air from the nose and mouth to the lungs.
                    </Text>
                  </View>

                  <View style={{
                    flexDirection: 'row',
                    marginBottom: 10,
                  }}>
                    <Text style={{
                      fontSize: 20,
                      marginRight: 5
                    }}>
                      &#8226;
                    </Text>
                    <Text style={{
                      textAlign: 'left',
                      fontSize: 20,
                      paddingBottom: 10,
                      fontFamily: 'Georgia',
                      }}>
                      Symptoms of asthma include difficulty breathing, wheezing, coughing, and pain or tightness in the chest.
                    </Text>
                  </View>

                  <View style={{
                    flexDirection: 'row',
                    marginBottom: 10,
                  }}>
                    <Text style={{
                      fontSize: 20,
                      marginRight: 5
                    }}>
                      &#8226;
                    </Text>
                    <Text style={{
                      textAlign: 'left',
                      fontSize: 20,
                      paddingBottom: 10,
                      fontFamily: 'Georgia',
                      }}>
                      Asthma attacks can be triggered by various factors, such as allergens like dust or pet dander, some foods, or physical activity. Asthma can be a fatal condition.
                    </Text>
                  </View>

                  <View style={{
                    flexDirection: 'row',
                    marginBottom: 10,
                  }}>
                    <Text style={{
                      fontSize: 20,
                      marginRight: 5
                    }}>
                      &#8226;
                    </Text>
                    <Text style={{
                      textAlign: 'left',
                      fontSize: 20,
                      paddingBottom: 10,
                      fontFamily: 'Georgia',
                      }}>
                      Unfortunately, there is no cure for asthma, but proper treatment can help prevent asthma attacks and improve your quality of life.
                    </Text>
                  </View>

                  <View style={{
                    flexDirection: 'row',
                    marginBottom: 10,
                  }}>
                    <Text style={{
                      fontSize: 20,
                      marginRight: 5
                    }}>
                      &#8226;
                    </Text>
                    <Text style={{
                      textAlign: 'left',
                      fontSize: 20,
                      paddingBottom: 10,
                      fontFamily: 'Georgia',
                      }}>
                      Asthma is among the most prevalent and costly diseases in the United States and most common chronic disease in children for all around the world.
                    </Text>
                  </View>
                </View>                                  
              </View>
            </View>
          </View>

          {/* Asthma data */}
          <View style={{
            backgroundColor: '#D2EBDE',
            paddingTop: 50
          }}>
            {/* Title */}
            <Text style={styles.title3}>Asthma Facts</Text>

            {/* First bubble */}
            <View style={{
              alignItems: 'flex-start',
              backgroundColor: '#D2EBDE',
              paddingLeft: 30,
              marginBottom: -20,
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
                  fontSize: 14, 
                  color: '#ffff', 
                  fontFamily: 'Courier New',
                  textShadowColor: 'black',
                  textShadowOffset: { width: 0, height: 0 },
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
              backgroundColor: 'transparent',
              paddingRight: 30
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
                  fontSize: 14, 
                  color: '#ffff', 
                  fontFamily: 'Courier New',
                  textShadowColor: 'black',
                  textShadowOffset: { width: 0, height: 0 },
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
              backgroundColor: 'transparent',
              paddingBottom: 10,
              paddingLeft: 30,
              marginTop: -20
            }}>
              <View style={{
                marginLeft: 10,
                width: 200,
                height: 200,
                borderRadius: 200 / 2,
                backgroundColor: '#91CD91',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Text style={{ 
                  textAlign: 'center', 
                  fontSize: 14, 
                  color: '#ffff', 
                  fontFamily: 'Courier New',
                  textShadowColor: 'black',
                  textShadowOffset: { width: 0, height: 0 },
                  textShadowRadius: 4,
                  }}>
                  It is estimated that{' '}
                  <Text style={{ fontWeight: 'bold', color: '#ffff' }}>50% of children</Text>{' '}
                  with asthma have uncontrolled asthma despite it being a manageable condition.
                </Text>
                
              </View>
            </View>
          </View>

          {/* Contact us */}
          <View style={styles.emailcontainer}>
            <View
              style={styles.separator2}
                lightColor="black"
                darkColor="black"
            />
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: 30
                }}>
                Have any questions? </Text>
            <Text style={{
                fontSize: 10
            }}>Send us an email with your name and any questions you have!</Text>
            <View style={{ backgroundColor: 'transparent', paddingTop: 10}}> 
                <Button title="Contact Us" onPress={handleEmail} />
            </View>
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
  emailcontainer: {
    flex: 1,
    backgroundColor: '#D2EBDE',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  text: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  title1: {
    fontSize: 30,
    fontWeight: "bold",
    backgroundColor: 'transparent',
    fontFamily: 'Georgia',
  },
  title2: {
    fontSize: 30,
    fontWeight: "bold",
    backgroundColor: 'transparent',
    paddingBottom: 10,
    fontFamily: 'Georgia',
  },
  title3: {
    fontSize: 30,
    fontWeight: "bold",
    backgroundColor: 'transparent',
    paddingBottom: 20,
    fontFamily: 'Georgia',
    color: '#38A3A5',
    textAlign: 'center',
    textDecorationLine: 'underline',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  title4: {
    fontSize: 30,
    fontWeight: "bold",
    backgroundColor: 'transparent',
    paddingBottom: 10,
    textAlign: 'center',
    fontFamily: 'Georgia',
    color: '#38A3A5',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.40,
    shadowRadius: 4,
    textDecorationLine: 'underline'
  },
  separator: {
    marginVertical: 10,
    marginBottom: -20,
    height: 2,
    width: "95%",
  },
  separator2: {
    marginVertical: 10,
    marginBottom: -20,
    height: 2,
    width: "95%",
    opacity: 26
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
});
