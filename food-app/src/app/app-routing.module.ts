import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {PatientViewPageComponent} from "./patient-view-page/patient-view-page.component";
import {FoodViewPageComponent} from "./food-view-page/food-view-page.component";
import {MealPlanPageComponent} from "./meal-plan-page/meal-plan-page.component";


const routes: Routes = [
  {
    path: '',
    component: WelcomePageComponent
  },
  {
    path: 'home-page',
    component: HomePageComponent
  },
  {
    path: 'patient-view-page',
    component: PatientViewPageComponent
  },
  {
    path: 'food-view-page',
    component: FoodViewPageComponent
  },
  {
    path: 'meal-plan-page',
    component: MealPlanPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
