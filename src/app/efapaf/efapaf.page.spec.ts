import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EfapafPage } from './efapaf.page';

describe('EfapafPage', () => {
  let component: EfapafPage;
  let fixture: ComponentFixture<EfapafPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EfapafPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
