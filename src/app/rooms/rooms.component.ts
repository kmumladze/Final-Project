import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { ActivatedRoute } from '@angular/router';

export interface Rooms {
  id: number;
  name: string;
  hotelId: number;
  pricePerNight: number;
  available: boolean;
  maximumGuests: number;
  roomTypeId: number;
  bookDates: Array<Type>;
}
export interface Type {
  id: number;
  date: string;
  roomId: number;
  images: Array<Type2>;
}

export interface Type2 {
  id: number;
  source: string;
  roomId: number;
}

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent {
  public id: string | null = null;
  public roomsList: any = [];

  constructor(private httpService: HttpService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);

    this.httpService.getRoomsById(this.id).subscribe((data: any) => {
      this.roomsList = data.images;
      console.log(this.roomsList);
    });
  }
}
