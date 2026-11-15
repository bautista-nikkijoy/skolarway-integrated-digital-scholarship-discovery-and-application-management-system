import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChedchatPage } from './chedchat.page';

describe('ChedchatPage', () => {
  let component: ChedchatPage;
  let fixture: ComponentFixture<ChedchatPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChedchatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
