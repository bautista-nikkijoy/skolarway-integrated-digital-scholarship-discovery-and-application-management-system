import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LaverdadPage } from './laverdad.page';

describe('LaverdadPage', () => {
  let component: LaverdadPage;
  let fixture: ComponentFixture<LaverdadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LaverdadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
