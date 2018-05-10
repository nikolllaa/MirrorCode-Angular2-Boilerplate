import {} from 'jasmine';
import {TestBed, inject} from '@angular/core/testing';
import {TimingInterceptor} from './timing.interceptor';

describe('TimingInterceptorService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TimingInterceptor]
        });
    });

    it('should be created', inject([TimingInterceptor], (service: TimingInterceptor) => {
        expect(service).toBeTruthy();
    }));
});
