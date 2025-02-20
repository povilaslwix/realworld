import { userStore } from '../stores';
import {API_URI, SupportedMethods} from './constants';

class ArticlesService {
  async listArticles() {
    const response = await fetch(`${API_URI}/articles`,{
      method: "GET",
      headers: this.headers,
    } );
    return response.json();
    }

  async listFeedArticles() {
    const response = await fetch(`${API_URI}/articles/feed`,{
      method: "GET",
      headers: this.headers,
    } );
    return response.json();
  }

  private get headers(): Headers {
    const { currentUser } = userStore.getCurrentUser();
    const headers = new Headers({
      "content-type": "application/json",
    });

    if (currentUser?.token) {
      headers.set("authorization", `Token ${currentUser.token}`);
    }

    return headers;
  }
}

export const articlesService = new ArticlesService();