import { Component } from '@angular/core';
import { UserDetails } from "../models/userDetails";
import { UserService } from "../services/user.service";

@Component({
    moduleId: module.id,
    selector:'my-videos',
    templateUrl: 'video.component.html',
    styleUrls: ['video.component.css']
})

export class VideoComponent {
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