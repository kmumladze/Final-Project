import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { AboutComponent } from './about/about.component';
import { FullinfoComponent } from './fullinfo/fullinfo.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', component: HotelListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'fullinfo/:id', component: FullinfoComponent },
  { path: 'rooms/:id', component: RoomsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
