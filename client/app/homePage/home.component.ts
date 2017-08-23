import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';
import { UserDetails } from '../models/userDetails';

@Component({
    moduleId: module.id,
    selector: 'my-home',
    templateUrl: 'home.component.html',
    styleUrls:['home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {

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
            name: ['Arun Gadag'],
            profilePic: ['./assets/arun.jpg'],
            postPic: [''],
            videoUrl: [''],
            text: [''],
            extendedText: [''],
            imageCaption: [''],
            videoCaption: [''],
            likedByMe:  [false],
            creationTime:  new Date(),
            updatedTime:  new Date(),
            updatedBy:  [''],
            time:  new Date(),
            likes: [null],
            maxLength: 10
        });
        this.userDetails
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

    //for expand functionality
    showMore(user:UserDetails) {
        let id = user.id;
        user.maxLength = user.extendedText.length;        
        document.getElementById(id).style.display = 'none';
    }
 }
