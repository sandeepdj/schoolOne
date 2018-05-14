import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './shared/components/layout/layout.component';
import { AuthComponent } from './shared/components/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
