import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './wrapper.component';
import { WrapperRoutes } from './wrapper.routing';
import { ToolbarComponent } from '../toolbar/toolbar.component';
@NgModule({
  imports: [CommonModule, WrapperRoutes],
  declarations: [WrapperComponent, ToolbarComponent],
})
export class WrapperModule {}
