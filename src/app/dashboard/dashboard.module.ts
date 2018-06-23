import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule } from 'ngx-bootstrap';
import { CoreModule } from '../core/core.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { SpeechService } from './services/speech.service';
import { PublishService } from './services/publish.service';

@NgModule({
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    BrowserAnimationsModule,
    DashboardRoutingModule,
    CoreModule
  ],
  exports: [],
  declarations: [DashboardComponent, HomeComponent],
  providers: [SpeechService, PublishService]
})
export class DashboardModule {
}
