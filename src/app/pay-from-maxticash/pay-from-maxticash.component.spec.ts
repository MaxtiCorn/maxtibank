import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayFromMaxticashComponent } from './pay-from-maxticash.component';

describe('PayFromMaxticashComponent', () => {
  let component: PayFromMaxticashComponent;
  let fixture: ComponentFixture<PayFromMaxticashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayFromMaxticashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayFromMaxticashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
