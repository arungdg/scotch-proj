import { Component } from '@angular/core';
import { UserDetails } from "../models/userDetails";
import { UserService } from "../services/user.service";

@Component({
    moduleId: module.id,
    selector: 'my-profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css']
})

export class ProfileComponent {
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