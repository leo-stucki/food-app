import {Component, OnInit} from '@angular/core';
import {PatientService} from "../../shared/services/patient.service";
import {Patient} from "../../shared/model/patient";
import {StatisticService} from "../../shared/services/statistic.service";
import {Statistic} from "../../shared/model/statistic";

@Component({
  selector: 'app-statistic-list',
  templateUrl: './statistic-list.component.html',
  styleUrls: ['./statistic-list.component.scss']
})
export class StatisticListComponent implements OnInit {

  currentPatient: Patient = new Patient();

  statistics: Statistic[] = [];

  constructor(private patientService: PatientService, private statisticService: StatisticService) {}

  ngOnInit() {
    this.patientService.getCurrentPatient().subscribe((res) => {
      this.currentPatient = res;
      if (this.currentPatient.id != null) {
        this.statisticService.getStatisticsByPatient(this.currentPatient.id).subscribe((res) => {
          this.statistics = res;
        })
      }
    });
  }
}
