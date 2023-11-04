import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBookEntryComponent } from './form-book-entry.component';

describe('FormBookEntryComponent', () => {
  let component: FormBookEntryComponent;
  let fixture: ComponentFixture<FormBookEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormBookEntryComponent]
    });
    fixture = TestBed.createComponent(FormBookEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
