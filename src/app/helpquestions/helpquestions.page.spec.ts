import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HelpquestionsPage } from './helpquestions.page';

describe('HelpquestionsPage', () => {
  let component: HelpquestionsPage;
  let fixture: ComponentFixture<HelpquestionsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpquestionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
