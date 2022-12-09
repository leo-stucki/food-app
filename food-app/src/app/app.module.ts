import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { PatientListComponent } from './welcome-page/patient-list/patient-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StatisticListComponent } from './home-page/statistic-list/statistic-list.component';
import { PatientViewPageComponent } from './patient-view-page/patient-view-page.component';
import { PatientViewListComponent } from './patient-view-page/patient-view-list/patient-view-list.component';
import { FoodViewPageComponent } from './food-view-page/food-view-page.component';
import { FoodListComponent } from './food-view-page/food-list/food-list.component';
import { MealPlanPageComponent } from './meal-plan-page/meal-plan-page.component';
import { DishCarouselComponent } from './meal-plan-page/dish-carousel/dish-carousel.component';
import { MealPlanComponent } from './meal-plan-page/meal-plan/meal-plan.component';
import { DishListComponent } from './meal-plan-page/dish-carousel/dish-list/dish-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {MatListModule} from "@angular/material/list";



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    WelcomePageComponent,
    PatientListComponent,
    HomePageComponent,
    StatisticListComponent,
    PatientViewPageComponent,
    PatientViewListComponent,
    FoodViewPageComponent,
    FoodListComponent,
    MealPlanPageComponent,
    DishCarouselComponent,
    MealPlanComponent,
    DishListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTableModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
