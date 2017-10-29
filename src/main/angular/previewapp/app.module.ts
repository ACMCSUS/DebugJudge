import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {DebugJudgeMaterialModule}from 'lib/debugjudgematerial.module';

import {Autosize} from 'angular2-autosize/src/autosize.directive';
import {CodeEditorComponent} from 'lib/codeeditor.component';
import {AceEditorModule} from 'ng2-ace-editor';

import {AppComponent} from 'previewapp/app.component';
import {ProblemCardComponent} from 'teamapp/problemcard.component';
import {PreviewComponent} from 'previewapp/preview.component';

import {ScoreboardComponent} from 'lib/scoreboard.component';
import {ApiServiceStub} from '../lib/api.stub';
import {PreviewDownloadDialog, PreviewUploadDialog} from './preview.dialogs';

@NgModule({
  declarations: [
    Autosize,

    AppComponent,
    PreviewComponent,
    ScoreboardComponent,
    ProblemCardComponent,
    CodeEditorComponent,
    PreviewDownloadDialog,
    PreviewUploadDialog,
  ],
  imports: [
    AceEditorModule,
    BrowserModule,
    NoopAnimationsModule,
    FormsModule,
    DebugJudgeMaterialModule,
    RouterModule.forRoot(AppModule.appRoutes),
  ],
  entryComponents: [
    PreviewDownloadDialog,
    PreviewUploadDialog,
  ],
  providers: [{provide: 'ApiService', useClass: ApiServiceStub}],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  public static appRoutes: Routes = [
    {path: '', component: PreviewComponent},
    {path: 'scoreboard', component: ScoreboardComponent},
  ];
}
