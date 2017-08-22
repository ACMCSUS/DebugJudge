import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';

import {Autosize} from 'angular2-autosize/src/autosize.directive';
import {CodeEditorComponent} from 'lib/codeeditor.component';
import {AceEditorModule} from 'ng2-ace-editor';

import {AppComponent} from 'teamapp/app.component';
import {ProblemCardComponent} from 'teamapp/problemcard.component';
import {TeamComponent} from 'teamapp/team.component';

import {ScoreboardComponent} from 'lib/scoreboard.component';

@NgModule({
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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  public static appRoutes: Routes = [
    {path: '', component: TeamComponent},
    {path: 'scoreboard', component: ScoreboardComponent},
  ];
}
