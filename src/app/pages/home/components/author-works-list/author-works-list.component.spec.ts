import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorWorksListComponent } from './author-works-list.component';

describe('AuthorWorksListComponent', () => {
  let component: AuthorWorksListComponent;
  let fixture: ComponentFixture<AuthorWorksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorWorksListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorWorksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
