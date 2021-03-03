import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';

import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home.component';
import { NavbarComponent } from './Navbar/navbar.component'
import { TopBannerComponent } from './TopBanner/topbanner.component'
import { CategoryMenuComponent } from './CategoryMenu/categoryMenu.component'
import { SearchBarComponent } from './SearchBar/searchbar.component'

@NgModule({
  declarations: [
    AppComponent,HomeComponent,NavbarComponent,TopBannerComponent,CategoryMenuComponent,SearchBarComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
