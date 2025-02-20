import React from "react";

import { StyleSheet, Text, View } from "react-native";

type FeedItemProps = {
  title: string;
  isActive: boolean;
  onSelectFeed: () => void;
};

export function FeedItem({
                           title,
                           isActive,
                           onSelectFeed,
                         }: FeedItemProps) {
  return (
    <View style={[styles.item, isActive && styles.activeItem]}>
      <Text
        style={[styles.text, isActive && styles.activeText]}
        onPress={onSelectFeed}
      >
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    marginHorizontal: 8,
    marginTop: 8,
  },
  activeItem: {
    color: "#ca0c0c",
    borderBottomWidth: 2,
    borderColor: "#ca0c0c",
  },
  text: {
    color: "#aaa",
    fontSize: 18,
  },
  activeText: {
    color: "#ca0c0c",
  },
});

