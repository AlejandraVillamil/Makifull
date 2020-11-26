import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './componentes/home/home.component'
import { FormComponent } from './componentes/form/form.component';
import { AuthGuard } from './guard/auth.guard';
import { CartComponent } from './componentes/cart/cart.component';
import { ProfileComponent } from './componentes/profile/profile.component';



const routes: Routes = [
  { path: '' ,redirectTo:'/inicio', pathMatch:'full'},
  { path:'inicio',component:HomeComponent},
  { path:'formulario',component:FormComponent},
  { path:'carrito', component:CartComponent},
  { path:'perfil', component:ProfileComponent},
  { path:'**',component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
