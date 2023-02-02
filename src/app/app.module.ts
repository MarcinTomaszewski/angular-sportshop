import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreModule } from "./store/store.module";
import { AppComponent } from "./app.component";

import { registerLocaleData } from "@angular/common";
import localePL from "@angular/common/locales/pl";
registerLocaleData(localePL);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, StoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
