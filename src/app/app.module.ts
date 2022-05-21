import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoansComponent } from './loans/loans.component';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { FilterdataPipe } from './filterdata.pipe';
import { AdminComponent } from './admin/admin.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { AdminManageComponent } from './admin-manage/admin-manage.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplatedrivenformComponent,
    LoansComponent,
    LoanTypesComponent,
    AddLoansComponent,
    FilterdataPipe,
    AdminComponent,
    //AdminEditComponent,
    //AdminDeleteComponent,
    //AdminManageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,    
  ],
  providers: [
    {provide : LocationStrategy, useClass:HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
