import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "app/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }
  getData(): Observable<User[]> {
    return this.http.get<User[]>('/user/get');
  }

delete(id):Observable<User[]>
{
  return this.http.delete<User[]>(`/user/user/${id}`);
}
add(user):Observable<User[]>
{
  return this.http.post<User[]>('/user/save/user',user);
}
edit(id,user):Observable<User[]>
{
  return this.http.put<User[]>(`/user/user/${id}`,user);
}
getDataById(id):Observable<User[]>
{
  return this.http.get<User[]>('/user/get'+id);
}
}
