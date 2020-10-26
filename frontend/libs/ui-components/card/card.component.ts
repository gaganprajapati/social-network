import { Component, OnInit, Directive, Input } from '@angular/core';

@Component({
  selector: 'sn-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() src = '';
  constructor() {
    console.log('src', this.src);
  }

  ngOnInit(): void {}
}

@Directive({
  selector: 'sn-card-body',
  host: { class: 'sn-card-body' },
})
export class CardBodyDirective {
  constructor() {}
}
