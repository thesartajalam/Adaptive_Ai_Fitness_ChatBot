import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import PersonalityCard from "../components/PersonalityCard";
import { PERSONALITIES, PersonalityType } from "../constants/personalities";

export default function Onboarding() {
  const router = useRouter();

  // 🎬 Animations
  const logoScale = useSharedValue(0.9);
  const logoOpacity = useSharedValue(0);
  const titleY = useSharedValue(20);
  const titleOpacity = useSharedValue(0);

  useEffect(() => {
    logoScale.value = withTiming(1, { duration: 600 });
    logoOpacity.value = withTiming(1, { duration: 600 });

    titleY.value = withTiming(0, { duration: 600 });
    titleOpacity.value = withTiming(1, { duration: 600 });
  }, []);

  const logoStyle = useAnimatedStyle(() => ({
    transform: [{ scale: logoScale.value }],
    opacity: logoOpacity.value,
  }));

  const titleStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: titleY.value }],
    opacity: titleOpacity.value,
  }));

  const selectPersonality = async (type: PersonalityType) => {
    await AsyncStorage.setItem("user_personality", type);
    router.replace("/");
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Animated.View style={logoStyle}>
        <Image
          source={require("../assets/images/favicon.png")}
          style={styles.logo}
        />
      </Animated.View>

      {/* Title */}
      <Animated.View style={titleStyle}>
        <Text style={styles.heading}>
          Choose how your fitness coach behaves
        </Text>
        <Text style={styles.subheading}>
          This helps me guide and motivate you better
        </Text>
      </Animated.View>

      {/* Personality Cards */}
      <View style={styles.cardsWrapper}>
        {PERSONALITIES.map((p, index) => (
          <PersonalityCard
            key={p.id}
            title={p.title}
            description={p.description}
            delay={index * 120}
            onPress={() => selectPersonality(p.id)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "center",
    // backgroundColor: "#F9FAFB",
  },
  logo: {
    height: 90,
    width: 90,
    alignSelf: "center",
    marginBottom: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
  },
  subheading: {
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
    marginTop: 8,
    marginBottom: 28,
  },
  cardsWrapper: {
    gap: 14,
    alignItems: "center",
  },
});
