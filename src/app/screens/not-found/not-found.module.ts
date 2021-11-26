import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NotFoundRoutingModule} from './not-found-routing.module';
import {NotFoundComponent} from './not-found.component';

/**
 * Hosts the 404 not found screen
 */
@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    NotFoundRoutingModule
  ]
})
export class NotFoundModule {
}
