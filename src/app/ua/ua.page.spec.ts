import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UaPage } from './ua.page';

describe('UaPage', () => {
  let component: UaPage;
  let fixture: ComponentFixture<UaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
