import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { FullinfoComponent } from './fullinfo/fullinfo.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ContactComponent } from './contact/contact.component';
import { FilterComponent } from './filter/filter.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgbCarousel, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HotelsComponent } from './hotels/hotels.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    NavbarComponent,
    AboutComponent,
    FooterComponent,
    FullinfoComponent,
    RoomsComponent,
    ContactComponent,
    FilterComponent,
    HotelsComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgbCarousel,
    NgbCarouselModule,
    MdbCarouselModule,
  ],
  providers: [provideClientHydration(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
