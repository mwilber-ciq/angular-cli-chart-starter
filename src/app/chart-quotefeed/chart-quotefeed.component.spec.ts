import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartQuotefeedComponent } from './chart-quotefeed.component';

describe('ChartQuotefeedComponent', () => {
  let component: ChartQuotefeedComponent;
  let fixture: ComponentFixture<ChartQuotefeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartQuotefeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartQuotefeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
