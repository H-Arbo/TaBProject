import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ExternalLink } from './ExternalLink';
import { Text, View } from './Themed';


export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Click the links below to learn more!
        </Text>
      </View>

      <View style={ styles.helpContainer }>
        <TouchableOpacity 
          activeOpacity={ 0.75 }
          style={ styles.item }
        >
          <ExternalLink
            style={styles.helpLink}
            href="https://nursing.ua.edu/">
            <Image style={ styles.image } 
              resizeMode='contain'
              source={require('/workspace/TaBProject/mobile/tab-to-stop/assets/images/nursing_logo.jpg')}
            />
          </ExternalLink>
        
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 0,
    backgroundColor: '#ffffff',
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    fontWeight: 'bold',
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    // marginTop: 15,
    // marginHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  helpLink: {
    paddingVertical: 0,
  },
  helpLinkText: {
    textAlign: 'center',
  },
  item: {
    flex: 1,
    overflow: 'hidden',
    alignItems: 'center',
    position: 'relative',
    marginTop: -80,
  },
  image: {
    width: '90%',
    height: undefined,
    aspectRatio: 1,
  }
});
