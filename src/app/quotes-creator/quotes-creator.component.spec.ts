import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesCreatorComponent } from './quotes-creator.component';

describe('QuotesCreatorComponent', () => {
  let component: QuotesCreatorComponent;
  let fixture: ComponentFixture<QuotesCreatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuotesCreatorComponent]
    });
    fixture = TestBed.createComponent(QuotesCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
