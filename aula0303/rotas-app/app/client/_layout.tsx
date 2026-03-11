import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#f4511e" }, // Exemplo: cor do topo
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="aba1"
        options={{
          title: "Início", // No Stack, usamos apenas 'title' para o cabeçalho
        }}
      />
      
      <Stack.Screen
        name="aba2"
        options={{
          title: "Notificações",
        }}
      />

      <Stack.Screen
        name="aba3"
        options={{
          title: "Configurações",
        }}
      />
    </Stack>
  );
}