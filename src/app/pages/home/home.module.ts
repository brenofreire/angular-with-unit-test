import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AuthorsListComponent } from './components/authors-list/authors-list.component';
import { HomeRoutingModule } from './home-routing.module';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [HomeComponent, AuthorsListComponent],
  imports: [CommonModule, HomeRoutingModule, InputTextModule],
  exports: [HomeComponent],
})
export class HomeModule {}
