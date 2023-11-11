import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsWalletComponent } from './details-wallet.component';

describe('DetailsWalletComponent', () => {
  let component: DetailsWalletComponent;
  let fixture: ComponentFixture<DetailsWalletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsWalletComponent]
    });
    fixture = TestBed.createComponent(DetailsWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
