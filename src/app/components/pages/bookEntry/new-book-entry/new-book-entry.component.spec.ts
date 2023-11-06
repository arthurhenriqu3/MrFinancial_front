import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBookEntryComponent } from './new-book-entry.component';

describe('NewBookEntryComponent', () => {
  let component: NewBookEntryComponent;
  let fixture: ComponentFixture<NewBookEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewBookEntryComponent]
    });
    fixture = TestBed.createComponent(NewBookEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
