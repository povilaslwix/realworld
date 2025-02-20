import React, {useEffect, useState} from 'react';

import { useConnect } from 'remx';

import {View, Text} from 'react-native-ui-lib';
import {ActivityIndicator, FlatList} from 'react-native';

import { ArticleItem } from './ArticleItem';
import { Article, FeedType } from '../../types';
import { articlesStore } from '../../stores';
import { articlesService } from '../../services'

type ArticlesListProps = {
  feedType: FeedType;
  tag?: string | undefined;
  username?: string | undefined;
};

export function ArticlesList({
                               feedType,
                               tag,
                             }: ArticlesListProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const articles = useConnect(() => getArticlesByFeedType(feedType));

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true)

      const newArticles = feedType === FeedType.GLOBAL ? await articlesService.listArticles() : await articlesService.listFeedArticles();

      articlesStore.setGlobalArticles(newArticles.articles);

      setLoading(false)
    };
    fetchArticles();
  }, [feedType, tag]);

  if (loading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  if (articles.length === 0) {
    return (
      <View>
        <Text>No articles found</Text>
      </View>
    )
  }

  return (
   <View>
     <FlatList
        data={articles}
        renderItem={({ item }) => <ArticleItem article={item} />}
        keyExtractor={(item) => item.slug}
        />
   </View>

  );

  function getArticlesByFeedType(feedType: FeedType): Article[] {
    switch (feedType) {
      case FeedType.GLOBAL:
        return articlesStore.getGlobalArticles();
      case FeedType.FOLLOWING:
        return articlesStore.getFeedArticles();
      default:
        throw new Error("Invalid feed type");
    }
  }
}
