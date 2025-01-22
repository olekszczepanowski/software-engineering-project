import { View, Text } from "react-native";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Strona główna, kliknij skaner zeby rozpocząć wypożyczenie</Text>
    </View>
  );
}
