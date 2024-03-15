import { Component } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { ActivatedRoute } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


export interface Rooms{
  id: number;
  name: string;
  hotelId: number;
  pricePerNight: number;
  available: boolean;
  maximumGuests: number;
  roomTypeId: number;
  bookDates: Array<Type>

}
export interface Type{
  id: number;
  date: string;
  roomId: number;
  images: Array<Type2>
}

export interface Type2{
  id: number;
  source: string;
  roomId: number
}

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  imports: [NgbCarouselModule],
  standalone: true,
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {

  public rooms!: Rooms;
  public id: string | null = null;
  public roomsList!: any

  constructor(private httpService:HttpService,
    private route:ActivatedRoute){
      this.id = this.route.snapshot.paramMap.get('id');
      this.httpService.getRoomsById(this.id).subscribe((data:any) => {
        this.rooms = data;
        this.roomsList = data.images
        console.log(this.roomsList)
      })

    
    }
    ngOnInit(){
          
      }
}