import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function ClientLayout() {
  return (
    <Tabs screenOptions={{ headerShown: true }}>
      <Tabs.Screen
        name="aba1"
        options={{
          title: "Aba 1",
          tabBarLabel: "Aba 1",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="aba2"
        options={{
          title: "Aba 2",
          tabBarLabel: "Aba 2",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="aba3"
        options={{
          title: "Aba 3",
          tabBarLabel: "Aba 3",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
