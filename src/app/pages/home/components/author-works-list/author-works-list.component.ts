import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorsService } from 'src/services/authors/authors.service';
import { DataAuthorsService } from 'src/services/data/data-authors.service';

@Component({
  selector: 'app-author-works-list',
  templateUrl: './author-works-list.component.html',
  styleUrls: ['./author-works-list.component.css'],
})
export class AuthorWorksListComponent implements OnInit {
  works: any;

  constructor(
    private dataService: DataAuthorsService,
    private authorsService: AuthorsService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getWorksState();

    this.router.paramMap.subscribe((paramMap) => {
      this.authorsService.worksByAnAuthor(paramMap.get('hash'));
    });
  }

  getWorksState() {
    this.dataService.getAuthorsWork$().subscribe((works) => {
      if (works) {
        this.works = works;
      }
    });
  }
}
