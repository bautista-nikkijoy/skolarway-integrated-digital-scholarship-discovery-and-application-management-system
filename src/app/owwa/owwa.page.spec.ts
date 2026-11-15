import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OwwaPage } from './owwa.page';

describe('OwwaPage', () => {
  let component: OwwaPage;
  let fixture: ComponentFixture<OwwaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OwwaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
