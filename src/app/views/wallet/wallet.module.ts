import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalletService } from '../../shared/service/wallet.services';
import { ButtonModule, CardModule, DropdownModule, FormModule, GridModule, NavModule, TableModule, TabsModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { WalletPageComponent } from './page/wallet-page.component';


@NgModule({
  declarations: [
    WalletPageComponent
],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    TableModule,
    DropdownModule
  ]
})
export class WalletModule {
  
}
