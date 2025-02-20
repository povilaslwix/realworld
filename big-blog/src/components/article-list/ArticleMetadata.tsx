import React from "react";

import { StyleSheet } from "react-native";
import {View, Image, Text} from 'react-native-ui-lib';
import {Article} from '../../types';

type ArticleHeaderProps = {
  article: Article,
};

export function ArticleMetadata({article}: ArticleHeaderProps) {
  const { createdAt, author } = article;
  const date = new Date(createdAt);

  return (
    <View>
      <Image style={styles.image} source={{uri: author.image}}/>
      <Text style={styles.username}> {author.username}</Text>
      <Text style={styles.date}>{date.toLocaleDateString()}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    width: 45,
    height: 45,
    borderRadius: 15,
  },
  username: {
    marginLeft: 50,
    marginBottom: 5,
    color: "#000000",
    fontWeight: "bold"
  },
  date: {
    marginLeft: 50,
    color: "#1b1f6",
    opacity: 0.6,
  },
  rightActions: {
    position: "absolute",
    right: 0,
    flex: 1,
    flexDirection: "row",
  },
});
