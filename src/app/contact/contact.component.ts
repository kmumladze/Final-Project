import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  submitted = false;
  termsChecked: boolean = false;

}
