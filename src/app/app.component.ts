import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];
  title = 'workshop-angular-testing';

  isHome = true;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.subs.push(
      this.router.events
        .pipe(filter((event) => event instanceof NavigationEnd))
        .subscribe(() => {
          this.isHome = this.router.routerState.snapshot.url === '/';
        })
    );
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.subs.forEach((s) => s.unsubscribe());
  }
}
