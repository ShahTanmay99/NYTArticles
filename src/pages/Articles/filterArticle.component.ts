import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { ArticlesPage } from './article.component';


@Component({
  selector : 'filter',
  templateUrl: 'filterarticle.html'
})
export class FilterArticlesPage{
        filter: FormGroup;
    constructor(public navCtrl: NavController, private fb: FormBuilder){
            this.filter = this.fb.group({
      topic: [''],
      datefrom: ['']
    });

}
logForm(x){
    this.navCtrl.push(ArticlesPage,{
        details:x
    });   
}
    



}