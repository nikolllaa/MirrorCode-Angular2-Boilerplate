import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class ProgressBarService {
    public updateProgressBar$: EventEmitter<any>;

    private requestsRunning = 0;

    constructor() {
        this.updateProgressBar$ = new EventEmitter();
    }

    /**
     * List progress bar state function
     *
     * @return {number}
     */
    public list() {
        return this.requestsRunning;
    }

    /**
     * Increase progress bar function
     */
    public increase() {
        this.requestsRunning++;
        if (this.requestsRunning === 1) {
            this.updateProgressBar$.emit('query');
        }
    }

    /**
     * Decrease progress bar function
     */
    public decrease() {
        if (this.requestsRunning > 0) {
            this.requestsRunning--;
            if (this.requestsRunning === 0) {
                this.updateProgressBar$.emit('none');
            }
        }
    }
}
