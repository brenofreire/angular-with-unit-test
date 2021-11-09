import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AuthorsListComponent } from './components/authors-list/authors-list.component';

@NgModule({
  declarations: [HomeComponent, AuthorsListComponent],
  imports: [CommonModule],
  exports: [HomeComponent],
})
export class HomeModule {}
