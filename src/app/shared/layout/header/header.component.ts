import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
public isOpen:boolean = false;
  @ViewChild("mobileMenu") private mobileMenu:ElementRef | undefined;
  openMenu($event?: any){
    this.isOpen = !this.isOpen;
  }
}
