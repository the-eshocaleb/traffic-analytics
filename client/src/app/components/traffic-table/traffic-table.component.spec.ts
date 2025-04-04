import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficTableComponent } from './traffic-table.component';

describe('TrafficTableComponent', () => {
  let component: TrafficTableComponent;
  let fixture: ComponentFixture<TrafficTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrafficTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrafficTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
