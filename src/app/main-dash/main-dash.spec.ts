import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDash } from './main-dash';

describe('MainDash', () => {
  let component: MainDash;
  let fixture: ComponentFixture<MainDash>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainDash]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainDash);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
