import { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  StyleSheet,
  Alert,
} from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { Button } from "@rneui/themed";
import React from "react";

interface Battery {
  id: number;
  maxCapacity: number;
  currentCapacity: number;
}

export interface Bike {
  id: number;
  model: string;
  type: string;
  class: string;
  costPercentage: number;
  battery?: Battery[];
}

const calculateBatteryCharge = (
  currentCapacity: number,
  maxCapacity: number
) => {
  return Math.round((currentCapacity / maxCapacity) * 100);
};

const calculateCostPerMinute = (costPercentage: number) => {
  return (0.05 * costPercentage).toFixed(2);
};

export default function RentalDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [bike, setBike] = useState<Bike | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchBikeData() {
      try {
        const response = await fetch(
          `https://de90-5-173-241-28.ngrok-free.app/bikes/${id}`
        );
        const data = await response.json();
        setBike(data);
      } catch (error) {
        console.error("Error fetching bike data:", error);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchBikeData();
    }
  }, [id]);

  const startRental = async () => {
    if (!id) return;

    try {
      const response = await fetch(
        "https://de90-5-173-241-28.ngrok-free.app/rentals",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            bikeId: id,
            userId: 2,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to start the rental");
      }

      Alert.alert("Sukces", "Wypożyczenie rozpoczęte!");
      router.push("/active-rental");
    } catch (error) {
      console.error("Error starting rental:", error);
      Alert.alert(
        "Błąd",
        "Nie udało się rozpocząć wypożyczenia. Spróbuj ponownie."
      );
    }
  };

  if (loading) {
    return (
      <>
        <Stack.Screen options={{ headerTitle: "", headerBackTitle: "Wróć" }} />
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>Ładowanie danych roweru...</Text>
        </View>
      </>
    );
  }

  if (!bike) {
    return (
      <>
        <Stack.Screen options={{ headerTitle: "", headerBackTitle: "Wróć" }} />
        <View style={styles.errorContainer}>
          <Text>Nie znaleziono danych dla tego roweru.</Text>
          <Button
            buttonStyle={{ backgroundColor: "rgba(39, 39, 39, 1)" }}
            title="Wróć"
            onPress={() => router.push("/")}
          />
        </View>
      </>
    );
  }

  return (
    <>
      <Stack.Screen options={{ headerTitle: "", headerBackTitle: "Wróć" }} />
      <View style={styles.container}>
        <Text style={styles.title}>Rozpocznij wypożyczenie</Text>
        <Image
          source={{
            uri:
              bike.type === "Klasyczny"
                ? "https://www.wroclaw.pl/cdn-cgi/image/w=1200,h=600,fit=crop,f=avif/beta2/files/news/98688/mainwrm_2019.jpg"
                : "https://www.greenbike.pl/images/giant_2020/E-Bikes/ROAD/Road%20E+%201%20Pro%20-%2018%20499z%C5%82/MY20RoadE+1Pro_ColorA.jpg",
          }}
          style={styles.image}
        />
        <Text>ID: #{bike.id}</Text>
        <Text>Typ: {bike.type}</Text>
        <Text>Klasa: {bike.class}</Text>
        <Text>Marka: {bike.model}</Text>
        <Text>
          Stawka: {calculateCostPerMinute(bike.costPercentage)} zł/min
        </Text>
        {bike.battery && bike.battery.length > 0 ? (
          <Text>
            Poziom naładowania baterii:{" "}
            {calculateBatteryCharge(
              bike.battery[0].currentCapacity,
              bike.battery[0].maxCapacity
            )}
            %
          </Text>
        ) : (
          <Text>Bateria niedostępna</Text>
        )}

        <Button
          title="Rozpocznij wypożyczenie"
          buttonStyle={styles.startButton}
          onPress={startRental}
        />
        <Text style={styles.note}>
          Po rozpoczęciu wypożyczenia, zamek zostanie odblokowany, a rower
          będzie lokalizowany.
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 20,
    borderRadius: 5,
  },
  startButton: {
    backgroundColor: "#000",
    marginTop: 20,
  },
  note: {
    marginTop: 10,
    fontSize: 12,
    color: "#555",
    textAlign: "center",
  },
});
