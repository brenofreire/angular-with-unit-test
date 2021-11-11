import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorWorksListComponent } from './components/author-works-list/author-works-list.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'author/:hash',
    component: AuthorWorksListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
