import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { CommentModule } from './Comments/comments.module';

import { AppComponent } from './app.component';
import { EmitterService } from './emitter.service';
import { HomeComponent } from './homePage/home.component';
import { PhotosComponent } from './photos/photos.component';
import { VideoComponent } from './videos/video.component';
import { GridComponent } from './gridView/grid.component';
import { ListComponent } from './listView/list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from "./profile/profile.component";
import { FollowingComponent } from "./following/following.component";
import { FollowersComponent } from "./followers/followers.component";

import { UserService } from './services/user.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'videos', component: VideoComponent },
  { path: 'listView', component: ListComponent },
  { path: 'gridView', component: GridComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'following', component: FollowingComponent },
  { path: 'followers', component: FollowersComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
     HttpModule,
    JsonpModule,
    CommentModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PhotosComponent,
    VideoComponent,
    ListComponent,
    GridComponent,
    NavbarComponent,
    FooterComponent,
    SettingsComponent,
    ProfileComponent,
    FollowingComponent,
    FollowersComponent
  ],
  providers: [
    UserService,
    EmitterService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

