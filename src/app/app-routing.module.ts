import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'pets',
    component: PetListComponent,
  },
  {
    path: 'pets/new',
    component: PetEditComponent,
  },
  {
    path: 'pet/:id',
    component: PetDetailComponent,
  },
  {
    path: 'pet/:id/edit',
    component: PetEditComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
