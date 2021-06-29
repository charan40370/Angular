import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterStateSnapshot } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CharanComponent } from './charan/charan.component';
import { UICustomExceptionComponent } from './uicustom-exception/uicustom-exception.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';

//welcome
const routes: Routes = [//this is array[], now you can use /login or /welcome in the browser url
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'welcome/charan', component:WelcomeComponent, canActivate:[RouteGuardService]},
  {path:'charan', component:CharanComponent,canActivate:[RouteGuardService]},
  {path:'todos', component:ListTodosComponent,canActivate:[RouteGuardService]},
  {path:'logout', component:LogoutComponent,canActivate:[RouteGuardService]},
  {path:'**', component:UICustomExceptionComponent}//** will get pulled for almost all invalid path urls */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
