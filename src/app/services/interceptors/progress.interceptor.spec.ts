import {} from 'jasmine';
import {TestBed, inject} from '@angular/core/testing';
import {ProgressInterceptor} from './progress.interceptor';

describe('ProgressInterceptorService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ProgressInterceptor]
        });
    });

    it('should be created', inject([ProgressInterceptor], (service: ProgressInterceptor) => {
        expect(service).toBeTruthy();
    }));
});
