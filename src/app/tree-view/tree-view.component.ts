import {
  AfterViewChecked,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {

  @Input() treeList;
  @Input() isRoot;
  @Input() rootTableLabel;
  @Input() isShowing;

  selectedRootIndex = -1;

  constructor() { }
  ngOnInit() {}

  onSelectRootItem(event: { selectedIndex: number }) {
    this.selectedRootIndex = event.selectedIndex;
  }
}
