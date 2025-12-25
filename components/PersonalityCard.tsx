import { useEffect } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";

type Props = {
  title: string;
  description: string;
  delay: number;
  onPress: () => void;
};

export default function PersonalityCard({
  title,
  description,
  delay,
  onPress,
}: Props) {
  const translateY = useSharedValue(30);
  const opacity = useSharedValue(0);

  useEffect(() => {
    translateY.value = withDelay(delay, withTiming(0, { duration: 500 }));
    opacity.value = withDelay(delay, withTiming(1, { duration: 500 }));
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    opacity: opacity.value,
  }));

  return (
    <Animated.View style={[styles.card, animatedStyle]}>
      <Pressable onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{description}</Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    // width: "70%",
    borderRadius: 14,
    borderWidth: 1,
    marginBottom: 14,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  desc: {
    marginTop: 6,
    color: "#555",
  },
});
