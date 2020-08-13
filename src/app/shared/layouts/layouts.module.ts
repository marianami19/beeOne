

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WrapperModule } from './wrapper/wrapper.module';

@NgModule({
  imports: [CommonModule, RouterModule, WrapperModule],
})
export class LayoutsModule {}
