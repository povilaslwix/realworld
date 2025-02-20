import React, { useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";

import { FeedToggle } from "../../components/feed-toggle";
import { ArticlesList } from "../../components/article-list";
import { FeedType } from "../../types";

export function Home() {
  const [activeFeed, setActiveFeed] = useState<FeedType>(FeedType.GLOBAL);

  const selectFeed = useCallback((feed: FeedType) => {
    setActiveFeed(feed);
  }, []);

  return (
    <View style={styles.container}>
      <FeedToggle
        feeds={[FeedType.GLOBAL]}
        activeFeed={activeFeed}
        selectFeed={selectFeed}
      />
      <ArticlesList
        feedType={activeFeed}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
  },
  tagsContainer: {
    height: 34,
    justifyContent: "center",
  },
  newArticleButton: {
    position: "absolute",
    right: 16,
    bottom: 32,
  },
});