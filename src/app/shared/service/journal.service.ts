import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JournalPageComponent } from '../../views/journal/page/journal-page.component';
import { JournalStoreComponent } from '../../views/journal/store/journal-store.component';
import { JournalEditComponent } from '../../views/journal/edit/journal-edit.component';

const routes: Routes = [
  {
    path: 'page',
    component: JournalPageComponent,
    data: {
      title: 'Journal List'
    }
  },
  {
    path: 'edit',
    component: JournalEditComponent,
    data: {
      title: 'Page Edit Journal'
    }
  },
  {
    path: 'store',
    component: JournalStoreComponent,
    data: {
      title: 'Page Store Journal'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JournalServiceModule {
}
