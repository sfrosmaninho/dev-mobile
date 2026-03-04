import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => router.push("/professional")}
      >
        <Text style={styles.buttonText}>Profissional</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => router.push("/client/aba1")}
      >
        <Text style={styles.buttonText}>Cliente</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b7bdc0", // Azul claro
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 250, // largura fixa
    height: 50, // altura fixa
    backgroundColor: "#2563EB",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
