import React, { useCallback } from "react";
import { FlatList, StyleSheet } from "react-native";

import { FeedType } from "../../types";
import { FeedItem } from "./FeedItem";

type FeedToggleProps = {
  feeds: FeedType[];
  activeFeed: FeedType;
  selectFeed: (feed: FeedType) => void;
};

export function FeedToggle({
                             feeds,
                             activeFeed,
                             selectFeed,
                           }: FeedToggleProps) {
  const onSelectFeed = useCallback(
    (feed: FeedType) => selectFeed(feed),
    [selectFeed]
  );

  return (
    <FlatList
      style={styles.container}
      data={feeds}
      renderItem={({ item }) => (
        <FeedItem
          title={getTitle(item)}
          isActive={activeFeed === item}
          onSelectFeed={() => onSelectFeed(item)}
        />
      )}
      keyExtractor={(item) => item.toString()}
      horizontal={true}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
    borderBottomWidth: 1,
    borderColor: "#aaa",
  },
});

function getTitle(type: FeedType): string {
  switch (type) {
    case FeedType.FOLLOWING:
      return "Following";
    default:
      return "For You";
  }
}