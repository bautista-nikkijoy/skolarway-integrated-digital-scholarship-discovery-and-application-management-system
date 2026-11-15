import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MegaworldafPage } from './megaworldaf.page';

describe('MegaworldafPage', () => {
  let component: MegaworldafPage;
  let fixture: ComponentFixture<MegaworldafPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MegaworldafPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
