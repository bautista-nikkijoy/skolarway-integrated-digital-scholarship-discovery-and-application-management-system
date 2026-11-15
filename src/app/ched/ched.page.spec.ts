import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChedPage } from './ched.page';

describe('ChedPage', () => {
  let component: ChedPage;
  let fixture: ComponentFixture<ChedPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
