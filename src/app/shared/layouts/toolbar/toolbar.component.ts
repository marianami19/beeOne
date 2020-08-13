import {
  Component,
  OnInit,
  ViewChild,
  Inject,
  PLATFORM_ID,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { ComponentManagerService } from '../../services/component-manager.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  uname: any;
  showSearchMob = false;
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    public router: Router,
    @Inject(DOCUMENT) private _document: Document,
    public componentManagerService: ComponentManagerService,
  ) {
  }

  ngOnInit(): void {

  }

  setId(): string {
    return '';
  }
  actionFromPlugin(params: any) {}



}
