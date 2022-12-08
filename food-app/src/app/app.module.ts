import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { PatientListComponent } from './welcome-page/patient-list/patient-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StatsListComponent } from './home-page/stats-list/stats-list.component';
import { PatientViewPageComponent } from './patient-view-page/patient-view-page.component';
import { PatientViewListComponent } from './patient-view-page/patient-view-list/patient-view-list.component';
import { FoodViewPageComponent } from './food-view-page/food-view-page.component';
import { FoodListComponent } from './food-view-page/food-list/food-list.component';
import { MealPlanPageComponent } from './meal-plan-page/meal-plan-page.component';
import { DishCarouselComponent } from './meal-plan-page/dish-carousel/dish-carousel.component';
import { MealPlanComponent } from './meal-plan-page/meal-plan/meal-plan.component';
import { DishListComponent } from './meal-plan-page/dish-carousel/dish-list/dish-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    WelcomePageComponent,
    PatientListComponent,
    HomePageComponent,
    StatsListComponent,
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
