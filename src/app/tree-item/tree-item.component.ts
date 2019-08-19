import {AfterViewChecked, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'tree-item',
  templateUrl: './tree-item.component.html',
  styleUrls: ['./tree-item.component.css']
})
export class TreeItemComponent implements OnInit, OnChanges, AfterViewChecked {

  @Input() listItem;

  @ViewChild('itemCheckBox', {static: false}) itemCheckBox: ElementRef;
  @ViewChild('itemRadioButton', {static: false}) itemRadioButton: ElementRef;
  isExpanded = false;
  isChecked = false;

  closeResult: string;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {

    this.isExpanded = false;

    if (changes.hasOwnProperty('parentExpanded')) {
      if (changes.parentExpanded.firstChange === false && changes.parentExpanded.currentValue === false) {
        if (this.itemCheckBox) {
          this.itemCheckBox.nativeElement.checked = false;
        }
      }
    }
  }

  ngAfterViewChecked(): void {
    console.log('this.itemCheckBox: ', this.itemCheckBox);
  }

  toggleExpandChildren() {
    this.isExpanded = !this.isExpanded;
    this.isChecked = ((this.itemCheckBox) ? this.itemCheckBox.nativeElement.checked : false);
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
