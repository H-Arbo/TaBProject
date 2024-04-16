import React, {useState} from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, View, StyleSheet, Text } from "react-native";
import Modal from 'react-native-modal';

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [modalVisible, setModalVisible] = useState(false);

  const textColors = {
    light: Colors.light.text, 
    dark: Colors.light.text,   
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          
          headerShown: false,
          //Change header style
          title: 'Home Screen',
          headerStyle: {
            backgroundColor: "#D2EBDE",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: textColors[colorScheme ?? "light"],
          },

          //Bottom tab bar and icon options
          tabBarStyle: { backgroundColor: "#D2EBDE" },
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,

          //Modal: info circle top right
        }}
      />
      <Tabs.Screen
        name="aboutus"
        options={{
          //Change header style
          title: "About us",
          headerStyle: {
            backgroundColor: "#38A3A5",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: textColors[colorScheme ?? "light"],
          },

          //Bottom tab bar and icon options
          tabBarStyle: { backgroundColor: "#D2EBDE" },
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,

          //Modal: Info circle top left
          headerLeft: () => (
            <View style={{paddingLeft: 10}}>
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
                      </View>
                    </View>
                  </View>
                </Pressable>
              </Modal>
            
              <Pressable style={{
                paddingLeft: 1
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
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="resources"
        options={{
          //Change header style
          title: "Resources",
          headerStyle: {
            backgroundColor: "#38A3A5",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: textColors[colorScheme ?? "light"],
          },

          //Bottom tab bar and icon options
          tabBarStyle: { backgroundColor: "#D2EBDE" },
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,

          //Modal: Info circle top left
          headerLeft: () => (
            <View style={{paddingLeft: 10}}>
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
                      </View>
                    </View>
                  </View>
                </Pressable>
              </Modal>
            
              <Pressable style={{
                paddingLeft: 1
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
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
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
