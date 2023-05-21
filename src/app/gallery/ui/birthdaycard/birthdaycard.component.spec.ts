import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdaycardComponent } from './birthdaycard.component';

describe('BirthdaycardComponent', () => {
  let component: BirthdaycardComponent;
  let fixture: ComponentFixture<BirthdaycardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BirthdaycardComponent]
    });
    fixture = TestBed.createComponent(BirthdaycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
