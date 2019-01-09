import { Component } from "@angular/core";
import { LoginPage } from "../login/login";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  loginPage = LoginPage;
}
