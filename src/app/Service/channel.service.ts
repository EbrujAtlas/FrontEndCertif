import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Channels } from '../Model/channels';

@Injectable({
  providedIn: 'root',
})
export class ChannelService {
  url = 'http://localhost:8080/tinyslack/';

  options = {
    headers: new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    ),
  };
  
  constructor(private http: HttpClient) {}

  getChannels() {
    return this.http.get(this.url + 'channels');
  }

  getChannelByName(name: string) {
    return this.http.get(this.url + 'channels/' + name);
  }

  addChannel(channel: Channels) {
    const body = {
      channelName: channel.channelName,
      channelDescription: channel.description,
    };
    return this.http.post(this.url + 'channels', body);
  }
}