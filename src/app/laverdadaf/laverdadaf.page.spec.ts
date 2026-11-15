import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LaverdadafPage } from './laverdadaf.page';

describe('LaverdadafPage', () => {
  let component: LaverdadafPage;
  let fixture: ComponentFixture<LaverdadafPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LaverdadafPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
