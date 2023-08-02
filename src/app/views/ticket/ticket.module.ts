import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule, CardModule, CollapseModule,
   DropdownModule, FormModule, GridModule, NavModule, 
   TabContentComponent, 
   TabPaneComponent, 
   TableModule, 
   TabsModule} from '@coreui/angular';
import { TicketPageComponent } from './page/ticket-page.component';
import { JournalStoreComponent } from './store/journal-store.component';
import { JournalEditComponent } from './edit/journal-edit.component';
import { JournalServiceModule } from '../../shared/service/journal.service'
// import { AbstractControl, FormBuilder, FormGroup, FormGroupName, FormsModule, ValidationErrors, Validators } from "@angular/forms";


@NgModule({  
  imports: [
    CommonModule,
    JournalServiceModule,
    CardModule,
    ButtonModule,
    TableModule,
    DropdownModule,
    CollapseModule,
    FormModule,
    NavModule,
    GridModule,
    TabsModule,
    
    // ValidationErrors, Validators
    RouterModule.forChild([
      {
        path: 'page',
        component: TicketPageComponent
      },
      {
        path: 'store',
        component: JournalStoreComponent
      },
      {
        path: 'edit/:id',
        component: JournalEditComponent
      }
      ]),
  ],
  declarations: [
    TicketPageComponent,
    JournalStoreComponent,
    JournalEditComponent,
  ],
  exports: [RouterModule],
  providers:[]
})
export class TicketModule {}
