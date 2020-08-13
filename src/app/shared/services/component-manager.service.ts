//#region Import Calls
import { Injectable, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
//#endregion

@Injectable({
  providedIn: 'root',
})
export class ComponentManagerService implements OnInit {
  public isBrowser: boolean = isPlatformBrowser(this.platformId);
  title:any;
  
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {
  }

  ngOnInit() {}


  getDeviceDetails(): boolean {
    if (this.isBrowser) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      );
    } else {
      return false;
    }
  }
}
