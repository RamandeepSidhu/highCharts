import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAdSpotsComponent } from './my-ad-spots/my-ad-spots.component';

const routes: Routes = [
  {
    path: 'test', component:MyAdSpotsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
