import { Component } from '@angular/core';

import { ArticlesPage } from '../Articles/article.component';
import { SettingsPage } from '../Settings/settings.component';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = ArticlesPage;
  tab2Root: any = SettingsPage;
  tab3Root: any = ContactPage;

  constructor() {

  }
}
