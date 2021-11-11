import { Component, OnInit } from '@angular/core';
import { DataAuthorsService } from 'src/services/data/data-authors.service';

@Component({
  selector: 'app-author-works-list',
  templateUrl: './author-works-list.component.html',
  styleUrls: ['./author-works-list.component.css'],
})
export class AuthorWorksListComponent implements OnInit {
  works: any;

  constructor(private dataService: DataAuthorsService) {}

  ngOnInit(): void {}

  getWorksState() {
    this.dataService.getAuthorsWork$().subscribe((works) => {
      if (works) {
        console.log({ works });

        this.works = works;
      }
    });
  }
}
