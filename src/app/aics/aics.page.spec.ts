import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AicsPage } from './aics.page';

describe('AicsPage', () => {
  let component: AicsPage;
  let fixture: ComponentFixture<AicsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
