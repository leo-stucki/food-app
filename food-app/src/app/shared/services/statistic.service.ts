import {Injectable, OnInit} from '@angular/core';
import {AttributeService} from "./attribute.service";
import {Statistic} from "../model/statistic";
import {PatientService} from "./patient.service";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StatisticService {

  //MOCK-DATA
  statistics: Statistic[] = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    }
  ]

  constructor(private patientService: PatientService, private attributeService: AttributeService) {
    this.patientService.getPatientById(1).subscribe((res) => {
      this.statistics[0].patient = res;
      this.statistics[1].patient = res;
      this.statistics[4].patient = res;
      this.statistics[5].patient = res;
    })
    this.patientService.getPatientById(2).subscribe((res) => {
      this.statistics[2].patient = res;
    })
    this.patientService.getPatientById(3).subscribe((res) => {
      this.statistics[3].patient = res;
    })

    this.attributeService.getAttributeById(1).subscribe((res) => {
      this.statistics[0].attribute = res;
      this.statistics[4].attribute = res;
    })
    this.attributeService.getAttributeById(2).subscribe((res) => {
      this.statistics[1].attribute = res;
      this.statistics[5].attribute = res;
    })
    this.attributeService.getAttributeById(3).subscribe((res) => {
      this.statistics[2].attribute = res;
      this.statistics[3].attribute = res;
    })
  }


  //MOCK-ENDPOINTS (deliver mock data)
  getStatisticsByPatient(patientId: number): Observable<Statistic[]> {
    let result: Statistic[] = [];
    for (let statistic of this.statistics) {
      if (statistic.patient?.id == patientId) {
        result.push(statistic);
      }
    }
    return of(result);
  }
}
