import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAdSpotsComponent } from './my-ad-spots.component';

describe('MyAdSpotsComponent', () => {
  let component: MyAdSpotsComponent;
  let fixture: ComponentFixture<MyAdSpotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAdSpotsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAdSpotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
