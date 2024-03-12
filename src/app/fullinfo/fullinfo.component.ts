import { Component } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { ActivatedRoute } from '@angular/router';

export interface Hotel{
  id: number;
  name: string;
  hotelId: number;
  roomTypeId: number;
  pricePerNight: number;
  available: boolean;
  maximumGuests: number;
  bookedDates: null;
  source: string;
  roomId: number
  rooms: Array<Type>
}
export interface Type{
  id: number;
  name: string;
  pricePerNight : number;
  images: Array<Type1>
}
export interface Type1{
  id: number;
  source: string;
  roomId: number
}



@Component({
  selector: 'app-fullinfo',
  templateUrl: './fullinfo.component.html',
  styleUrl: './fullinfo.component.css'
})
export class FullinfoComponent {
    
    public hotel!: Hotel;
    public id: string | null = null;
    public hotelList!: any

    constructor(private httpService:HttpService,
      private route:ActivatedRoute){
        this.id = this.route.snapshot.paramMap.get('id');
        this.httpService.getHotelById(this.id).subscribe((data:any) =>{
          // console.log(data.id)
          this.hotel = data
          this.hotelList = data.rooms
          console.log(this.hotelList)
        })
      }


    ngOnInit() {
      
      
    }
}
