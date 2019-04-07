import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SuggestionsService {
    constructor(private http: HttpClient) {}

    url: String = "https://bishk.io/api/abc"

    fetchRecommendations = (payload) => {
        //this.http.post(this.url, payload);
        return [5, 44]
    }

}