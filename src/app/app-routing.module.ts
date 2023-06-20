import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from 'src/app/component/home/home.component'
import {PrincipalComponent} from 'src/app/component/principal/principal.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'popular', component:PrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
