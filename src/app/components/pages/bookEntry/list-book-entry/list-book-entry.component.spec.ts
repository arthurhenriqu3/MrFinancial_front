import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBookEntryComponent } from './list-book-entry.component';

describe('ListBookEntryComponent', () => {
  let component: ListBookEntryComponent;
  let fixture: ComponentFixture<ListBookEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListBookEntryComponent]
    });
    fixture = TestBed.createComponent(ListBookEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
