import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantContainerComponent } from './restaurant-container.component';

describe('RestaurantContainerComponent', () => {
  let component: RestaurantContainerComponent;
  let fixture: ComponentFixture<RestaurantContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
