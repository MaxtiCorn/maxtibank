import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayFromMaxtibankComponent } from './pay-from-maxtibank.component';

describe('PayFromMaxtibankComponent', () => {
  let component: PayFromMaxtibankComponent;
  let fixture: ComponentFixture<PayFromMaxtibankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayFromMaxtibankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayFromMaxtibankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
