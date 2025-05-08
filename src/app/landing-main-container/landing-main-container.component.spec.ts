import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingMainContainerComponent } from './landing-main-container.component';

describe('LandingMainContainerComponent', () => {
  let component: LandingMainContainerComponent;
  let fixture: ComponentFixture<LandingMainContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingMainContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingMainContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
