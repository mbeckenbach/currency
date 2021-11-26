import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from "../material/material.module";
import {NgStackFormsModule} from "@ng-stack/forms";

/**
 * Modules imported and exported by Material Module
 */
const sharedModules = [
  MaterialModule,
  NgStackFormsModule
]

/**
 * Shared modules and components
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
export class SharedModule {
}
