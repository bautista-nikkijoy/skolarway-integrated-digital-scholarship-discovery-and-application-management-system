import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EfapPage } from './efap.page';

describe('EfapPage', () => {
  let component: EfapPage;
  let fixture: ComponentFixture<EfapPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EfapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
