import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { Rooms } from '../rooms/rooms.component';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.css'
})
export class HotelsComponent implements OnInit{
rooms: Rooms[] = [];



constructor(private httpService: HttpService){}

ngOnInit(): void {
  this.httpService.getHotelsHttp().subscribe((data: any) => {
    this.rooms = data
    console.log(this.rooms)
  })
}
}

