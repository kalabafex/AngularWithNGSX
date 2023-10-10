import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.models';
import { Store,Select } from '@ngxs/store';
import { RemoveTutorial } from '../action/tutorial.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent {
tutorials$: Observable<Tutorial>
constructor(private store:Store){
  this.tutorials$ =this.store.select(state => state.tutorials.tutorials);
}
delTutorial (tutorial :Tutorial){
  this.store.dispatch(new RemoveTutorial(tutorial))
}
}
