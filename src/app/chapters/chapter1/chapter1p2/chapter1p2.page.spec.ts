import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter1p2Page } from './chapter1p2.page';

describe('Chapter1p2Page', () => {
  let component: Chapter1p2Page;
  let fixture: ComponentFixture<Chapter1p2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter1p2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter1p2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
