import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AufPage } from './auf.page';

describe('AufPage', () => {
  let component: AufPage;
  let fixture: ComponentFixture<AufPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AufPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
