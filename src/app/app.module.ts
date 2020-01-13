import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeBannerComponent } from './components/home-banner/home-banner.component';
import { ColorcardsComponent } from './components/colorcards/colorcards.component';
import { LatestCausesComponent } from './components/latest-causes/latest-causes.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { LatestEventsComponent } from './components/latest-events/latest-events.component';
import { DonateNowComponent } from './components/donate-now/donate-now.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutUsComponent } from './pages/about-us-page/about-us.component';
import { OurCausesComponent } from './pages/our-causes-page/our-causes.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { CommonBannerComponent } from './components/common-banner/common-banner.component';
import { OurMissionComponent } from './components/our-mission/our-mission.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { FeaturedCauseComponent } from './components/featured-cause/featured-cause.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { AdminComponent } from './tests/admin/admin.component';
import { CatalogComponent } from './tests/catalog/catalog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { GoogleChartsModule } from 'angular-google-charts';
import { ChartComponent } from './tests/google-charts/chart/chart.component';
import { ComboChartsComponent } from './tests/combo-charts/combo-charts.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeBannerComponent,
    ColorcardsComponent,
    LatestCausesComponent,
    WhyChooseUsComponent,
    LatestEventsComponent,
    DonateNowComponent,
    FooterComponent,
    HomePageComponent,
    AboutUsComponent,
    OurCausesComponent,
    BlogPageComponent,
    ContactPageComponent,
    CommonBannerComponent,
    OurMissionComponent,
    OurTeamComponent,
    FeaturedCauseComponent,
    ContactInfoComponent,
    AdminComponent,
    CatalogComponent,
    FilterPipe,
    ChartComponent,
    ComboChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleChartsModule,
    HttpClientModule
  ],
  exports: [
    FilterPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
