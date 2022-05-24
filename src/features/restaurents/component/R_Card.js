import React from "react";
//<-- All React native imports.... -->
import { StyleSheet, View } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

//<-- All Compoments imports.... -->

//<-- All Utils imports.... -->

function R_Card(props) {
  // <-- All const codes -->
  const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

  return (
    <Card>
      <Card.Title
        title="Card Title"
        subtitle="Card Subtitle"
        left={LeftContent}
      />
      <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  );
}
const styles = StyleSheet.create({
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});

export default R_Card;
