import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home.component";

/**
 * Route definition
 */
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

/**
 * Routing module for home
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
