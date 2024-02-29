import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  accessToken = "fjfkijdslfjsifjdsilfjvsbndvjsbdjbsjks"
  constructor() { }

  estaAutenticado(): boolean {
    return !!sessionStorage.getItem("access-token");
  }

  login(email: string, senha: string): boolean {
    if (email === "admin@admin.com.br" && senha === "123") {
      sessionStorage.setItem("access-token", this.accessToken);
      return true;
    }
    return false;
  }

  logout() {
    sessionStorage.clear();
  }
}
