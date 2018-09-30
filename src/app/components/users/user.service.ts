import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: Array<any> = [
    // tslint:disable-next-line:max-line-length
    {id: 1, name: 'James Smith', image: '../../../assets/img/guy-1.png', address: '513 Main Street', phone: '5134456543', created_at: new Date, updated_at: new Date},
    // tslint:disable-next-line:max-line-length
    {id: 2, name: 'John Doe', image: '../../../assets/img/guy-2.png', address: '315 Dove Street', phone: '5134456543', created_at: new Date, updated_at: new Date},
    // tslint:disable-next-line:max-line-length
    {id: 3, name: 'Kevin Ison', image: '../../../assets/img/guy-3.png', address: '53 Hopper Street', phone: '5134456543', created_at: new Date, updated_at: new Date},
    // tslint:disable-next-line:max-line-length
    {id: 4, name: 'Derek Patterson', image: '../../../assets/img/guy-4.png', address: '245 Lex Street', phone: '5134456543', created_at: new Date, updated_at: new Date},
    // tslint:disable-next-line:max-line-length
    {id: 5, name: 'Adrian Petterson', image: '../../../assets/img/guy-5.png', address: '51 Alburn Street', phone: '5134456543', created_at: new Date, updated_at: new Date},
    // tslint:disable-next-line:max-line-length
    {id: 6, name: 'James White', image: '../../../assets/img/guy-6.png', address: '234 Great Street', phone: '5134456543', created_at: new Date, updated_at: new Date}
  ];
  constructor() { }
}
