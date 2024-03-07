import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Link, Tabs } from 'expo-router';
import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

import Colors from '@/constants/Colors';

const Separator = () => <View style={styles.separator} />;

export default function LoginQ({ path }: { path: string }) {
  return (
    <View>

      <Link href="/plogin" asChild>
        <Pressable>
          {({ pressed }) => (
            <View style={{
              opacity: pressed ? 0.5 : 1,
              alignItems: 'center',
              marginHorizontal: 0,
              backgroundColor: '#38A3A5',
              padding: 20,
              paddingHorizontal:70,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              borderWidth: 5,
            }}>
              <Text
                style={styles.getStartedText}
                lightColor="rgba(0,0,0,0.8)"
                darkColor="rgba(255,255,255,0.8)">
                Login as Patient
              </Text>
            </View>
          )}
        </Pressable>
      </Link>

      <Separator />

      <Link href="/dlogin" asChild>
        <Pressable>
          {({ pressed }) => (
            <View style={{
              opacity: pressed ? 0.5 : 1,
              alignItems: 'center',
              marginHorizontal: 0,
              backgroundColor: '#38A3A5',
              padding: 20,
              paddingHorizontal:70,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              borderWidth: 5,
            }}>
              <Text
                style={styles.getStartedText}
                lightColor="rgba(0,0,0,0.8)"
                darkColor="rgba(255,255,255,0.8)">
                Login as Doctor
              </Text>
            </View>
          )}
        </Pressable>
      </Link>

    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 0,
    backgroundColor: '#38A3A5',
    padding: 20,
    paddingHorizontal:70,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderWidth: 5,
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
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
  separator: {
    marginVertical: 8,
  },
});
