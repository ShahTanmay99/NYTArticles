import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {articleServices} from '../../app/services/articlesServices';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'archive',
  templateUrl: 'archive.html'
})
export class ArchivesPage{
  archives: any[]
  form: FormGroup;
  constructor(public navCtrl: NavController, private _articleService: articleServices, public param: NavParams,
   private fb:FormBuilder) {    
      this.form = this.fb.group({
      year: [''],
      month: ['']
    });
}
submit(value){
     this._articleService.getArchives(value.year,value.month)
           .subscribe(res=>
           {
            this.archives=res;
             console.log(this.archives);
          })
  
}
        // onClick(x,y){
        //   this._articleService.getArchives(x,y)
        //   .subscribe(res=>
        //   {
        //    this.archives=res;
        //     console.log(this.archives);
        //   })
        // }
  
//   onClick(url){
//     window.location.href= url;
//   }
//   filterSearch(){
//     this.navCtrl.push(FilterArticlesPage);
//   }
  
  
}