import { Component } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  treeTableShowing = false;

  treeData = [
    {
      tableLabel: 'Coaches',
      tableLabelExt: '',
      tableName: 'user',
      isRoot: true,
      children: [
        {
          tableLabel: 'Coaching Logs',
          tableLabelExt: 'these Coaches were on',
          tableName: 'egrowe_coachlog',
          children: [
            {
              tableLabel: 'Teachers',
              tableLabelExt: 'on these Coaching Logs',
              tableName: 'user',
              children: [],
              isRoot: false
            },
            {
              tableLabel: 'Growth Indicators',
              tableLabelExt: 'reached on these Coaching Logs',
              tableName: 'user',
              children: [],
              isRoot: false
            }
          ],
          isRoot: false
        }
      ]
    },
    {
      tableLabel: 'Teachers',
      tableName: 'user',
      children: [
        {
          tableLabel: 'Coaching Logs',
          tableLabelExt: 'these Teachers were on',
          tableName: 'egrowe_coachlog',
          children: [
            {
              tableLabel: 'Coaches',
              tableLabelExt: 'that were on these Coaching Logs',
              tableName: 'user',
              isRoot: false,
              children: [

              ]
            },
            {
              tableLabel: 'Growth Indicators',
              tableLabelExt: 'reached on these Coaching Logs',
              tableName: 'user',
              children: [],
              isRoot: false
            }
          ],
          isRoot: false
        }
      ],
      isRoot: true
    }
  ];

  tableNames = [
    'Coaches',
    'Coaching Logs',
    'Teachers',
    'Growth Indicators'
  ];

  selectedDataSets = [
    'user',
    'egrowe_coachlog',
    'egrowe_coachlog_attendee'
  ];

  dataset = {
    fk_root_2: [
      {
        labels: [
          'First Name',
          'Last Name'
        ],
        vals: [
          'Jill',
          'Galloway'
        ],
        oneToManies: [
          {
            fk_CoachingLogs_2: [
              {
                labels: [
                  'title',
                  'date'
                ],
                vals: [
                  'Work on Communication',
                  '07/12/2019'
                ],
                oneToManies: []
              }
            ]
          }
        ]
      },
      {
        labels: [

        ],
        vals: [
          'Nathan',
          'Gardener'
        ],
        oneToManies: [
          /*{
            fk_Posts_2: [
              {
                labels: [
                  'title',
                  'date'
                ],
                vals: [
                  'Engage2Learn is growing',
                  '07/12/2019'
                ],
                oneToManies: []
              }
            ]
          }*/
        ]
      }
    ]
  };

  title = 'angular-tree-view';

  closeResult: string;

  constructor(private modalService: NgbModal) {}

  showTreeTable() {
    this.treeTableShowing = true;
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
