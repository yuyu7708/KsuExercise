import {Component, NgModule} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'my-app';
  navLinks = [
    { link : 'login', label :　'登入' },
    { link : 'signup', label :　'註冊' }
  ];
}
