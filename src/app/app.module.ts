import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreModule } from "./store/store.module";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { registerLocaleData } from "@angular/common";
import localePL from "@angular/common/locales/pl";
import { StoreComponent } from "./store/store.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { CheckoutComponent } from "./store/checkout.component";

registerLocaleData(localePL);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      { path: "store", component: StoreComponent },
      { path: "cart", component: CartDetailComponent },
      { path: "checkout", component: CheckoutComponent },
      { path: "**", redirectTo: "/store" },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
