import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutUsComponent } from './pages/about-us-page/about-us.component';
import { OurCausesComponent } from './pages/our-causes-page/our-causes.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { AdminComponent } from './tests/admin/admin.component';
import { CatalogComponent } from './tests/catalog/catalog.component';
import { ChartComponent } from './tests/google-charts/chart/chart.component';
import { ComboChartsComponent } from './tests/combo-charts/combo-charts.component';

const routes: Routes = [
  { path: '', component: ChartComponent},
  { path: 'comboChart', component: ComboChartsComponent},
  { path: 'admin', component: AdminComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'ourcauses', component: OurCausesComponent },
  { path: 'blog', component: BlogPageComponent },
  { path: 'contact', component: ContactPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
