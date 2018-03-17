import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';

import {Autosize} from 'ng-autosize';
import {AceEditorModule} from 'ng2-ace-editor';

import {AppComponent} from 'judgeapp/app.component';
import {JudgeComponent} from 'judgeapp/judge.component';

import {ApiService} from 'lib/api.service';
import {ApiServiceImpl} from 'lib/api.impl';
import {DebugJudgeMaterialModule} from 'lib/debugjudgematerial.module';
import {CodeEditorComponent} from 'lib/codeeditor.component';
import {ScoreboardComponent} from 'lib/scoreboard.component';
import {JudgeApiServiceImpl} from "./judgeapi.impl";

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
    DebugJudgeMaterialModule,
  ],
  providers: [
    {provide: 'ApiService', useClass: ApiServiceImpl},
    {provide: 'JudgeApiService', useClass: JudgeApiServiceImpl},
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
