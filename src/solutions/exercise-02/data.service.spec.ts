import { DataService } from '../../app/exercises/exercise-02/data.service';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';

describe('Solution02 - DataService', () => {
  let service: DataService;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DataService, // ⛳️ comment out this line and check if the first test still passes. what would you expect
      ],
    });
    // ⛳️ uncomment the following line to inject the data service
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('initial count should be 0', fakeAsync(() => {
    let result: any = 'UNDEFINED';
    service.count$.subscribe((count) => (result = count));

    tick();

    expect(result).toEqual(0);
  }));

  it('should increase count', fakeAsync(() => {
    let result: any = 'UNDEFINED';
    service.count$.subscribe((count) => (result = count));

    service.increaseCount();
    tick();

    expect(result).toEqual(1);
  }));

  it('should decrease count', fakeAsync(() => {
    let result: any = 'UNDEFINED';
    service.count$.subscribe((count) => (result = count));

    service.increaseCount();
    service.increaseCount();
    service.decreaseCount();
    tick();

    expect(result).toEqual(1);
  }));

  it('should not decrease count below 0', fakeAsync(() => {
    let result: any = 'UNDEFINED';
    service.count$.subscribe((count) => (result = count));

    service.decreaseCount();
    tick();

    expect(result).toEqual(0);
  }));
});
