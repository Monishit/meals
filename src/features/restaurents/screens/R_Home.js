import React from "react";
//<-- All React native imports.... -->
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { Searchbar } from "react-native-paper";

//<-- All Compoments imports.... -->

//<-- All Utils imports.... -->

function R_Home(props) {
  // <-- All const codes -->
  const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        {/* Search Bar */}
        {/* <Text>search</Text> */}
        <Searchbar />
      </View>
      <View style={styles.list}>
        {/* List area */}
        <R_Card />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});

export default R_Home;
