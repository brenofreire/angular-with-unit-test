import { Component, OnInit } from '@angular/core';
import { AuthorsApiResponse } from 'src/services/authors/authors-api.interface';
import { AuthorsService } from 'src/services/authors/authors.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  authorsList: AuthorsApiResponse;
  searchTerm: string;

  constructor(private authorsService: AuthorsService) {}

  ngOnInit(): void {}

  async searchAuthorByName(): Promise<void> {
    const authors = await this.authorsService.searchAuthor({
      authorName: this.searchTerm,
    });

    this.authorsList = authors;
  }
}
