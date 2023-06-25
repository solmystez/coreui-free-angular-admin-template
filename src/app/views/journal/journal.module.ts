import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule, CardModule, CollapseModule,
   DropdownModule, FormModule, GridModule, NavModule, 
   TableModule } from '@coreui/angular';
import { JournalPageComponent } from './page/journal-page.component';
import { JournalStoreComponent } from './store/journal-store.component';
import { JournalEditComponent } from './edit/journal-edit.component';
import { JournalServiceModule } from '../../shared/service/journal.service'
// import { AbstractControl, FormBuilder, FormGroup, FormGroupName, FormsModule, ValidationErrors, Validators } from "@angular/forms";


@NgModule({
  declarations: [
    JournalPageComponent,
    JournalStoreComponent,
    JournalEditComponent,
],
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
    
    // ValidationErrors, Validators
  ]
})
export class JournalModule {
}
