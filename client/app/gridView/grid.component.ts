import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserDetails } from '../models/userDetails';

@Component({
    moduleId: module.id,
    selector:'my-grid',
    templateUrl: 'grid.component.html',
    styleUrls: ['grid.component.css']
})

export class GridComponent {
    userDetails: UserDetails[];
    constructor(private userService: UserService) {
        this.getUserDetails();
    }

    getUserDetails():void {
        this.userService.getUserDetails()
        .subscribe(
            userDetails => this.userDetails = userDetails,
            err => {
                console.log(err);
            }
        );
    }
}