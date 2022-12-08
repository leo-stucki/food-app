import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishCarouselComponent } from './dish-carousel.component';

describe('DishCarouselComponent', () => {
  let component: DishCarouselComponent;
  let fixture: ComponentFixture<DishCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DishCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
