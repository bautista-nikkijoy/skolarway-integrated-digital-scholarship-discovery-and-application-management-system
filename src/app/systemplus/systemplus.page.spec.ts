import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SystemplusPage } from './systemplus.page';

describe('SystemplusPage', () => {
  let component: SystemplusPage;
  let fixture: ComponentFixture<SystemplusPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemplusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
