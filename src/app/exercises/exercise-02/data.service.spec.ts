import { DataService } from './data.service';
import { TestBed } from '@angular/core/testing';

describe('Exercise02 - DataService', () => {
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
    // service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // ⛳️ write all test cases (it blocks) with the description of what they are testing that you think are required to thoroughly test the service
  // ⛳️ fill the test cases with life
});
