import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExerciseComponent as Exercise01 } from './exercises/exercise-01/exercise.component';
import { ExerciseComponent as Exercise02 } from './exercises/exercise-02/exercise.component';
import { ExerciseComponent as Exercise03 } from './exercises/exercise-03/exercise.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ButtonComponent } from './exercises/exercise-03/button/button.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    Exercise01,
    IntroductionComponent,
    Exercise02,
    Exercise03,
    ButtonComponent,
  ],
  imports: [BrowserModule, RouterModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
