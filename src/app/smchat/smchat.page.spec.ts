import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SmchatPage } from './smchat.page';

describe('SmchatPage', () => {
  let component: SmchatPage;
  let fixture: ComponentFixture<SmchatPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SmchatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
