import React from "react";
//<-- All React native imports.... -->
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { Searchbar } from "react-native-paper";

//<-- All Compoments imports.... -->
import R_Card from "../component/R_Card";

//<-- All Utils imports.... -->

function R_Home(props) {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        {/* Search Bar */}
        {/* <Text>search</Text> */}
        <Searchbar />
      </View>
      <ScrollView style={styles.list}>
        {/* List area */}
        <R_Card />
        <R_Card />
        <R_Card />
        <R_Card />
      </ScrollView>
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
  },
});

export default R_Home;
