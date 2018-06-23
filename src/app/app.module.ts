import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { BsDatepickerModule, BsDropdownModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    DashboardModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(APP_ROUTES,{
      preloadingStrategy: PreloadAllModules
    }),
    BsDropdownModule.forRoot(),
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
