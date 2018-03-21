import {NgModule} from '@angular/core';

import * as Md from '@angular/material';

@NgModule({
  imports: [
    Md.MatButtonModule,
    Md.MatCardModule,
    Md.MatExpansionModule,
    Md.MatGridListModule,
    Md.MatInputModule,
    Md.MatListModule,
    Md.MatRippleModule,
    Md.MatSidenavModule,
    Md.MatTabsModule,
    Md.MatToolbarModule,
  ],
  exports: [
    Md.MatButtonModule,
    Md.MatCardModule,
    Md.MatExpansionModule,
    Md.MatGridListModule,
    Md.MatInputModule,
    Md.MatListModule,
    Md.MatRippleModule,
    Md.MatSidenavModule,
    Md.MatTabsModule,
    Md.MatToolbarModule,
  ],
})
export class AppMaterialModule { }
