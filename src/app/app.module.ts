import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExerciseComponent as Exercise01 } from './exercises/exercise-01/exercise.component';
import { ExerciseComponent as Exercise02 } from './exercises/exercise-02/exercise.component';
import { IntroductionComponent } from './introduction/introduction.component';

@NgModule({
  declarations: [AppComponent, Exercise01, IntroductionComponent, Exercise02],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
