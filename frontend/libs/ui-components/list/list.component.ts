import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  Directive,
} from '@angular/core';

@Component({
  selector: 'sn-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() isEndOfList = true;
  @Output() pageChange = new EventEmitter();
  currentPageNumber = 1;

  constructor() {}

  ngOnInit(): void {}

  onNextClick() {
    this.currentPageNumber = this.currentPageNumber + 1;
    this.emitPageChange();
  }

  onPrevClick() {
    this.currentPageNumber = this.currentPageNumber - 1;
    this.emitPageChange();
  }

  onPageNumberClick(pageNumber) {
    this.currentPageNumber = pageNumber;
    this.emitPageChange();
  }

  emitPageChange() {
    this.pageChange.emit(this.currentPageNumber);
  }
}

@Directive({
  selector: 'sn-list-body',
  host: { class: 'sn-list-body' },
})
export class ListBodyDirective {
  constructor() {}
}
