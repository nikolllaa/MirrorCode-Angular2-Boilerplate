import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

    /**
     * Transform function
     *
     * @param {string} value
     * @param {number} limit
     * @param {boolean} completeWords
     * @return {string}
     */
    transform(value: string, limit = 35, completeWords = false) {
        if (value) {
            if (completeWords) {
                limit = value.substr(0, 13).lastIndexOf(' ');
            }
            return `${value.substr(0, limit)}`;
        }
    }
}
