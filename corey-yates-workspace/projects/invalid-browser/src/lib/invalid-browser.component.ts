import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'lib-invalidBrowser',
  templateUrl: './invalid-browser.html',
  styleUrls: ['./invalid-browser.scss']
})
export class InvalidBrowserComponent implements OnInit {
  imageSource: string;
  phoneNumber: string;
  extension: string;

  constructor(@Inject('env') private env) { }

  ngOnInit() {
    this.imageSource = this.env.ImageSource;
    this.phoneNumber = this.env.ServicePhoneNumber;
    this.extension = this.env.ServiceExtension;
  }
}