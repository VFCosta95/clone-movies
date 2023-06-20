import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './component/principal/principal.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './component/home/home.component';
import { BoxOneComponent } from './component/home/box-one/box-one.component';
import { BoxTwoComponent } from './component/home/box-two/box-two.component';
import { BoxThreeComponent } from './component/home/box-three/box-three.component';
import { BoxFourComponent } from './component/home/box-four/box-four.component';
import { FooterComponent } from './component/home/footer/footer.component';
import { MenuComponent } from './component/home/menu/menu.component';
import { ContentOneComponent } from './pages/content-one/content-one.component'

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HomeComponent,
    BoxOneComponent,
    BoxTwoComponent,
    BoxThreeComponent,
    BoxFourComponent,
    FooterComponent,
    MenuComponent,
    ContentOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
