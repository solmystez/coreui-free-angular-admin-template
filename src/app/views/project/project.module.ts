import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule, CardModule, CollapseModule,
   DropdownModule, FormModule, GridModule, NavModule, 
   TableModule } from '@coreui/angular';
import { ProjectPageComponent } from './page/project-page.component';
import { ProjectStoreComponent } from './store/project-store.component';
import { ProjectEditComponent } from './edit/project-edit.component';
import { ProjectServiceModule } from '../../shared/service/project.service'
// import { AbstractControl, FormBuilder, FormGroup, FormGroupName, FormsModule, ValidationErrors, Validators } from "@angular/forms";


@NgModule({
  declarations: [
    ProjectPageComponent,
    ProjectStoreComponent,
    ProjectEditComponent,
],
  imports: [
    CommonModule,
    ProjectServiceModule,
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
export class ProjectModule {
}
