import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookEntryFormComponent } from './book-entry-form.component';

describe('BookEntryFormComponent', () => {
  let component: BookEntryFormComponent;
  let fixture: ComponentFixture<BookEntryFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookEntryFormComponent]
    });
    fixture = TestBed.createComponent(BookEntryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
