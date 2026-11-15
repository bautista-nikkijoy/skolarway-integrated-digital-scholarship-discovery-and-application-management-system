import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChamberafPage } from './chamberaf.page';

describe('ChamberafPage', () => {
  let component: ChamberafPage;
  let fixture: ComponentFixture<ChamberafPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamberafPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
