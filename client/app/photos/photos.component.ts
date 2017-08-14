/* * * ./app/comments/components/comment-list.component.ts * * */
// Imports
import { Component } from '@angular/core';
import { UserDetails } from "../models/userDetails";
import { UserService } from "../services/user.service";

// Component decorator
@Component({
    moduleId: module.id,
    selector: 'my-photos',
    templateUrl: 'photos.component.html',
    styleUrls: ['photos.component.css']
    
})
// Component class
export class PhotosComponent {
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
