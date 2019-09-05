import { Component,OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
    // template: '<h2>Uncle Joe</h2>',
})

export class UserComponent implements OnInit{
    // firstname = 'john';
    // lastname = 'Doe';
    // age = 24;
    // address = {
    //     street: 'Elcot avenue',
    //     city: 'Chennai',
    //     state: 'tamilNadu'
    // };

    user: User;

    constructor(){
        
        
    }
    ngOnInit (){
        this.user = {
            firstName : 'Uncle',
            lastName :'Joe',
            email: 'joe@yahoo.com'
        
        }
    }

}

