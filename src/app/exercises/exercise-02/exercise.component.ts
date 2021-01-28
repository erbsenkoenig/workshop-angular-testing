import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseComponent implements OnInit {
  count: number | null = null;

  constructor(
    private dataService: DataService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.dataService.count$.subscribe((count: number) => {
      this.count = count;
      this.ref.markForCheck();
    });
  }

  increase(): void {
    this.dataService.increaseCount();
  }

  decrease(): void {
    this.dataService.decreaseCount();
  }
}
