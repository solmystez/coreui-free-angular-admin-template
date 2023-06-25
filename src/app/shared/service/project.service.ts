import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectPageComponent } from '../../views/project/page/project-page.component';
import { ProjectStoreComponent } from '../../views/project/store/project-store.component';
import { ProjectEditComponent } from '../../views/project/edit/project-edit.component';

const routes: Routes = [
  {
    path: 'page',
    component: ProjectPageComponent,
    data: {
      title: 'Page List Project'
    }
  },
  {
    path: 'edit',
    component: ProjectEditComponent,
    data: {
      title: 'Page Edit Project'
    }
  },
  {
    path: 'store',
    component: ProjectStoreComponent,
    data: {
      title: 'Page Store Project'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectServiceModule {
}
