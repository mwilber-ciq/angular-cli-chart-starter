import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartHelloworldComponent } from './chart-helloworld.component';

describe('ChartHelloworldComponent', () => {
  let component: ChartHelloworldComponent;
  let fixture: ComponentFixture<ChartHelloworldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartHelloworldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartHelloworldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
