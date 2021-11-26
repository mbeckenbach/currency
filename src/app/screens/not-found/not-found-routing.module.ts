import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from "./not-found.component";

/**
 * Route definition
 */
const routes: Routes = [
  {
    path: '',
    component: NotFoundComponent
  }
];

/**
 * Routing module for 404 not found page
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotFoundRoutingModule {
}
