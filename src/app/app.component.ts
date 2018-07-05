import { Component } from '@angular/core';
import {t} from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Blog OpenClassroom';

  premierPost: Post = new Post('Premier Post', 'lsdmkqfjkldjfqlkmdjfqmdlkjflqmkdjfqlkdmfjklqdsjklqdfjklqdsmjfl');
  secondPost: Post = new Post('Second Post', 'lqsdfjmsqlfjqlsmdkfjqsldmkfjqsdlmkfjklmsdfjqmkldsfjlqmksdjffq');
  troisiemePost: Post = new Post('Troisième Post', 'slkmdjqmdlkjflmqksdjfklqsdjfkqmsldjfmksldfjqmlksdfjmlqsdkjfkmlqdsf');

  posts: Post[] = [this.premierPost, this.secondPost, this.troisiemePost];

}

export class Post {

  title: string;
  content: string;
  loveIts: number;
  created_at: Date;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
    this.loveIts = 0;
    this.created_at = new Date();
  }
}
