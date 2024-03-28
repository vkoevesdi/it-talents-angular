import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {DatenschutzComponent} from "./datenschutz/datenschutz.component";
import {ImpressumComponent} from "./impressum/impressum.component";
import {ToDosComponent} from "./to-dos/to-dos.component";

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'datenschutz', component: DatenschutzComponent},
  {path:'impressum', component: ImpressumComponent},
  {path:'todos', component: ToDosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
