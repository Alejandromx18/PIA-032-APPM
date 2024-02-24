import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login-vendedor',
    loadChildren: () => import('./login-vendedor/login-vendedor.module').then( m => m.LoginVendedorPageModule)
  },
  {
    path: 'registro-vendedor',
    loadChildren: () => import('./registro-vendedor/registro-vendedor.module').then( m => m.RegistroVendedorPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
