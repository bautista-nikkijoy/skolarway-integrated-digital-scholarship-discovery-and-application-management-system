import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SmafPage } from './smaf.page';

describe('SmafPage', () => {
  let component: SmafPage;
  let fixture: ComponentFixture<SmafPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SmafPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
