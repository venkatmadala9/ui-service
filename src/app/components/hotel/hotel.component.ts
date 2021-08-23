import { Component, OnInit } from '@angular/core';
import { Hotel, RestService } from '../service/rest.service';
import { Router } from '@angular/router';

const enum ACTIONS {
  ADD = 'add',
  DELETE = 'delete'
}

@Component({
  selector: 'hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  hotels: Hotel[] = [];
  createHotel: boolean = false;
  showHotelDetails: boolean = false;
  hotelDetails: any;
  addSucess: boolean = false;

  constructor(
    public rest: RestService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getHotels();
  }

  getHotels(): void {
    this.rest.getHotels().subscribe((resp: any) => {
      this.hotels = resp;
      console.log(this.hotels);
    })
  }

  hotelAction(actionType: any) {
    if (actionType == ACTIONS.ADD)
      this.createHotel = true;
  }

  addHotel(hotelForm: any): void {
    this.rest.addHotel(hotelForm).subscribe((result) => {
      this.showHotelDetails = true;
      this.hotelDetails = result;
      this.addSucess = true;
    }, (err) => {
      console.log(err);
    }
    );
  }

  delete(id: string): void {
    this.rest.deleteHotel(id)
      .subscribe(() => {
        this.getHotels();
      }, (err) => {
        console.log(err);
      }
      );
  }
}
