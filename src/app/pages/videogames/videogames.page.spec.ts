import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideogamesPage } from './videogames.page';

describe('VideogamesPage', () => {
  let component: VideogamesPage;
  let fixture: ComponentFixture<VideogamesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideogamesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideogamesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
