import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {LoggerService} from '../logger/logger.service';

export class TimingInterceptor implements HttpInterceptor {
    constructor() {
    }

    /**
     * Untercept function
     *
     * @param {HttpRequest<any>} req
     * @param {HttpHandler} next
     * @return {Observable<HttpEvent<any>>}
     */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const started = Date.now();
        return next
            .handle(req)
            .do(event => {
                if (event instanceof HttpResponse) {
                    const elapsed = Date.now() - started;
                    LoggerService.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
                }
            });
    }
}
