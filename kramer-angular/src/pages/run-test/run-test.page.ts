import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'page-run-test',
  template: `
    <router-outlet></router-outlet>`,
  imports: [
    RouterOutlet
  ],
  standalone: true
})
export class RunTestPage {
}
