import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AuthorsListComponent } from './components/authors-list/authors-list.component';
import { HomeRoutingModule } from './home-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ComponentsModule } from 'src/app/components/components.module';
import { AuthorWorksListComponent } from './components/author-works-list/author-works-list.component';
@NgModule({
  declarations: [HomeComponent, AuthorsListComponent, AuthorWorksListComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    ComponentsModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
