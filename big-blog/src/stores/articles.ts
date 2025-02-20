import * as remx from "remx";

import { Article } from '../types';

const initialArticlesState = {
  globalArticles: [] as Article[],
  feedArticles: [] as Article[],
};

const articlesState = remx.state(initialArticlesState);

const articlesSetters = remx.setters({
  setGlobalArticles(articles: Article[]) {
    articlesState.globalArticles = articles;
  },
  setFeedArticles(articles: Article[]) {
    articlesState.feedArticles = articles;
  },
});

const articlesGetters = remx.getters({
  getGlobalArticles() {
    return articlesState.globalArticles;
  },
  getFeedArticles() {
    return articlesState.feedArticles;
  },
});

export const articlesStore = {
  ...articlesSetters,
  ...articlesGetters,
};
