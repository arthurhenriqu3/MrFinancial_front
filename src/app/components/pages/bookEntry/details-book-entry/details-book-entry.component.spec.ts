import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsBookEntryComponent } from './details-book-entry.component';

describe('DetailsBookEntryComponent', () => {
  let component: DetailsBookEntryComponent;
  let fixture: ComponentFixture<DetailsBookEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsBookEntryComponent]
    });
    fixture = TestBed.createComponent(DetailsBookEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
