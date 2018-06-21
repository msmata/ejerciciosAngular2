import {
    Injectable
 } from '@angular/core';

 @Injectable()
 export class AppService {
    getApp(): string {
       return 'Hola mundo!';
    }
 }