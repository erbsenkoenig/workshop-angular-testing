import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseComponent as Exercise01 } from './exercises/exercise-01/exercise.component';
import { ExerciseComponent as Exercise02 } from './exercises/exercise-02/exercise.component';
import { IntroductionComponent } from './introduction/introduction.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: IntroductionComponent,
  },
  {
    path: 'exercise-01',
    component: Exercise01,
  },
  {
    path: 'exercise-02',
    component: Exercise02,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
