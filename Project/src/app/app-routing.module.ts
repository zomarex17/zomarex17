import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { FooterComponent } from './component/home/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { MainComponent } from './component/home/main/main.component';
import { MenuComponent } from './component/home/menu/menu.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'home',component: HomeComponent},
  {path:'footer',component: FooterComponent},
  {path:'main',component: MainComponent},
  {path:'menu',component: MenuComponent},
  {path:'login',component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,FooterComponent,MainComponent,MenuComponent,LoginComponent]
 