import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PagesComponent } from '../../../pages/pages.component';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = PagesComponent.urlConfigAdmin ;
  constructor(protected httpClient: HttpClient) { }

  login(user: User) {
    return this.httpClient.post(this.url + 'login', user);
  }

  register(user:User) {
    return this.httpClient.post(this.url + 'signup', user);
  }
}
