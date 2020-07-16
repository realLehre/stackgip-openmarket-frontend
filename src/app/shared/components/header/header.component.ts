import { getCartCount } from "./../../../reducers/selectors/cart.selector";
import { AuthService } from "src/app/services/auth.service";
import { Observable } from "rxjs";
import { getUser } from "./../../../reducers/selectors/auth.selector";
import { IUser } from "./../../../models/IUserModel";
import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/reducers";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  user$: Observable<IUser>;
  cartCount$: Observable<number>;
  constructor(
    private store: Store<AppState>,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.user$ = this.store.select(getUser);
    this.cartCount$ = this.store.select(getCartCount);
  }
  logout() {
    this.authService.Logout();
  }
}
