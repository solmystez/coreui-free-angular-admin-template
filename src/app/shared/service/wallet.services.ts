import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WalletPageComponent } from '../../views/wallet/page/wallet-page.component'

const routes: Routes = [
  {
    path: 'page',
    component: WalletPageComponent,
    data: {
      title: 'Page 404'
    }
  },
//   {
//     path: 'edit',
//     component: Page500Component,
//     data: {
//       title: 'Page 500'
//     }
//   },
//   {
//     path: 'store',
//     component: LoginComponent,
//     data: {
//       title: 'Login Page'
//     }
//   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalletServiceModule {
}
