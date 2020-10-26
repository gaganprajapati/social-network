import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = 'http://localhost:8888/api';

  constructor(private httpClient: HttpClient) {}

  getUser(id: number) {
    return this.httpClient.get(`${this.apiUrl}/user/${id}`);
  }

  getUsers(page: number, count: number) {
    return this.httpClient.get(`${this.apiUrl}/user/${page}/${count}`);
  }

  getFriends(id: number, page: number, count: number) {
    return this.httpClient.get(`${this.apiUrl}/user/${id}/friends/${page}/${count}`);
  }
}
