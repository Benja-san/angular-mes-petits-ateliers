import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WilderComponent } from './wilder.component';

describe('WilderComponent', () => {
  let component: WilderComponent;
  let fixture: ComponentFixture<WilderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WilderComponent]
    });
    fixture = TestBed.createComponent(WilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
