import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { ExerciseComponent } from './exercise.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Exercise01', () => {
  let component: ExerciseComponent;
  let fixture: ComponentFixture<ExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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

  it('should show initial count', () => {
    fixture.detectChanges();

    const countDebugElem: DebugElement = fixture.debugElement.query(
      By.css('[data-testid="count"]')
    );

    // ⛳️ expect the countDebugElem.nativeElement.textContent toContain '0'
  });

  it('should increase count on click', fakeAsync(() => {
    fixture.detectChanges();

    // use the fixture to retrieve the increase button
    const increaseButtonDebugElem: DebugElement = fixture.debugElement.query(
      By.css('[data-testid="btn-increase"]')
    );

    // ⛳️ use increaseButtonDebugElem.triggerEventHandler('click', null) to trigger a click

    // ⛳️ next we need to wait until the event is finished with tick();

    // now we can check if the count is increased in the component
    // ⛳️ with expect component.count toEqual 1

    // we can retrieve the countDebugElement again
    const countDebugElem: DebugElement = fixture.debugElement.query(
      By.css('[data-testid="count"]')
    );

    // the countDebugElem.nativeElement.textContent will still be 0 because no change detection cycle protracted the new data
    // into the DOM
    // ⛳️ double check with expect countDebugElem.nativeElement.textContent toContain

    // ⛳️ to trigger the changeDetection cycle call fixture.detectChanges();

    expect(countDebugElem.nativeElement.textContent).toContain('1');
  }));

  it('should decrease count on click', fakeAsync(() => {
    // initialse the component with an count of 1 before starting the test.
    // component.count = 1;

    fixture.detectChanges();

    // remove the following line and write a test for decreasing the count
    expect(false).toBeTruthy();
  }));

  it('should not decrease count below 0', fakeAsync(() => {
    fixture.detectChanges();

    // remove the following line and write a test that the count is not decreased below 0
    expect(false).toBeTruthy();
  }));
});
