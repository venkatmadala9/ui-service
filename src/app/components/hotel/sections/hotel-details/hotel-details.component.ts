import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hotel, RestService } from '../../../service/rest.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {
  @Input() hotelsList: any;
  @Output() delete: EventEmitter<any> = new EventEmitter();
  hotel!: Hotel;

  constructor(public rest: RestService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

  }

  getDetails(oid: string) {
    this.rest.getHotelDetails(oid).subscribe(
      (data: Hotel) => this.hotel = { ...data }
    );
  }

  deleteHotel(oid: any) {
    this.delete.emit(oid);
  }

}
