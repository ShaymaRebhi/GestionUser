import { NgModule } from '@angular/core';
import { MainUserComponent } from './main-user/main-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { MainProductComponent } from './main-product/main-product.component';
import { MainProviderComponent } from './main-provider/main-provider.component';
import { Routes ,RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormAddUserComponent } from './form-add-user/form-add-user.component';
import { LoginComponent } from './login/login.component';
import { FormAddProductComponent } from './form-add-product/form-add-product.component';


const ROUTES: Routes = [
  {path :'user', component:MainUserComponent, children:[
    {path:'category/:category',component:ListUserComponent}
  ]},
  {path :'provider', component:MainProviderComponent},
  {path :'product', component:MainProductComponent},
  {path :'', component:ContentComponent},
  {path :'category', component:ListUserComponent},
  {path :'subscribe', component:FormAddUserComponent},
  {path :'login', component:LoginComponent},
  {path :'addProduct', component:FormAddProductComponent},
  {path :'**', component:NotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
