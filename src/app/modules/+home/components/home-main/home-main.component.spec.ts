import {
  inject,
  TestBed
} from '@angular/core/testing';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { FeaturesService } from '../../services/features/features.service';
import { TechsService } from '../../services/techs/techs.service';
import { MultiLanguageService } from '../../../../shared/services/multiLanguage/multiLanguage.service';
import { EnvironmentConfigService } from '../../../../shared/services/environmentConfig/environmentConfig.service';


import { MaterialModule } from '@angular/material';
import { TranslateModule } from 'ng2-translate';

// Load the implementations that should be tested
import { HomeMainComponent } from './home-main.component';

describe('Module Home -> Component HomeMain', () => {
  let component: HomeMainComponent;
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        MaterialModule.forRoot()
      ],
      providers: [ EnvironmentConfigService ],
      declarations: [ HomeMainComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents(); // compile template and css
    const fixture = TestBed.createComponent(HomeMainComponent);
    component = fixture.componentInstance;
  });

  it('should have a defined component', () => {
    expect(component).toBeDefined();
  });

  it('should have a rowHeight', () => {
    expect(!!component.rowHeight).toEqual(true);
  });

  it('should log ngOnInit', () => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    component.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  });
});
