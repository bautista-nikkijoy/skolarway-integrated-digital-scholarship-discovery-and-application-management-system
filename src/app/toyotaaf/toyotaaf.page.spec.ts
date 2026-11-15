import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToyotaafPage } from './toyotaaf.page';

describe('ToyotaafPage', () => {
  let component: ToyotaafPage;
  let fixture: ComponentFixture<ToyotaafPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ToyotaafPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
