import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HomePageComponent } from './components/home-page/home-page.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { FactScrollerComponent} from './components/fact-scroller/fact-scroller.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ShoppingCartComponent,
    SearchFormComponent,
    FactScrollerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
