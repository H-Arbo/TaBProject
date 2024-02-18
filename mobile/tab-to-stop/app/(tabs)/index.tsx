import { Dimensions, StyleSheet, Image, ScrollView } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width;
const imageHeight = dimensions.height;

export default function TabOneScreen() {
  return (
    <ScrollView>
      
      

      <View style={styles.container}>


        <Image style={ styles.logo } 
          resizeMode="contain"
          source={require('/workspace/TaBProject/mobile/tab-to-stop/assets/images/tab.png')}
        />

        <View style={styles.text}>
          <Text style={styles.title}>Tab 1</Text>
        </View>

        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        <EditScreenInfo path="app/(tabs)/index.tsx" />

      </View>
    
    
    
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#38A3A5'
  },
  contentContainer: {
    flex: 1
  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#38A3A5'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '100%',
  },
  logo: {
    height: imageHeight,
    width: imageWidth,
    alignSelf: 'center',
    top: -300,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
