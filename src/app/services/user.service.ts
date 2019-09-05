import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { of } from 'rxjs/Observable/of';
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[];
  data : Observable<any>;

  constructor() { 
    this.users = [
      {
        firstName: 'Uncle',
        lastName: 'Joe',
        email: 'joe@gmail.com',
        isActive: true,
        registered: new Date('12/08/2019 10:25:00'),
        hide: true
      },
      {
        firstName: 'Harry',
        lastName: 'Cliffton',
        email: 'joe@gmail.com',
        isActive: false,
        registered: new Date('02/15/2019 12:25:00'),
        hide: true
      },
      {
        firstName: 'barry',
        lastName: 'Allen',
        email: 'joe@gmail.com',
        isActive: true,
        registered: new Date('02/01/2009 1:05:00'),
        hide: true
      }
    ];
  }

  getUsers():Observable<User[]>{
    
    return of(this.users);
  }

  addUsers(user:User){
    this.users.unshift(user);
  }

  getData(){
    this.data = new Observable(observer => {
      setTimeout(()=>{
        observer.next(1);
      },1000);

      setTimeout(()=>{
        observer.next(2);
      },2000);

      setTimeout(()=>{
        observer.next(3);
      },3000);

      setTimeout(()=>{
        observer.next(4);
      },4000);

    });
    return this.data;
  }

}
