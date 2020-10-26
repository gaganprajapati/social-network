import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBodyDirective, ListComponent } from './list.component';

@NgModule({
  declarations: [ListComponent, ListBodyDirective],
  imports: [CommonModule],
  exports: [ListComponent, ListBodyDirective],
})
export class ListModule {}
