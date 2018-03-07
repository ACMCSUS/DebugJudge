import * as Mat from '@angular/material';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    Mat.MatSidenavModule,
    Mat.MatToolbarModule,
    Mat.MatIconModule,
    Mat.MatButtonModule,
    Mat.MatCheckboxModule,
    Mat.MatInputModule,
    Mat.MatRippleModule,
    Mat.MatCardModule,
    Mat.MatDialogModule,
    Mat.MatListModule,
  ],
  exports: [
    Mat.MatSidenavModule,
    Mat.MatToolbarModule,
    Mat.MatIconModule,
    Mat.MatButtonModule,
    Mat.MatCheckboxModule,
    Mat.MatInputModule,
    Mat.MatRippleModule,
    Mat.MatCardModule,
    Mat.MatDialogModule,
    Mat.MatListModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DebugJudgeMaterialModule {}
