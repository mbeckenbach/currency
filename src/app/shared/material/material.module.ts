import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatTooltipModule} from "@angular/material/tooltip";

/**
 * Modules imported and exported by Material Module
 */
const sharedModules = [
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatCardModule,
  MatDividerModule,
  MatTooltipModule,
]

/**
 * Collection of globally loaded material module imports used in this app
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...sharedModules,
  ],
  exports: [
    ...sharedModules
  ]
})
export class MaterialModule {
}
