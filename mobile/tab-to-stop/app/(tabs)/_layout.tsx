import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";

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
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="phome"
        options={{
          //Change header style
          title: "Patient Home",
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

          //Modal: Info circle top left
          headerRight: () => (
            <Link href="/profile_menu" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
    </Tabs>
  );
}
