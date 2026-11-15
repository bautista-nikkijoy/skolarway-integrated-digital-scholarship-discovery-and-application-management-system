import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PshsPage } from './pshs.page';

describe('PshsPage', () => {
  let component: PshsPage;
  let fixture: ComponentFixture<PshsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PshsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
