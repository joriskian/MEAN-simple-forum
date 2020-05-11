import { Component, Input } from '@angular/core';
import { Post } from '../post.model'; // ne pas oublier de revenir en arriere dans les dossiers ../

@Component({
  selector:'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']

})
export class PostListComponent {
// assigner un type ( : Post --> array de Post (interface))
  @Input() posts: Post[] =[]; // pour recevoir du parent

}
