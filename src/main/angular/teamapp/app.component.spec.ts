/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import {Autosize} from 'angular2-autosize/src/autosize.directive';
import { AppComponent } from 'teamapp/app.component';
import {TeamComponent} from './team.component';
import {ScoreboardComponent} from '../lib/scoreboard.component';
import {ProblemCardComponent} from './problemcard.component';
import {CodeEditorComponent} from '../lib/codeeditor.component';
import {AceEditorModule} from 'ng2-ace-editor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '@angular/material';
import {AppModule} from './app.module';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        Autosize,

        AppComponent,
        TeamComponent,
        ScoreboardComponent,
        ProblemCardComponent,
        CodeEditorComponent,
      ],
      imports: [
        AceEditorModule,
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(AppModule.appRoutes),
        MaterialModule,
      ],
    });
    TestBed.compileComponents();
  });

  // it('should create the app', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // }));
  //
  // it(`should have as title 'app works!'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app works!');
  // }));
  //
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('app works!');
  // }));
});
