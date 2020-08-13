import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioRoutes } from './portfolio.routing';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [CommonModule, PortfolioRoutes, ChartsModule],
  declarations: [PortfolioComponent],
  providers: []
})
export class PortfolioModule {}
