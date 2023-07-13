import { NgModule,ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeModule } from './components/home/home.module';
import { SharedModule, HeaderComponent, FooterComponent } from './shared';
import { RouterModule } from '@angular/router';

const rootRouting: ModuleWithProviders<RouterModule> = RouterModule.forRoot([],{useHash:true});

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HomeModule,
    rootRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
