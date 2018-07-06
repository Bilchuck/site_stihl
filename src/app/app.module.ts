import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { routes } from './app.routes';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { HeaderBannerComponent } from './header/header-banner/header-banner.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ImageSliderComponent } from './home/image-slider/image-slider.component';
import { ServicesIconsComponent } from './home/services-icons/services-icons.component';
import { TitleComponent } from './title/title.component';
import { SalesBannerComponent } from './home/sales-banner/sales-banner.component';
import { SmallProductComponent } from './small-product/small-product.component';
import { ButtonTransparentComponent } from './button-transparent/button-transparent.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    HeaderBannerComponent,
    CatalogComponent,
    ImageSliderComponent,
    ServicesIconsComponent,
    TitleComponent,
    SalesBannerComponent,
    SmallProductComponent,
    ButtonTransparentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
