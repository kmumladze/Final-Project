import { Component, Input, OnInit, input } from '@angular/core';
import { Hotel } from '../hotel.interface';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrl: './hotel-list.component.css',
})
export class HotelListComponent implements OnInit {
  hotels: Hotel[] = [];
  public hotelId!: any;
  // @Input() selectedHotel: any
  selectedValue: string = '';

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    console.log(this.selectedValue);
    this.httpService.getHttp().subscribe((data: any) => {
      this.hotels = data;
      console.log(this.hotels);
    });
  }

  onBtnSave(id: any) {
    this.hotelId = id;
    console.log(this.hotelId);
  }

  onSelectChange(event: any) {
    this.selectedValue = event.currentTarget.value;
    console.log(event.currentTarget.value);
  }

  getSelectedHotel() {
    if (this.selectedValue === '') return this.hotels;

    return this.hotels.filter(
      (hotel) => hotel.id === Number(this.selectedValue)
    );
  }
}
