import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorsApiResponse } from 'src/services/authors/authors-api.interface';
import { DataAuthorsService } from 'src/services/data/data-authors.service';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css'],
})
export class AuthorsListComponent implements OnInit {
  @Input() info: AuthorsApiResponse;

  constructor(
    private router: Router,
    private dataAuthorsService: DataAuthorsService
  ) {}

  ngOnInit(): void {}

  async worksByAuthor(hash: string): Promise<void> {
    this.router.navigateByUrl(`author/${hash}`);
  }
}
