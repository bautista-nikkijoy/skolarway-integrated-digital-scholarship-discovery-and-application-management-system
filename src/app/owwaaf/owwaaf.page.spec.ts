import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OwwaafPage } from './owwaaf.page';

describe('OwwaafPage', () => {
  let component: OwwaafPage;
  let fixture: ComponentFixture<OwwaafPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OwwaafPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
