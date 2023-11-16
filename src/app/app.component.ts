import { Component } from '@angular/core';
import { MyLibService } from 'my-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-tester';
  constructor(private test: MyLibService) {
    test.getSomethingCool().subscribe((res) => console.log(res));
  }
}
