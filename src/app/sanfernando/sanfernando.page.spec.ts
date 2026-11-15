import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SanfernandoPage } from './sanfernando.page';

describe('SanfernandoPage', () => {
  let component: SanfernandoPage;
  let fixture: ComponentFixture<SanfernandoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SanfernandoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
