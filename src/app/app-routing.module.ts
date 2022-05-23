import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { AdminAccessGuard } from './admin-access.guard';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { LoansComponent } from './loans/loans.component';
import { PreferencesCheckGuard } from './preferences-check.guard';
import { SuperAdminGuard } from './super-admin.guard';
import { UnsavedGuard } from './unsaved.guard';

const routes: Routes = [
  {path: "", redirectTo: "loans", pathMatch: 'full'},
  {path: "loans",component:LoansComponent,canActivate:[AuthGuard]},
  {path: "add", component:AddLoansComponent,outlet:"addLoan"},
  {path: "loan-types", component:LoanTypesComponent,canDeactivate:[UnsavedGuard]},
  {
    path : 'admin',    
    canActivate : [SuperAdminGuard],
    children : [
      {
        path : '',
        component : AdminComponent,
      },
      {
        path : '',
        canActivateChild : [AdminAccessGuard],
        children : [
          {path: 'edit',component:AdminEditComponent},
          {path: 'delete',component:AdminDeleteComponent},
          {path: 'manage',component:AdminManageComponent}
        ]
      }
    ]
  },
  { 
    path: 'preferences', 
    canLoad : [PreferencesCheckGuard],
    loadChildren: () => import('./preferences/preferences.module').then(m => m.PreferencesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
