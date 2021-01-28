import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { ExerciseComponent } from './exercise.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DataService } from './data.service';
import { Subject } from 'rxjs';

describe('Exercise02', () => {
  let component: ExerciseComponent;
  let fixture: ComponentFixture<ExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // ⛳ we need to mock the DataService
      // providers: [
      //   {
      //     provide: DataService,
      //     useValue: {
      //       count$: new Subject(), // setting it to a subject allows us to change the value later in the test
      //       increaseCount: jest.fn(), // this creates a mock function
      //       decreaseCount: jest.fn(),
      //     },
      //   },
      // ],
      declarations: [ExerciseComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should show value retrieved from service', fakeAsync(() => {
    fixture.detectChanges();

    // ⛳ set new value in service
    // (<any>TestBed.inject(DataService)).count$.next(100);️

    // ⛳ now we need to wait with until the async operations are finished

    expect(component.count).toEqual(100);

    // ⛳ after that we need to trigger detectChanges() again

    const countDebugElem: DebugElement = fixture.debugElement.query(
      By.css('[data-testid="count"]')
    );

    expect(countDebugElem.nativeElement.textContent).toContain('100');
  }));

  it('should call increaseCount on count on click', fakeAsync(() => {
    fixture.detectChanges();

    // use the fixture to retrieve the increase button
    const increaseButtonDebugElem: DebugElement = fixture.debugElement.query(
      By.css('[data-testid="btn-increase"]')
    );

    // ⛳️ use increaseButtonDebugElem.triggerEventHandler('click', null) to trigger a click

    // ⛳️ next we need to wait until the event is finished with tick();

    // ⛳️ ️now we can check if the service was called
    expect((<any>TestBed.inject(DataService)).increaseCount).toHaveBeenCalled();
  }));

  it('should decrease count on click', fakeAsync(() => {
    fixture.detectChanges();

    // remove the following line and write a test for decreasing the count
    expect(false).toBeTruthy();
  }));
});
