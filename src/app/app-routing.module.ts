import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { AboutComponent } from './about/about.component';
import { FullinfoComponent } from './fullinfo/fullinfo.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HotelListComponent},
  { path: 'about', component: AboutComponent},
  { path: 'fullinfo/:id', component: FullinfoComponent},
  { path: 'rooms/:id', component: RoomsComponent},
  { path: 'contact', component: ContactComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
