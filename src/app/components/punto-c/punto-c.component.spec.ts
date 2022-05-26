import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoCComponent } from './punto-c.component';

describe('PuntoCComponent', () => {
  let component: PuntoCComponent;
  let fixture: ComponentFixture<PuntoCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntoCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
