import {
  Component
} from '@angular/core';

import {
  AppService
} from './app.service';

@Component({ 
  selector: 'my-app',
  template: '<div>{{value}}</div>',
  providers: [AppService]
}) 

export class AppComponent {
  value: string = '';
  constructor(private _appService: AppService) { }
  ngOnInit(): void {
     this.value = this._appService.getApp();
  }
}