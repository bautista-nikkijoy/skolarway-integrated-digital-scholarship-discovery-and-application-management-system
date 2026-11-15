import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MegaworldPage } from './megaworld.page';

describe('MegaworldPage', () => {
  let component: MegaworldPage;
  let fixture: ComponentFixture<MegaworldPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MegaworldPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
