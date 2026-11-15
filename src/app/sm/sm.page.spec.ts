import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SmPage } from './sm.page';

describe('SmPage', () => {
  let component: SmPage;
  let fixture: ComponentFixture<SmPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
