import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ExerciseComponent } from '../../app/exercises/exercise-03/exercise.component';

describe('Solution-Exercise03', () => {
  let component: ExerciseComponent;
  let fixture: ComponentFixture<ExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExerciseComponent],
      // ⛳️ we will ignore any sub components by setting a schema
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
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

    // expect the countDebugElem.nativeElement.textContent toContain '0'
    expect(countDebugElem.nativeElement.textContent).toContain('0');
  });

  it('should increase count on click', fakeAsync(() => {
    fixture.detectChanges();

    // use the fixture to retrieve the increase button
    const increaseButtonDebugElem: DebugElement = fixture.debugElement.query(
      By.css('[data-testid="btn-increase"]')
    );

    // use increaseButtonDebugElem.triggerEventHandler('click', null) to trigger a click
    increaseButtonDebugElem.triggerEventHandler('click', null);

    // next we need to wait until the event is finished with tick();
    tick();

    // now we can check if the count is increased in the component by accessing the property with component.count
    expect(component.count).toEqual(1);

    const countDebugElem: DebugElement = fixture.debugElement.query(
      By.css('[data-testid="count"]')
    );

    // the countDebugElem.nativeElement.textContent will still be 0 because no change detection cycle protracted the new data
    // into the DOM
    expect(countDebugElem.nativeElement.textContent).toContain('0');

    // to trigger the changeDetection cycle call fixture.detectChanges();
    fixture.detectChanges();

    expect(countDebugElem.nativeElement.textContent).toContain('1');
  }));

  it('should decrease count on click', fakeAsync(() => {
    component.count = 1;
    fixture.detectChanges();

    // use the fixture to retrieve the increase button
    const decreaseButtonDebugElem: DebugElement = fixture.debugElement.query(
      By.css('[data-testid="btn-decrease"]')
    );

    // use increaseButtonDebugElem.triggerEventHandler('click', null) to trigger a click
    decreaseButtonDebugElem.triggerEventHandler('click', null);

    // next we need to wait until the event is finished with tick();
    tick();

    // now we can check if the count is increased in the component by accessing the property with component.count
    expect(component.count).toEqual(0);

    const countDebugElem: DebugElement = fixture.debugElement.query(
      By.css('[data-testid="count"]')
    );

    // the countDebugElem.nativeElement.textContent will still be 0 because no change detection cycle protracted the new data
    // into the DOM
    expect(countDebugElem.nativeElement.textContent).toContain('1');

    // to trigger the changeDetection cycle call fixture.detectChanges();
    fixture.detectChanges();

    expect(countDebugElem.nativeElement.textContent).toContain('0');
  }));

  it('should not decrease count below 0', fakeAsync(() => {
    fixture.detectChanges();

    // use the fixture to retrieve the increase button
    const decreaseButtonDebugElem: DebugElement = fixture.debugElement.query(
      By.css('[data-testid="btn-decrease"]')
    );

    // use increaseButtonDebugElem.triggerEventHandler('click', null) to trigger a click
    decreaseButtonDebugElem.triggerEventHandler('click', null);

    // next we need to wait until the event is finished with tick();
    tick();

    // now we can check if the count is increased in the component by accessing the property with component.count
    expect(component.count).toEqual(0);

    const countDebugElem: DebugElement = fixture.debugElement.query(
      By.css('[data-testid="count"]')
    );

    // to trigger the changeDetection cycle call fixture.detectChanges();
    fixture.detectChanges();

    expect(countDebugElem.nativeElement.textContent).toContain('0');
  }));
});
