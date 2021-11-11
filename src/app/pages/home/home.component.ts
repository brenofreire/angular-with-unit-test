import { Component, OnInit } from '@angular/core';
import { AuthorsApiResponse } from 'src/services/authors/authors-api.interface';
import { DialogService } from 'primeng/dynamicdialog';
import { AuthorsService } from 'src/services/authors/authors.service';
import { DataAuthorsService } from 'src/services/data/data-authors.service';
import { AuthorWorksListComponent } from './components/author-works-list/author-works-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DialogService],
})
export class HomeComponent implements OnInit {
  authorsList: AuthorsApiResponse;
  searchTerm: string;

  constructor(
    private authorsService: AuthorsService,
    private dataService: DataAuthorsService
  ) {}

  ngOnInit(): void {}

  async searchAuthorByName(): Promise<void> {
    const authors = await this.authorsService.searchAuthor({
      authorName: this.searchTerm,
    });

    this.authorsList = authors;
  }
}
