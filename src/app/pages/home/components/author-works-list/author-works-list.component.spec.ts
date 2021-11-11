import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { mockDataAuthorsService } from 'src/services/authors/authors.service.spec';
import { DataAuthorsService } from 'src/services/data/data-authors.service';
import { HomeModule } from '../../home.module';

import { AuthorWorksListComponent } from './author-works-list.component';

describe('AuthorWorksListComponent', () => {
  let component: AuthorWorksListComponent;
  let fixture: ComponentFixture<AuthorWorksListComponent>;
  let dataAuthorsService: DataAuthorsService = mockDataAuthorsService();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthorWorksListComponent],
      providers: [
        {
          provide: DataAuthorsService,
          useValue: dataAuthorsService,
        },
      ],
      imports: [HttpClientModule, RouterTestingModule, HomeModule],
    }).compileComponents();

    TestBed.inject(DataAuthorsService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorWorksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
