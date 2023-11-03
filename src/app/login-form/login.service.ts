import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Observable, of } from 'rxjs';

const userBack = {
    firstName: 'Juan',
    lastName: 'Perez',
    email: 'juanitoo2.perez@mail.com',
    password: 'Juan1234'
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  login(user: User): Observable<boolean>{
    return of (user.email == userBack.email && user.password == userBack.password ? true : false);
  }

  register(user: User){
    return of (user.email == userBack.email  ? true : false);
  }
}
