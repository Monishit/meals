import React from "react";
//<-- All React native imports.... -->
import { StyleSheet, View, Text } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

//<-- All Compoments imports.... -->

//<-- All Utils imports.... -->

function R_Card({ restaurent = {} }) {
  // <-- All const codes -->
  const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
  const {
    name = "Some Restaurent",
    icon,
    photos = [
      "https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-pasta.jpg?1430942591",
    ],
    address = "100 some randome street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporary,
  } = restaurent;

  return (
    <Card elevation={10}>
      <Card.Cover style={styles.cover} key={name} source={{ uri: photos[0] }} />
      <Card.Content>
        <Title>{name}</Title>
        {/* <Paragraph>{address}</Paragraph> */}
        <Text>{address}</Text>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  cover: {
    padding: 5,
    backgeoundColor: "#fff",
  },
});

export default R_Card;
