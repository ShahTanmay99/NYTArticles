import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {articleServices} from '../../app/services/articlesServices';
@Component({
  selector: 'articles',
  templateUrl: 'article.html'
})
export class ArticlesPage{

  constructor(public navCtrl: NavController, private _articleService: articleServices) {

  }
  ngOnInit(){
        this._articleService.getArticles()
        .subscribe(data => {console.log(data);
        } )
        
  }

}