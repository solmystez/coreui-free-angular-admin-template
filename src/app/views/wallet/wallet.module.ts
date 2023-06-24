import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalletServiceModule } from '../../shared/service/wallet.services';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { WalletPageComponent } from './page/wallet-page.component';


@NgModule({
  declarations: [
    WalletPageComponent
],
  imports: [
    CommonModule,
    WalletServiceModule,
    CardModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule
  ]
})
export class WalletModule {
}
