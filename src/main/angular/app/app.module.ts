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

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    JudgeComponent,
    AdminComponent,
    ScoreboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppMaterialModule,
    // TODO: ServiceWorker Support?
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: false}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
