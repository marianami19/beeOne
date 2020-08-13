import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { ComponentManagerService } from '../../services/component-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements AfterViewInit {
  isActive: any;
  constructor(public componentManagerService: ComponentManagerService,public router: Router,) {
    console.log('this.router.url', this.router.url);
    
    if(this.router.url.includes('portfolio')) {
      this.setActiveTab('Dashboard');
    }
  }
  ngAfterViewInit() {


  }

  setActiveTab(param) {
    this.isActive = param;
    this.componentManagerService.title = param

  }

  navigateTo(path) {
    this.router.navigate([path]);
  }
}
