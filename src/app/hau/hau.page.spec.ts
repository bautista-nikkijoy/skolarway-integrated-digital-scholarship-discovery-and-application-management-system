import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HauPage } from './hau.page';

describe('HauPage', () => {
  let component: HauPage;
  let fixture: ComponentFixture<HauPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HauPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
