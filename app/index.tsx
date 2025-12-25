import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Button, Text, View } from "react-native";

export default function Welcome() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem("user_personality").then((value) => {
      if (!value) {
        router.replace("/onboarding");
      } else {
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "700", marginBottom: 10 }}>
        Adaptive Fitness Companion
      </Text>

      <Text style={{ marginBottom: 20 }}>
        I can help with workouts, routines, and motivation. I cannot provide
        medical advice, diagnose injuries, or suggest medication.
      </Text>

      <Button title="Start Chat" onPress={() => router.push("/chat")} />
    </View>
  );
}
