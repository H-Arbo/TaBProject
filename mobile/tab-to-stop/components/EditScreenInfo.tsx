import React from 'react';
import { StyleSheet, Image, TouchableOpacity, Platform, ScrollView } from 'react-native';
import { ExternalLink } from './ExternalLink';
import { Text, View } from './Themed';


export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <ScrollView>
      <View>
        <View style={styles.getStartedContainer}>
          <Text
            style={styles.getStartedText}>
            Click the links below to learn more!
          </Text>
        </View>
        
        <View style={ styles.helpContainer }>

          <View style={styles.container}>
            <TouchableOpacity 
              activeOpacity={0.75}
              style={styles.imageContainer}
            >
              <ExternalLink
                style={styles.helpLink}
                href="https://nursing.ua.edu/"
              >
                <Image 
                  style={styles.image}
                  resizeMode='contain'
                  source={require('../assets/images/nursing_logo.jpg')}
                />
              </ExternalLink>
            </TouchableOpacity>

            {/* Text section */}
            <View style={styles.textContainer}>
              <Text style={styles.text}>
              The mission of the Capstone College of Nursing is to promote the health and well-being of the people of the State of Alabama, the nation, and the world through nursing education, research, scholarship, and service.
              </Text>
            </View>
          </View>

          <TouchableOpacity 
            activeOpacity={ 0.75 }
            style={ styles.item }
          >
            <ExternalLink
              style={styles.helpLink}
              href="https://nursing.ua.edu/">
              <Image style={ styles.image } 
                resizeMode='contain'
                source={require('../assets/images/nursing_logo.jpg')}
              />
            </ExternalLink>
          
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 0,
    paddingBottom: 50,
    paddingTop: 30,
  },
  container: {
    backgroundColor: '#fff',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#000',
    padding: 10,
    margin: 20,
  },
  imageContainer: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginTop: -60
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  textContainer: {
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: -20
  },
  text: {
    fontSize: 16,
    fontFamily: 'Georgia',
    textAlign: 'center',
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 30,
    fontWeight: 'bold',
    lineHeight: 24,
    textAlign: 'center',
    backgroundColor: 'transparent',
    fontFamily: 'Georgia',
    paddingTop: 20
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
    alignItems: 'center',
  },
});
