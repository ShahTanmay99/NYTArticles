import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {articleServices} from '../../app/services/articlesServices';
@Component({
  selector: 'articles',
  templateUrl: 'article.html'
})
export class ArticlesPage{
  items: any[]
  constructor(public navCtrl: NavController, private _articleService: articleServices) {

  }
  ngOnInit(){
        this.getArticles();        
  }
  getArticles(){
            this._articleService.getArticles()
            .subscribe(res => 
            {
              this.items=res.response.docs;
              console.log(this.items);
              
          })
  }
  
}