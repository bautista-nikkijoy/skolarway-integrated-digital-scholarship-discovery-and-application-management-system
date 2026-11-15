import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DostPage } from './dost.page';

describe('DostPage', () => {
  let component: DostPage;
  let fixture: ComponentFixture<DostPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
