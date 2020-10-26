import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CardComponent,
  CardBodyDirective
} from './card.component';

@NgModule({
  declarations: [CardComponent, CardBodyDirective],
  imports: [CommonModule],
  exports: [CardComponent, CardBodyDirective],
})
export class CardModule {}
