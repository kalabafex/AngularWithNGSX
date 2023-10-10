import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Tutorial } from "../models/tutorial.models";
import { AddTutorial, RemoveTutorial } from "../action/tutorial.actions";
import { Injectable } from "@angular/core";


export class TutorialStateModel {
  tutorials: Tutorial[];
}

@State<TutorialStateModel> ({
  name: 'tutorials',
  defaults :{
    tutorials: []
  }
})
@Injectable()
export class TutorialState {
  @Selector()
  static getTutorials(state:TutorialStateModel){
    return state.tutorials
  }
  @Action(AddTutorial)
  Add({getState, patchState}: StateContext<TutorialStateModel>, {payload}: AddTutorial){
    const state =getState();
    console.log(payload);
    patchState({
    tutorials: [...state.tutorials,payload]
    })
}
@Action(RemoveTutorial)
remove({getState, patchState}: StateContext<TutorialStateModel>, {payload}: RemoveTutorial){
  patchState({
  tutorials: getState().tutorials.filter(a => a.name != payload.name)
  })
}
}
