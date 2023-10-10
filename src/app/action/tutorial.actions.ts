import { Tutorial } from "../models/tutorial.models";

export class AddTutorial {
  static readonly type = '[TutorialState] Add'
  constructor(public payload: Tutorial){
  }
}

export class RemoveTutorial {
  static readonly type = '[TUTORIAL] Remove'
  constructor(public payload: Tutorial){}
}
