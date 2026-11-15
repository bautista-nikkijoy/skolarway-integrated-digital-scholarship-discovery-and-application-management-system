import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GbfPage } from './gbf.page';

describe('GbfPage', () => {
  let component: GbfPage;
  let fixture: ComponentFixture<GbfPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GbfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
