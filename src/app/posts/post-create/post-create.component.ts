import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {
  enteredTitle = '';
  enteredContent = '';
  // creer un nouvel eventEmitter et lui donner le decorateur @output
  // on force l'eventEmitter ( de type generic) à recevoir des données de type Post --> <Post> on le "bind"
  @Output() postCreated = new EventEmitter <Post> (); // peut etre ecouter de l'exterieur (en l'occurence, le parent aka app.component, le composant ou nous utilisons sont selecteur)


  onAddPost(){ // fonction de onClick
    // console.dir(postInput); //pour aller voir ce qui se passe en live f12 dans chrome

    const post: Post = {
      title: this.enteredTitle,
      content: this.enteredContent,
    };
    console.log(post);
    // quand on click sur le bouton : on emet l'event (avec le post en parametre)
    this.postCreated.emit(post);
  }

}
