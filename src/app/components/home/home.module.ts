import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared';

const homeRouting: ModuleWithProviders<RouterModule> = RouterModule.forChild([
  {
    path:'',
    component:HomeComponent
  }
]);

@NgModule({
  declarations: [HomeComponent],
  imports: [
    homeRouting,
    SharedModule
  ]
})
export class HomeModule { }
