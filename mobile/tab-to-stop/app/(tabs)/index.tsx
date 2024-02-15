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
        <Image
        style={{height: imageHeight, width: imageWidth}}
        resizeMode="contain"
        source={require('/workspace/TaBProject/mobile/tab-to-stop/assets/images/nursing_logo.jpg')}
        />
        <Text style={styles.title}>Tab 1</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="app/(tabs)/index.tsx" />
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  logo: {
    width: 400,
    height: 200,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
