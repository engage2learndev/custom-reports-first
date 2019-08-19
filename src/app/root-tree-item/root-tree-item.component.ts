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
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'root-tree-item',
  templateUrl: './root-tree-item.component.html',
  styleUrls: ['./root-tree-item.component.css']
})
export class RootTreeItemComponent implements OnInit, OnChanges {

  @Input() listItem;
  @Input() itemIndex;
  @Input() isSelected;
  @Output() doSelect = new EventEmitter();
  @ViewChild('itemRadioButton', {static: false}) itemRadioButton: ElementRef;
  isExpanded = false;

  closeResult: string;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {

    this.isExpanded = false;
  }
  toggleExpandChildren() {
    this.doSelect.emit({ selectedIndex: this.itemIndex});
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
