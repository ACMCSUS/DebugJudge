import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {AppMaterialModule} from './app-material.module';
import {AppRoutingModule} from './app-routing.module';

import {ServiceWorkerModule} from '@angular/service-worker';
import {AppComponent} from './app.component';
import {ScoreboardComponent} from './scoreboard.component';
import {AdminComponent} from './view-admin.component';
import {TeamComponent} from './view-team.component';
import {JudgeComponent} from './view-judge.component';
import {ApiTeamServiceImpl} from './api-team.service';
import {HttpClientModule} from '@angular/common/http';
import {CodeEditorComponent} from './codeeditor.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ApiWebSocketService, ApiWebSocketServiceImpl} from './api-ws.service';
import {DebuggingCardComponent} from "./debuggingcard.component";
import {AdminStatusBoardComponent} from "./admin-statusboard.component";
import {AceEditorModule} from "ng2-ace-editor";
import {SubmissionsBarComponent} from "./submission-bar.component";
import {SubmissionsViewComponent} from "./view-submissions.component";
import {ApiAdminServiceImpl} from "./api-admin.service";
import {ApiJudgeServiceImpl} from "./api-judge.service";
import {DebuggingJudgeComponent} from "./debuggingjudge.component";
import {AlgorithmicCardComponent} from "./algorithmiccard.component";
import {DiffComponent} from "./diff.component";
import {ProblemsViewComponent} from "./view-problems.component";
import {AlgorithmicJudgeComponent} from "./algorithmicjudge.component";
import {ResolverViewerComponent} from "./ResolverViewer";
import {ViewClarificationsComponent} from "./view-clarifications.component";

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    JudgeComponent,
    AdminComponent,
    ScoreboardComponent,
    CodeEditorComponent,
    AlgorithmicCardComponent,
    AlgorithmicJudgeComponent,
    DebuggingCardComponent,
    DebuggingJudgeComponent,
    DiffComponent,
    AdminStatusBoardComponent,
    SubmissionsViewComponent,
    SubmissionsBarComponent,
    ProblemsViewComponent,
    ResolverViewerComponent,
    ViewClarificationsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AppMaterialModule,
    AceEditorModule,
    // TODO: ServiceWorker Support?
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: false}),
  ],
  providers: [
    {provide: 'ApiAdminService', useClass: ApiAdminServiceImpl},
    {provide: 'ApiJudgeService', useClass: ApiJudgeServiceImpl},
    {provide: 'ApiTeamService', useClass: ApiTeamServiceImpl},
    {provide: 'ApiWebSocketService', useClass: ApiWebSocketServiceImpl},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
