import {Component} from '@angular/core';
import {Patient} from "../shared/model/patient";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  currentPatient: Patient = {
    id: 1,
    firstName: 'Lian',
    lastName: 'Tschoggo',
    weight: 100,
    height: 1.80
  };

}
