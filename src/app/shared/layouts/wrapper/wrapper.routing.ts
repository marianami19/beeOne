import { Routes, RouterModule } from '@angular/router';
import { WrapperComponent } from './wrapper.component';


const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    data: {
      meta: {
        title: '',
        description: '',
        override: true,
      },
    },
  },
];

export const WrapperRoutes = RouterModule.forChild(routes);
