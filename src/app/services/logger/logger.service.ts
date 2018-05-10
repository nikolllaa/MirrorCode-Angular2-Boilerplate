import {Injectable} from '@angular/core';

@Injectable()
export class LoggerService {

    /**
     * Console log message function
     *
     * @param {string} msg
     */
    static log(msg: string): void {
        console.log(msg);
    }

    /**
     * Console log error message function
     *
     * @param {string} msg
     * @param {{}} obj
     */
    static error(msg: string, obj = {}): void {
        console.error(msg, obj);
    }
}
