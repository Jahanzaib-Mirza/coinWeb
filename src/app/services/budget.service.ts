import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { accountUrl } from '../modals/accountUrl';
import { budgets } from '../modals/budgets';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor(private http: HttpClient, private loginService: LoginService) { }

  getbudgets(){
    const httpOptions ={
      headers : new HttpHeaders().set(
        "Authorization",
        "Bearer" + this.loginService.getToken()
      ),
    };
    return this.http
    .get<budgets[]>(accountUrl + "api/budget")
    .pipe();
  };

  addBudget(budget: budgets):Observable<budgets>{
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer" + this.loginService.getToken()
      ),
    };
    return this.http
    .post<budgets>(accountUrl + "api/budget", budget , httpOptions )
    .pipe();
  }

}
