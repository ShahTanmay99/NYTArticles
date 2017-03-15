import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {articleServices} from '../../app/services/articlesServices';
import {FilterArticlesPage} from './filterArticle.component';

@Component({
  selector: 'topstories',
  templateUrl: 'topStories.html'
})
export class TopStoriesPage{
  stories: any[]
  constructor(public navCtrl: NavController, private _articleService: articleServices, public param: NavParams) {    
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
        onClick(keyword){
            console.log(keyword);
          this._articleService.getTopStories(keyword)
          .subscribe(res=>
          {
           this.stories=res.results;
            console.log(this.stories);
            
          })
        }
  
//   onClick(url){
//     window.location.href= url;
//   }
//   filterSearch(){
//     this.navCtrl.push(FilterArticlesPage);
//   }
  
  
}