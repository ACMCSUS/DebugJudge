import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import * as Md from '@angular/material';

@NgModule({
  imports: [
    Md.MatButtonModule,
    Md.MatCardModule,
    Md.MatChipsModule,
    Md.MatCheckboxModule,
    Md.MatExpansionModule,
    Md.MatGridListModule,
    Md.MatIconModule,
    Md.MatInputModule,
    Md.MatListModule,
    Md.MatPaginatorModule,
    Md.MatProgressSpinnerModule,
    Md.MatRippleModule,
    Md.MatSelectModule,
    Md.MatSidenavModule,
    Md.MatStepperModule,
    Md.MatTableModule,
    Md.MatTabsModule,
    Md.MatToolbarModule,
  ],
  exports: [
    Md.MatButtonModule,
    Md.MatCardModule,
    Md.MatCheckboxModule,
    Md.MatChipsModule,
    Md.MatExpansionModule,
    Md.MatGridListModule,
    Md.MatIconModule,
    Md.MatInputModule,
    Md.MatListModule,
    Md.MatPaginatorModule,
    Md.MatProgressSpinnerModule,
    Md.MatRippleModule,
    Md.MatSelectModule,
    Md.MatSidenavModule,
    Md.MatStepperModule,
    Md.MatTableModule,
    Md.MatTabsModule,
    Md.MatToolbarModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppMaterialModule {
}
