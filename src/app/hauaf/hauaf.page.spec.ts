import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HauafPage } from './hauaf.page';

describe('HauafPage', () => {
  let component: HauafPage;
  let fixture: ComponentFixture<HauafPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HauafPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
