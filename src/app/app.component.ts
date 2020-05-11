import { Component } from '@angular/core';
// j'importe mon interfac (pour que les posts aient toujours le même model de données)
import {Post} from './posts/post.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "My Mean";
  storedPosts: Post[] = []; //storedPosts est un array de (l'interface) Post
  post =[];

  onPostAdded(post) {
    this.storedPosts.push(post)
  }

}
