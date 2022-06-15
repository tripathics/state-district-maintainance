import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() heading?: string;        // heading of the page from title of app

  constructor() { }

  ngOnInit(): void {
  }

}
