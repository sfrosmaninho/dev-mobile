import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="client" options={{ headerShown: false }} />
      <Stack.Screen
        name="professional/index"
        options={{ title: "Profissional" }}
      />
    </Stack>
  );
}
