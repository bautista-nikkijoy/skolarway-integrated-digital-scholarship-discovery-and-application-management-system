import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AufafPage } from './aufaf.page';

describe('AufafPage', () => {
  let component: AufafPage;
  let fixture: ComponentFixture<AufafPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AufafPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
