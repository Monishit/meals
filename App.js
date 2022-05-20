//<-- All React native imports.... -->
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";

//<-- All Compoments imports.... -->

//<-- All Utils imports.... -->

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        {/* Search Bar */}
        <Text>Search</Text>
      </View>
      <View style={styles.list}>
        {/* List area */}
        <Text>List</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0,
  },
  search: {
    padding: 16,
    backgroundColor: "green",
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "skyblue",
  },
});
