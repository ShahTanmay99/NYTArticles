import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {articleServices} from '../../app/services/articlesServices';
import {FilterArticlesPage} from './filterArticle.component';
import {details} from './details';

@Component({
  selector: 'articles',
  templateUrl: 'article.html'
})
export class ArticlesPage{
  articles: any[]
  details = new details();
  constructor(public navCtrl: NavController, private _articleService: articleServices, public param: NavParams) {
    this.details = param.get('details')
    
  }
  ngOnInit(){
  }
  // getArticles(){
  //           this._articleService.getArticles()
  //           .subscribe(res => 
  //           {
  //             this.items=res.response.docs;
  //             console.log(this.items);
              
  //         })
  // }
        searchArticle(keyword){
          //console.log(keyword.title);
          
          this._articleService.searchArticles(keyword)
          .subscribe(res=>
          {
            this.articles=res.response.docs;
            console.log(this.articles);
            
          })
        }
  
  onClick(url){
    window.location.href= url;
  }
  filterSearch(){
    this.navCtrl.push(FilterArticlesPage);
  }
  
  
}