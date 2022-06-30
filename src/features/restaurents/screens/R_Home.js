import * as React from "react";
import { View, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import R_Card from "../component/R_Card";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

export default function R_Home() {
  // <-- All styled components... -->

  const SearchView = styled(View)`
    padding: ${(props) => props.theme.space[3]};
  `;

  const RestaurentListView = styled(FlatList).attrs({
    contentContainerStyle: { padding: 16 },
  })``;
  return (
    <SafeArea>
      <SearchView>
        {/* Search Bar */}
        <Searchbar placeholder="Search" />
      </SearchView>
      {/* List area */}
      <RestaurentListView
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
        ]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <R_Card />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
}
