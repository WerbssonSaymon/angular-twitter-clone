import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //pacote pra mexer com formularios

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { HomeComponent } from './pages/home/home.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { FooterComponent } from './components/footer/footer.component';
import { MessagesService } from './services/messages.service';
import { AvatarComponent } from './components/avatar/avatar.component';
import { AuthorComponent } from './components/author/author.component';
import { InfoPostComponent } from './components/info-post/info-post.component';
import { ProfileStatsComponent } from './components/profile-stats/profile-stats.component';
import { PubDateComponent } from './components/pub-date/pub-date.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component' //importando o services

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TweetComponent,
    HomeComponent,
    NewPostComponent,
    FooterComponent,
    AvatarComponent,
    AuthorComponent,
    InfoPostComponent,
    ProfileStatsComponent,
    PubDateComponent,
    BannerComponent,
    ProfileComponent,
    ProfileInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
