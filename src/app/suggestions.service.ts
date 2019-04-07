import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SuggestionsService {
    constructor(private http: HttpClient) {}

    url: string = "http://dc6fb441.ngrok.io/incomes"

    fetchRecommendations = (payload) => {
        console.log("Payload sent to API", {"param":payload});
        return this.http.post(this.url, {"param":payload});
        //return [5, 44]
    }

}