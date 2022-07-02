import React, { useContext } from "react";
import { View, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import R_Card from "../component/R_Card";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restautants/restaurants.context";

// <-- All styled components... -->

const SearchView = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurentListView = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

export default function R_Home() {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <SearchView>
        {/* Search Bar */}
        <Searchbar placeholder="Search" />
      </SearchView>
      {/* List area */}
      <RestaurentListView
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <R_Card restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
}
