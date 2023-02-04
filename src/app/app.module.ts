import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreModule } from "./store/store.module";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { registerLocaleData } from "@angular/common";
import localePL from "@angular/common/locales/pl";
import { StoreFirstGuard } from "./storeFirst.guard";
import { StoreComponent } from "./store/store.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { CheckoutComponent } from "./store/checkout.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";

registerLocaleData(localePL);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      {
        path: "store",
        component: StoreComponent,
        canActivate: [StoreFirstGuard],
      },
      {
        path: "cart",
        component: CartDetailComponent,
        canActivate: [StoreFirstGuard],
      },
      {
        path: "checkout",
        component: CheckoutComponent,
        canActivate: [StoreFirstGuard],
      },
      {
        path: "admin",
        loadChildren: () =>
          import("./admin/admin.module").then((m) => m.AdminModule),
        canActivate: [StoreFirstGuard],
      },
      { path: "**", redirectTo: "/store" },
    ]),
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
    }),
  ],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
