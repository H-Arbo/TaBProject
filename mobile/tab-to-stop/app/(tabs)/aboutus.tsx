import { StyleSheet, Platform, ScrollView, Image } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function TabAboutusScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{
          backgroundColor: '#D2EBDE',
          }}>

          {/* Aylin */}
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
            borderRadius: 10,
            borderWidth: 0.9,
            borderColor: '#000',
            padding: 10,
            margin: 20,
            flexDirection: 'column'
            }}>

            <View style={{
              alignItems: 'center',
              backgroundColor: 'transparent',
              marginBottom: 0
              }}>
              <Text style={styles.title1}>
                Aylin Akca Sumengen, PhD, MSc, BSN, RN
              </Text>

              <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
              />
            
              <Image
              style={{ width: '85%', marginTop: -160 }}
              resizeMode="contain"
              source={require("/workspace/TaBProject/mobile/tab-to-stop/assets/images/aylin.jpg")}
              />
            </View>

            <View>
              <Text style={styles.description}>
                Dr. Akca Sumengen is an Assistant Professor at the Capstone College of Nursing (CCN) at the University of Alabama (UA). She has a wealth of experience in pediatric asthma research and has published over 10 peer-reviewed articles on diverse topics, including the quality of life among pediatric asthma patients and the integration of technology into patient care. In fact, she has established a research and development company that focuses on creating a symptom-detection sensor for pediatric asthma patients.
              </Text>
            </View>
          </View>

          {/* Jessica */}
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
            borderRadius: 10,
            borderWidth: 0.9,
            borderColor: '#000',
            padding: 10,
            margin: 20,
            flexDirection: 'column'
            }}>
            <View style={{
              alignItems: 'center',
              backgroundColor: 'transparent',
              marginBottom: 0
              }}>
              <Text style={styles.title1}>
                Jessica Johnson, MSN, RN, PNP-PC
              </Text>

              <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
              />
            
              <Image
              style={{ width: '85%', marginTop: -160 }}
              resizeMode="contain"
              source={require("/workspace/TaBProject/mobile/tab-to-stop/assets/images/jessica.jpg")}
              />
            </View>

            <View>
              <Text style={styles.description}>
                Jessica Johnson is a full-time instructor for the Capstone College of Nursing. Mrs. Johnson has pediatric clinical experiences in medical-surgical, neurology, cardiac, and endocrine care. Mrs. Johnson currently teaches in pediatrics and health assessment and has previously taught in obstetrics and within the RN-BSN program for CCN.              </Text>
            </View>
          </View>

          {/* Mark */}
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
            borderRadius: 10,
            borderWidth: 0.9,
            borderColor: '#000',
            padding: 10,
            margin: 20,
            flexDirection: 'column'
            }}>
            <View style={{
              alignItems: 'center',
              backgroundColor: 'transparent',
              marginBottom: 0
              }}>
              <Text style={styles.title1}>
                Mark Merrill, DNP, CPNP-AC/PC
              </Text>

              <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
              />
            
              <Image
              style={{ width: '85%', marginTop: -160 }}
              resizeMode="contain"
              source={require("/workspace/TaBProject/mobile/tab-to-stop/assets/images/mark.jpg")}
              />
            </View>

            <View>
              <Text style={styles.description}>
                Dr. Richard Merrill entered nursing at Children’s of Alabama working in the pediatric intensive care unit before earning a direct commission and serving a total of 22 years in the U.S. Air Force.
              </Text>
            </View>
          </View>

          {/* Sara */}
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
            borderRadius: 10,
            borderWidth: 0.9,
            borderColor: '#000',
            padding: 10,
            margin: 20,
            flexDirection: 'column'
            }}>
            <View style={{
              alignItems: 'center',
              backgroundColor: 'transparent',
              marginBottom: 0
              }}>
              <Text style={styles.title1}>
                Sarah Phillips, MD
              </Text>

              <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
              />
            
              <Image
              style={{ width: '85%', marginTop: -160 }}
              resizeMode="contain"
              source={require("/workspace/TaBProject/mobile/tab-to-stop/assets/images/sara.jpg")}
              />
            </View>

            <View>
              <Text style={styles.description}>
                Dr. Sara Phillips is an assistant professor of Pediatrics at the College of Community Health Sciences. Phillips is from Boaz, Alabama, and she received her bachelor’s degree from The University of Alabama in biology. As a Rural Medical Scholar, she earned her master’s degree at UA in human and environmental sciences and her medical degree from the University of Alabama School of Medicine, which is headquartered in Birmingham.
              </Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  title1: {
    fontSize: 30,
    fontWeight: "bold",
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
  separator: {
    marginVertical: 30,
    marginTop: 10,
    height: 1,
    width: '80%',
  },
  description: {
    textAlign: 'center',
    fontSize: 20,
    paddingBottom: 0,
    marginTop: -120,
    marginBottom: 10
  }
});