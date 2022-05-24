import react from "react";
import { SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";
import R_Home from "./src/features/restaurents/screens/R_Home"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <R_Home />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0,
  },
});
