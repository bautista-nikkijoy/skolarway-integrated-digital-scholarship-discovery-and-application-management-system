import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AicsafPage } from './aicsaf.page';

describe('AicsafPage', () => {
  let component: AicsafPage;
  let fixture: ComponentFixture<AicsafPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AicsafPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
