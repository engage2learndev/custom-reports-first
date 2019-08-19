import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { TreeItemComponent } from './tree-item/tree-item.component';
import { RootTreeItemComponent } from './root-tree-item/root-tree-item.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {TreeTableComponent} from './tree-table/tree-table.component';
import {ModalModule} from 'ngx-bootstrap';
import { TableFiltersComponent } from './table-filters/table-filters.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeViewComponent,
    TreeItemComponent,
    RootTreeItemComponent,
    TreeTableComponent,
    TableFiltersComponent,
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    NgbModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
