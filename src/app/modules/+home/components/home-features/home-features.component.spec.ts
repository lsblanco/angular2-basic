import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import 'hammerjs';

import { By } from '@angular/platform-browser/src/dom/debug/by';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MaterialModule, MdDialog, MdDialogRef } from '@angular/material';

import { HomeFeaturesComponent } from './home-features.component';
import { HomeFeatureModal } from '../home-feature-modal/home-feature-modal.component';

describe('Modules -> home -> HomeFeatureComponent', () => {
  let component: HomeFeaturesComponent;
  let fixture;

  const elements = [
    {
      title: 'example1',
      description: 'description example1'
    },
    {
      title: 'example2',
      description: 'description example2'
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule.forRoot()
      ],
      declarations: [ HomeFeaturesComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents(); // compile template and css

    fixture = TestBed.createComponent(HomeFeaturesComponent);
    component = fixture.componentInstance;

    spyOn(MdDialog.prototype, 'open').and.returnValue(true);

  });

  it('should have a defined component', () => {
    expect(component).toBeDefined();
  });


  it('should open dialog', () => {
    let element = {
      title: 'title1',
      description: 'description1'
    };
    let dialog = component.openDialog(element);
    expect(dialog).toEqual(true);
  });
});
