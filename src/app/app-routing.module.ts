import { FormDeclarationComponent } from './Components/form-declaration/form-declaration.component';
import { FrontPageComponent } from './Components/front-page/front-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {path: 'front-page', component: FrontPageComponent},
  {path: 'form', component: FormDeclarationComponent},
  { path: '',   redirectTo: 'front-page', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
