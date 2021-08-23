import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../../../service/rest.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'create-hotel',
  templateUrl: './hotel-add.component.html',
  styleUrls: ['./hotel-add.component.css']
})
export class HotelAddComponent implements OnInit {
  @Output() add: EventEmitter<any> = new EventEmitter();
  hotelForm = new FormGroup(
    {
      name: new FormControl(),
      hotelRooms: new FormControl(),
      hotelNumber: new FormControl(),
      facilityCode: new FormControl(),
      address: new FormGroup(
        {
          street: new FormControl(),
          city: new FormControl(),
          state: new FormControl(),
          zipcode: new FormControl(),
        }
      )
    }
  );

  /** @Input() hotelData = {
                        name: '',
                        address: '',
                        hotelNumber: '',
                        hotelRooms: '',
                        facilityCode: ''
                        };*/

  constructor(
    public rest: RestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.hotelForm.value);
    this.addHotel(this.hotelForm.value);
  }

  addHotel(hotelForm: any): void {
    this.add.emit(hotelForm);
  }
}
