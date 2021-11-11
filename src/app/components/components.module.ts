import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmptyResultComponent } from './empty-result/empty-result.component';
import { CardModule } from 'primeng/card';
@NgModule({
  declarations: [EmptyResultComponent],
  imports: [CommonModule, FormsModule, CardModule],
  exports: [EmptyResultComponent],
})
export class ComponentsModule {}
