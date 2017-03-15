import { Component } from '@angular/core';
import { ArticlesPage } from '../Articles/article.component';
import { TopStoriesPage } from '../TopStories/topStories.component';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
articleSearch(){
    this.navCtrl.push(ArticlesPage)
  }
TopStories(){
  this.navCtrl.push(TopStoriesPage)
}
}
