import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PshsafPage } from './pshsaf.page';

describe('PshsafPage', () => {
  let component: PshsafPage;
  let fixture: ComponentFixture<PshsafPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PshsafPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
