import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WelcomeScreenService {
  userInfo: any;
  applications: any[];
  constructor(@Inject('env') private env, private httpClient: HttpClient) { }
  getUserApplications() {
    return this.httpClient.post<any>(this.env.urls.UserGroups, { 'securityEnabledOnly': false });
  }
  getUserProfile() {
    return this.httpClient.get<any>(this.env.urls.GraphProfile);
  }
  get currentUserInfo() {
    return this.userInfo;
  }
  set currentUserInfo(value: any) {
    this.userInfo = value;
  }
  get applicationList() {
    return this.applications;
  }
  set applicationList(value: any[]) {
    value.sort((a, b) => a.applicationName.localeCompare(b.applicationName));
    this.applications = value;
  }
}
