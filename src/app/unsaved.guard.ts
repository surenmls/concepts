import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoanTypesComponent } from './loan-types/loan-types.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedGuard implements CanDeactivate<LoanTypesComponent> {
  canDeactivate(
    component: LoanTypesComponent,
    //currentRoute: ActivatedRouteSnapshot,
    //currentState: RouterStateSnapshot,
    //nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
  ){
    if(component.isDirty){
      return true;
    }else{
      // return false;
      return window.confirm("Are you sure? Do you want to leave this page?");
    }
    
  }
  
}
