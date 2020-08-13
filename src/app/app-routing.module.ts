import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WrapperComponent } from './shared/layouts/wrapper/wrapper.component';


const routes: Routes = [
  // { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
  {
    path: 'portfolio',
    component: WrapperComponent,
    loadChildren: () => import('./modules/portfolio/portfolio.module').then(m => m.PortfolioModule),
  },
  // {
  //   path: '',
  //   component: WrapperComponent,
  //   // canActivateChild: [MetaGuard],
  //   children: [
  //     { path: 'portfolio', loadChildren: () => import('./modules/portfolio/portfolio.module').then(m => m.PortfolioModule) },
  //   ],
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
