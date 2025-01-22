import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Skaner() {
  return (
    <View style={styles.container}>
      <Link
        href={{
          pathname: "/rentals/[id]",
          params: { id: "3" },
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Klasyczny rower</Text>
      </Link>
      <Link
        href={{
          pathname: "/rentals/[id]",
          params: { id: "1" },
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Elektryczny rower</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10, // Działa w nowszych wersjach React Native
  },
  button: {
    backgroundColor: "#000", // Kolor tła przycisku
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    textDecorationLine: "none", // Usunięcie podkreślenia
  },
  buttonText: {
    color: "#fff", // Kolor tekstu
    fontWeight: "bold",
  },
});
