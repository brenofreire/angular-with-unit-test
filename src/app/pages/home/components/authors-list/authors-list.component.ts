import { Component, Input, OnInit } from '@angular/core';
import { AuthorsApiResponse } from 'src/services/authors/authors-api.interface';
import { AuthorsService } from 'src/services/authors/authors.service';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css'],
})
export class AuthorsListComponent implements OnInit {
  @Input() info: AuthorsApiResponse;

  constructor(private authorsService: AuthorsService) {}

  ngOnInit(): void {}

  async worksByAuthor(hash: string): Promise<void> {
    await this.authorsService.worksByAnAuthor(hash);
  }
}
