import { Component } from "@angular/core";
import { RegisterPage } from "../register/register";
import { LoginPage } from "../login/login";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  loginPage = LoginPage;
  registerPage = RegisterPage;
}
