import {Component, Input, OnInit} from '@angular/core';
import {objectKeys} from 'codelyzer/util/objectKeys';

@Component({
  selector: 'tree-table',
  templateUrl: './tree-table.component.html',
  styleUrls: ['./tree-table.component.css']
})
export class TreeTableComponent implements OnInit {
  @Input() dataset;
  constructor() { }

  ngOnInit() {
    Object.keys(this.dataset).forEach(function getItem(key, index) {
      const matches = key.match(/fk_([a-zA-Z]{1,50})/);
      console.log('match: ', matches[1]);
    });
  }

  objectKeys(obj) {
    return Object.keys(obj);
  }

  getKeyName(key) {
    let matches = key.match(/fk_([a-zA-Z]{1,50})/);
    if (matches.length > 1) {
      return matches[1];
    } else {
      return '';
    }
  }

  getNumColumns(key) {
    console.log('key: ', key);
    let matches = key.match(/fk_[a-zA-Z]{1,50}_([0-9]{1,3})/);
    if (matches.length > 1) {
      return parseInt(matches[1]);
    } else {
      return 1;
    }
  }

  logItem(item) {
    console.log('item: ', item);
    return 'test';
  }
}
