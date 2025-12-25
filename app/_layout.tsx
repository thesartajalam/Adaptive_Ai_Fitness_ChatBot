import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle={"dark-content"} />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#fab7b9cf" },
        }}
      >
        <Stack.Screen name="onboarding" />
        <Stack.Screen name="index" />
        <Stack.Screen name="chat" />
      </Stack>
    </GestureHandlerRootView>
  );
}
