import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ArticlesPage } from '../pages/Articles/article.component';
import { FilterArticlesPage } from '../pages/Articles/filterArticle.component';
import { TopStoriesPage } from '../pages/TopStories/topStories.component';
import { SettingsPage } from '../pages/Settings/settings.component';
import { ArchivesPage } from '../pages/Archives/archive.component';
import { TabsPage } from '../pages/tabs/tabs';
import {HomePage} from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SettingsPage,
    ArticlesPage,
    TopStoriesPage,
    FilterArticlesPage,
    ArchivesPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ArchivesPage,
    SettingsPage,
    ArticlesPage,
    TopStoriesPage,
    FilterArticlesPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
