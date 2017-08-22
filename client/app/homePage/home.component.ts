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
    x:number = 10;
    pagesShown = 1;
    pageSize = 3;
    
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
        //length = value.extendedText.length;
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
    /*
    content: string = this.userDetails[0].extendedText;
    if(content.length() > 50){
        this.userDetails[0].extendedText = this.userDetails[0].extendedText + this.ellipsestext + this.moretext;
    }
    else {
        this.userDetails[0].extendedText = this.userDetails[0].
    }

    var c = content.substr(0, showChar);
			var h = content.substr(showChar-1, content.length - showChar);

			var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

            $(this).html(html);
            

    showAll = () => this.maxLength = this.userDetails[0].extendedText.length;
*/
    showMore(user:UserDetails) {
        let id = user.id;
        user.maxLength = user.extendedText.length;        
        document.getElementById(id).style.display = 'none';
        //this.showMore = !this.showMore;
    }

    //for load more functionality

    //x = 10;
    //userDetails('+ x +').show();
    loadMore(){
        //this.x = this.x + 10;
        //this.userDetails('+ x +').show();
        this.pagesShown = this.pagesShown + 1; 
    }
 }
