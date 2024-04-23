import React from 'react';
import { StyleSheet, Image, TouchableOpacity, Platform, ScrollView } from 'react-native';
import { ExternalLink } from '@/components/ExternalLink';
import { Text, View} from '@/components/Themed';
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabPHomeScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.getStartedContainer}>
          <Text
            style={styles.getStartedText}>
            Learn more using the resources below!
          </Text>
        </View>

        {/* Capstone college */}
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
          }}>
            <View style={{
              alignItems: 'center',
              backgroundColor: 'transparent',
              marginBottom: -50
              }}>
              <Text style={styles.title1}>Capstone College of Nursing</Text>
              <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
              />
              <Image
              resizeMode= 'contain'
              source={require("../../assets/images/nursing_logo.jpg")}
              style={{ width: '85%'}}
              />
            </View>

            <View style={{
              alignItems: 'center',
              padding: 10,
              backgroundColor: 'transparent'
              }}>
              <Text style={{
                textAlign: 'center',
                fontSize: 20,
                fontFamily: 'Georgia',
                }}>
                "The mission of the Capstone College of Nursing is to promote the health and well-being of the people of the State of Alabama, the nation, and the world through nursing education, research, scholarship, and service."
              </Text>
            </View>
          </View>

          <View style={{
            backgroundColor: '#D2EBDE',
            marginLeft: 25,
            marginTop: -10,
            marginBottom: 50,
            alignItems: 'flex-start',
            justifyContent: 'flex-start'
          }}>
            <View style={{
              alignItems: 'center',
              backgroundColor: 'transparent',
              flexDirection: 'row', 
              }}>
              <TouchableOpacity 
                activeOpacity={ 0.75 }
              >
                <ExternalLink
                  href="https://nursing.ua.edu/">
                  <Text style={styles.title4}>Learn More</Text>
                  <FontAwesome name="arrow-right" size={24} color="#38A3A5" style={{ textDecorationLine: 'underline' }} />                
                </ExternalLink>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* AAAAI */}
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
          }}>
            <View style={{
              alignItems: 'center',
              backgroundColor: 'transparent',
              marginBottom: -50
              }}>
              <Text style={styles.title1}>American Academy of Allergy, Asthma & Immunology</Text>
              <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
              />
              <Image
              resizeMode= 'contain'
              source={require("../../assets/images/AAAAI_logo.png")}
              style={{ width: '85%'}}
              />
            </View>

            <View style={{
              alignItems: 'center',
              padding: 10,
              backgroundColor: 'transparent'
              }}>
              <Text style={{
                textAlign: 'center',
                fontSize: 20,
                fontFamily: 'Georgia',
                }}>
                "The American Academy of Allergy, Asthma & Immunology (AAAAI) is the leading membership organization of more than 7,000 allergists / immunologists and patients' trusted resource for allergies, asthma and immune deficiency disorders."
              </Text>
            </View>
          </View>

          <View style={{
            backgroundColor: '#D2EBDE',
            marginLeft: 25,
            marginTop: -10,
            marginBottom: 50,
            alignItems: 'flex-start',
            justifyContent: 'flex-start'
          }}>
            <View style={{
              alignItems: 'center',
              backgroundColor: 'transparent',
              flexDirection: 'row', 
              }}>
              <TouchableOpacity 
                activeOpacity={ 0.75 }
              >
                <ExternalLink
                  href="https://www.aaaai.org/">
                  <Text style={styles.title4}>Learn More</Text>
                  <FontAwesome name="arrow-right" size={24} color="#38A3A5" style={{ textDecorationLine: 'underline' }} />                
                </ExternalLink>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* AAFA */}
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
          }}>
            <View style={{
              alignItems: 'center',
              backgroundColor: 'transparent',
              marginBottom: 20
              }}>
              <Text style={styles.title1}>Asthma and Allergy Foundation of America</Text>
              <View
                 style={[styles.separator, { marginBottom: 20 }]}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
              />
              <Image
              resizeMode= 'contain'
              source={require("../../assets/images/AAFA_logo.png")}
              style={{ width: '85%' }}
              />
            </View>

            <View style={{
              alignItems: 'center',
              padding: 10,
              backgroundColor: 'transparent'
              }}>
              <Text style={{
                textAlign: 'center',
                fontSize: 20,
                fontFamily: 'Georgia',
                }}>
                "The Asthma and Allergy Foundation of America (AAFA), a not-for-profit organization founded in 1953, is the leading patient organization for people with asthma and allergies, and the oldest asthma and allergy patient group in the world."
              </Text>
            </View>
          </View>

          <View style={{
            backgroundColor: '#D2EBDE',
            marginLeft: 25,
            marginTop: -10,
            marginBottom: 50,
            alignItems: 'flex-start',
            justifyContent: 'flex-start'
          }}>
            <View style={{
              alignItems: 'center',
              backgroundColor: 'transparent',
              flexDirection: 'row', 
              }}>
              <TouchableOpacity 
                activeOpacity={ 0.75 }
              >
                <ExternalLink
                  href="https://aafa.org/">
                  <Text style={styles.title4}>Learn More</Text>
                  <FontAwesome name="arrow-right" size={24} color="#38A3A5" style={{ textDecorationLine: 'underline' }} />                
                </ExternalLink>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* MayoClinic */}
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
              <Text style={styles.title1}>Mayo Clinic</Text>
              <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
              />
              <Image
              resizeMode= 'contain'
              source={require("../../assets/images/mayo_logo.png")}
              style={{ width: '85%'}}
              />
            </View>

            <View style={{
              alignItems: 'center',
              padding: 10,
              backgroundColor: 'transparent'
              }}>
              <Text style={{
                textAlign: 'center',
                fontSize: 20,
                fontFamily: 'Georgia',
                }}>
                "Mayo Clinic is the largest integrated, not-for-profit medical group practice in the world. We're building the future, one where the best possible care is available to everyone — and more people can heal at home. Our relentless research turns into earlier diagnoses and new cures. That's how we inspire hope in those who need it most."
              </Text>
            </View>
          </View>

          <View style={{
            backgroundColor: '#D2EBDE',
            marginLeft: 25,
            marginTop: -10,
            marginBottom: 50,
            alignItems: 'flex-start',
            justifyContent: 'flex-start'
          }}>
            <View style={{
              alignItems: 'center',
              backgroundColor: 'transparent',
              flexDirection: 'row', 
              }}>
              <TouchableOpacity 
                activeOpacity={ 0.75 }
              >
                <ExternalLink
                  href="https://www.mayoclinic.org/">
                  <Text style={styles.title4}>Learn More</Text>
                  <FontAwesome name="arrow-right" size={24} color="#38A3A5" style={{ textDecorationLine: 'underline' }} />                
                </ExternalLink>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* ACAAI */}
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
          }}>
            <View style={{
              alignItems: 'center',
              backgroundColor: 'transparent',
              marginBottom: 20
              }}>
              <Text style={styles.title1}>American College of Allergy, Asthma & Immunology</Text>
              <View
                 style={[styles.separator, { marginBottom: 20 }]}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
              />
              <Image
              resizeMode= 'contain'
              source={require("../../assets/images/ACAAI_logo.png")}
              style={{ width: '85%' }}
              />
            </View>

            <View style={{
              alignItems: 'center',
              padding: 10,
              backgroundColor: 'transparent'
              }}>
              <Text style={{
                textAlign: 'center',
                fontSize: 20,
                fontFamily: 'Georgia',
                }}>
                "ACAAI allergists are board-certified physicians trained to diagnose allergies and asthma, administer immunotherapy, and provide patients with the best treatment outcomes."
              </Text>
            </View>
          </View>

          <View style={{
            backgroundColor: '#D2EBDE',
            marginLeft: 25,
            marginTop: -10,
            marginBottom: 50,
            alignItems: 'flex-start',
            justifyContent: 'flex-start'
          }}>
            <View style={{
              alignItems: 'center',
              backgroundColor: 'transparent',
              flexDirection: 'row', 
              }}>
              <TouchableOpacity 
                activeOpacity={ 0.75 }
              >
                <ExternalLink
                  href="https://acaai.org/asthma/asthma-101/who-gets-asthma/children/">
                  <Text style={styles.title4}>Learn More</Text>
                  <FontAwesome name="arrow-right" size={24} color="#38A3A5" style={{ textDecorationLine: 'underline' }} />                
                </ExternalLink>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/*  */}
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
          }}>
            <View style={{
              alignItems: 'center',
              backgroundColor: 'transparent',
              marginBottom: 20
              }}>
              <Text style={styles.title1}>Global Initiative for Asthma</Text>
              <View
                 style={[styles.separator, { marginBottom: 20 }]}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
              />
              <Image
              resizeMode= 'contain'
              source={require("../../assets/images/GIA_Logo.png")}
              style={{ width: '85%' }}
              />
            </View>

            <View style={{
              alignItems: 'center',
              padding: 10,
              backgroundColor: 'transparent'
              }}>
              <Text style={{
                textAlign: 'center',
                fontSize: 20,
                fontFamily: 'Georgia',
                }}>
                "GINA’s program is determined and its strategies for asthma care are shaped by committees made up of leading asthma experts and patient representatives from around the world."
              </Text>
            </View>
          </View>

          <View style={{
            backgroundColor: '#D2EBDE',
            marginLeft: 25,
            marginTop: -10,
            marginBottom: 50,
            alignItems: 'flex-start',
            justifyContent: 'flex-start'
          }}>
            <View style={{
              alignItems: 'center',
              backgroundColor: 'transparent',
              flexDirection: 'row', 
              }}>
              <TouchableOpacity 
                activeOpacity={ 0.75 }
              >
                <ExternalLink
                  href="https://ginasthma.org/gina-patient-guide-you-can-control-your-asthma/">
                  <Text style={styles.title4}>Learn More</Text>
                  <FontAwesome name="arrow-right" size={24} color="#38A3A5" style={{ textDecorationLine: 'underline' }} />                
                </ExternalLink>
              </TouchableOpacity>
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
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 0,
    paddingBottom: 50,
    paddingTop: 30,
    backgroundColor: '#D2EBDE'
  },
  getStartedText: {
    fontSize: 25,
    fontWeight: 'bold',
    lineHeight: 24,
    textAlign: 'center',
    backgroundColor: 'transparent',
    fontFamily: 'Georgia',
    paddingTop: 20
  },
  text: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  title1: {
    fontSize: 25,
    fontWeight: "bold",
    backgroundColor: 'transparent',
    fontFamily: 'Georgia',
    textAlign: 'center'
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
  image: {
    width: '100%',
    height: 'auto',
  },
});