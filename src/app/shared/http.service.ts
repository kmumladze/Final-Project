import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel, Rooms } from '../hotel.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  private apiUrl = "https://hotelbooking.stepprojects.ge/api/Hotels/GetAll";
  private hotelsUrl = "https://hotelbooking.stepprojects.ge/api/Rooms/GetAll"
 
  constructor(private http: HttpClient) { }

  getHttp(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${this.apiUrl}`)
  }

  getHotelsHttp(): Observable<Rooms[]> {
    return this.http.get<Rooms[]>(`${this.hotelsUrl}`)
  }


  getHotelById(id:any){
    return this.http.get(`https://hotelbooking.stepprojects.ge/api/Hotels/GetHotel/${id}`)
  }
  getRoomsById(id:any){
    return this.http.get(`https://hotelbooking.stepprojects.ge/api/Rooms/GetRoom/${id}`)
  }
}


