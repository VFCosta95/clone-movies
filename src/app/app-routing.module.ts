import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from 'src/app/component/home/home.component'
import {PrincipalComponent} from 'src/app/component/principal/principal.component'
import {ContentOneComponent} from 'src/app/pages/content-one/content-one.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'popular', component:PrincipalComponent},
  {path: 'document/:title', component: ContentOneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
