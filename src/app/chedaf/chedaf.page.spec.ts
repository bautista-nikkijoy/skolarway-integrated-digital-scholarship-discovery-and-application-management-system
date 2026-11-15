import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChedafPage } from './chedaf.page';

describe('ChedafPage', () => {
  let component: ChedafPage;
  let fixture: ComponentFixture<ChedafPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChedafPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
