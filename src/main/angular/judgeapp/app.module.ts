import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';

import {Autosize} from 'angular2-autosize/src/autosize.directive';

import {AppComponent} from 'judgeapp/app.component';
import {JudgeComponent} from 'judgeapp/judge.component';

import {CodeEditorComponent} from 'lib/codeeditor.component';
import {ScoreboardComponent} from 'lib/scoreboard.component';
import {AceEditorModule} from 'ng2-ace-editor';

const appRoutes: Routes = [
  { path: '', component: JudgeComponent },
  { path: 'scoreboard', component: ScoreboardComponent },
];

@NgModule({
  declarations: [
    Autosize,

    AppComponent,
    JudgeComponent,
    ScoreboardComponent,
    CodeEditorComponent,
  ],
  imports: [
    AceEditorModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
