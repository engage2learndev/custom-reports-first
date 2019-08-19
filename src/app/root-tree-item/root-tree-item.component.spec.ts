import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootTreeItemComponent } from './root-tree-item.component';

describe('RootTreeItemComponent', () => {
  let component: RootTreeItemComponent;
  let fixture: ComponentFixture<RootTreeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootTreeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootTreeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
