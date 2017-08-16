import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
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
    newUserDetails: FormGroup;
    constructor(
        private userService: UserService,
        private fb: FormBuilder
    ) {
    }

    ngOnInit() {
        this.getUserDetails();
        this.newUserDetails = this.fb.group({
            id: new Date(),
            name: [''],
            profilePic: ['./assets/arun.jpg'],
            postPic: [''],
            videoUrl: [''],
            text: ['Hello'],
            extendedText: [''],
            imageCaption: [''],
            videoCaption: [''],
            likedByMe:  [false],
            creationTime:  new Date(),
            updatedTime:  new Date(),
            updatedBy:  [''],
            time:  new Date(),
            likes: [null]
        })
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

    onSubmit({ value, valid }: { value: UserDetails, valid: boolean }) {
        //console.log(JSON.stringify(value));
        this.addNewUser(value);
    }

    addNewUser(user: UserDetails):void {
        this.userService.addNewUser(user)
        .subscribe(
            userDetails => this.userDetails = userDetails,
            err => {
                console.log(err);
            }
        );
    }

    ngOnChanges() {
        this.getUserDetails();
    }
}