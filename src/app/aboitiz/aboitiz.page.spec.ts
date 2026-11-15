import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboitizPage } from './aboitiz.page';

describe('AboitizPage', () => {
  let component: AboitizPage;
  let fixture: ComponentFixture<AboitizPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AboitizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
