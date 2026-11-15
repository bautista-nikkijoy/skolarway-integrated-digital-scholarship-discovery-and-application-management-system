import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TesdaPage } from './tesda.page';

describe('TesdaPage', () => {
  let component: TesdaPage;
  let fixture: ComponentFixture<TesdaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TesdaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
