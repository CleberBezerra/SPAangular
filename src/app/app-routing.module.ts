import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MercadoriasComponent } from './mercadorias/mercadorias.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'mercadorias',
    component: MercadoriasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
