import {User} from '../types';
import {API_URI} from '@/src/services/constants';

class UserService {
  async getCurrent(): Promise<User | undefined> {
    const response = await fetch(`${API_URI}/users`, {
      method: "GET",
      headers: {"content-type": "application/json"},
    });

    if (response.status !== 200) {
      return undefined;
    }

    const json = await response.json();

    return json.user as User;
  }

  async login(email: string, password: string): Promise<User | undefined> {
    const user = {
      email,
      password,
    };
    const response = await fetch(`${API_URI}/users/login`, {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(user),
    });

    const json = await response.json()

    return await json.user as User;
  }
}

export const userService = new UserService();