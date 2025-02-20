import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text} from 'react-native-ui-lib';

import {ArticleMetadata} from '@/src/components/article-list/ArticleMetadata';
import { Article } from '../../types';

type ArticleProps = { article: Article };

export function ArticleItem({ article }: ArticleProps) {
  const { title, description, slug } = article;

  return (
    <View style={styles.container}>
      <ArticleMetadata article={article} />
    <View>
      <Text style={styles.title} >{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 6,
    marginVertical: 6,
    padding: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "600",
  },
  description: {
    marginTop: 10,
    fontSize: 14,
    color: "#090909",
  },
});