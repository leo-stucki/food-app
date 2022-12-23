import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {MatListModule} from "@angular/material/list";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { CreatePatientComponent } from './patient-view-page/create-patient/create-patient.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { CreateFoodComponent } from './food-view-page/create-food/create-food.component';
import { CreateAttributeComponent } from './food-view-page/create-food/create-attribute/create-attribute.component';
import {A11yModule} from "@angular/cdk/a11y";



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
    DishListComponent,
    CreatePatientComponent,
    CreateFoodComponent,
    CreateAttributeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTableModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatSnackBarModule,
    A11yModule
  ],
  providers: [
    MatSnackBarModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
