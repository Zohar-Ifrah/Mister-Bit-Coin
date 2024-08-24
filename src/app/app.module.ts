import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { provideHttpClient } from '@angular/common/http';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { FormsModule } from '@angular/forms';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ChartComponent } from './cmps/charts/chart.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { HeaderComponent } from './cmps/header/header.component';
import { PageNotFoundComponent } from './cmps/page-not-found/page-not-found.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';



@NgModule({
  declarations: [
    AppComponent,
    ContactPageComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactFilterComponent,
    ContactDetailsComponent,
    ChartComponent,
    HomePageComponent,
    StatisticPageComponent,
    HeaderComponent,
    PageNotFoundComponent,
    ContactEditPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxChartsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
