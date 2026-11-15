import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UaafPage } from './uaaf.page';

describe('UaafPage', () => {
  let component: UaafPage;
  let fixture: ComponentFixture<UaafPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UaafPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
