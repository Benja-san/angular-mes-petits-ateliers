import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildersSearchComponent } from './wilders-search.component';

describe('WildersSearchComponent', () => {
  let component: WildersSearchComponent;
  let fixture: ComponentFixture<WildersSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WildersSearchComponent]
    });
    fixture = TestBed.createComponent(WildersSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
