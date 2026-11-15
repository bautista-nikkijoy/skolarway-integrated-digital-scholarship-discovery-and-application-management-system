import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DostafPage } from './dostaf.page';

describe('DostafPage', () => {
  let component: DostafPage;
  let fixture: ComponentFixture<DostafPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DostafPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
