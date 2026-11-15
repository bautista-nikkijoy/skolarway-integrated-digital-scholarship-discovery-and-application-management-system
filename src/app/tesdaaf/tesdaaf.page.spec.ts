import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TesdaafPage } from './tesdaaf.page';

describe('TesdaafPage', () => {
  let component: TesdaafPage;
  let fixture: ComponentFixture<TesdaafPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TesdaafPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
