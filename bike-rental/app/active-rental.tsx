import { Button } from "@rneui/themed";
import { Stack, useRouter } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

export default function ActiveRental() {
  const router = useRouter();
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Wypożyczenie w toku</Text>
        <Button
          buttonStyle={{ backgroundColor: "rgba(39, 39, 39, 1)" }}
          title="Wróć"
          onPress={() => router.push("/")}
        />
      </View>
    </>
  );
}
