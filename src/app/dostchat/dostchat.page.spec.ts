import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DostchatPage } from './dostchat.page';

describe('DostchatPage', () => {
  let component: DostchatPage;
  let fixture: ComponentFixture<DostchatPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DostchatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
