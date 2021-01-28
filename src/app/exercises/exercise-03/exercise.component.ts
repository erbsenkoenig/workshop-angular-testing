import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseComponent implements OnInit {
  count = 0;

  constructor() {}

  ngOnInit(): void {}

  increase() {
    this.count++;
  }

  decrease() {
    if (this.count) {
      this.count--;
    }
  }
}
