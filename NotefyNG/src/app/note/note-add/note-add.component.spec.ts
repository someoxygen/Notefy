/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NoteAddComponent } from './note-add.component';

describe('NoteAddComponent', () => {
  let component: NoteAddComponent;
  let fixture: ComponentFixture<NoteAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
