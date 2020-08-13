import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';

const portFolioRoutes: Routes = [
  {
    path: '',
    component: PortfolioComponent
  }
];

export const PortfolioRoutes = RouterModule.forChild(portFolioRoutes);

