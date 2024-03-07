import { StyleSheet, Pressable } from 'react-native';
import { Link, Tabs } from 'expo-router';
import RegisterQ from '@/components/RegisterQ';
import { Text, View } from '@/components/Themed';

export default function TabRegisterScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <RegisterQ path="app/(tabs)/register.tsx" />
      <Link href="/login" asChild>
        <Pressable>
          {({ pressed }) => (
            <Text style={{ paddingTop: 5, opacity: pressed ? 0.5 : 1}}>
              Already have an account? Click here to login 
            </Text>
          )}
        </Pressable>
      </Link>
    </View>
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
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  login_option: {
    paddingTop: 10,
  },
});
