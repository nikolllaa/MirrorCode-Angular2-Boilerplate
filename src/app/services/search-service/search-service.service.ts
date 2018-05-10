import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class SearchService {
    private regexpTx = /[0-9a-zA-Z]{64}?/;
    private regexpAddress = /^(0x)?[0-9a-f]{40}$/;
    private regexpBlock = /[0-9]{1,7}?/;

    constructor(private router: Router) {
    }

    /**
     * Execute search function
     *
     * @param searchData
     * @return {any}
     */
    public doSearch(searchData) {
        if (searchData) {
            let type;
            if (this.regexpTx.test(searchData) === true) {
                type = '/tx';
            } else if (this.regexpAddress.test(searchData.toLowerCase()) === true) {
                type = '/address';
            } else if (this.regexpBlock.test(searchData) === true) {
                type = '/block';
            } else {
                console.log('Error with search');
                return null;
            }
            this.router.navigate([type, searchData]);
        }
    }

    /**
     * Remove search function
     *
     * @param searchResults
     * @return {any}
     */
    public removeSearch(searchResults) {
        if (searchResults) {
            searchResults = '';
        }
        return searchResults;
    }
}
