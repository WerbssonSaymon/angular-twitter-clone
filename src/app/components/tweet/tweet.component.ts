import { Component, Input } from '@angular/core'; //parametro input

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent {
  TweetAuthor: string = "Werbsson Saymon"
  @Input() TweetMessage: string = ""
}
