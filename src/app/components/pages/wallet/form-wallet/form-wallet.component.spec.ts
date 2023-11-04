import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWalletComponent } from './form-wallet.component';

describe('FormWalletComponent', () => {
  let component: FormWalletComponent;
  let fixture: ComponentFixture<FormWalletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormWalletComponent]
    });
    fixture = TestBed.createComponent(FormWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
