import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class articleServices{
    constructor(private _http: Http){
        // TopStories = https://api.nytimes.com/svc/topstories/v2/opinion.json?&api-key=59888d9d9a9a4b34a2304aaa72aa15b5

    }
    getArticles(){
       return this._http.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=corruption&api-key=59888d9d9a9a4b34a2304aaa72aa15b5")
        .map(res => res.json())
    }
    searchArticles(keyword){
        return this._http.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + keyword + "&api-key=59888d9d9a9a4b34a2304aaa72aa15b5")
        .map(res=>res.json())
    }
    getTopStories(keyword){
        return this._http.get("https://api.nytimes.com/svc/topstories/v2/" + keyword + ".json?&api-key=59888d9d9a9a4b34a2304aaa72aa15b5")
        .map(res=> res.json())
    }
}