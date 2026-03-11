import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Aba1() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Dashboard</Text>

      <Button title="Voltar para Home" onPress={() => router.push("/")} />
    </View>
  );
}
