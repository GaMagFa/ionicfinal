import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheendPage } from './theend.page';

describe('TheendPage', () => {
  let component: TheendPage;
  let fixture: ComponentFixture<TheendPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheendPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
